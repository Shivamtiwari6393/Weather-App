import { useState } from "react";
import "../Styles/Header.css";

const Header = ({ input, setInput, setError }) => {
  const [inputValue, setInputValue] = useState(input);

  const handleInputChange = (event) => {
    setError("");
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    if (inputValue.trim() === "") {
      setError("Please enter a location");
      return;
    }
    setInput(inputValue);
  };

  return (
    <div className="header-container">
      <h3>Weather App</h3>
      <div className="input-container">
        <input
          type="text"
          placeholder="Location"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit" onClick={handleSubmit}>
          Go
        </button>
      </div>
    </div>
  );
};

export default Header;
