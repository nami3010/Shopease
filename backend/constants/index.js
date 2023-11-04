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
    userCreated:"User created successfully",
    categoryadd:"Category Added successfully",
    updateProduct:"Product Updated Successfully",
    prodeleted:"Product deleted",
    updateUser:"User Updated",
    userdeleted:"User Deleted"
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