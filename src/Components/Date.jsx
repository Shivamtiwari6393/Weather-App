import { useEffect } from "react";
import "../Styles/Date.css";
export default function Date({
  weatherData,
  setUpdatedWeatherData,
  time,
  setTime,
  date,
  setDate,
}) {
  useEffect(() => {
    findMatchingDay(date);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date, time]);

  const handleTime = (e) => {
    setTime(e.target.value);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const findMatchingDay = (updatedDate) => {
    let matchingday = weatherData["days"].find(
      (day) => day.datetime === updatedDate
    );
    findMatchingTime(matchingday);
  };

  let correctTime = () => {
    let splitTime = time.split(":");
    let hour = splitTime[0] + ":00:00";
    return hour;
  };

  const findMatchingTime = (matchingday) => {
    let matchingTime = matchingday["hours"].find((timee) => {
      let hour = correctTime();
      return timee.datetime === hour;
    });
    setUpdatedWeatherData(matchingTime);
  };

  return (
    <div className="Date">
      <div className="date">
        <select name="date" id="date" value={date} onChange={handleDate}>
          {weatherData["days"].map((date) => (
            <option key={date.datetime} value={date.datetime}>
              {date.datetime}
            </option>
          ))}
        </select>
      </div>
      <div className="time">
        <select
          name="time"
          id="time"
          value={correctTime()}
          onChange={handleTime}
        >
          {weatherData["days"][0]["hours"].map((time) => (
            <option key={time.datetime} value={time.datetime}>
              {time.datetime}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
