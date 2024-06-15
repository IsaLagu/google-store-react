import { products } from '../../assets/data/data.jsx';
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
                    </span>
                </div>
                <div className="cartItemPrice">
                    <div className="ff summaryText">{229.00} €</div>
                    <a className="ff removeFromCart" href="">Remove</a>
                </div>
            </div>
            <div className="delivInfo">
                <Delivery/>
            </div>
        </div> 

/*            <div className="cartProdContainer">
                {products.map((product) => (
                    <div className="productAdded" key={product.id}>
                        <div className='cartImg'>
                            <img src={product.imgSrc} alt={product.title}/>
                        </div>
                        <div className="cartProdInfo">
                            <p className="ff productDesc summaryText">{product.title} in {product.color}</p>
                            <span className="ff summaryText">Cant: 
                            <QntySelect/>
                            </span>
                        </div>
                        <div className="cartItemPrice">
                            <div className="ff summaryText">{product.price} €</div>
                            <a className="ff removeFromCart" href="">Remove</a>
                        </div>
                    </div>
                    <div className="delivInfo">
                        <Delivery/>
                    </div>
                ))}
            </div>  */
        

        )
    }



export default CartProdContainer;