import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import './CoinsGek.css'

const CoinsGek = () => {
  const [coins, setCoins] = useState([])
  
  const fetchData = async () => {
    try {
      const { data } = await axios.get("https://api.coingecko.com/api/v3/coins/list")
      setUserData(data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData()
  }, []);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/list');
        setCoins(response.data);
        setLoading(false);
      } catch (err) {
        if (err.response && err.response.status === 429) {
          setError('Too many requests. Please try again later.');
        } else {
          setError('Error fetching data');
        }
        setLoading(false);
      }
    };

    fetchCoins();
  }, []);


  return (
    <div>
      <h1>Cryptocurrency List</h1>
      <div className='container'>
        {coins.map(coin => (
          <div key={coin.id}>
            <div style={{ border: "1px solid black" }}>
              <div>{coin.name}</div>
              <div>{coin.id}</div>
            </div>



          </div>
        )

        )}

      </div>

    </div>
  )
}

export default CoinsGek
