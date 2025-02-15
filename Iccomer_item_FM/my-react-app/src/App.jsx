import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Nav from "./components/Nav";
import ItemPage from "./pages/ItemPage";

function App() {
  return (
    <div className="max-w-[1100px] mx-auto">
    <BrowserRouter>
    <Nav />
      <Routes>
          <Route path="/Home" element={<HomePage />}/>
          <Route path="/product/:id" element={<ItemPage />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
