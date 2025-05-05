import React, { useState } from 'react';
import axios from 'axios'; // if you're using an axios instance

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    try {
      // Call the backend API to log the user in
      const response = await axios.post('http://localhost:3000/auth/login', {
        email: formData.email,
        password: formData.password
      });

      // Handle success
      alert(response.data.message);
      // Optionally, you can store the JWT token in localStorage or a state manager
      localStorage.setItem('jwtToken', response.data.jwtToken);
      // Redirect the user to another page or dashboard after login
    } catch (err) {
      // Handle error
      console.error(err);
      alert(err.response?.data?.message || 'Login failed. Please try again.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-300">
      <form className="bg-white p-6 shadow-md w-96 rounded-md max-h-200" onSubmit={handleSubmit}>
        <h1 className="text-3xl font-bold mb-4 text-blue-500 text-center">Login</h1>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            name="email"
            type="email"
            placeholder="abc@gmail.com"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2 mt-7" htmlFor="password">
            Password
          </label>
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none w-full focus:shadow-outline mt-7"
        >
          Login
        </button>

        <p className="text-center text-gray-500 text-xs mt-4">
          Don't have an account?{' '}
          <a href="/signup" className="text-blue-500 hover:text-blue-800">
            Sign up
          </a>
        </p>
        <p className="text-center text-gray-500 text-xs mt-4">
          Forgot your password?{' '}
          <a href="#" className="text-blue-500 hover:text-blue-800">
            Reset it
          </a>
        </p>
        <button className="text-blue-500 font-thin hover:bg-blue-300 w-full mt-2">
          Continue With Google
        </button>
      </form>
    </div>
  );
};

export default Login;
