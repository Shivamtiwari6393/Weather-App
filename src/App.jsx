import { useState, useEffect } from "react";
import "./Styles/App.css";
import Header from "./Components/Header";
import Body from "./Components/Body"
import CardSection from "./Components/CardSection";
function App() {

  console.log('..........app.js ....... rendered..........');
  // fetching data----------------------

  
  const [weatherdata, setweatherdata] = useState(null)

  const [input, setinput] = useState('Sultanpur')

 
    const updatedinput = (updatedinput)=>{
      setinput(updatedinput)
    }



  useEffect(() => {
    const key = "EV5UHBCN2BSPRT5ZVS5JW7ZG2"
    console.log(input);
    const api = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${input}?key=${key}`
    fetch(api)
      .then((response) => {
        if (!response.ok) {
          throw new Error('network response not ok')
        }
        else {
          return response.json()
        }
      })
      .then((data) => { setweatherdata(data) })
      .catch((e) => console.log(e))
  },[input])



  return (
    <>
     <Header updatedinput = {updatedinput} />
    <Body weatherdata = {weatherdata}/>
    <CardSection weatherdata = {weatherdata}/>
    </>

  );
}



export default App;
