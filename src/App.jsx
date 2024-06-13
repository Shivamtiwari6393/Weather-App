import { useState, useEffect } from "react";
import Header from "./Components/Header";
import Address from "./Components/Address";
import CardSection from "./Components/CardSection";
import Date from "./Components/Date";
function App() {
  const [weatherData, setWeatherData] = useState("");
  const [updatedWeatherData, setUpdatedWeatherData] = useState("");
  const [input, setinput] = useState("Lucknow");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  const updatedinput = (updatedinput) => {
    setinput(updatedinput);
  };
  const clearweatherdata = () => {
    setUpdatedWeatherData("")
    setWeatherData(null);
  };

  useEffect(() => {
    const key = "EV5UHBCN2BSPRT5ZVS5JW7ZG2";
    const api = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${input}?key=${key}`;
    fetch(api)
      .then((response) => {
        if (!response.ok) {
          if (response.status === 400) {
            alert("location is not valid");
          } else {
            alert(response.status + " error");
          }
          return;
        } else {
          return response.json();
        }
      })
      .then((data) => {
        setWeatherData(data);
        setTime(data["currentConditions"]["datetime"]);
        setDate(data["days"][0]["datetime"]);
      })
      .catch((e) =>
        alert(
          "Internet connection is either slow or Disconnected.Please refresh"
        )
      );
  }, [input]);

  return (
    <>
      <Header updatedinput={updatedinput} clearweatherdata={clearweatherdata} />
      {/* {console.log(weatherData, "-app")} */}

      <Address weatherData={weatherData} />
      {weatherData? (
        <Date
          weatherData={weatherData}
          updatedWeatherData={updatedWeatherData}
          setUpdatedWeatherData={setUpdatedWeatherData}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
        />
      ) : (
        ""
      )}
      <CardSection updatedWeatherData={updatedWeatherData} weatherData ={weatherData}/>
    </>
  );
}

export default App;
