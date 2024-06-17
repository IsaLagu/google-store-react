import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductPriceInfo.scss";
import Button from "../Button";
import QntySelect from "../../components/cart/QntySelect";
import Delivery from "../cart/Delivery";

const ProductPriceInfo = ( product ) => {
  let navigateTo = useNavigate()
  const saveQuantity = ( quantity ) => {
    localStorage.setItem("selectedQnty", JSON.stringify(quantity));
  }
  useEffect(() => {
    saveQuantity("1");
  }, []);
  const handleCart = () =>{
    addProduct();
    navigateTo("/cart");
  }
  const addProduct = () => {
    let { id, title, price, property } = product.product;
    let quantity = JSON.parse(localStorage.getItem("selectedQnty"));
    let color = JSON.parse(localStorage.getItem("selectedColor"));
    let newTitle = `${title} in ${color}`;
    let photo = (property.find((ele) => ele.color === color).imgSrc)[0];

    let newProd = {
      "title": newTitle,
      "quantity": quantity,
      "price": price,
      "img": `${id}/${photo}`
    }
    localStorage.removeItem("selectedQnty");
    localStorage.removeItem("selectedColor");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let existingProductIndex = cart.findIndex(item => item.title === newTitle);
    (existingProductIndex >= 0) ? cart[existingProductIndex].quantity = quantity : cart.push(newProd);
    localStorage.setItem("cart", JSON.stringify(cart));
  }
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
        <Button width="80%" onClick={handleCart} >Add to cart</Button>
      </div>
      <div className="delivery">
        <Delivery style={{ backgroundColor: "#F8F9FA" }} />
      </div>
    </div>
  );
};

export default ProductPriceInfo;