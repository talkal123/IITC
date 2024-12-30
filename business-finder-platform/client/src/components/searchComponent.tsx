import React from 'react';

interface SearchComponentProps {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}


const SearchComponent: React.FC<SearchComponentProps> = ({setSearch}) =>{

  
  return (
    <div className='border flex justify-center gap-[5px]'>
      <input
        type='search'
        onChange={(e) => setSearch(e.target.value)} placeholder='Search a business...'/>
    </div>
  )
}


export default SearchComponent