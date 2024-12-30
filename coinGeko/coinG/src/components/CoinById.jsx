import React, { useState, useEffect } from 'react';
import axios from 'axios';


const CoinInfo = () => {
  const[coinData,setCoinData] = useState(null);
  const[loading,setLoading] = useState(true);


  useEffect(() => {  
    const api = 'https://api.coingecko.com/api/v3/coins/bitcoin';
    console.log(api);
    
    axios.get(api).then(response => {
      setCoinData(response.data);
      setLoading(false)
    })
    .catch(error => {
      console.error('Error:', error);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <h1>Loading...</h1>; // מציג "Loading..." בזמן שהמידע נטען
  }

  

  return (
    <div>
      <h1>{coinData ? coinData.name : 'No Indo Avaible'}</h1>
      <h1>{coinData ? coinData.symbol: 'no'}</h1>
    </div>
  );
}
  

export default CoinInfo;
