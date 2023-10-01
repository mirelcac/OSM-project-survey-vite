// Story.jsx
import React from "react";
import PropTypes from 'prop-types';

export const Story = ({ story }) => {
  return (
    <React.Fragment>
    {story && (
        <div>
          <p>Submit button clicked</p>
          <p>Story updated:</p>
          <pre>{story}</pre>
        </div>
      )}
    </React.Fragment>
  );
};

Story.propTypes = {
  story: PropTypes.string.isRequired, // Assuming 'story' should be a string and is required
};

