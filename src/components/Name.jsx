import PropTypes from 'prop-types';

export const Name = ({ value, updateFormData }) => {
  const userName = (e) => updateFormData("name", e.target.value);
  return (
    <div>
      <label>Name:</label>
      <input type="text" value={value} onChange={userName} />
    </div>
  );
};

Name.propTypes = {
  updateFormData: PropTypes.func.isRequired, // Assuming it's required and a function
  value: PropTypes.any, // Adjust the PropTypes type as needed for the 'value' prop
};
