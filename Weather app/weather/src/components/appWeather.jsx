import React from 'react'
import WeatherInfo from './weatherInfo'
import WeatherForm from './weatherForm'

export default function AppWeather() {
  return (
    <div className='container'>
        <WeatherForm />
        <WeatherInfo />
    </div>
  )
}
