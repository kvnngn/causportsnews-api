const router = require("express").Router();
const authController = require("./auth.controller");

router.route("/user/auth/login/").post(authController.login);
router.route("/user/auth/register/").post(authController.register);

module.exports = router;
