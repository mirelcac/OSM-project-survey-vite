import { useState } from "react";
import { Age } from "./Age";
import { Dropdown } from "./dropdown";
import { RadioButtons } from "./radioButtons";
import { Sound } from "./Sound";
import { Weather } from "./Weather";
import { Name } from "./Name";

export const MultiStepForm = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    chooseWeather: "",
    Dropdown: "",
    chooseSound: "",
    radioButtons: "",
  });

  // Function to update form data based on field and value
  const updateFormData = (field, value) => {
    setFormData((previous) => ({ ...previous, [field]: value }));
  };

  // The updateFormData function is designed to update the state of formData based on the provided field and value arguments. Let's break it down step by step:

  // Function Arguments:

  // field: This argument represents the key (or property name) in the formData object that you want to update. For example, it could be "name", "age", "email", etc.
  // value: This argument represents the new value that you want to assign to the specified field.
  // setFormData:

  // This is the state update function provided by the useState hook for the formData state. It's used to update the state of formData.
  // Function Body:

  // prev: This represents the current state of formData before any updates. It's a common pattern to use a function inside setState (or setFormData in this case) when the next state depends on the previous state.

  // { ...prev }: This syntax is called the spread operator. It's used to create a new object that contains all of the properties of the prev object. This ensures that we're not directly mutating the state, but instead creating a new copy of it.

  // [field]: value: This is a computed property name. It allows you to set the property of an object based on the value of a variable (field in this case). The value of this property will be set to the value argument passed to the function. For example, if field is "name" and value is "John", this would add or update the property "name" with the value "John" in the new object.

  // In summary, the updateFormData function takes a field and a value, and updates the formData state by creating a new object that contains all the previous properties and values, but with the specified field updated to the new value.

  /// GOING BACK AND FORTH BETWEENQUESTIONS

  // State to track the current step in the form
  const [currentStep, setCurrentStep] = useState(1);
  // Function to move to the next step in the form
  const nextStep = () => {
    if (currentStep < 6) setCurrentStep(currentStep + 1);
  };
  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  // function to submit the form itself
  const submitForm = () => {
    console.log(formData);
    const formattedData = `
    Name: ${formData.name}
    Age: ${formData.age}
    Weather: ${formData.chooseWeather}
    Dropdown: ${formData.Dropdown},
    Sound: ${formData.chooseSound},
    Location: ${formData.radioButtons}
  `;
    alert(formattedData);
  };
  return (
    <div>
      {/* Render the Name component if on step 1 */}
      {currentStep === 1 && (
        <Name value={formData.name} updateFormData={updateFormData} />
      )}
      {/* Render the Age component if on step 2 */}
      {currentStep === 2 && (
        <Age value={formData.age} updateFormData={updateFormData} />
      )}
      {/* Render the Email component if on step 3 */}
      {currentStep === 3 && (
        <RadioButtons value={formData.radioButtons} updateFormData={updateFormData} />
      )}
      {/* Render the Band component if on step 4 */}
      {currentStep === 4 && (
        <Weather value={formData.chooseWeather} updateFormData={updateFormData} />
      )}
      {/* Render the Album component if on step 5 */}
      {currentStep === 5 && (
        <Dropdown value={formData.Dropdown} updateFormData={updateFormData} />
      )}
      {/* Render the Artist component if on step 6 */}
      {currentStep === 6 && (
        <Sound
          value={formData.chooseSound}
          updateFormData={updateFormData}
        />
      )}
      <div class="buttons">
        {/* Show the "Back" button if not on the first step */}
        {currentStep > 1 && <button onClick={prevStep}>Back</button>}
        {currentStep < 6 ? (
          <button onClick={nextStep}>Next</button>
        ) : (
          <button onClick={submitForm}>Submit Form</button>
        )}
      </div>
    </div>
  );

};


    

