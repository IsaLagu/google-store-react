import "./ProductDetails.scss";
import ProductCarousel from "../components/product-details/ProductCarousel";
import ProductInfo from "../components/product-details/ProductInfo";
import ProductPriceInfo from "../components/product-details/ProductPriceInfo";
import ProductSelectColor from "../components/product-details/ProductSelectColor";
import { useParams } from "react-router-dom";
import { products } from "../assets/data/data";

const ProductDetails = () => {
  const { id } = useParams();

  const product = products.find((product) => product.id === id);

  return (
    <div className="product-details">
      <section className="section-view-device">
        <ProductCarousel
          productId={product.id}
          productImages={product.property.find((ele) => ele.color === "Bay").imgSrc}
        />
      </section>
      <section className="section-info-device">
        <ProductInfo name={product.title} description={product.category} price={product.price} />
        <div className="product-selector-container">
          <ProductSelectColor />
          <ProductPriceInfo />
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
