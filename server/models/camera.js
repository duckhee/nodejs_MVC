'use strict';
module.exports = function(sequelize, DataTypes) {
  var Camera = sequelize.define('Camera', {
    field_id: DataTypes.INTEGER,
    image_path: DataTypes.STRING,
    image_size: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        
      }
    }
  });
  return Camera;
};