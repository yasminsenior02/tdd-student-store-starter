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
  static createCart(cart, orderId) {
    console.log("Creating order...");

    const purchases = storage.get("purchases");
    purchases.push(cart).write(); //review this line
  }

  static receipt(orderId = 1) {
    console.log(storage.get("purchases").value()[orderId - 1]);
    const results = storage.get("purchases");

    return results[0];
  }
}

module.exports = Store;
// need store model
