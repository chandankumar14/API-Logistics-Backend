const express = require("express");
const Router = express.Router();
const signup = require("../Controller/user");
// making api call here---------->
Router.post("/signup", signup.signUp);
Router.post("/delete", signup.deleteItem);
Router.post("/login", signup.login);
Router.post("/googleLogin", signup.googleLogin);

module.exports = Router;
