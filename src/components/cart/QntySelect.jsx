import "./QntySelect.scss";

const QntySelect = ({ style }) => {
  return (
    <select className="qntySelect" style={style}>
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
