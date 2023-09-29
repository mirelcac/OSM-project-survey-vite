import PropTypes from 'prop-types';

export const Sound = ({ updateFormData, value }) => {
  const chooseSound = (e) =>
    updateFormData("chooseSound", e.target.value);
  return (
    <div className="form-container">
      <div className="input-wrapper">
      <label><h2>What can you hear?</h2></label>
      <select value={value} id="sound-input" onChange={chooseSound}>
        <option>Choose a sound</option>
        <option value="whistle">whistle</option>
        <option value="creak">creak</option>
        <option value="howl">howl</option>
        <option value="crash">crash</option>
      </select>
      </div>
    </div>
  );
};

Sound.propTypes = {
  updateFormData: PropTypes.func.isRequired, // Assuming it's required and a function
  value: PropTypes.any, // Adjust the PropTypes type as needed for the 'value' prop
};

  