import Card from "./Card";
import "../Styles/CardSection.css";

export default function Section(props) {
  let { weatherdata } = props;

  return (
    <div id="cardsection">
      {weatherdata ? (
        <>
          <Card
            cardName="Temperature"
            cardValue={((weatherdata["currentConditions"]["temp"] -32)*(5/9)).toFixed(2)}
            >C</Card>
          <Card
            cardName="Feel Like"
            cardValue={((weatherdata["currentConditions"]["feelslike"] -32)*(5/9)).toFixed(2)}
          >C</Card>
          <Card
            cardName="Cloud Cover"
            cardValue={weatherdata["currentConditions"]["cloudcover"]}
          >%</Card>
          <Card
            cardName="Dew"
            cardValue={weatherdata["currentConditions"]["dew"]}
          />

          <Card
            cardName="Humidity"
            cardValue={weatherdata["currentConditions"]["humidity"]}
          />
          <Card
            cardName="Sun Rise"
            cardValue={weatherdata["currentConditions"]["sunrise"]}
          />
          <Card
            cardName="Sun Set"
            cardValue={weatherdata["currentConditions"]["sunset"]}
          />
          <Card
            cardName="Pressure"
            cardValue={weatherdata["currentConditions"]["pressure"]}
          />
          <Card
            cardName="Rain Probability"
            cardValue={weatherdata["currentConditions"]["precipprob"]}
          >%</Card>

          <Card
            cardName="Solar Radiation"
            cardValue={weatherdata["currentConditions"]["solarradiation"]}
          />
          <Card
            cardName="UV Index"
            cardValue={weatherdata["currentConditions"]["uvindex"]}
          />
          <Card
            cardName="Wind Speed"
            cardValue={weatherdata["currentConditions"]["windspeed"]}
          />
          <Card cardName="Latitude" cardValue={weatherdata["latitude"]} />
          <Card cardName="Longitude" cardValue={weatherdata["longitude"]} />
          {/* <Card
            cardName="Time"
            cardValue={weatherdata["currentConditions"]["datetime"]}
          /> */}
          <Card
            cardName="Snow"
            cardValue={weatherdata["currentConditions"]["snow"]}
          />
          <Card
            cardName="Snow Depth"
            cardValue={weatherdata["currentConditions"]["snowdepth"]}
          />
          <Card
            cardName="Visibility"
            cardValue={weatherdata["currentConditions"]["visibility"]}
          />
        </>
      ) : (
        <>
          <Card cardName="Temperature" cardValue= "Loading..."/>
          <Card cardName="Feel Like" cardValue="Loading..." />
          <Card cardName="Cloud Cover" cardValue="Loading..." />
          <Card cardName="Dew" cardValue="Loading..." />
          <Card cardName="Humidity" cardValue="Loading..." />
          <Card cardName="Sun Rise" cardValue="Loading..." />
          <Card cardName="Sun Set" cardValue="Loading..." />
          <Card cardName="Pressure" cardValue="Loading..." />
          <Card cardName="Rain Probability" cardValue="Loading..." />
          <Card cardName="Soler Radiation" cardValue="Loading..." />
          <Card cardName="UV Index" cardValue="Loading..." />
          <Card cardName="Wind Speed" cardValue="Loading..." />
          <Card cardName="Latitude" cardValue="Loading..." />
          <Card cardName="Longitude" cardValue="Loading..." />
          <Card cardName="Time" cardValue="Loading..." />
          <Card cardName="Snow" cardValue="Loading..." />
          <Card cardName="Snow Depth" cardValue="Loading..." />
          <Card cardName="Visibility" cardValue="Loading..." />
        </>
      )}
    </div>
  );
}
