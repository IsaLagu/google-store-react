import './cart.scss';
import './cart-responsive.scss';
import CartSummary from "../components/cart/CartSummary";
import CartProdContainer from "../components/cart/CartProdContainer";

export default function Cart() {
   /*  const [cartItems, setCartItems] = useState([]);
    const { products } = data;
    const onAdd = (product) => {

    }
    const onRemove = (product) => {

    } */
    
    return (
        <main className="shoppingCart">
            <section className="cartTitle">
            <h1>Cart</h1> 
            <h3>(3 items)</h3> 
            </section>

            <section className='cartColumns'>
            <div className="allItemsInCart">
                <div className="itemsInCart"><CartProdContainer/></div>
                <div className="itemsInCart"><CartProdContainer/></div>
            </div>
            <aside className="cartSummary"><CartSummary/></aside>
            </section>
        </main>

    )
}



