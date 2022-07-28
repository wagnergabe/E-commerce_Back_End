// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allownull: false,
      primarykey: true,
      autoIncrement: true
    },
    product_name: {
      type: DataTypes.STRING,
      alllowNull: false
    },
    price: {
      type: DataTypes.DECIMAL,
      allownull: false,
      validate: {
        isDecimal: true
        //Makes sure data has a decimal
      },
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      //Default value is always NULL, this will keep it at 10
      validate: {
        isNumeric: true,
      },
    },
    catagory_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "category",
        key: "id",
        //signals the database that this table has a reference to another. 
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;


//-checklist

// --Product-- 
// -id-
// Integer
// Doesn't allow null values
// Set as primary key
// Uses auto increment

// -product_name-
// String
// Doesn't allow null values

// -price-
// Decimal
// Doesn't allow null values
// Validates that the value is a decimal

// -stock-
// Integer
// Doesn't allow null values
// Set a default value of 10
// Validates that the value is numeric

// -category_id-
// Integer
// References the category model's id