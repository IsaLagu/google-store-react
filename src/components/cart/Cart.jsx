import './cart.scss';
import CartSummary from "./CartSummary";

export default function Cart() {
   /*  const [cartItems, setCartItems] = useState([]);
    const { products } = data;
    const onAdd = (product) => {

    }
    const onRemove = (product) => {

    } */
    
    return (
        <div className="shoppingCart">
        <div className="cartTitle">
           <h1>Cart</h1> 
           <h3>3 items</h3> 
        </div>
        <div className='cartColumns'>
        <aside className="itemsInCart">CartItems</aside>
        <aside className="cartSummary"><CartSummary/></aside>
        </div>
        </div>

    )
}



