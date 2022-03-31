import React from 'react'
import Coin from './components/Coin'


export const App = () => {
  return (
    <div className='App'>
      <div className="heading">
        <h1><span>SG.</span> Crypto Prices Tracking App</h1>
      </div>
        <Coin/>
    </div>
  )
}
