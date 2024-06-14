import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/nav/Header";
import "./App.css";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import { products } from './assets/data/data.jsx';

export default function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<ProductDetails product={products[1]} />} />
                    <Route path="/earbuds" element={<ProductDetails product={products[1]}/>}  />
                    <Route path="/watches" element={<ProductDetails product={products[0]}/>} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
