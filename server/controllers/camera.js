var models = require('../models/index');
var Camera = require('../models/');

//camera path insert db
exports.create_picture = function(camera_info, callback) {
    models.Camera.create({
        field_id:'1',
        image_path:camera_info.image_path,
        iamge_size:'10MB'
    }).then(function(row) {
        callback(null, row);
    }).catch(function(err) {
        callback(err, null);
    });
};

//check path and camera path insert db 
exports.check_create_picture = function(camera_info, callback) {
    models.Camera.findOrCreate({
        where: {
            image_path:camera_info.image_path
        },
        defaults: {
            image_path:camera_info.image_path,
            image_size:'10MB'
        }
    }).then(function(result) {
        callback(null, result);
    }).catch(function(err) {
        callback(err, null);
    });
};

//find image path select one
exports.find_picture = function(camera_info, callback) {
    models.Camera.find({
        where: {field_id:'1'},
        limit:1,
        order: ['createdAt', 'DESC']
    }).then(function(result) {
        callback(null, result);
    }).catch(function(err) {
        callback(err, null);
    });
};

//find image path all
exports.list_find_picture = function(camera_info, callback) {
    models.Camera.findAll({
        where: {field_id:'1'},
    }).then(function(result) {
        callback(null, result);
    }).catch(function(err) {
        callback(err, null);
    });
};

//delete image path 
exports.delete_picture = function(camera_info, callback) {
    models.Camera.destroy({
        where: ''
    }).then(function(result) {
        callback(null, result);
    }).catch(function(err) {
        callback(err, null);
    });
};

//modify image path
exports.modify_picture = function(camera_info, callback) {
    models.Camera.update({
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