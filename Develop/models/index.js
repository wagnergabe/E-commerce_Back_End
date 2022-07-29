// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category);
//Creates a One-To-One relationship between the Procuct model and the Category model

// Categories have many Products
Category.hasMany(Product);
//creates a one-to-many association between the Category and Product models. 

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
  //Defines the relationship of the Procuct model to the Tag, and declare the link to the foreign key, which is designated to product_id of the Product Model
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
