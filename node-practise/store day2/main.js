const fs = require("fs");
const http = require("http");
const { addToCart } = require("./cart");
let server = http.createServer((req, res) => {
  // 2. create and read an html page: form to add a new product to the cart
  if (req.method === "GET") {
    let htmlPage = fs.readFileSync("addProduct.html");
    // 3. render it to the browser
    res.write(htmlPage);
    res.end();
  }
  // 4. recieve the posted product then trigger the addToCart function
  if (req.method === "POST" && req.url === "./addProduct") {
    console.log("data is posted");
    let data = "";
    req.on("data", (chunck) => {
      data = data + chunck;
    });
    req.on("end", () => {
      console.log(data);
      addToCart(JSON.parse(data));
    });
  }
});
server.listen(3000, () => {
  console.log("Listening on port 3000");
});
addToCart({ id: 0, name: "iPhone", price: 1000 });
//reading from a file sync
//let data = fs.readFileSync
//console.log(data)
// reading from the file async
fs.readFile("./data.json", "utf8", (err, data) => {
  if (err?.code === "ENOENT") {
    console.log("no such file or directory");
  } else {
    console.log(data);
  }
});
