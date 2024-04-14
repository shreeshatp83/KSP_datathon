import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // try {
    //   axios.defaults.withCredentials=true;
    //   const response = await axios.post('http://localhost:8000/api/login', { Name: name, Password: password }, { withCredentials: true });
    //   setMessage(response.data.message);
    // } catch (error) {
    //   console.error(error);
    //   // setMessage(error.response.data.message || 'Login failed');
    // }
  };

  return (
<div class="w-[25%] container mx-auto px-4 py-16 flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-lg">
  <h2 class="text-2xl font-semibold text-white mb-8">Police Officer Login</h2>
  <form onSubmit={handleSubmit} class="w-full max-w-md space-y-4">
    <div class="flex flex-col">
      <label for="name" class="text-gray-200 mb-2 font-medium">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        class="appearance-none rounded-md border border-transparent px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
      />
    </div>
    <div class="flex flex-col">
      <label for="password" class="text-gray-200 mb-2 font-medium">Post:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        class="appearance-none rounded-md border border-transparent px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
      />
    </div>
    <div class="flex flex-col">
      <label for="password" class="text-gray-200 mb-2 font-medium">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        class="appearance-none rounded-md border border-transparent px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
      />
    </div>
    <div class="flex flex-row justify-end gap-10">
      <label htmlFor="checkbox" class="text-gray-200 mb-2 font-medium">Are you admin:</label>
      <input
        type="checkbox"
        id="checkbox"
        value={password}
        // onChange={(e) => setPassword(e.target.value)}
        // required
        class="appearance-none rounded-md border border-transparent px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
      />
    </div>
    <div type="submit" class="bg-gradient-to-r text-center from-blue-500 to-indigo-500 text-white font-bold py-2 px-4 rounded-md shadow-sm">
      Login
    </div>
  </form>
</div>

  );
};

export default LoginForm;