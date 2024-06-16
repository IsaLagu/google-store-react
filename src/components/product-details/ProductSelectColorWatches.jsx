import "./ProductSelectColor.scss";
const ProductSelectColorWatches = ({ productId, product, onChange }) => {

  return (
    <div className="product-select-color-watches">
      <p>Choose a Color</p>
      <div className="set-img">
        {product.property.map((ele) => (
          <div key={ele.color} onClick={() => onChange(ele.color)} className="div-img">
          <img className="img-color" src={`/${productId}/${ele.imgSrc}`} />
          <p>{ele.color}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSelectColorWatches;
