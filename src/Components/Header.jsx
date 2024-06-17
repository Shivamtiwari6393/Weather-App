import "../Styles/Header.css";
const Header = ({ setUpdatedWeatherData, setInput }) => {
  function changeinput() {
    const input = document.getElementById("input").value;
    if (input === "") {
      alert("Please enter a location");
      return;
    }

    setInput(input);
  }
  return (
    <div className="Header">
      <h3>Weather App</h3>
      <div className="location">
        <input type="text" placeholder="Location" id="input" />
        <button
          type="submit"
          id="button"
          onClick={() => {
            changeinput();
          }}
        >
          Go
        </button>
      </div>
    </div>
  );
};
export default Header;
