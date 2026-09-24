import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./app/Pages/HomePage/Homepage";
import Productspage from "./app/Pages/ProductsPage/Productspage";
import ProductDetails from "./app/Pages/ProductDetails/ProductDetails";


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Productspage/>} />
        <Route path="/product/:id" element={<ProductDetails/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
