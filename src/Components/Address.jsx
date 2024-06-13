import "../Styles/Address.css";

export default function Body(props) {
  let { weatherData } = props;
  // console.log(weatherData," inside address")
  return (
    <div className="body">
      <div className={weatherData ? "weather-available" : "shimmer"}>{weatherData ? weatherData["resolvedAddress"] : ""}</div>
    </div>
  );
}
