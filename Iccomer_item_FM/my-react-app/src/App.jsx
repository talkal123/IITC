import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Nav from "./components/Nav";
import ItemPage from "./pages/ItemPage";
import { useState } from "react";
import Cart from "./components/Cart";
import MenPage from "./pages/MenPage";
import WomenPage from "./pages/WomenPage";
import HomeDecoration from "./pages/HomeDecoration";
import HeaderPhoto from "./components/HeaderPhoto";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AccountPage from "./pages/AccountPage";

function App() {
  const [show,setShow] = useState(true);
  const [cart,setCart] = useState([]);
  const [warning, setWarning] = useState(false)

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id)
        isPresent = true;
    })
    if (isPresent){
      setTimeout(() => {
        alert("This item is on your cart")
      }, 1000);
      return;
      
    }
    item.amount = 1;
    setCart([...cart, item])
    
  }

  const handleChange = (item, d) =>{
    let ind = -1;
    cart.forEach((data, index)=>{
      if(data.id === item.id)
        ind = index;
    });
    const tempArr = [...cart];
    tempArr[ind].amount += d;

    if (tempArr[ind].amount <= 0)
      tempArr[ind].amount = 1;
    setCart(tempArr);
    
  }

  return (
    <div className="max-w-[1200px] mx-auto">
    <BrowserRouter>
    <Nav size={cart.length} />
      <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route 
          path="/product/:id"
          element={<ItemPage handleClick={handleClick} />}
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} handleChange={handleChange} />}
          />
          <Route
            path="/men"
            // element={<Cart cart={cart} setCart={setCart} handleChange={handleChange} />}
            element={<MenPage />}
          />
          <Route
            path="/decoration"
            // element={<Cart cart={cart} setCart={setCart} handleChange={handleChange} />}
            element={<HomeDecoration />}
          />
          <Route
            path="/women"
            // element={<Cart cart={cart} setCart={setCart} handleChange={handleChange} />}
            element={<WomenPage />}
          />
          <Route
            path="/about"
            // element={<Cart cart={cart} setCart={setCart} handleChange={handleChange} />}
            element={<About />}
          />
          <Route
            path="/contact"
            // element={<Cart cart={cart} setCart={setCart} handleChange={handleChange} />}
            element={<Contact />}
          />
          <Route
            path="/account"
            // element={<Cart cart={cart} setCart={setCart} handleChange={handleChange} />}
            element={<AccountPage />}
          />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
