import PropTypes from "prop-types";
import "./QntySelect.scss";

const QntySelect = ({ style, value, onChange }) => {
    const handleChange = (e) => {
        const quantity = Number(e.target.value);
        onChange(quantity);
    };

    return (
        <select className="qntySelect" style={style} value={value} onChange={handleChange}>
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
value: PropTypes.number.isRequired,
onChange: PropTypes.func.isRequired,
};

export default QntySelect;
