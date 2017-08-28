var models = require('../models/index');
var Channel = require('../models/channel');

//channel 생성을 한다.
exports.create_channel = function(channel_info, callback) {
    models.Channel.create({
        ch_name: '',
        user_email: ''
    }).then(function(channel) {
        callback(null, channel);
    }).catch(function(err) {
        callback(err, null);
        //throw err;
    });

};

//channel 목록을 반환 한다. 
exports.list_channel = function(channel_info, callback) {
    models.Channel.findAll({
        order: 'ch_idx DESC'
    }).then(function(channel) {
        callback(null, channel);
    }).catch(function(err) {
        callback(err, null);
        //throw err;
    });
};

//channel 정보를 업데이트 한다.
exports.update_channel = function(channel_info, callback) {
    models.Channel.find({
        where: {
            user_id: ''
        }
    }).then(function(channel) {
        if (channel) {
            channel.updateAttributes({
                ch_name: ''
            }).then(function(channel) {
                callback(null, channel);
            });
        } else {
            callback(null, null);
        }
    }).catch(function(err) {
        callback(err, null);
        //throw err;
    });
};

//channel을 삭제 한다.
exports.delete_channel = function(channel_info, callback) {
    models.Channel.destroy({
        where: {
            user_id: ''
        }
    }).then(function(channel) {
        callback(null, channel);
    }).catch(function(err) {
        callback(err, null);
        //throw err;
    });
};