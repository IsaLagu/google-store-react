import PropTypes from "prop-types";
import { useEffect } from "react";
import "./ProductSelectColor.scss";

const ProductSelectColorWatches = ({ productId, product, onChange }) => {
  const handleClick = (color) => {
    saveColor(color);
    if (onChange) onChange(color);
  };
  const saveColor = (color) => {
    localStorage.setItem("selectedColor", JSON.stringify(color));
  };

  useEffect(() => {
    saveColor("Midnight Zen");
  }, []);
  return (
    <div className="product-select-color-watches">
      <p>Choose a Color</p>
      <div className="set-img">
        {product.property.map((ele) => (
          <div key={ele.color} onClick={() => handleClick(ele.color)} className="div-img">
          <img className="img-color" src={`/${productId}/${ele.imgSrc}`} />
          <p>{ele.color}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

ProductSelectColorWatches.propTypes = {
  productId: PropTypes.string,
  product: PropTypes.object,
  onChange: PropTypes.func
};

export default ProductSelectColorWatches;
