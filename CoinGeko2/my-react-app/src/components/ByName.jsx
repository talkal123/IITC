import { useAxios } from '../hooks/useAxios'
import ByNameCard from './ByNameCard';
import Skeleton from './Skeleton'


const ByName = () => {
    const { response, loading} = useAxios('coins/markets?vs_currency=usd')
    
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
      <div className='mt-8'>
      <h1 className='text-2xl mb-2'>By Name</h1>
      {response && response.coins.slice(0,7).map(coin => <ByNameCard key={coin.item.coinId} coin={coin.item} />)}
    </div>
      
    </div>
  )
}

export default ByName
