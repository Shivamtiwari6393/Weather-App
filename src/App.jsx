import { useState, useEffect } from "react";
import Header from "./Components/Header";
import Address from "./Components/Address";
import CardSection from "./Components/CardSection";
import Date from "./Components/Date";
function App() {
  const [weatherData, setWeatherData] = useState("");
  const [updatedWeatherData, setUpdatedWeatherData] = useState("");
  const [input, setInput] = useState("Lucknow");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [requesting,setRequesting] = useState(false)
  useEffect(() => {
    setRequesting(true)
    const key = "EV5UHBCN2BSPRT5ZVS5JW7ZG2";
    const api = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${input}?key=${key}`;
    fetch(api)
      .then((response) => {
        if (!response.ok) {
          if (response.status === 400) {
            alert("location is not valid,Please Re-enter the location");
          } else {
            alert(response.status + " error");
          }
          return weatherData;
        } else {
          return response.json();
        }
      })
      .then((data) => {
        setWeatherData(data);
        if(data){
        setTime(data["currentConditions"]["datetime"]);
        setDate(data["days"][0]["datetime"]);
        }
        setRequesting(false)
      })
      .catch((e) =>{
        setRequesting(false);
        alert(
          "Internet connection is either slow or Disconnected.Please refresh  "+ e
        )}
      );
  }, [input]);

  return (
    <>
      <Header setInput={setInput} setUpdatedWeatherData={setUpdatedWeatherData} />
      <Address weatherData={weatherData} />
      {weatherData ? (
        <Date
          weatherData={weatherData}
          setUpdatedWeatherData={setUpdatedWeatherData}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
        />
      ) : (
        ""
      )}
      <CardSection
        updatedWeatherData={updatedWeatherData}
        weatherData={weatherData}
        requesting={requesting}
      />
    </>
  );
}

export default App;
