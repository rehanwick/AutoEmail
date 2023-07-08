const express = require("express");
const router = express.Router();
const controller = require("./controller");


router.get( "/login", controller.oauth.authAction.googleAuthLogin);
router.get("/auth/google/callback",controller.oauth.authAction.googleAuthCallback);
module.exports = router;