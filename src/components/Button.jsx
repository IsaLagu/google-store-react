import PropTypes from "prop-types";
import "./Button.scss";

const Button = ({ width, children, onClick }) => {

  return (
    <button style={{ width }} className="button" onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  width: PropTypes.string,
  children: PropTypes.string,
  onClick: PropTypes.func
}

export default Button;
