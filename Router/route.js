
const express =require('express');
const Router = express.Router();

const signup = require('../Controller/user');
const Controllrelocation = require('../Controller/location');
const Controllermealtypes = require('../Controller/Meal-types');
const ControllerSearch = require('../Controller/Restaurants')
const ControllerReacord = require('../Controller/Record')
const ControllerDetails = require("../Controller/Details")
// making api call here---------->




Router.post("/detail",ControllerDetails.Getdetails);
Router.post("/details",ControllerDetails.Details);
Router.post('/record',ControllerReacord.Record);
Router.get('/records',ControllerReacord.GetRecord)
Router.post('/recordbyid',ControllerReacord.GetRecordId);
Router.post('/signup',signup.signUp);
Router.post('/delete',signup.deleteItem);
Router.post('/login',signup.login);
Router.get('/MealTypes',Controllermealtypes.GetMealtypes);
Router.get('/location',Controllrelocation.Getlocation);
Router.post('/filter',ControllerSearch.filterSearch);
Router.post('/goolge/signin/signup',signup.googleLogin);
module.exports =Router;