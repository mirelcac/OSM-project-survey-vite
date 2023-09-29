import PropTypes from 'prop-types';

export const Weather = ({ updateFormData, value }) => {
  const chooseWeather = (e) => updateFormData("chooseWeather", e.target.value);
  return (
    <div className="form-container">
      <div className="input-wrapper">
      <label><h2>What kind of weather is it?</h2></label>
      <select value={value} id="weather-input" onChange={chooseWeather}>
        <option value="">Select a weather</option>
        <option value="rainy">Rainy</option>
        <option value="misty">Misty</option>
        <option value="windy">Windy</option>
        <option value="chilly">Chilly</option>
      </select>
      </div>
    </div>
  );
};

Weather.propTypes = {
  updateFormData: PropTypes.func.isRequired, // Assuming it's required and a function
  value: PropTypes.any, // Adjust the PropTypes type as needed for the 'value' prop
};
