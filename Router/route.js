
const express =require('express');
const Router = express.Router();
const ControllerVoter = require('../Controller/Voter');
const signup = require('../Controller/user')
const party = require('../Controller/Party')
// making api call here---------->
Router.post('/addVoter',ControllerVoter.AddVoter);
Router.post('/signup',signup.signUp);
Router.post('/delete',signup.deleteItem);
Router.post('/login',signup.login);
Router.post('/addparty',party.addParty);

module.exports =Router;