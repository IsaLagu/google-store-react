import "./ProductSelectColor.scss";

const ProductSelectColor = () => {
  return (
    <div className="product-select-color">
      <p>Choose a Color</p>
      <div className="set-color">
        <div className="circle circle-blue"></div>
        <div className="circle circle-beige"></div>
        <div className="circle circle-darkgray"></div>
        <div className="circle circle-lightgray"></div>
        <div className="circle circle-lime"></div>
        <div className="circle circle-orange"></div>
      </div>
    </div>
  );
};

export default ProductSelectColor;
