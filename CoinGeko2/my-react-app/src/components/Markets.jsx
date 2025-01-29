import { useAxios } from "../hooks/useAxios"
import Coin from "./Coin";
import Skeleton from "./Skeleton";

function Markets() {
    const { response, loading } = useAxios('coins/markets?vs_currency=usd')


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
    <section className="mt-8">
        <h1 className="text-2xl mb-2">Markets</h1>
        {response && response.map(coin => <Coin key={coin.id} coin={coin} /> )}
    </section>
  )
}

export default Markets
