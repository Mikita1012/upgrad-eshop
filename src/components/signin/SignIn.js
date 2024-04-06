import { Button, Container, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import NavigationBar from '../navigationbar/NavigationBar'
import SignUp from '../sign-up/SignUp'
import '../sign-up/SignUp.css'
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import { Link} from 'react-router-dom';

function SignIn() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields
    const newErrors = {};
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.password) newErrors.password = 'Password is required';
    setErrors(newErrors);

    // Submit form if no errors
    if (Object.keys(newErrors).length === 0) {
      // Add your submit logic here
      console.log('Form submitted:', formData);
    }
  };

  return (
    <Container maxWidth="md">
      <Link to='/'>
        <Button variant='outlined' style={{ backgroundColor: '#9A7C5D', color: 'black', marginTop: '10px', border: 'none' }}>BACK</Button>
      </Link>


      <form onSubmit={handleSubmit} className='formContainer'>
        <LoginOutlinedIcon sx={{ color: 'blue', fontSize: '70px' }} />
        <Typography variant="h5" align="center" gutterBottom>
          Sign In
        </Typography>
        <TextField

          margin="normal"
          label="Username"
          name="username"
          className='textField'
          value={formData.username}
          onChange={handleChange}
          error={!!errors.username}
          helperText={errors.username}
        />
        <TextField

          margin="normal"
          label="Password"
          type="password"
          name="password"
          className='textField'
          value={formData.password}
          onChange={handleChange}
          error={!!errors.password}
          helperText={errors.password}
        />
        <Button className="signUpButton" type="submit" variant="contained" color="primary">
          Sign In
        </Button>
      </form>
    </Container>
  );
};


export default SignIn