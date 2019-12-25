const models = require("../models");

exports.index = function(req, res, next) {
  res.render('index', { title: 'Express' });
};