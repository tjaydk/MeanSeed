module.exports.jwtConfig = {
    secret: "Thisisanewpasswordthatcantbehacked", //set unique secret
    tokenExpirationTime : 60*1, //seconds
    audience: "yoursite.net", //change domain
    issuer: "yourcompany@somewhere.com" // change issuename
};