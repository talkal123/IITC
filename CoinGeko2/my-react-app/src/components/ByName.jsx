import { useState } from 'react';
import { useAxios } from '../hooks/useAxios'
import ByNameCard from './ByNameCard';
import Skeleton from './Skeleton'


const ByName = () => {
    const { response, loading} = useAxios('coins/markets?vs_currency=usd')
    const [search, setSearch] = useState('')

    if(loading) {
        return(
          <div className='wrapper-container'>
            <Skeleton className="h-8 w-32"/>
            <Skeleton className="h-8 w-full mt-2"/>
            <Skeleton className="h-8 w-full mt-2"/>
            <Skeleton className="h-8 w-full mt-2"/>
            <Skeleton className="h-8 w-full mt-2"/>
            <Skeleton className="h-8 w-full mt-2"/>
            <Skeleton className="h-8 w-full mt-2"/>
            <Skeleton className="h-8 w-full mt-2"/>
          </div>
        )
      }


  return (
    <div>
      <div className='mt-8 flex flex-col gap-3'>
      <h1 className='text-2xl mb-2'>By Name</h1>
      <div><input onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Search here...' className='border border-black p-1 rounded-sm' /></div>
      {response && response.filter((coin) => search.toLowerCase() === '' ? true : coin.name.toLowerCase().includes(search)).map(coin => <ByNameCard key={coin.id} coin={coin} /> )}
    </div>
      
    </div>
  )
}

export default ByName
