import React, { useEffect, useState } from "react";
import "./cart.scss";
import "./cart-responsive.scss";
import CartSummary from "../components/cart/CartSummary";
import CartProdContainer from "../components/cart/CartProdContainer";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
    updateTotalItems(storedCart); // Update total items initially
}, []);

  const removeFromCart = (title) => {
    const updatedCart = cartItems.filter((item) => item.title !== title);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  const updateTotalItems = (items) => {
    const total = items.reduce((acc, item) => acc + item.quantity, 0);
    setTotalItems(total);
};

const handleQuantityChange = () => {
    updateTotalItems(cartItems); // Update total items whenever quantity changes
};
  //const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <main className="shoppingCart">
      <section className="cartTitle">
        <h1>Cart</h1>
        <h3>({totalItems} items)</h3>
      </section>
      <section className="cartColumns">
        <div className="allItemsInCart">
          <CartProdContainer 
            className="itemsInCart" 
            cartItems={cartItems} 
            setCartItems={setCartItems} 
            onQuantityChange={handleQuantityChange} 
            removeFromCart={removeFromCart} 
            />
        </div>
        <aside className="cartSummary">
          <CartSummary cartItems={cartItems} />
        </aside>
      </section>
    </main>
  );
}
