import './cart.scss';
import CartSummary from "./CartSummary";
import CartProdContainer from "./CartProdContainer";

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
            <div className="itemsInCart"><CartProdContainer/></div>
            <aside className="cartSummary"><CartSummary/></aside>
            </section>
        </main>

    )
}



