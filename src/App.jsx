import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/nav/Header";
import "./App.css";
import { Earbuds } from "./pages/Earbuds";
import { Smartwatch } from "./pages/Smartwatch";
import { Cart } from "./pages/Cart";

export default function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Earbuds />} />
                    <Route path="/earbuds" element={<Earbuds />} />
                    <Route path="/watches" element={<Smartwatch />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

//export default App;