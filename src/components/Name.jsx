import PropTypes from 'prop-types';

export const Name = ({ value, updateFormData }) => {
  const userName = (e) => updateFormData("name", e.target.value);
  return (
    <div className="form-container">
      <div className="input-wrapper">
      <label><h2>What's your name?</h2></label>
      <input type="text" id="name-input" value={value} onChange={userName} />
      </div>
    </div>
  );
};

Name.propTypes = {
  updateFormData: PropTypes.func.isRequired, // Assuming it's required and a function
  value: PropTypes.any, // Adjust the PropTypes type as needed for the 'value' prop
};
