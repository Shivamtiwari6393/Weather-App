import Card from "./Card";
import "../Styles/CardSection.css";

export default function CardSection({
  updatedWeatherData,
  weatherData,
  requesting,
}) {
  return (
    <div className="CardSection">
      {updatedWeatherData && !requesting ? (
        <>
          <Card
            cardName="Temperature"
            cardValue={((updatedWeatherData["temp"] - 32) * (5 / 9)).toFixed(2)}
          >
            C
          </Card>
          <Card
            cardName="Feel Like"
            cardValue={(
              (updatedWeatherData["feelslike"] - 32) *
              (5 / 9)
            ).toFixed(2)}
          >
            C
          </Card>
          <Card
            cardName="Cloud Cover"
            cardValue={updatedWeatherData["cloudcover"]}
          >
            %
          </Card>
          <Card cardName="Dew" cardValue={updatedWeatherData["dew"]} />

          <Card cardName="Humidity" cardValue={updatedWeatherData["humidity"]}>
            %
          </Card>
          <Card
            cardName="Sun Rise"
            cardValue={weatherData["currentConditions"]["sunrise"]}
          />
          <Card
            cardName="Sun Set"
            cardValue={weatherData["currentConditions"]["sunset"]}
          />
          <Card
            cardName="Pressure"
            cardValue={updatedWeatherData["pressure"]}
          />
          <Card
            cardName="Rain Probability"
            cardValue={updatedWeatherData["precipprob"]}
          >
            %
          </Card>

          <Card
            cardName="Solar Radiation"
            cardValue={updatedWeatherData["solarradiation"]}
          ></Card>
          <Card cardName="UV Index" cardValue={updatedWeatherData["uvindex"]} />
          <Card
            cardName="Wind Speed"
            cardValue={updatedWeatherData["windspeed"]}
          />
          <Card cardName="Latitude" cardValue={weatherData["latitude"]} />
          <Card cardName="Longitude" cardValue={weatherData["longitude"]} />

          <Card cardName="Snow" cardValue={updatedWeatherData["snow"]} />
          <Card
            cardName="Snow Depth"
            cardValue={updatedWeatherData["snowdepth"]}
          />
          <Card
            cardName="Visibility"
            cardValue={updatedWeatherData["visibility"]}
          />
        </>
      ) : (
        <>
          <Card cardName="Temperature" cardValue="Loading..." />
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
