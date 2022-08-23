const route = require('express').Router();
const userCtrl = require('./userCtrl')

route.get(`/`, userCtrl.home);
route.get(`/home`, userCtrl.home);
route.get(`/create`, userCtrl.new);
route.get(`/edit/:id`, userCtrl.edit);
 
module.exports = route;
