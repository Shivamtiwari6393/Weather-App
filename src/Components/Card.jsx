import "../Styles/Card.css";

const Card = ({cardName,cardValue,children}) => {
  return (
    <div className="container">
      <div className="card">
        <p>
          <span>{cardName}</span>
        </p>
        <p>
          <span>{cardValue}   {children}</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
