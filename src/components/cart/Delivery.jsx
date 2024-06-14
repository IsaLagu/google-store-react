import "./delivery.scss";

const Delivery = ({ style }) => {
  return (
    <div className="deliveryInfo" style={style}>
      <img className="truckIcon" src=".\src\assets\icons\Delivery.svg" alt="delivery-icon" />
      <p className="deliveryText">
        Delivers 29 Apr to <span className="postalCode">08023</span>
      </p>
    </div>
  );
};

export default Delivery;
