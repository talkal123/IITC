import React from 'react'
import Trending from '../components/Trending'
import Markets from '../components/Markets'
import ByName from '../components/ByName'


function CryptoHome() {
  return (
    <div className='wrapper-container'>
      <Trending />
      <ByName />
      <Markets />
    </div>
  )
}

export default CryptoHome
