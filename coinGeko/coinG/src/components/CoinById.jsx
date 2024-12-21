import React, { useEffect, useState } from 'react'
import './CoinById.css'
import axios from 'axios'



function CoinById() {

    const [coin, setCoin] = useState([])

    useEffect(() => {
        const url = 'https://api.coingecko.com/api/v3/coins/markets'
        axios.get(url)
            .then(response => {
                    setCoin(response.data)
                        console.log(coin)
            })
            .catch(error => {
                console.error("Error fetching data:", error)
            });
    },[]);



  return (
    <div>
      <div>Coin By Id</div>
    </div>
  )
}

export default CoinById
