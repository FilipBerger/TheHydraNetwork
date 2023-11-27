import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

const Settings = () => {

  // useState to create a local-state variable that is set to empty until the "set" part runs
  const [fontSize, setFontSize] = useState(16);
  const [darkMode, setDarkMode] = useState(false);

  // Function to handle turning the site into dark mode
  useEffect(() => {
    // Update dark mode in the body class when darkMode is changed
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  // Function to handle when user wants to change the font size of the page
  const handleFontSizeChange = (e) => {
    // Extract the new value of font size from event object "e"
    const newFontSize = e.target.value;
    // Set the CSS property and change the font size
    document.documentElement.style.setProperty('--font-size', `${newFontSize}px`);
    // Update the font size using the new value from "newFontSize" using the setFontSize state
    setFontSize(newFontSize);
  };

  // Function to handle when darkMode is toggled
  const handleDarkModeToggle = () => {
    // Update the value of darkMode using the useState property
    setDarkMode(!darkMode);
  };

  // Event handler when user presses the button to show user info
  const handleUserInfoButtonClicked = () => {
    // Extract the userValidated object from local storage and formatting it into JSON-format
    const userObject = JSON.parse(localStorage.getItem("userValidated"));
    console.log(userObject);

    // Format the object into desired formatting using a function
    const formattedJSON = formatObject(userObject);
    // Get the div-id that will be manipulated to show the output of user information using the innerHTML it will write out this information
    document.getElementById("user-info-content").innerHTML = formattedJSON;
  };

  // Function to format the object with a parameter of obj
  const formatObject = (obj) => {

    // String variable that contains a HTML formatted representation of the userObject
    // Uses template literals with `` to create a multiple row string where variables such as obj.firstname is used to insert values from the userObject
    const formattedJSON = `
      <p>First Name: ${obj.firstName}</p>
      <p>Last Name: ${obj.lastName}</p>
      <p>Username: ${obj.username}</p>
      <p>Password: ${obj.password}</p>
      <div id="avatar-settings"><p>Avatar: <br> <img src="${obj.avatar}" alt="Failed to load an image" /></p></div>
    `;

    // Returns the formatted variable of userObject
    return formattedJSON;
  };

  // Render the HTML-code of the page
  return (
    <>
      <Navbar />
      {/* Create a div as a class named "container" and eventually another class "dark-mode" using ternary operator, dependent on the state of the variable darkMode */}
      <div className={`container ${darkMode ? 'dark-mode' : ''}`}>
        {/* Message to show that you are on the settings page */}
        <h2>Settings</h2>
        {/* Create a label with a classname and connect the label to a specific field */}
        <label className='font-size-changer' htmlFor="fontSize">Font-Size</label>
        {/* Create a input tag with the type range indicating it is a slider */}
        <input
          type="range"
          // Id of the input tag is fontsize which is connected to the label with "htmlfor="
          id="fontSize"
          // Minimum value that the user can choose from
          min="10"
          // Maximum value that the user can choose from
          max="30"
          // Sets the value for the slider to the variable fontSize. When the variable changes the the value of the slider will also change
          value={fontSize}
          // When the user changes the value of the slider the function "handleFontSizeChange" will run
          onChange={handleFontSizeChange}
        />

        {/* Create a label with class name */}
        <label className='dark-mode-label'>Dark Mode</label>
        {/* Create a button. When you click the this button it will run the function to handleDarkModeToggle which will toggle the dark mode of the site */}
        <button onClick={handleDarkModeToggle}>
          {/* Dynamically showing whether or not darkMode is toggled */}
          {darkMode ? 'Turn Off' : 'Turn On'}
        </button>
        {/* Create a label with classname */}
        <label className='user-info'>Click the button to show user information</label>
        {/* Create a button with event handler. When you click the button the function handleUserInfoButtonClicked will run */}
        <button onClick={handleUserInfoButtonClicked}>Show</button>
        {/* Create a empty div that will be manipulated as you click the button that runs the function handleUserInfoButtonClicked */}
        <div id='user-info-content'>
          <a></a>
        </div>
      </div>
    </>
  );
};

// Export the page so that you can use this component on other pages
export default Settings;