'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Sederhana: contoh validasi email dan password kosong
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    // Implementasi autentikasi seharusnya ada di sini
    // Untuk sementara, kita redirect ke halaman Home sebagai contoh
    router.push('/');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-[#002d64]">Login to Astrophile</h2>

        {error && (
          <p className="text-sm text-red-500 text-center">
            {error}
          </p>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002d64]"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002d64]"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 font-semibold text-white bg-[#002d64] rounded-lg hover:bg-[#3f80cf] transition-all duration-300"
          >
            Log In
          </button>
        </form>

        <p className="text-center text-gray-600 text-sm">
          Don't have an account? <a href="/register" className="text-[#002d64] hover:underline">Register here</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
