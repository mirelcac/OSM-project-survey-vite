import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const RadioButtons = ({ updateFormData, value }) => {
  const [location, setLocation] = useState(value || "");

  // Function to handle radio button change and update the location
  const handleLocationChange = (event) => {
    const selectedValue = event.target.value;
    setLocation(selectedValue);
    updateFormData("radioButtons", selectedValue);
  };

  return (
    <React.Fragment>
    <div className="form-container">
      <h2>Choose a location:</h2>
      <form>
        <div className="input-wrapper">
          <label>
            <input
              type="radio"
              value="hauntedHouse"
              onChange={handleLocationChange}
              checked={location === "hauntedHouse"}
            />
            Haunted House
          </label>
        </div>
        <div className="input-wrapper">
          <label>
            <input
              type="radio"
              value="darkForest"
              onChange={handleLocationChange}
              checked={location === "darkForest"}
            />
            Dark Forest
          </label>
        </div>
        <div className="input-wrapper">
          <label>
            <input
              type="radio"
              value="oldGraveyard"
              onChange={handleLocationChange}
              checked={location === "oldGraveyard"}
            />
            Old Graveyard
          </label>
        </div>
      </form>
    </div>
    </React.Fragment>
  );
};

RadioButtons.propTypes = {
  updateFormData: PropTypes.func.isRequired,
  value: PropTypes.string, // Adjust the PropTypes type if needed
};
