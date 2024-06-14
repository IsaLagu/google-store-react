import './styles/variables.scss';
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
        <>
              
        <div>
            <Cart/>
        </div>

        </>
    )
}

export default App