// Enhance addToCart function to return a promise

let cart = {
  products: [],
  total: 0,
};

let addToCart = (product) => {
  return new Promise((resolve, reject) => {
    if (product.name === "") {
      reject("Product name cannot be empty");
    } else if (product.price <= 0) {
      reject("Product price must be greater than zero");
    } else {
      cart.products.push(product);
      cart.total += product.price;
      resolve(cart);
    }
  });
};

// Example 1: Valid product
addToCart({ id: 1, name: "joy", price: 1000 })
  .then((cart) => {
    console.log("Example 1 - Cart:", cart);
  })
  .catch((err) => {
    console.log("Example 1 - Error:", err);
  });

// Example 2: Invalid product (empty name)
addToCart({ id: 2, name: "", price: 1000 })
  .then((cart) => {
    console.log("Example 2 - Cart:", cart);
  })
  .catch((err) => {
    console.log("Example 2 - Error:", err);
  });

// Example 3: Invalid product (negative price)
addToCart({ id: 3, name: "happiness", price: -50 })
  .then((cart) => {
    console.log("Example 3 - Cart:", cart);
  })
  .catch((err) => {
    console.log("Example 3 - Error:", err);
  });

// Example 4: Valid product
addToCart({ id: 4, name: "Keyboard", price: 150 })
  .then((cart) => {
    console.log("Example 4 - Cart:", cart);
  })
  .catch((err) => {
    console.log("Example 4 - Error:", err);
  });
