import "./ProductInfo.scss";

const ProductInfo = ({ name, description, price }) => {
  return (
    <div class="info-device">
      <h1>{name}</h1>
      <p class="info-text">{description}</p>
      <p class="info-price">{price} €</p>
    </div>
  );
};

export default ProductInfo;
