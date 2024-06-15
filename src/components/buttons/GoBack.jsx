// import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "./goBack.scss";

const GoBack = ({ text }) => {
    return (
        <>
            <a className="atras" href="#"><img src="src\assets\icons\Arrow.svg" alt="Go back arrow"/> {text}</a>
        </>
    );
}

GoBack.propTypes = { 
    text: PropTypes.string
};

export default GoBack;
