import "../Styles/Address.css";

export default function Body(props) {
  let { weatherdata } = props;
  return (
    <div className="body">
      <div className={weatherdata ? "weather-available" : "shimmer"}>{weatherdata ? weatherdata["resolvedAddress"] : ""}</div>
    </div>
  );
}
