import Card from "./Card";
import "../Styles/CardSection.css";

export default function CardSection({ weatherData, date, time }) {
  time = `${time.slice(0, 2)}:00:00`;

  const releventDateData = weatherData.days.filter(
    (day) => day.datetime === date
  );

  const releventTimeData = releventDateData[0]["hours"].filter(
    (hour) => hour.datetime === time
  );

  console.log(weatherData);

  let cardData = [
    {
      cardName: "Temperature",
      cardValue: ((releventTimeData[0].temp - 32) * (5 / 9)).toFixed(2),
      unit: "C",
    },
    {
      cardName: "Feel Like",
      cardValue: ((releventTimeData[0].feelslike - 32) * (5 / 9)).toFixed(2),
      unit: "C",
    },
    {
      cardName: "Cloud Cover",
      cardValue: releventTimeData[0].cloudcover,
      unit: "%",
    },
    { cardName: "Dew", cardValue: releventTimeData[0].dew },
    {
      cardName: "Humidity",
      cardValue: releventTimeData[0].humidity,
      unit: "%",
    },
    { cardName: "Sun Rise", cardValue: weatherData.currentConditions.sunrise },
    { cardName: "Sun Set", cardValue: weatherData.currentConditions.sunset },
    { cardName: "Pressure", cardValue: releventTimeData[0].pressure },
    {
      cardName: "Rain Probability",
      cardValue: releventTimeData[0].precipprob,
      unit: "%",
    },
    {
      cardName: "Solar Radiation",
      cardValue: releventTimeData[0].solarradiation,
    },
    { cardName: "UV Index", cardValue: releventTimeData[0].uvindex },
    {
      cardName: "Wind Speed",
      cardValue: releventTimeData[0].windspeed,
    },
    { cardName: "Latitude", cardValue: weatherData.latitude },
    { cardName: "Longitude", cardValue: weatherData.longitude },
    { cardName: "Snow", cardValue: releventTimeData[0].snow },
    {
      cardName: "Snow Depth",
      cardValue: releventTimeData[0].snowdepth,
    },
    {
      cardName: "Visibility",
      cardValue: releventTimeData[0].visibility,
    },
  ];

  return (
    <div className="card-section">
      {cardData.map((card, index) => (
        <Card key={index} cardName={card.cardName} cardValue={card.cardValue}>
          {card.unit && card.unit}
        </Card>
      ))}
    </div>
  );
}
