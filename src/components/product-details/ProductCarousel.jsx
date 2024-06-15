import React, { useState } from "react";
import "./ProductCarousel.scss";

const ProductCarousel = ({ productImages, productId }) => {
  const [selectedImage, setSelectedImage] = useState(productImages[0]);

  return (
    <div className="product-carousel">
      {productImages.length === 1 ? null : (
        <div className="imgs-device">
          {productImages.map((productImage) => (
            <div key={productImage} className="div-icono" onClick={() => setSelectedImage(productImage)}>
              <img className="img-icono" src={`/${productId}/${productImage}`} />
            </div>
          ))}
        </div>
      )}
      <div className="img-prev">
        <img src={`/${productId}/${selectedImage}`} />
      </div>
    </div>
  );
};

export default ProductCarousel;
