import React from 'react'
import "./Coin.css"
import { useState,useEffect } from 'react'
import axios from 'axios'




const Coin = () => {
    const[data,setData]=useState([]);

    useEffect(() => {
        console.log("Hello world");
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        .then(res=>{
        setData(res.data)

        console.log(data)
        }).catch(error=>console.log(error))
      },[]);
    
  return (
    <>
        <div className="Coin">
        {data.map(coin=>{
        return(
          <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    <img src={coin.image} alt="crypto" />
                    <h1>{coin.name}</h1>
                    <p className="coin-symbol"></p>
                </div>
                <div className="coin-data">
                    <p className="coin-price"> Rs.{coin.current_price}</p>                    
                    {/* <p className="coin-volume"> <span>Current Volume</span> Rs.{coin.total_volume}</p> */}
                    {coin.price_change_percentage_24h<0 ? (
                        <p className="coin-percent red"> {coin.price_change_percentage_24h.toFixed(2)}%</p>
                            ):(
                            <p className="coin-percent green"> {coin.price_change_percentage_24h.toFixed(2)}%</p>
                        )
                    }   
                    <p className="coin-marketcap">
                        Mkt Cap: Rs.{coin.market_cap}
                    </p>
                </div>
            </div>
        </div>
        );
      })}
        </div>
    </>
  )
}

export default Coin