import React, { useEffect, useState } from 'react';
import './cart.scss';
import './cart-responsive.scss';
import CartSummary from "../components/cart/CartSummary";
import CartProdContainer from "../components/cart/CartProdContainer";

export default function Cart() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(storedCart);
    }, []);

    const removeFromCart = (title) => {
        const updatedCart = cartItems.filter(item => item.title !== title);
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    return (
        <main className="shoppingCart">
            <section className="cartTitle">
                <h1>Cart</h1>
                <h3>({cartItems.length} items)</h3>
            </section>
            <section className='cartColumns'>
                <div className="allItemsInCart">
                    {cartItems.map(item => (
                        <div key={item.title} className="itemsInCart">
                            <CartProdContainer item={item} removeFromCart={removeFromCart} />
                        </div>
                    ))}
                </div>
                <aside className="cartSummary">
                    <CartSummary cartItems={cartItems} />
                </aside>
            </section>
        </main>
    );
}
