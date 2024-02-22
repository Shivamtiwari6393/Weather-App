import "../Styles/Header.css";

const Header = (props) => {
  function changeinput() {
    const input = document.getElementById("input").value;
    props.updatedinput(input);
  }
  return (
    <div className="header">
      <h2>Weather App</h2>
      <div>
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
