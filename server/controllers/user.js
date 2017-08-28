var models = require('../models/index');
var Users = require('../models/users');

//create user 하는 것 동일한 것 있는지 아닌지 확인을 안해서 에러 난다 동일할 경우
exports.create_user = function(create_info, callback) {
    models.Users.create({

    }).then(function(users) {
        console.log(users);
        callback(null, users);
    }).catch(function(err) {
        callback(err, null);
        //throw err;
    });
};

//craete user 있는지 없는지 확인하고 만든다. 있으면, 있는 회원 정보 반환 없으면 생성
exports.check_create_user = function(creat_info, callback) {
    models.Users.findOrCreate({
            where: {
                user_email: ''
            },
            defaults: {
                user_password: '',
                user_name: ''
            }
        })
        .spread((users, created) => {
            if (created) {
                console.log('New Users: ', models.Users);
                callback(null, created);
            } else if (users) {
                console.log('Old Users: ', models.Users);
                callback(users, null);
            }
        }).catch(function(err) {
            callback(err, null);
            //throw err;
        });
};

//update user 유저 정보를 바꿀 경우 실행이 되는 것
exports.update_user = function(update_info, callback) {
    models.Users.update({

    }, {
        where: {
            user_id: ''
        },
        returning: true
    }).then(function(result) {
        callback(null, result);
    }).catch(function(err) {
        callback(err, null);
        //throw err;
    });
};

//list user 모든 유저의 정보를 반환 한다.
exports.list_user = function(list_info, callback) {
    models.Users.findAll({}).then(function(users) {
        callback(null, users);
    }).catch(function(err) {
        callback(err, null);
        //throw err;
    });

};

//delete user 유저 정보를 지운다. 
exports.delete_user = function(req, res) {
    models.Users.destroy({
        where: {
            user_id: id
        }
    }).then(function(User) {
        callback(null, User);
    }).catch(function(err) {
        callback(err, null);
        //throw err;
    });
};

//유저 수를 알기 위한 것 유저의 갯수를 반환 한다.
exports.count_user = function(counter_info, callback) {
    models.Users.CountAll({}).then(function(count) {
        if (count) {
            console.log(count);
            callback(null, count);

        } else {
            console.log('not count');
            callback(null, null);
        }
    }).catch(function(err) {
        callback(err, null);
        //throw err;
    });
};