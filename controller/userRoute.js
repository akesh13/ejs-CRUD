const route = require('express').Router();
const userCtrl = require('../controller/userCtrl');

route.get(`/`, userCtrl.home);
route.get(`/home`, userCtrl.home);
route.get(`/create`, userCtrl.new);
route.get(`/edit/:id`, userCtrl.edit);
route.get(`/create`, userCtrl.create);
route.get(`/*`, userCtrl.pnf);

module.exports = route;
