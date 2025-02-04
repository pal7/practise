async function addToCart(product) {
  let cart = {
    products: [],
    total: 0,
  };

  cart.products.push(product);
  cart.total += product.price;
  return cart;
  // Is cart a Promise?: The cart object itself is not a Promise, but the function addToCart returns a Promise that resolves to the cart object.
}

// When you call addToCart, it returns a Promise. You can use the then method to handle the resolved value (the cart object):
addToCart({ id: 1, name: "Laptop", price: 1000 }).then((cart) => {
  console.log(cart);
});
