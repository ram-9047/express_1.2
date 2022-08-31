const fs = require("fs");
const path = require("path");
const rootPath = require("../util/path");

const p = path.join(rootPath, "data", "product.json");
const getAllProducts = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      return cb([]);
    }
    return cb(JSON.parse(fileContent));
  });
};

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    // products.push(this);

    getAllProducts((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getAllProducts(cb);
  }
};
