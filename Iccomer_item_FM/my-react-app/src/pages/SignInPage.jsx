import { Button } from '@/components/ui/button';
import React, { useState } from 'react';

const SignInPage = ({isDisplayFunc, SignInBtn,inputValues,val,values,users}) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Sign In</h2>

        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              onChange={inputValues}
              value={values.email}
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              onChange={inputValues}
              value={values.password}
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-gray-700">Remember me</label>
            </div>
            <div>
              <p onClick={isDisplayFunc} className='cursor-pointer underline'>Log without account</p>
            </div>
          </div>

          <Button 
            onClick={SignInBtn} 
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Sign In
          </Button>
        </form>

        <div className="mt-6 text-center">
          <span className="text-gray-700">Don't have an account? </span>
          <a href="#" className="text-blue-500 hover:underline">Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
