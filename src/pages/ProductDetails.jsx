import "./ProductDetails.scss";
import ProductCarousel from "../components/product-details/ProductCarousel";
import ProductInfo from "../components/product-details/ProductInfo";
import ProductPriceInfo from "../components/product-details/ProductPriceInfo";
import ProductSelectColor from "../components/product-details/ProductSelectColor";
import { useParams } from "react-router-dom";
import { products } from "../assets/data/data";
import GoBack from "../components/buttons/GoBack";
import { useState } from "react";

const ProductDetails = () => {
  const { id = "earbuds" } = useParams();

  const product = products.find((product) => product.id === id);
  const [color, setColor] = useState("bay");

  return (
    <article className="product">
      <GoBack text="See product details" />
      <div className="product-details">
        <section className="section-view-device">
          <ProductCarousel
            productId={product.id}
            productImages={product.property.find((ele) => ele.color === color).imgSrc}
          />
        </section>
        <section className="section-info-device">
          <ProductInfo name={product.title} description={product.category} price={product.price} />
          <div className="product-selector-container">
            <ProductSelectColor onChange={(col) => setColor(col)} product={product} />
            <ProductPriceInfo product={product} />
          </div>
        </section>
      </div>
    </article>
  );
};

export default ProductDetails;