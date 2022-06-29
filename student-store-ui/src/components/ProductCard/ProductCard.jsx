import * as React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

export default function ProductCard({
  product,
  productId,
  quantity,
  showDecription,
}) {
  const descriptshowing = showDecription ? (
    <div className="product-description">{product.showDecription}</div>
  ) : (
    ""
  );
  return (
    <div className="product-card">
      <div className="toshow">
        <Link to={"/products/" + productId}>
          <img src={product.image} className="Productimage" />
        </Link>
      </div>
      <div className="boarder">
        <button className="add" onClick={() => handleAddItemToCart()}>
          {"+"}
        </button>
        <button className="remove" onClick={() => handleRemoveItemToCart()}>
          {"-"}
        </button>

        <p className="product-name">{product.name}</p>
        <p className="product-price"> ${product.price}</p>

        <p className="product-quantity">{quantity}</p>
      </div>
    </div>
  );
}
