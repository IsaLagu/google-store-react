import './cart.scss';
import './cart-responsive.scss';
import CartSummary from "../components/cart/CartSummary";
import CartProdContainer from "../components/cart/CartProdContainer";

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(savedCart);
    }, []);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, []);

    const addToCart = (product, quantity) => {
        const existingItem = cartItems.find(item => item.id === product.id && item.color === product.color);
        if (existingItem) {
            setCartItems(cartItems.map(item => 
                item.id === product.id && item.color === product.color ? { ...item, quantity: item.quantity + quantity } : item
            ));
        } else {
            setCartItems([...cartItems, { ...product, quantity }]);
        }
    };

    const removeFromCart = (productId, color) => {
        setCartItems(cartItems.filter(item => item.id !== productId || item.color !== color));
    };

    const  updateQuantity = (productId, color, quantity) => {
        setCartItems(cartItems.map(item =>
            item.id === productId && item.color === color ? { ...item, quantity } : item
        ));
    };
    
    return (
        <main className="shoppingCart">
            <section className="cartTitle">
                <h1>Cart</h1> 
                <h3>({cartItems.reduce((acc, item) => acc + item.quantity, 0)} items)</h3> 
            </section>

            <section className='cartColumns'>
                <div className="allItemsInCart">
                    {cartItems.map(item => (
                        <CartProdContainer
                            key={`${item.id}-${item.color}`}
                            item={item}
                            removeFromCart={removeFromCart}
                            updateQuantity={updateQuantity}
                        />
                    ))}
                </div>
                <aside className="cartSummary">
                    <CartSummary cartItems={cartItems} />
                </aside>
            </section>
        </main>

    )
};

export default Cart;



