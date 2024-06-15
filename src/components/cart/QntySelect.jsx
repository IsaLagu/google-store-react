import { useState, useEffect } from "react";
import "./QntySelect.scss";

const QntySelect = ({ style, value, onChange }) => {
  // const storedItems = JSON.parse(localStorage.getItem("selectedQnty"));
  // const [selectedQnty, setSelectedQnty] = useState(storedItems);
  // useEffect(() => {
  //   localStorage.setItem("selectedQnty", JSON.stringify(selectedQnty));
  // }, [selectedQnty]);
  return (
    <select className="qntySelect" style={style} value={value} onChange={(e) => onChange(e.target.value)}>
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

export default QntySelect;
