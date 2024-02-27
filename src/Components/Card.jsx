import "../Styles/Card.css";
import Loading from "./Loading";
const Card = ({ cardName, cardValue, children }) => {
  return (
    <div className="container">
      <div className="card">
        <p>
          <span>{cardName}</span>
        </p>
        {cardValue !== "Loading..."  ? (
          <p>
            <span>
              {cardValue} {children}
            </span>
          </p>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default Card;
