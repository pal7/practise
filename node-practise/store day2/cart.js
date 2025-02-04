const fs = require("fs");
let cart = {
  products: [],
  total: 0,
};
// 0. create the addToCart function
exports.addToCart = (product) => {
  cart.products.push(product);
  cart.total = cart.total + product.price;
  // 1. create a json file and updating with the cart
  fs.writeFileSync("./data.json", JSON.stringify(cart));
};
//module.exports = addToCart
