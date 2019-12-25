const models = require("../models");

exports.index = function(req, res, next) {
  res.render('index', { title: 'Online Shop', user: req.user });
};