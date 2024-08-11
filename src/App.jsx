import { useState, useEffect } from "react";
import Header from "./Components/Header";
import Address from "./Components/Address";
import CardSection from "./Components/CardSection";
import DateTime from "./Components/DateTime";
import Loading from "./Components/Loading";
import "./Styles/App.css"

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [input, setInput] = useState("Lucknow");
  const [dateTime, setDateTime] = useState({ time: "", date: "" });
  const [requesting, setRequesting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchWeatherData = async () => {
      setRequesting(true);
      setError("");

      const key = "EV5UHBCN2BSPRT5ZVS5JW7ZG2";
      const api = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${input}?key=${key}`;

      try {
        const response = await fetch(api);

        if (!response.ok) {
          if (response.status === 400) {
            throw new Error(
              "Location is not valid. Please re-enter the location."
            );
          } else {
            throw new Error(`${response.status} error`);
          }
        }

        const data = await response.json();
        setWeatherData(data);

        if (data) {
          setDateTime({
            time: data["currentConditions"]["datetime"],
            date: data["days"][0]["datetime"],
          });
        }
      } catch (e) {
        setError(e.message);
      } finally {
        setRequesting(false);
      }
    };

    fetchWeatherData();
  }, [input]);

  return (
    <>
      {requesting && <Loading />}
      <Header input={input} setInput={setInput} setError = {setError}/>
      {error && <p className="error-message">{error}</p>}

      {weatherData && (
        <>
          <Address weatherData={weatherData} />
          <DateTime
            days={weatherData.days}
            date={dateTime.date}
            time={dateTime.time}
            setDateTime={setDateTime}
          />
          <CardSection
            weatherData={weatherData}
            date={dateTime.date}
            time={dateTime.time}
          />
        </>
      )}
    </>
  );
}

export default App;
