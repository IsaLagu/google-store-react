import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/nav/Header";
import "./App.css";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";

export default function App() {
    const products = [{
        id: 0,
        title: 'Fitbit Inspire 3',
        price: 99.50,
        category: 'Health & Fitness Tracker',
        property: [{
          color:'Midnight Zen',
          imgSrc:'smartwatch_black.png',
        },{
          color:'Lilac Bliss',
          imgSrc:'smartwatch_pink.png',
        },{
          color:'Morning Glow',
          imgSrc:'smartwatch_yellow.png',
        }]
        
      },{
        id: 1,
        title: 'Google Pixel Buds Pro',
        category: 'Music & Sound',
        price: 229,
        property:[{
            color:'Bay',
            imgSrc:['earbuds_01.png','earbuds_02.png','earbuds_03.png','earbuds_04.png'],
          },{
            color:'Porcelain',
            imgSrc:['earbuds_01.png','earbuds_02.png','earbuds_03.png','earbuds_04.png'],
          },{
            color:'Charcoal',
            imgSrc:['earbuds_01.png','earbuds_02.png','earbuds_03.png','earbuds_04.png'],
          },{
            color:'Fog',
            imgSrc:['earbuds_01.png','earbuds_02.png','earbuds_03.png','earbuds_04.png'],
          },{
            color:'Lemongrass',
            imgSrc:['earbuds_01.png','earbuds_02.png','earbuds_03.png','earbuds_04.png'],
          },{
            color:'Coral',
            imgSrc:['earbuds_01.png','earbuds_02.png','earbuds_03.png','earbuds_04.png'],
          }]
      }];
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<ProductDetails product={products[0]} />} />
                    <Route path="/earbuds" element={<ProductDetails product={products[1]}/>}  />
                    <Route path="/watches" element={<ProductDetails product={products[0]}/>} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

//export default App;
