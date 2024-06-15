import { useEffect } from "react";
import "./ProductPriceInfo.scss";
import Button from "../Button";
import QntySelect from "../../components/cart/QntySelect";
import Delivery from "../cart/Delivery";

const ProductPriceInfo = ( product ) => {
  const saveQuantity = ( quantity ) => {
    localStorage.setItem("selectedQnty", JSON.stringify(quantity));
  }
  useEffect(() => {
    saveQuantity("1");
  }, []);
  return (
    <div className="product-price-info">
      <p className="total">{product.price} €</p>
      <br />
      <div className="buttons">
        <QntySelect
          value={1}
          onChange={saveQuantity}
          style={{ width: "20%", border: "1px solid", borderRadius: "6px" }}
        />
        <Button width="80%">Add to cart</Button>
      </div>
      <div className="delivery">
        <Delivery style={{ backgroundColor: "#F8F9FA" }} />
      </div>
    </div>
  );
};

export default ProductPriceInfo;