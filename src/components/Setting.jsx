//This is the only component that differs from the rest now. I did not have time to fix it. S has not added the extra const in this one as he did in my component, so I think this one will be easier to fix. When you fix it, we will not need the import react at all, and updateFormData should work. - MC

import React, { useState } from 'react' //<<<<we don't need the first "React" here.. MC
import PropTypes from 'prop-types'

export const Setting = ({ updateFormData, value }) => {
  const [location, setLocation] = useState(value || "")

  return (
    <div className="form-container">
      <h2>Where are we?</h2>
      <form>
        <div className="input-wrapper">
          <label>
            <input
              type="radio"
              value="hauntedHouse"
              onChange={event => setLocation(event.target.value)}
              checked={location === "hauntedHouse"}
            />
            Haunted house
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
            Dark forest
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
            Old graveyard
          </label>
        </div>
      </form>
    </div>
  )
}

Setting.propTypes = {
  updateFormData: PropTypes.func.isRequired, // Assuming it's required and a function //IS IT REQUIRED?? DO WE NEED IT?? FOR ME THIS LOOKS COPIED, AND NOT ADAPTED BUT MAYBE I AM WRONG?
  value: PropTypes.any, // Adjust the PropTypes type as needed for the 'value' prop
}