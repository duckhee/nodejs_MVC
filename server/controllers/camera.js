var models = require('../models/index');
var Camrea = require('../models/');

//camera path insert db
exports.create_picture = function(camera_info, callback) {
    models.Camrea.create({

    }).then(function(row) {
        callback(null, row);
    }).catch(function(err) {
        callback(err, null);
    });
};

//check path and camera path insert db 
exports.check_create_picture = function(camera_info, callback) {
    models.Camrea.findOrCreate({
        where: {

        },
        defaults: {

        }
    }).then(function(result) {
        callback(null, result);
    }).catch(function(err) {
        callback(err, null);
    });
};

//find image path select one
exports.find_picture = function(camera_info, callback) {
    models.Camrea.find({

    }).then(function(result) {
        callback(null, result);
    }).catch(function(err) {
        callback(err, null);
    });
};

//find image path all
exports.list_find_picture = function(camera_info, callback) {
    models.Camrea.findAll({

    }).then(function(result) {
        callback(null, result);
    }).catch(function(err) {
        callback(err, null);
    });
};

//delete image path 
exports.delete_picture = function(camera_info, callback) {
    models.Camrea.destory({
        where: ''
    }).then(function(result) {
        callback(null, result);
    }).catch(function(err) {
        callback(err, null);
    });
};

//modify image path
exports.modify_picture = function(camera_info, callback) {
    models.Camrea.update({
        field_name: ''
    }, {
        where: {

        },
        returning: true
    }).then(function(result) {
        callback(null, result);
    }).catch(function(err) {
        callback(err, null);
    });
};