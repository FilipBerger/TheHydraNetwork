import React, { useState } from 'react';
import Button from './Button.js';
import Input from './Input.js';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min.js';
import logo from './media/HydraLogo.PNG';

function Login() {
  // Declare variable to be able to use the useHistory function
  let history = useHistory();

  // useState to create a local-state variable that is set to empty until the "set" part runs
  const [showMessage, setShowMessage] = useState(false);
  const [inputValueUsername, setInputValueUsername] = useState('');
  const [inputValuePassword, setInputValuePassword] = useState('');

  // Function to handle when you type into the input field for username on the login form
  const handleInputChangeUsername = (value) => {
    // Sets the value on setInputValueUsername and uses what the user typed into the field to do so
    setInputValueUsername(value);
  };

  // Function to handle when you type into the input field for username on the login form
  const handleInputChangePassword = (value) => {
    // Sets the value on setInputValueUsername and uses what the user typed into the field to do so
    setInputValuePassword(value);
  };

  // Function to handle the event of when user clicks the login button
  const handleButtonClickLogin = () => {
    // When the user clicked the button, run UserLogin function
    UserLogin();
  };

  // Function to control wether or not there is an user matching local storage from the registration
  const UserLogin = () => {
    // Fetches the local storage array from register page and declares it into a local variable
    const userDataArray = JSON.parse(localStorage.getItem('userDataArray')) || [];

    // Declares a new variable that uses the .find method to find the first element in the array that matches
    const userValidated = userDataArray.find(
      // Conditions that the .find method should evaluate
      (user) => user.username === inputValueUsername && user.password === inputValuePassword
    );

    // If there is an match
    if (userValidated) {
      console.log("User authorized!")
      history.push("/Feed");
      // Set the value under variable userValidated. Convert the data to a string and store it in local storage
      localStorage.setItem('userValidated', JSON.stringify(userValidated));
      console.log(userValidated)

      // If there is no match
    } else {
      console.log("User login failed")
      // Set the state of showmessage to true and show an error message
      setShowMessage(true)
    }
  };
  // Return to the function
  return (
    <div>
      <img src={logo} alt='logo' className='hydra-logo'></img>
      {/* // Creates a div with the classname form, this to encapsulate inputs and buttons to a form aswell as making it easier to style */}
      <div className='Form'>
        {/* Text to welcome and prompt user to login */}
        <p><b>Login to Hydra</b></p>
        {/* Input component with fields, set to required so as not to allow user enter with empty fields*/}
        <Input
          required
          type="text"
          placeholder="Enter username"
          // Sets the value of the field
          value={inputValueUsername}
          // When there is a change happening in the field, go to function to handle this event
          onChange={handleInputChangeUsername}
        />

        {/* Input component with fields, set to required so as not to allow user enter with empty fields*/}
        <Input
          required
          type="password"
          placeholder="Enter Password"
          // Sets the value of the field
          value={inputValuePassword}
          // When there is a change happening in the field, go to function to handle this event
          onChange={handleInputChangePassword}
        />

        {/* If showMessage is set to true, create html element and render it */}
        {showMessage && (
          <div>
            <p>Login failed!</p>
          </div>
        )}

        {/* Div for the buttons, this is to make it easier to style the buttons and the solution i found to set margin between input fields and buttons */}
        <div className='login-button'>
          {/* Buttons using the component Button, the buttons use a onclick function to handle events when you click the button */}
          {/* when you click the login button, the function handleButtonClickLogin runs */}
          <Button label="Login" onClick={handleButtonClickLogin} />
          {/* when you click the button for register you get taken to the site where you can register a new user */}
          <Button label="Register new user" onClick={() => {
            // Uses the function useHistory to redirect you to register page
            history.push("/Register");
          }} />
        </div>
      </div>
    </div>

  );
}

// Exports this page making it possible to import on other pages
export default Login;