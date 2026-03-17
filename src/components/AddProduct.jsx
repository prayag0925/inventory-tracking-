import React, { useState } from "react";
import { database } from "../firebaseConfig";
import { ref, push } from "firebase/database";

function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !price || !stock) {
      alert("Please fill all fields");
      return;
    }

    try {
      await push(ref(database, "products"), {
        name,
        price,
        stock,
      });

      setName("");
      setPrice("");
      setStock("");
    } catch (error) {
      console.error("Add product error:", error);
      alert("Product add nathi thatu");
    }
  };

  return (
    <div className="card add-card">
      <div className="card-top">
        <h2>Add Product</h2>
        <span className="mini-tag">Create</span>
      </div>

      <p className="section-text">
        Enter product details and store them in Firebase Realtime Database.
      </p>

      <form onSubmit={handleSubmit} className="product-form">
        <div className="input-group">
          <label>Product Name</label>
          <input
            type="text"
            placeholder="Enter product name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Price</label>
          <input
            type="number"
            placeholder="Enter product price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Stock</label>
          <input
            type="number"
            placeholder="Enter available stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
        </div>

        <button type="submit" className="primary-btn">
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;