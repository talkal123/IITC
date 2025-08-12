import React, { useEffect } from "react";
import { useState } from "react";

const Product = ({ data }) => {
  const [value, setValue] = useState("");
  const [products, setProducts] = useState(data);
  const productsArrFilter = products.filter((product) =>
    product.name.toLowerCase().includes(value.toLowerCase())
  );
  const [objectCarts, setObjectCarts] = useState({
    id: "",
    name: "",
    price: "",
    inStock: null,
    category: "",
  });
  const [cart, setCart] = useState([]);
  const [totalPrice,setTotalPrice] = useState(0)

  useEffect(() => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const fixed = total.toFixed(2)
  setTotalPrice(fixed);
}, [cart]);

  const handleClick = (product) => {
    const newObject = {
      ...objectCarts,
      id: product.id,
      quantity: 1,
      name: product.name,
      price: product.price,
      category: product.category,
      image: product.image,
      inStock: product.inStock,
    };

    const isItemInCart = cart.some(item => item.id === product.id)
    
    if (!isItemInCart) {
      setCart(prev => [...prev, newObject]);
  } else {
      alert("This item is already in the cart");
  }
      
  };

  const handleDelete = (item) => {
    setCart(cart.filter(product => product.id !== item.id))
  }

  const plus = (item) => {
    item.quantity += 1

  }

  console.log(data);
  console.log(cart);

  return (
    <div>
      <h1>Search Product</h1>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <h1>Products:</h1>
      <div>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            border: "1px solid gray",
          }}
        >
          <thead style={{ backgroundColor: "#f0f0f0" }}>
            <tr>
              <th style={{ border: "1px solid gray", padding: "8px" }}>Id</th>
              <th style={{ border: "1px solid gray", padding: "8px" }}>Name</th>
              <th style={{ border: "1px solid gray", padding: "8px" }}>
                Price
              </th>
              <th style={{ border: "1px solid gray", padding: "8px" }}>
                Category
              </th>
              <th style={{ border: "1px solid gray", padding: "8px" }}>
                Add Buttons
              </th>
            </tr>
          </thead>
          <tbody>
            {productsArrFilter.map((product, index) => (
              <tr key={index}>
                <td style={{ border: "1px solid gray", padding: "8px" }}>
                  {product.id}
                </td>
                <td style={{ border: "1px solid gray", padding: "8px" }}>
                  {product.name}
                </td>
                <td style={{ border: "1px solid gray", padding: "8px" }}>
                  {product.price}
                </td>
                <td style={{ border: "1px solid gray", padding: "8px" }}>
                  {product.category}
                </td>
                <td style={{ border: "1px solid gray", padding: "8px" }}>
                {product.inStock === true ? (
                    <p>yes</p>
                ): (
                    <p>no</p>
                )}
                  
                </td>
                <button
                  onClick={() => handleClick(product)}
                  style={{
                    border: "1px solid gray",
                    padding: "7px",
                    marginLeft: "5px",
                    marginTop: "3px",
                  }}
                >
                  Add To Cart
                </button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        {cart.length >= 1 ? (
          <div>
            <h3>delete cart items</h3>
            <button onClick={() => setCart([])}>Delete all items</button>
          </div>
        ):(
          <></>
        )}
        
      </div>
      <div style={{marginTop:"10px"}}>
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
      <div style={{marginBottom:"5px"}}>
        total price: {totalPrice}
      </div>

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
              <th style={{ border: "1px solid gray", padding: "8px" }}>Quantity</th>
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
                  {item.inStock ? "yes" : "no"}
                </td>
                <td style={{ border: "1px solid gray", padding: "8px" }}>
                  {item.quantity}
                </td>
                <td style={{ border: "1px solid gray", padding: "8px" }}>
                  <button onClick={() => handleDelete(item)}>Delete Item</button>
                </td>
                <td style={{ border: "1px solid gray", padding: "8px" }}>
                  <button onClick={() => plus(item)}>Plus</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
      </div>
    </div>
  );
};

export default Product;
