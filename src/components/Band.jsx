import PropTypes from 'prop-types';

export const Band = ({ updateFormData, value }) => {
  const favoriteBand = (e) => updateFormData("favoriteBand", e.target.value);
  return (
    <div className="form-container">
      <div className="input-wrapper">
      <label>Favorite Band:</label>
      <select value={value} onChange={favoriteBand}>
        <option value="">Select a Band</option>
        <option value="parcels">Parcels</option>
        <option value="gorillaz">Gorillaz</option>
        <option value="the-1975">The 1975</option>
        <option value="the-war-on-drugs">The War on Drugs</option>
      </select>
      </div>
    </div>
  );
};

Band.propTypes = {
  updateFormData: PropTypes.func.isRequired, // Assuming it's required and a function
  value: PropTypes.any, // Adjust the PropTypes type as needed for the 'value' prop
};
