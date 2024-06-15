import Api from './components/Api';

/*const App = () => {
  return (
    <div className="App"><Api /></div>
  )
}*/

import './styles/app.scss';
import './components/cart/delivery.scss';
import './pages/cart.scss';
import './components/cart/cartProdContainer.scss';
//import ProductDetails from './pages/product-details/ProductDetails.jsx'
//import Delivery from './components/cart/Delivery.jsx';
import CartProdContainer from './components/cart/CartProdContainer.jsx';
import Cart from './pages/Cart.jsx';

function App() {
    return (
/*      <div className="App">
            <Api />
        </div> */
        <div>
          <Cart/>
        </div>
    );
}

export default App