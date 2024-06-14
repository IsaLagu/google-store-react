import './cartProdContainer.scss';
import Delivery from './Delivery.jsx';
import QntySelect from './QntySelect.jsx';

const CartProdContainer = () => {
       
    return (
        <div className='cartProdContainer'>
            <div className="productAdded">
            <div className='cartImg'>
                <img className="imgInCart" src="../src/assets/earbuds/earbuds_01.png" alt="" />
            </div>
            <div className="cartProdInfo">
                <p className="ff productDesc summaryText">Google Pixel Buds Pro in light blue</p>
                <span className="ff summaryText">Cant: 
                <QntySelect/>
                {/* <select className="qntySelect">
                    {[
                        ...Array(10).keys(),
                    ].map(number => {
                        const num = number + 1;
                        return <option value={num} key={num}>
                            {num}
                        </option>
                    })
                    }
                </select> */}
                </span>
            </div>
            <div className="cartItemPrice">
                <div className="ff summaryText">229.00 €</div>
                <a className="ff removeFromCart" href="">Remove</a>
            </div>
            </div>
            <div className="delivInfo">
                <Delivery/>
            </div>
        </div>
    )
}




export default CartProdContainer;