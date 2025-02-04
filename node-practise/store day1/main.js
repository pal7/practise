console.log("Hello World");

let cart = {
  products: [],
  total: 0,
};

function addToCart(product) {
  cart.products.push(product);
  cart.total += product.price;
}

function removeFromCart(product) {
  cart.products = cart.products.filter((p) => p.id !== product.id);
  cart.total -= product.price;
}

let manageCart = (f, product) => {
  f(product);
  console.log(` Current cart: `);
  cart.products.forEach((p) => {
    console.log(`${p.name} is for $ ${p.price}`);
  });
};

manageCart(addToCart, { id: 1, name: "Laptop", price: 1000 });

console.log(cart.total);
manageCart(addToCart, { id: 2, name: "Mouse", price: 700 });

setTimeout(() => {
  manageCart(removeFromCart, { id: 1, name: "Laptop", price: 1000 });

  console.log(cart.total);
}, 5000);
