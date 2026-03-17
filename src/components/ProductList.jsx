import React, { useEffect, useState } from "react";
import { database } from "../firebaseConfig";
import { ref, onValue, remove, update } from "firebase/database";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editPrice, setEditPrice] = useState("");
  const [editStock, setEditStock] = useState("");

  useEffect(() => {
    const productRef = ref(database, "products");

    const unsubscribe = onValue(productRef, (snapshot) => {
      const data = snapshot.val();

      if (data) {
        const productArray = Object.keys(data).map((id) => ({
          id,
          ...data[id],
        }));
        setProducts(productArray);
      } else {
        setProducts([]);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (!confirmDelete) return;

    try {
      await remove(ref(database, `products/${id}`));
    } catch (error) {
      console.error("Delete error:", error);
      alert("Delete nathi thayu");
    }
  };

  const openEditModal = (product) => {
    setEditId(product.id);
    setEditName(product.name);
    setEditPrice(product.price);
    setEditStock(product.stock);
  };

  const closeEditModal = () => {
    setEditId(null);
    setEditName("");
    setEditPrice("");
    setEditStock("");
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!editName || !editPrice || !editStock) {
      alert("Please fill all fields");
      return;
    }

    try {
      await update(ref(database, `products/${editId}`), {
        name: editName,
        price: editPrice,
        stock: editStock,
      });

      closeEditModal();
    } catch (error) {
      console.error("Update error:", error);
      alert("Update nathi thayu");
    }
  };

  return (
    <>
      <div className="card list-card">
        <div className="card-top">
          <h2>Product List</h2>
          <span className="mini-tag blue-tag">{products.length} Items</span>
        </div>

        <p className="section-text">
          All products stored in Firebase. You can update or delete them anytime.
        </p>

        {products.length === 0 ? (
          <div className="empty-box">
            <h3>No products found</h3>
            <p>Add your first product and it will appear here instantly.</p>
          </div>
        ) : (
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Stock</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {products.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>₹{item.price}</td>
                    <td>
                      <span
                        className={
                          Number(item.stock) <= 5 ? "stock low-stock" : "stock"
                        }
                      >
                        {item.stock}
                      </span>
                    </td>
                    <td>
                      <div className="action-buttons">
                        <button
                          className="edit-btn"
                          onClick={() => openEditModal(item)}
                        >
                          Update
                        </button>

                        <button
                          className="delete-btn"
                          onClick={() => handleDelete(item.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {editId && (
        <div className="modal-overlay">
          <div className="modal-box">
            <div className="card-top">
              <h2>Edit Product</h2>
              <button className="close-btn" onClick={closeEditModal}>
                ×
              </button>
            </div>

            <form onSubmit={handleUpdate} className="product-form">
              <div className="input-group">
                <label>Product Name</label>
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                />
              </div>

              <div className="input-group">
                <label>Price</label>
                <input
                  type="number"
                  value={editPrice}
                  onChange={(e) => setEditPrice(e.target.value)}
                />
              </div>

              <div className="input-group">
                <label>Stock</label>
                <input
                  type="number"
                  value={editStock}
                  onChange={(e) => setEditStock(e.target.value)}
                />
              </div>

              <button type="submit" className="primary-btn">
                Save Changes
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductList;