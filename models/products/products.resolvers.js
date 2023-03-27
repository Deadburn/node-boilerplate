const productsModel = require("./products.model");

module.exports = {
  Query: {
    products: () => {
      return productsModel.getAllProducts();
    },
    productsByPrice: (_, args) => {
      return productsModel.getProductByPrice(args.minPrice, args.maxPrice);
    },
    productById: (_, args) => {
      return productsModel.getProductById(args.id);
    },
  },
  Mutation: {
    addNewProduct: (_, args) => {
      return productsModel.addNewProduct(args.id, args.description, args.price);
    },
    addNewReview: (_, args) => {
      return productsModel.addNewReview(args.id, args.rating, args.comment);
    },
  },
};
