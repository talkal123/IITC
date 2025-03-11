import React from 'react';

const AccountPage = () => {
  return (
    <div className="p-5 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        
        {/* Header with Profile Picture and User Info */}
        <header className="flex items-center bg-gray-800 text-white p-6">
          <div className="flex-shrink-0">
            <img
              src="https://via.placeholder.com/100"
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover"
            />
          </div>
          <div className="ml-6">
            <h2 className="text-2xl font-semibold">John Doe</h2>
            <p className="text-sm text-gray-300">johndoe@email.com</p>
          </div>
        </header>

        {/* Navigation */}
        <nav className="bg-gray-200 p-4">
          <ul className="flex space-x-6 text-lg font-medium">
            <li>
              <a href="#" className="text-gray-800 hover:text-gray-600">Profile</a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:text-gray-600">Orders</a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:text-gray-600">Settings</a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:text-gray-600">Log Out</a>
            </li>
          </ul>
        </nav>

        {/* Account Content */}
        <div className="p-6">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
            <form>
              <div className="space-y-4">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First Name</label>
                  <input
                    type="text"
                    id="first-name"
                    value="John"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last Name</label>
                  <input
                    type="text"
                    id="last-name"
                    value="Doe"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    value="johndoe@email.com"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
