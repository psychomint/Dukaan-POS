import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../slices/counterSlice';
import { login, logout } from '../slices/userSlice';

const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const userName = useSelector((state) => state.user.name);
    const dispatch = useDispatch();
  
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-100 to-indigo-300">
        <div className="bg-white shadow-2xl p-10 rounded-2xl w-96 text-center">
          <h1 className="text-4xl font-extrabold mb-6">Counter: <span className="text-indigo-500">{count}</span></h1>
          <h2 className="text-xl font-semibold mb-6 text-gray-700">
            User: <span className="text-green-600">{userName || 'No user logged in'}</span>
          </h2>
          <div className="flex space-x-4 justify-center mb-6">
            <button 
              onClick={() => dispatch(increment())} 
              className="px-6 py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition">
              Increment
            </button>
            <button 
              onClick={() => dispatch(decrement())} 
              className="px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition">
              Decrement
            </button>
            <button 
              onClick={() => dispatch(reset())} 
              className="px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition">
              Reset
            </button>
          </div>
          <div className="flex space-x-4 justify-center">
            <button 
              onClick={() => dispatch(login('John Doe'))} 
              className="px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition">
              Login
            </button>
            <button 
              onClick={() => dispatch(logout())} 
              className="px-6 py-2 bg-gray-500 text-white rounded-full hover:bg-gray-600 transition">
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  };

export default Counter;
