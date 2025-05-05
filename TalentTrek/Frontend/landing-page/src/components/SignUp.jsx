import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    const { name, email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      return alert("Passwords do not match");
    }

    try {
      const response = await axios.post('/auth/signup', {
        name,
        email,
        password
      });

      if (response.data.success) {
        alert(response.data.message);
        console.log("SiginUp success");
        // Optionally redirect to login
      }
    } catch (error) {
      alert(error.response?.data?.message || "Signup failed");

    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-300">
      <form
        className="bg-white p-6 shadow-md w-96 rounded-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="text-3xl font-bold mb-4 text-blue-500 text-center">Sign Up</h1>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
          <input
            type="text"
            name="name"
            className="shadow border text-black rounded w-full py-2 px-3"
            onChange={handleChange}
            value={formData.name}
            placeholder="Your name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            name="email"
            className="shadow border text-black rounded w-full py-2 px-3"
            onChange={handleChange}
            value={formData.email}
            placeholder="you@example.com"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input
            type="password"
            name="password"
            className="shadow border text-black rounded w-full py-2 px-3"
            onChange={handleChange}
            value={formData.password}
            placeholder="Password"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            className="shadow border text-black rounded w-full py-2 px-3"
            onChange={handleChange}
            value={formData.confirmPassword}
            placeholder="Confirm Password"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
        >
          Sign Up
        </button>

        <p className="text-center text-gray-500 text-xs mt-4">
          Already have an account? <a href="/login" className="text-blue-500">Login</a>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
