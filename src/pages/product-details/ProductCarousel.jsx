import React, { useState } from "react";
import "./ProductCarousel.scss";

const ProductCarousel = ({ productsImages }) => {
  const [selectedImage, setSelectedImage] = useState(productsImages[0]);

  return (
    <div className="product-carousel">
      {productsImages.length === 1 ? null : (
        <div class="imgs-device">
          {productsImages.map((productImage) => (
            <div class="div-icono" onClick={() => setSelectedImage(productImage)}>
              <img class="img-icono" src={productImage} />
            </div>
          ))}
        </div>
      )}
      <div class="img-prev">
        <img src={selectedImage} />
      </div>
    </div>
  );
};

export default ProductCarousel;
