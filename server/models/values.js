'use strict';
module.exports = function(sequelize, DataTypes) {
    var Values = sequelize.define('Values', {
        field_id: DataTypes.INTEGER,
        value: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            }
        }
    });
    return Values;
};