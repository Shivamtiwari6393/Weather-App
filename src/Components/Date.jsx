import { useEffect} from "react";
import "../Styles/Date.css";
export default function Date({
  weatherData,
  updatedWeatherData,
  setUpdatedWeatherData,
  time,
  setTime,
  date,
  setDate,
}) {
  useEffect(() => {
    findMatchingDay(date);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date,time]);

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
    // console.log(matchingday, "- mathing day");
    findMatchingTime(matchingday);
  };

  let correctTime=()=>{
    let splitTime = time.split(":");
    let hour = splitTime[0] + ":00:00";
    return hour
  }
  

  const findMatchingTime = (matchingday) => {
    // console.log(matchingday, "matching day inside time");

    let matchingTime = matchingday["hours"].find((timee) => {
      let hour = correctTime()
      // console.log(hour);
      return timee.datetime === hour;
    });
    // console.log(matchingTime, "-mathing time");
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
        {/* {console.log(time)} */}
        <select name="time" id="time" value={correctTime()} onChange={handleTime}>
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
