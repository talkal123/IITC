import { useState } from 'react';

import DisplayComponent from './components/displayComponent'
import SearchComponent from './components/searchComponent'
import SideBarComponent from './components/sideBarComponent'
import FilterComponent from './components/filterComponent'

import './App.css'

function App() {
  const [search, setSearch] = useState<string>('')
  const [filter, setFilter] = useState<string>('');

  return (
    <div className="min-h-screen flex">
      {/* SideBar with responsive visibility */}
      <div className="bg-gray-800 text-white p-4 w-1/4 hidden">
        <SideBarComponent  />
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col p-4">
        <div className="p-4 bg-gray-200 mb-4 mx-auto w-full">
          <SearchComponent setSearch={setSearch}/>
        </div>

        <div className="flex-1 p-1 bg-gray-50 overflow-auto">
          <DisplayComponent search={search}/>
        </div>
      </div>

      {/* Filter section */}
      <div className="bg-gray-100 p-4 w-1/4 hidden md:block">
        <FilterComponent setFilter={setFilter}/>
      </div>
    </div>
  );
}

export default App;
