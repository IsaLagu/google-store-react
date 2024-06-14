import "./ProductPriceInfo.scss";
import Button from "../Button";
import QntySelect from "../../components/cart/QntySelect";

const ProductPriceInfo = () => {
  return (
    <div className="product-price-info">
      <p className="total">229 €</p>
      <br />
      <div className="buttons">
        <QntySelect width="20%" />
        <Button width="80%">Add to cart</Button>
      </div>
      <div className="delivery">
        <img src="./images/icons/Delivery.svg" alt="shopping cart" />
        <p>
          Delivery April 23 to <span className="number">08023</span>
        </p>
      </div>
    </div>
  );
};

export default ProductPriceInfo;
