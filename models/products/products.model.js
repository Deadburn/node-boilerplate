const products = [
  {
    id: "redshoe",
    description: "Red Shoe",
    price: 29.99,
    reviews: [],
  },
  {
    id: "blueshoe",
    description: "Blue Shoe",
    price: 59.99,
    reviews: [],
  },
];

function getAllProducts() {
  return products;
}

function getProductByPrice(min, max) {
  return products.filter(
    (product) => product.price >= min && product.price <= max
  );
}

function getProductById(id) {
  return products.find((product) => product.id === id);
}

function addNewProduct(id, description, price) {
  const newProduct = {
    id,
    description,
    price,
    reviews: [],
  };
  products.push(newProduct);
  return newProduct;
}

function addNewReview(id, rating, comment) {
  const matchedProduct = getProductById(id);

  if (matchedProduct) {
    const newProductReview = {
      rating,
      comment,
    };

    matchedProduct.reviews.push(newProductReview);

    return newProductReview;
  }
}

module.exports = {
  getAllProducts,
  getProductByPrice,
  getProductById,
  addNewProduct,
  addNewReview,
};
