import './styles/app.scss';
import './styles/delivery.scss';
import ProductDetails from './pages/product'
import Delivery from './components/delivery.jsx';
//import ProductContainer from './components/productContainer.jsx';

function App() {
    return (
        <>
        <div>
          <ProductDetails />
        </div>
        <div className='cartContainer'>
            <Delivery/>
        </div>
    );
}

export default App
export default App