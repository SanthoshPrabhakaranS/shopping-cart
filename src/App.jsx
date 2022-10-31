import AppBody from "./components/app-body";
import Navbar from "./components/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartItem from "./components/cart-item";

function App() {
  return (
    <>
      <BrowserRouter>
          <Navbar />
        <Routes>
          <Route path="/" element={<AppBody />} />
          <Route path="/cart" element={<CartItem />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
