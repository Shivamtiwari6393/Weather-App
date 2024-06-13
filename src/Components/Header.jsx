import "../Styles/Header.css";
const Header = (props) => {
  function changeinput() {
    const input = document.getElementById("input").value;
    if(input === ''){
      alert('Please enter a location')
      return
    }
    if(props.weatherdata != null){
      if(props['weatherdata']['resolvedAddress'] === input){
      return
    }}

    props.clearweatherdata()
    props.updatedinput(input);
  }
  return (
    <div className="header">
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
