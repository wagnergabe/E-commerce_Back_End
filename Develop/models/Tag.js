const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    // define columns
id: {
  type: DataTypes.INTEGER,
  allowNull: false,
  primaryKey: true,
  autoIncrement: true
},
  tag_name: {
    type: DataTypes.STRING
  }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;

// #Tag Checklist#
// -id-
// Integer    -pass
// Doesn't allow null values    -pass
// Set as primary key   -pass
// Uses auto increment    -pass

// -tag_name-
// String   -pass