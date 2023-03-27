const orders = [
  {
    date: "2020-01-01",
    subtotal: 59.98,
    items: [
      {
        product: {
          id: "redshoe",
          description: "Red Shoe",
          price: 29.99,
        },
        quantity: 2,
      },
    ],
  },
];

function getAllOrders() {
  return orders;
}

module.exports = {
  getAllOrders,
};
