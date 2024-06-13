import React, { useState } from "react";
import "./ProductCarousel.scss";

const ProductCarousel = ({ productsImages }) => {
  const [selectedImage, setSelectedImage] = useState(productsImages[0]);

  return (
    <div className="product-carousel">
      {productsImages.length === 1 ? null : (
        <div className="imgs-device">
          {productsImages.map((productImage) => (
            <div className="div-icono" onClick={() => setSelectedImage(productImage)}>
              <img className="img-icono" src={productImage} />
            </div>
          ))}
        </div>
      )}
      <div className="img-prev">
        <img src={selectedImage} />
      </div>
    </div>
  );
};

export default ProductCarousel;
