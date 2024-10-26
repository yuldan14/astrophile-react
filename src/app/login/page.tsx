'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Reset error on change
    if (error) {
      setError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate input
    if (formData.username === '' || formData.password === '') {
      setError('Please fill in all fields.');
      return;
    }

    try {
      // Send login request to the API
      const response = await fetch('https://8181-202-46-68-26.ngrok-free.app/api/v1/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
        }),
      });

      if (response.status === 401) {
        // Set custom message for unauthorized access
        setError('Email atau kata sandi salah.'); // Custom message for incorrect login
        return;
      }

      if (!response.ok) {
        // Handle other error responses from the API
        const errorData = await response.json();
        setError(errorData.message || 'Login failed!');
        return;
      }

      // Optionally, handle successful login (e.g., save token, user data)
      const data = await response.json();
      console.log('Login successful:', data);

      // Redirect to the home page after successful login
      router.push('/');
    } catch (err) {
      setError('An error occurred while logging in. Please try again.');
      console.error('Login error:', err);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="mb-4 w-full p-2 border rounded"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="mb-4 w-full p-2 border rounded"
          required
        />

        {error && <p className="text-sm text-red-600 mt-1">{error}</p>}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition-colors"
        >
          Login
        </button>

        {/* Add the register link here */}
        <p className="mt-4 text-sm text-center">
          Belum punya akun?{" "}
          <Link href="/register" className="text-blue-600 hover:underline">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
