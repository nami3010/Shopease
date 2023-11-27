const code = require("../constants").http_codes;
const msg = require("../constants").messages;
const accountType = require("../constants").accountType;
const userdao = require("./userDao");
const bcrypt = require("bcrypt");
const util = require("../app util/util");
const stripe = require("stripe")("sk_test_your_stripe_secret_key");

function login(req, res) {
  let { email, password } = req.body;
  let query = { email: email, accountType: accountType.CUSTOMER };
  return userdao
    .findOne(query)
    .then((result) => {
      if (!result) {
        res.json({ code: code.notFound, message: msg.userNotFound });
      } else if (bcrypt.compareSync(password, result.password)) {
        let token = util.generateToken(result, process.env.USER_SECRET);
        let data = {
          _id: result._id,
          email: result.email,
          // accountType: result.accountType,
          fname: result.fname,
        };
        res.json({
          code: code.ok,
          message: msg.loggedIn,
          token: token,
          data: data,
        });
      } else {
        res.json({ code: code.badRequest, message: msg.invalidPassword });
      }
    })
    .catch((err) => {
      res.json({ code: code.ineternalError, message: msg.internalServerError });
    });
}

function signup(req, res) {
  console.log(
    "🚀 ~ file: userService.js:49 ~ userdao.findOne ~ req.body.email:",
    req.body.email
  );
  userdao
    .findOne({ email: req.body.email })
    .then(async (data) => {
      console.log(
        "🚀 ~ file: userService.js:37 ~ userdao.findOne ~ data:",
        data
      );
      if (!data || data.length == 0) {
        let updatedPass = await bcrypt.hashSync(
          req.body.password,
          bcrypt.genSaltSync(10)
        );
        console.log(
          "🚀 ~ file: userService.js:41 ~ userdao.findOne ~ updatedPass:",
          updatedPass
        );
        req.body.password = updatedPass;
        return userdao.create(req.body).then((result) => {
          console.log("User registered successfully");
          res.json({ code: code.ok, message: msg.userCreated, data: result });
        });
      } else {
        res.json({
          code: code.badRequest,
          message: msg.emailAlreadyRegistered,
        });
      }
    })
    .catch((err) => {
      res.json({ code: code.ineternalError, message: msg.internalServerError });
    });
}

function add(req, res) {
  let token = req.headers["authorization"];
  console.log("🚀 ~ file: productService.js:9 ~ add ~ token:", token);
  let obj = util.decodeToken(token);
  req.body.createdBy = obj.id;
  const data = req.body;
  util.validateEmail(req.body.email);
  return userdao
    .create(data)
    .then((result) => {
      res.json({ code: code.ok, result: result });
    })
    .catch((err) => {
      res.json({ code: code.internalError, message: err });
    });
}

function list(req, res) {
  let query = { isDeleted: "false", accountType: "customer" };
  return userdao
    .find(query)
    .then((result) => {
      res.json({ code: code.ok, data: result });
    })
    .catch((err) => {
      res.json({ code: code.internalError, message: err });
    });
}

function edit(req, res) {
  let token = req.headers["authorization"];
  console.log(
    "🚀 ~ file: productService.js:9 ~ add ~ req.query.id:",
    req.params.id
  );
  let obj = util.decodeToken(token);
  req.body.updatedBy = obj.id;
  let query = { _id: req.params.id },
    update = req.body,
    options = { new: true };
  return userdao
    .findOneAndUpdate(query, update, options)
    .then((result) => {
      res.json({ code: code.ok, msg: msg.updateUser, result: result });
    })
    .catch((err) => {
      res.json({ code: code.internalError, message: err });
    });
}

function deleteUser(req, res) {
  let query = { _id: req.params.id },
    update = { isDeleted: "true" },
    options = { new: true };
  return userdao
    .findOneAndUpdate(query, update, options)
    .then((result) => {
      res.json({ code: code.ok, message: msg.userdeleted });
    })
    .catch((err) => {
      res.json({ code: code.ineternalError, message: msg.internalServerError });
    });
}

async function payment(req, res) {
  const { amount, currency, token } = req.body;

  try {
    // Create a payment intent using the Stripe API
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      payment_method: token,
      confirm: true,
    });

    // Return the payment intent status to the client
    res.json({ status: paymentIntent.status });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while processing the payment." });
  }
}

function addToCart(req, res) {
  let token = req.headers["authorization"];
  let obj = util.decodeToken(token);
  let userObj = {
    productId: req.body.id,
    count: req.body.count,
  };
  let query = { _id: obj.id },
    update = { $push: { cart: userObj } },
    options = { new: true };
  userdao
    .findOneAndUpdate(query, update, options)
    .then((data) => {
      res.json({ code: code.ok, message: "Added to cart" });
    })
    .catch((err) => {
      res.json({ code: code.ineternalError, message: msg.internalServerError });
    });
}

function removefromcart(req, res) {
  let token = req.headers["authorization"];
  let obj = util.decodeToken(token);
  customerdao
    .findOneAndUpdate(
      { _id: obj.id },
      { $pull: { cart: { productId: ObjectId(req.body.id) } } },
      { safe: true, multi: true }
    )
    .then((result) => {
      res.json({ code: code.ok, message: "Removed from cart" });
    });
}

function uploadPhoto(req, res) {
  req.newFile_name = [];
  console.log("in upload photo", req.newFile_name);
  util.upload(req, res, async function (err) {
    if (err) {
      return res.json({ code: code.badRequest, message: err });
    } else {
      const files = req.files;
      let index, len;
      var filepathlist = [];
      for (index = 0, len = files.length; index < len; ++index) {
        console.log("uploadPhoto -> files[index].path", files[index].path);
        let filepath = process.env.IMAGEPREFIX + files[index].path.slice(4);
        filepathlist.push(filepath);
      }
      return res.json({
        code: code.created,
        message: msg.ok,
        data: filepathlist,
      });
    }
  });
}

module.exports = {
  login,
  signup,
  add,
  list,
  edit,
  deleteUser,
  payment,
  addToCart,
  removefromcart,
  uploadPhoto,
};
