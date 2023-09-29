//Mirelas code
import React, { useState } from "react"; // Added React import
import PropTypes from 'prop-types';

export const Dropdown = ({ updateFormData, value }) => {
    const [creature, setCreature] = useState(value || ''); // Initialize creature state

    // Function to update creature state and call updateFormData
    const dropdownInput = (e) => {
        const selectedValue = e.target.value;
        setCreature(selectedValue);
        updateFormData("creature", selectedValue);
    };

    return (
        <div className="form-container">
            <h2>What is your biggest fear?</h2> {/* Moved this line above the form */}
            <form>
                <div className="input-wrapper">
                    <select
                        onChange={dropdownInput} // Use the dropdownInput function
                        value={creature}
                        id="fear-input"
                    >
                        <option value="">Select Creature</option>
                        <option value="Ghost">Ghost</option>
                        <option value="Witch">Witch</option> {/* Corrected the spelling of Witch */}
                        <option value="Zombie">Zombie</option>
                    </select>
                </div>
            </form>
        </div>
    );
};

Dropdown.propTypes = {
    updateFormData: PropTypes.func.isRequired,
    value: PropTypes.string, // Assuming value is a string
};
