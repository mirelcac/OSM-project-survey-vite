import PropTypes from 'prop-types';

export const Artist = ({ updateFormData, value }) => {
  const favoriteArtist = (e) =>
    updateFormData("favoriteArtist", e.target.value);
  return (
    <div className="form-container">
      <div className="input-wrapper">
      <label>Artist of the year:</label>
      <select value={value} onChange={favoriteArtist}>
        <option>Select an Artist</option>
        <option value="beyonce">Beyonce</option>
        <option value="taylor-swift">Taylor Swift</option>
        <option value="shakira">Shakira</option>
        <option value="karol-g">Karol G</option>
      </select>
      </div>
    </div>
  );
};

Artist.propTypes = {
  updateFormData: PropTypes.func.isRequired, // Assuming it's required and a function
  value: PropTypes.any, // Adjust the PropTypes type as needed for the 'value' prop
};

  