import "../Styles/Card.css";

const Card = ({ cardName, cardValue, children }) => {
  return (
    <div className="card-container">
      <p className="card-title">
        <span>{cardName}</span>
      </p>
      <p className="card-value">
        <span>
          {cardValue} {children}
        </span>
      </p>
    </div>
  );
};

export default Card;
