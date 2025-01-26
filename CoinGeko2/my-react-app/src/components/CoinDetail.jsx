
import { useParams } from 'react-router-dom';
import { useAxios } from '../hooks/useAxios'
const CoinDetail = () => {
    const { id } = useParams()
    const { response } = useAxios(`coins/${id}?localization=false&tickers=false&market_data=false&community_data=false&sparkline=false`)
    

    if(!response) {
        return <div>Loading...</div>
    }
    
  return (
    <div className='my-6'>
      <div className='flex gap-2 items-center'>
        <img src={response.image.small} alt="" />
        <h1 className='text-2xl mb-2 capitalize font-bold'>{response.name}</h1>
      </div>
      <p dangerouslySetInnerHTML={{ __html: response.description.en}}></p>
    </div>
  )
}

export default CoinDetail
