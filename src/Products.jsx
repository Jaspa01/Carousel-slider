import React from "react";

const Products = (props) => {
  const { id, productName, productImage, price, description } = props.data;

  return (
    <div>
      <div className="card">
        <img
          src={productImage}
          alt="product-img"
          style={{ width: "200px", height: "180px" }}
        />
        <h2>{productName}</h2>
        <p>{description}</p>
        <p style={{color:"gray"}}>
          <b>${price} </b>
        </p>
        <p>
          <button>Add to Cart</button>
        </p>
      </div>
    </div>
  );
};

export default Products;
