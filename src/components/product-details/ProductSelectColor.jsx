import "./ProductSelectColor.scss";

const ProductSelectColor = ({ product, onChange }) => {
  return (
    <div className="product-select-color">
      <p>Choose a Color</p>

      <div className="set-color">
        {product.property.map((ele) => (
          <div key={ele.color} onClick={() => onChange(ele.color)} className={`circle circle-${ele.color}`}></div>
        ))}
      </div>
    </div>
  );
};

export default ProductSelectColor;
