const { OAuth2Client } = require("google-auth-library");
const config = require('../../config')
const CLIENT_ID = config.oauth.CLIENT_ID ; 
const CLIENT_SECRET = config.oauth.CLIENT_SECRET ; 
const REDIRECT_URI = config.oauth.REDIRECT_URI ; 

const client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

const makeAuthAction = require("./oauth.js");
const authAction = makeAuthAction({ client });

module.exports = {
  authAction,
};
