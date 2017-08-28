'use strict';
module.exports = function(sequelize, DataTypes) {
    var Users = sequelize.define('Users', {
        user_email: {
            type: DataTypes.STRING,
            unique: true,
        },
        user_password: DataTypes.STRING,
        user_name: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            }
        }
    });
    return Users;
};