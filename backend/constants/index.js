http_codes = {
    badRequest: 400,
    internalError: 500,
    created: 201,
    notFound: 404,
    ok: 200,
    notImplemented: 501,
    forbidden: 403,
    unAuthorized: 401
}
messages = {
    emailAlreadyRegistered: 'Email already registered',
    internalServerError: 'Internal server error',
    registered: 'Successfully registered',
    invalidBody: 'Invalid input',
    invalidPassword: 'Invalid password',
    loggedIn: 'Successfully logged in',
    userNotFound: 'No such user found',
    mailNotSent: 'Something went wrong while sending mail',
    emailNotFound: 'No such email is registered',
    invalidToken: "Invalid Token",
    tokenExpired: 'Token expired',
    passwordChanged: "Password changed successfully",
    wrongPassword: "You entered wrong old password",
    profileUpdated: "Profile successfully updated",
    addedtosaved: "Added in Saved",
    addedtowanttogo: "Added in Want to go",
    addedtovisited: "Added in Visited",
    businessregister: "Bussiness Registered",
    businessNotFound: "Business Not Found",
    submittedtoble: "Bussiness Submmited To BLE",
    tokeninvalidorexpire: "Token is Invalid or Expired",
    accountadded: "Business Submitted to BLE",
    linksendonemail: "Activation link send on your regiter email",
    recordNotFound: "Record Not Found",
    businessUpdated: "Business Details Updated",
    businessrite: 'You dont have right to these service',
    inValidToken:'Invalid Token',
    addedtowantogo:'Added in Want to go',
    addedtovisited:'Added in to Visited',
    businessapprovalrite:'You can not Approve Business',
    removedfromsaved:'Removed from Saved',
    removedfromwanttogo:'Removed from Want to go',
    removedfromvisited:'Removed from Visited',
    busdeleted:'Business Deleted',
    invalidtoken:'Invalid Token',
    socialLoggedin:'User SignedUp through social media',
    userBlocked:'User Blocked',
    userUnblocked:'User Unblocked',
    onlyOne:'You can add only one Business',
    suggestionAdd:'Suggestion Added',
    reported:'Reported',
    accountDel:'Account Deleted',
    invalidEmailPass: 'Invalid email or password, Email_format:standard email format. Password_format: between 8 to 20 character with number and special character eg. Superm@n123',
    invalidEmail:'Invalid Email Format',
    invalidZipcode:'Invalid Zipcode',

    catadded:'Category Added',
    catalreadyadded:'Category already added'
}
schemas = {
    users: 'users',
    products: 'products',
   
    category:'category'

}
roles = {
    ADMIN: 'ADMIN',
    CUSTOMER: 'CUSTOMER'
}
accountType = {
    CUSTOMER: 'customer',
    ADMIN:'admin'
}
status = {
    active: "ACTIVE",
    inactive: "INACTIVE",
    
}
productCategories = {
    health: "Health",
    homeservices: "Home Services",
    beautysalon: "Beauty/Salon",
    electronics:"ELECTRONICS"
}

module.exports = {
    http_codes,
    messages,
    schemas,
    roles,
    status,
    accountType,
    productCategories,
   
}