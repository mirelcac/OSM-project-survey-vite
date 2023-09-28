import React, { useState } from 'react';
import "./index.css"

export const App = () => {
  const [location, setLocation] = useState()

  return (
    <div className="form-container">
  <h2>Choose a location...</h2>
  <form>
    <div className="input-wrapper">
        <label>
          <input
            type="radio"
            value="hauntedHouse"
            onChange={event => setLocation(event.target.value)}
            checked={location === "hauntedHouse"}
          />
          haunted house
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
          dark forest
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
          old graveyard
        </label>
      </div>
      </form>
    </div>
  )
}