import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import './CoinsGek.css'

const CoinsGek = () => {
    const inputRef = useRef("")
    const [coins, setCoins] = useState([])

    useEffect(() => {
        const url = 'https://api.coingecko.com/api/v3/coins/list'
        axios.get(url)
            .then(response => {
                    setCoins(response.data.slice(0,20))
                        console.log(coins)
            })
            .catch(error => {
                console.error("Error fetching data:", error)
            });
    },[]);

    return (
        <div>
            <h1>Cryptocurrency List</h1>
                <div className='container'>
                    <input ref={inputRef} type="text" placeholder='search coin' />
                    {coins.map(coin => (
                        <div key={coin.id}>
                            <span>{coin.name}</span>
                            

                        </div>
                    )

                    )}

            </div>

        </div>
    )
}

export default CoinsGek
