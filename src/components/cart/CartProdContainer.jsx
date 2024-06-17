//import { products } from '../../assets/data/data.jsx';
import React from 'react';
import './cartProdContainer.scss';
import Delivery from './Delivery.jsx';
import QntySelect from './QntySelect.jsx';

const CartProdContainer = ({ item, removeFromCart, updateQuantity }) => {
    const  handleRemove = () => {
        removeFromCart(item.id, item.color);
    };
    const handleQuantitychange = (quantity) => {
        updateQuantity(item.id, item.color, quantity);
    };

    return (
        <div className='cartProdContainer'>
            <div className="productAdded">
                <div className='cartImg'>
                    <img className="imgInCart" src={`../src/assets/${item.category.toLowerCase()}/${item.property[0].imgSrc}`} alt={item.title} />
                </div>
                <div className="cartProdInfo">
                    <p className="ff productDesc summaryText">{item.title} in {item.color}</p>
                    <span className="ff summaryText">Cant: 
                    <QntySelect quantity={item.quantity} onQuantityChange={handleQuantityChange}/>
                    </span>
                </div>
                <div className="cartItemPrice">
                    <div className="ff summaryText">{item.price} €</div>
                    <button className="ff removeFromCart" onClick={handleRemove}>Remove</button>
                </div>
            </div>
            <div className="delivInfo">
                <Delivery/>
            </div>
        </div> 

        )
    }



export default CartProdContainer;