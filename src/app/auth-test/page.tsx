'use client';

import { useState } from 'react';

export default function AuthTest() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [message, setMessage] = useState('');
  const [user, setUser] = useState(null);

  const register = async () => {
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      setMessage(JSON.stringify(data, null, 2));
    } catch (error) {
      setMessage('Error: ' + error);
    }
  };

  const login = async () => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      setMessage(JSON.stringify(data, null, 2));
      if (data.token) {
        setToken(data.token);
      }
    } catch (error) {
      setMessage('Error: ' + error);
    }
  };

  const getProfile = async () => {
    try {
      const response = await fetch('/api/profile', {
        headers: { 'Authorization': `Bearer ${token}` },
      });
      const data = await response.json();
      setMessage(JSON.stringify(data, null, 2));
      if (data.user) {
        setUser(data.user);
      }
    } catch (error) {
      setMessage('Error: ' + error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Auth Test Page</h1>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="test@example.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="password123"
            />
          </div>
          
          <div className="flex space-x-2">
            <button
              onClick={register}
              className="flex-1 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Register
            </button>
            <button
              onClick={login}
              className="flex-1 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Login
            </button>
          </div>
          
          <button
            onClick={getProfile}
            disabled={!token}
            className="w-full bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Get Profile
          </button>
          
          {user && (
            <div className="bg-green-50 border border-green-200 rounded-md p-4">
              <h3 className="text-sm font-medium text-green-800">Current User:</h3>
              <p className="text-sm text-green-700">Email: {user.email}</p>
              <p className="text-sm text-green-700">ID: {user.id}</p>
            </div>
          )}
          
          {message && (
            <div className="bg-gray-50 border border-gray-200 rounded-md p-4">
              <h3 className="text-sm font-medium text-gray-800 mb-2">Response:</h3>
              <pre className="text-xs text-gray-700 whitespace-pre-wrap overflow-auto max-h-40">
                {message}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
