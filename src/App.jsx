import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/nav/Header";
import Footer from "./components/footer/Footer";
import "./styles/app.scss";
import ProductDetails from "./pages/ProductDetails";
import ProductDetailsSmart from "./pages/ProductDetailsSmart";
//import Cart from "./pages/Cart";
import { products } from "./assets/data/data.jsx";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ProductDetails product={products[1]} />} />
          {/* <Route path="/cart" element={<Cart />} /> */}
          <Route path="/:id" element={<ProductDetails product={products[1]}/>} />
          {/* <Route path="/earbuds" element={<ProductDetails product={products[1]} />} /> */}
          <Route path="/watches" element={<ProductDetailsSmart product={products[0]}/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

