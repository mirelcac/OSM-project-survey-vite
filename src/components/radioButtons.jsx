import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const RadioButtons = ({ updateFormData, value }) => {
  const [location, setLocation] = useState(value || "");

  return (
    <div className="form-container">
      <h2>Choose a location...</h2>
      <form>
        <div className="input-wrapper">
          <label>
            <input
              type="radio"
              value="hauntedHouse"
              onChange={event => setLocation(event.target.value)}
              checked={location === "hauntedHouse"}
            />
            haunted house
          </label>
        </div>
        <div className="input-wrapper">
          <label>
            <input
              type="radio"
              value="darkForest"
              onChange={event => setLocation(event.target.value)}
              checked={location === "darkForest"}
            />
            dark forest
          </label>
        </div>
        <div className="input-wrapper">
          <label>
            <input
              type="radio"
              value="oldGraveyard"
              onChange={event => setLocation(event.target.value)}
              checked={location === "oldGraveyard"}
            />
            old graveyard
          </label>
        </div>
      </form>
    </div>
  )
}

RadioButtons.propTypes = {
  updateFormData: PropTypes.func.isRequired, // Assuming it's required and a function
  value: PropTypes.any, // Adjust the PropTypes type as needed for the 'value' prop
};