const storage = require("../data/storage");

class Store {
  static async Displayprod() {
    const loadprods = storage.storage.get("products").value();
    return loadprods;
  }

  static async EachProd(productname) {
    const cerprod = storage.storage
      .get("products")
      .find({ id: Number(productname) })
      .value();
    return cerprod;
  }
}

module.exports = Store;
// need store model
