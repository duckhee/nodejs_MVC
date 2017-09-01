var models = require('../models/index');
var Camrea = require('../models/');


exports.create_picture = function(req, res) {
    models.Camrea.create({

    }).then(function(row) {

    }).catch(function(e) {

    });
};

exports.check_create_picture = function(req, res) {
    models.Camrea.findOrCreate({
        where: {

        },
        defaults: {

        }
    }).then(function(result) {

    }).catch(function(e) {

    });
};

exports.find_picture = function(req, res) {
    models.Camrea.find({

    }).then(function(resultrow) {

    }).catch(function(e) {

    });
};

exports.list_find_picture = function(req, res) {
    models.Camrea.findAll({

    }).then(function(result) {

    }).catch(function(e) {

    });
};

exports.delete_picture = function(req, res) {
    models.Camrea.destory({
        where: ''
    }).then(function(result) {

    }).catch(function(e) {

    });
};

exports.modify_picture = function(req, res) {
    models.Camrea.update({
        field_name: ''
    }, {
        where: {},
        returning: true
    }).then(function(result) {

    }).catch(function(e) {

    });
};