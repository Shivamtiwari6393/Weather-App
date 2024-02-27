import { useState, useEffect } from "react";
import Header from "./Components/Header";
import Address from "./Components/Address";
import CardSection from "./Components/CardSection";
function App() {
  const [weatherdata, setweatherdata] = useState(null);
  const [input, setinput] = useState("Sultanpur");

  const updatedinput = (updatedinput) => {
    setinput(updatedinput);
  };

  useEffect(() => {
    const key = "EV5UHBCN2BSPRT5ZVS5JW7ZG2";
    const api = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${input}?key=${key}`;
    fetch(api)
      .then((response) => {
        if (!response.ok) {
          throw new Error("network response not ok");
        } else {
          return response.json();
        }
      })
      .then((data) => {
        setweatherdata(data);
      })
      .catch((e) => console.log(e));
  }, [input]);

  return (
    <>
      <Header updatedinput={updatedinput} />
      <Address weatherdata={weatherdata} />
      <CardSection weatherdata={weatherdata} />e
    </>
  );
}

export default App;
