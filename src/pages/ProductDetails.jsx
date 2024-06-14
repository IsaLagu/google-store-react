import PropTypes from "prop-types";

const ProductDetails = ({ product }) => {
    //const { title, text } = props; Otra opción para recibir las propiedades
    return (
        <>
            <h3>{product.title}</h3>
            <h4>{product.price} €</h4>
        </>
    );
};

ProductDetails.propTypes = { // validación de las propiedades
    product: PropTypes.object
};

export default ProductDetails;