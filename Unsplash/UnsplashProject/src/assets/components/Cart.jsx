import React from "react";

const Cart = ({ cart }) => {
  return (
    <div style={{
      padding: "16px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      marginTop: "24px",
      backgroundColor: "#f9f9f9",
      maxWidth: "800px",
      margin: "auto"
    }}>
      <h2 style={{ textAlign: "center", marginBottom: "16px" }}>🛒 Cart</h2>

      {cart.length === 0 ? (
        <p style={{ textAlign: "center" }}>Cart is empty.</p>
      ) : (
        <table style={{
          width: "100%",
          borderCollapse: "collapse"
        }}>
          <thead style={{ backgroundColor: "#f0f0f0" }}>
            <tr>
              <th style={{ border: "1px solid gray", padding: "8px" }}>Id</th>
              <th style={{ border: "1px solid gray", padding: "8px" }}>Name</th>
              <th style={{ border: "1px solid gray", padding: "8px" }}>Price</th>
              <th style={{ border: "1px solid gray", padding: "8px" }}>Category</th>
              <th style={{ border: "1px solid gray", padding: "8px" }}>In Stock</th>
              <th style={{ border: "1px solid gray", padding: "8px" }}>Image</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={index}>
                <td style={{ border: "1px solid gray", padding: "8px" }}>{item.id}</td>
                <td style={{ border: "1px solid gray", padding: "8px" }}>{item.name}</td>
                <td style={{ border: "1px solid gray", padding: "8px" }}>{item.price}</td>
                <td style={{ border: "1px solid gray", padding: "8px" }}>{item.category}</td>
                <td style={{ border: "1px solid gray", padding: "8px" }}>
                  {item.inStock ? "✅" : "❌"}
                </td>
                <td style={{ border: "1px solid gray", padding: "8px" }}>
                  <img src={item.image} alt={item.name} style={{ width: "50px" }} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Cart;
