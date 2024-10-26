'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    address: '',
  });

  const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Reset error message when user types
    if (error) {
      setError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Check for required fields
    const requiredFields: (keyof typeof formData)[] = ['username', 'email', 'firstName', 'lastName', 'phoneNumber', 'address'];
    for (const field of requiredFields) {
      if (!formData[field]) {
        setError(`Please fill in all fields. Missing: ${field}`);
        return;
      }
    }

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    // Prepare the request body
    const requestBody = {
      username: formData.username,
      password: formData.password,
      email: formData.email,
      telephoneNum: formData.phoneNumber, // Adjust according to your API
    };

    try {
      // Send registration request to the API
      const response = await fetch('https://8181-202-46-68-26.ngrok-free.app/api/v1/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        // Handle error response from the API
        const errorData = await response.json();
        setError(errorData.message || 'Registration failed!');
        return;
      }

      // Handle successful registration (e.g., show success message, redirect)
      console.log('Registration successful:', await response.json());

      // Redirect to login page after successful registration
      router.push('/login');
    } catch (err) {
      setError('An error occurred while registering. Please try again.');
      console.error('Registration error:', err);
    }
  };

  const isPasswordMatch = formData.password === formData.confirmPassword || !formData.confirmPassword;

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-bold text-center text-blue-600">Register</h2>
        <form onSubmit={handleSubmit} className="mt-6">
          {error && <p className="mb-4 text-red-600">{error}</p>} {/* Display error message */}
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 mt-1 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 mt-1 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className={`w-full px-3 py-2 mt-1 border rounded-md ${
                isPasswordMatch ? 'border-gray-300' : 'border-red-500'
              }`}
            />
            {!isPasswordMatch && (
              <p className="text-sm text-red-600 mt-1">Passwords do not match.</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 mt-1 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 mt-1 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 mt-1 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 mt-1 border rounded-md"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 mt-1 border rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Register
          </button>
        </form>
      </div>
    </main>
  );
};

export default RegisterPage;
