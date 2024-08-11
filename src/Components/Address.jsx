import "../Styles/Address.css";

export default function Address({weatherData}) {
  return (
    <div className="address-section">
      <div className={weatherData ? "weather-available" : "shimmer"}>
        {weatherData ? weatherData["resolvedAddress"] : ""}
      </div>
    </div>
  );
}
