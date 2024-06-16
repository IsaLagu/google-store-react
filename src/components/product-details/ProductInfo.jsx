import "./ProductInfo.scss";

const ProductInfo = ({ name, description, price }) => {
  return (
    <div className="info-device">
      <h1>{name}</h1>
      <p className="info-text">{description}</p>
      <p className="info-price">{price} €</p>
    </div>
  );
};

export default ProductInfo;
