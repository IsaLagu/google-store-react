import "./Button.scss";

const Button = ({ width, children, onClick }) => {
  return (
    <button style={{ width }} className="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
