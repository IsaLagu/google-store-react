import "./ProductPriceInfo.scss";

const ProductPriceInfo = () => {
  return (
    <div className="product-price-info">
      <p className="total">229 €</p>
      <br />
      <div className="buttons">
        <input type="number" id="quantity" min="1" value="1" />
        <button type="button">Add to Cart</button>
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
