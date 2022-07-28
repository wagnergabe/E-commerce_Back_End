const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      //Sequelize DataType objects to define what type of data it is. This case it will only be a number
      allowNull: false,
      //enforce columns to not accept null values
      primaryKey: true,
      //Creates a key that uniquely identifies each row of a table
      autoIncrement: true
      //each new record will automatically generate a new id value by 1
    },
  // define catagory name column
  category_name: {
    type: DataTypes.STRING,
    //Datatype objects will be strings. 
    allowNull: false
  }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
