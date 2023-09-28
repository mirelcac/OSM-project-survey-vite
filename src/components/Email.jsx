import PropTypes from 'prop-types';

export const Email = ({ updateFormData, value }) => {
  const emailInput = (e) => updateFormData("email", e.target.value);
  return (
    <div>
      <label>Email:</label>
      <input type="email" value={value} onChange={emailInput} />
    </div>
  );
};

Email.propTypes = {
  updateFormData: PropTypes.func.isRequired, // Assuming it's required and a function
  value: PropTypes.any, // Adjust the PropTypes type as needed for the 'value' prop
};
