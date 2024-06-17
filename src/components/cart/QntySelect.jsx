// import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./QntySelect.scss";

const QntySelect = ({ style, onChange}) => {
  // const storedItems = JSON.parse(localStorage.getItem("selectedQnty"));
  // const [selectedQnty, setSelectedQnty] = useState(storedItems);
  // useEffect(() => {
  //   localStorage.setItem("selectedQnty", JSON.stringify(selectedQnty));
  // }, [selectedQnty]);

/*   const saveQuantity = (quantity) => {
    localStorage.setItem("selectedQnty", JSON.stringify(quantity));
  } */
  
  const handleChange = (e) => {
    const quantity = e.target.value;
    onChange(quantity); 
  }

  return (
    <select className="qntySelect" style={style} onChange={handleChange}>
      {[...Array(10).keys()].map((number) => {
        const num = number + 1;
        return (
          <option value={num} key={num}>
            {num}
          </option>
        );
      })}
    </select>
  );
};

QntySelect.propTypes = {
  style: PropTypes.object,
  onChange: PropTypes.func,
};

export default QntySelect;
