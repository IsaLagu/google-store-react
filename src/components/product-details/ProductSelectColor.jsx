import PropTypes from "prop-types";
import { useEffect } from "react";
import "./ProductSelectColor.scss";

const ProductSelectColor = ({ product, onChange }) => {
  const handleClick = (color) => {
    saveColor(color);
    if (onChange) onChange(color);
  };
  const saveColor = (color) => {
    localStorage.setItem("selectedColor", JSON.stringify(color));
  };

  useEffect(() => {
    saveColor("bay");
  }, []);
  return (
    <div className="product-select-color">
      <p>Choose a Color</p>
      <div className="set-color">
        {product.property.map((ele) => (
          <div key={ele.color} onClick={() => handleClick(ele.color)} className={`circle circle-${ele.color}`}></div>
        ))}
      </div>
    </div>
  );
};

ProductSelectColor.propTypes = {
  product: PropTypes.object,
  onChange: PropTypes.func,
  onClick: PropTypes.func
};

export default ProductSelectColor;
