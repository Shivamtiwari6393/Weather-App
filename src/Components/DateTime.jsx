import "../Styles/DateTime.css";
export default function DateTime({ days, date, time, setDateTime }) {

  time = `${time.slice(0,2)}:00:00`
  const handleDateChange = (e) => {
    setDateTime((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleTimeChange = (e) => {
    setDateTime((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="date-time-container">
      <div className="date-container">
        <select name="date" id="date" value={date} onChange={handleDateChange}>
          {days.map((day) => (
            <option key={day.datetime} value={day.datetime}>
              {day.datetime}
            </option>
          ))}
        </select>
      </div>
      <div className="time-container">
        <select name="time" id="time" value={time} onChange={handleTimeChange}>
          {days.length > 0 &&
            days[0].hours.map((time) => (
              <option key={time.datetime} value={time.datetime}>
                {time.datetime}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
}
