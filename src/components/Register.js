import React, { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min.js';
import Button from './Button.js';
import Input from './Input.js';
import avatar1 from './media/T_Sobek_Classic_Icon.webp';
import avatar2 from './media/T_Fenrir_Default_Icon.webp';
import avatar3 from './media/T_Kukulkan_Default_Icon.webp';
import avatar4 from './media/T_Khepri_Default_Icon.webp';
import avatar5 from './media/T_Anhur_Default_Icon.webp';
import avatar6 from './media/T_Ratatoskr_Default_Icon.webp';
import logo from './media/HydraLogo.PNG';

const Register = () => {

  let history = useHistory();
  // State variables for input fields and selected avatar
  const [inputFirstName, setFirstName] = useState('');
  const [inputLastName, setLastName] = useState('');
  const [inputUsername, setUsername] = useState('');
  const [inputPassword, setPassword] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  const [showMessage, setShowMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Function to handle changes in the first name input
  const handleInputFirstNameChange = (value) => {
    setFirstName(value);
  };

  // Function to handle changes in the last name input
  const handleInputLastNameChange = (value) => {
    setLastName(value);
  };

  // Function to handle changes in the username input
  const handleInputUsernameChange = (value) => {
    setUsername(value);
  };

  // Function to handle changes in the password input
  const handleInputPasswordChange = (value) => {
    setPassword(value);
  };

  // Function to handle avatar click and update the selected avatar
  const handleAvatarClick = (avatar) => {
    setSelectedAvatar(avatar);
  };

  // Function to handle form submission

  const handleSubmit = (e) => {
    e.preventDefault();

    const userDataArray = JSON.parse(localStorage.getItem('userDataArray')) || [];

    const usernameExists = userDataArray.some((user) => user.username === inputUsername);

    if (usernameExists) {
      let message = 'Username is already taken. Please choose a different username.';
      setShowMessage(true);
      setErrorMessage(message);
      return;
    }

    if (!selectedAvatar) {
      let message = 'Please pick a profile picture';
      setShowMessage(true);
      setErrorMessage(message);
      return;
    };

    // Create userData object with input values and selected avatar
    const userData = {
      firstName: inputFirstName,
      lastName: inputLastName,
      username: inputUsername,
      password: inputPassword,
      avatar: selectedAvatar,
    };

    // Add the new form data to the existing array
    userDataArray.push(userData);

    // Update the form data array in local storage
    localStorage.setItem('userDataArray', JSON.stringify(userDataArray));

    history.push('/');;

    // Log form data
    console.log('userDataArray:', userDataArray);

  };

  return (
    <div>
      <img src={logo} alt='logo' className='hydra-logo'></img>
      <form onSubmit={handleSubmit}>
        <div className='Form-register'>
          <p><b>Register</b></p>
          {/* Input field for first name */}
          <Input
            required
            type="text"
            placeholder="Enter your first name"
            value={inputFirstName}
            onChange={handleInputFirstNameChange}
          />
          {/* Input field for last name */}
          <Input
            required
            type="text"
            placeholder="Enter your last name"
            value={inputLastName}
            onChange={handleInputLastNameChange}
          />
          {/* Input field for username */}
          <Input
            required
            type="text"
            placeholder="Enter a new username"
            value={inputUsername}
            onChange={handleInputUsernameChange}
          />
          <br></br>

          {/* Input field for password */}
          <Input
            required
            type="password"
            placeholder="Enter password"
            value={inputPassword}
            onChange={handleInputPasswordChange}
          />
          <br></br>

          {/* Button to submit the form */}
          <Button type="submit" label="Register" />
          <br></br>
          {showMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

          {/* Avatar selection container */}
          <div className='avatar-container'>
            {/* Map through avatar images and render them with click handlers */}
            {[avatar1, avatar2, avatar3, avatar4, avatar5, avatar6].map((avatar, index) => (
              <img
                key={index}
                className={`avatars ${selectedAvatar === avatar ? 'selected' : ''}`}
                src={avatar}
                alt={`Profilepicture${index + 1}`}
                onClick={() => handleAvatarClick(avatar)}
              />
            ))}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;