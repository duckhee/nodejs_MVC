'use strict';
module.exports = function(sequelize, DataTypes) {
  var Fields = sequelize.define('Fields', {
    channel_id: DataTypes.INTEGER,
    field_name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Fields;
};