import PropTypes from 'prop-types';

export const Age = ({ updateFormData, value }) => {
  const ageInput = (e) => updateFormData("age", e.target.value);
  return (
    <div className="form-container">
      <div className="input-wrapper">
      <label><h2>How old are you?</h2></label>
      <input type="number" id="age-input" value={value} onChange={ageInput} />
      </div>
    </div>
  );
};

Age.propTypes = {
  updateFormData: PropTypes.any, // Adjust the PropTypes type as needed
  value: PropTypes.any, // Adjust the PropTypes type as needed
};
