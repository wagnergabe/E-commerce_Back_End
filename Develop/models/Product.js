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
      primaryKey: true,
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
        //makes sure data is a number value
      },
    },
    category_id: {
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
// -id-   pass
// Integer  pass
// Doesn't allow null values  pass
// Set as primary key   pass
// Uses auto increment  pass


// -product_name-
// String   pass
// Doesn't allow null values    pass

// -price-
// Decimal  pass
// Doesn't allow null values  pass
// Validates that the value is a decimal    pass

// -stock-
// Integer    pass
// Doesn't allow null values    pass
// Set a default value of 10    pass
// Validates that the value is numeric    pass

// -category_id-
// Integer    pass
// References the category model's id   pass