import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
// import makeStyles from '@mui/styles';
// // import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import '../sign-up/SignUp.css'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import NavigationBar from '../navigationbar/NavigationBar';
import { Link} from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { ArrowBackIosNew } from '@mui/icons-material';

const useStyles = styled((theme) => ({
  // formContainer: {
  //   marginTop: '32px',
  //   display: 'flex',
  //   flexDirection: 'column',
  //   alignItems: 'center',
  //   padding: '2px',
  //   border: '2px solid #ccc',
  //   borderRadius: '16px',
  //   marginLeft: 'auto',
  //   marginRight: 'auto',
  //   backgroundColor: '#CCCC',
  //   // backgroundColor: 'grey',
  // },
  // textField: {
  //   width: '25rem',
  // },

  // button: {
  //   margin: '16px',
  //   width: '25ch',
  // },
}));

const SignUp = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: '',
    contactNumber: '',
    password: '',
  });
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    username: '',
    contactNumber: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Reset validation error when user starts typing
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation before submission
    let errors = {};
    let isValid = true;

    // Name validation: required
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    }

    // Email validation: required and valid format
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = 'Invalid email address';
      isValid = false;
    }

    // Username validation: required
    if (!formData.username.trim()) {
      errors.username = 'Username is required';
      isValid = false;
    }

    // Contact Number validation: required and valid format
    if (!formData.contactNumber.trim()) {
      errors.contactNumber = 'Contact Number is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.contactNumber)) {
      errors.contactNumber = 'Invalid contact number';
      isValid = false;
    }

    // Password validation: required and at least 6 characters long
    if (!formData.password.trim()) {
      errors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.trim().length < 8) {
      errors.password = 'Password must be at least 8 characters long';
      isValid = false;
    }

    if (isValid) {
      // Submit the form or perform further actions
      console.log('Form submitted:', formData);
      setFormData({
        name: '',
        email: '',
        username: '',
        contactNumber: '',
        password: ''
      });
    } else {
      // Update state with validation errors
      setFormErrors(errors);
    }
  };

  return (
    <>
      <Container>
        <Link to='/'>
          <Button variant='outlined' style={{ backgroundColor: '#9A7C5D', color: 'black', marginTop:'10px', border: 'none' }}>BACK</Button>
          {/* <ArrowBackIosNew style={{ textAlign: 'center', backgroundColor: '#9A7C5D', color: 'black',, borderRadius: '90px', padding: '10px' }}></ArrowBackIosNew> */}
        </Link>

        <form className="formContainer" onSubmit={handleSubmit}>
          <PermIdentityIcon sx={{ borderRadius: '100px', padding: '15px', backgroundColor: 'green', color: 'white' }} />
          <Typography variant="h4" gutterBottom>
            SIGN UP
          </Typography>
          <TextField
            className="textField"
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={!!formErrors.name}
            helperText={formErrors.name}
            required

          />
          <TextField
            className="textField"
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={!!formErrors.email}
            helperText={formErrors.email}
            style={{ marginTop: '10px' }}
            required
          />
          <TextField
            className="textField"
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            error={!!formErrors.username}
            helperText={formErrors.username}
            style={{ marginTop: '10px' }}
            required
          />
          <TextField
            className="textField"
            label="Contact Number"
            name="contactNumber"
            type="tel"
            value={formData.contactNumber}
            onChange={handleChange}
            error={!!formErrors.contactNumber}
            helperText={formErrors.contactNumber}
            style={{ marginTop: '10px' }}
            required
          />
          <TextField
            className="textField"
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            error={!!formErrors.password}
            helperText={formErrors.password}
            style={{ marginTop: '10px', marginBottom: '6px' }}
            required
          />
          <Button className="signUpButton" variant="contained" color="primary" type="submit">
            Sign Up
          </Button>
        </form>
      </Container>
    </>
  );
};

export default SignUp;