var models = require('../models/index');
var Values = require('../models/values');

exports.insert = function(value_info, callback) {
    models.Values.create({
        value: value_info.value,
        field_id:value_info.field_id
    }).then(function(value) {
        callback(null, value);
    }).catch(function(err){
        callback(err, null);
        //throw err;
    });
};

exports.list = function(value_info, callback) {
    models.Values.findAll({
         where:{
        field_id: value_info,
    },
    limit:10
    }).then(function(values) {
        console.log(values);
        callback(null, values);
    }).catch(function(err){
        console.log('error');
        console.log(err.stack);
        callback(err, null);
        //throw err;
    });
};