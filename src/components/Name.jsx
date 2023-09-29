import PropTypes from 'prop-types'

//WHY IS THE PARAM SET TO (e)? - MC
export const Name = ({ value, updateFormData }) => {
  const userName = (e) => updateFormData("name", e.target.value);
  return (
    <div className="form-container">
      <div className="input-wrapper">
        <label><h2>What's your name?</h2></label>
        <input type="text" id="name-input" value={value} onChange={userName} />
      </div>
    </div>
  )
}

Name.propTypes = {
  updateFormData: PropTypes.func.isRequired, // Assuming it's required and a function //WHAT EXACTLY DOES THIS MEAN? DO WE NEED IT IN OUR CODE? - MC
  value: PropTypes.any, // Adjust the PropTypes type as needed for the 'value' prop
}
