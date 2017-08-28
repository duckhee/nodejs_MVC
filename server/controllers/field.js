var models = require('../models/index');
var Fields = require('../models/fields');


exports.create_field = function(req, res) {

    models.Fields.findOrCreate({}).spread(function(field, created) {
        if (field) {

        } else if (created) {

        } else {

        }
    });
};

exports.list_field = function(req, res) {
    models.Fields.findAll({}).then(function(fields) {

    }).catch(function(err) {

        //throw err;
    });
};

exports.find_field = function(req, res) {
    models.Fields.find({}).then(function(field) {

    }).catch(function(err) {
        
        //throw err;
    });
};

exports.modify_field = function(req, res) {
    models.Fields.update({
        field_name: ''
    }, {
        where: {},
        returning: true
    }).then(function(field) {

    }).catch(function(err){

        //throw err;
    });

};

exports.delete_field = function(req, res) {
    models.Fields.destroy({
        where: ''
    }).then(function(result) {

    }).catch(function(err) {

        //throw err;
    });
};