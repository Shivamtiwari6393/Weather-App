import "../Styles/Address.css";

export default function Address({weatherData}) {
  // let { weatherData } = props;
  // console.log(weatherData," inside address")
  return (
    <div className="Address">
      <div className={weatherData ? "weather-available" : "shimmer"}>
        {weatherData ? weatherData["resolvedAddress"] : ""}
      </div>
    </div>
  );
}
