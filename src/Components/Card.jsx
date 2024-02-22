import "../Styles/Card.css";
const Card = (props) => {
    return (
        <div className="container">
            <div className="card">
                <p><span>{props.cardName}</span></p>
                <p><span>{props.cardValue}</span></p>
            </div>
            </div>
    )
}

export default Card