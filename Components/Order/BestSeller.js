import React from 'react'
import style from './Orderpagestyle/Bestseller.module.scss'
import bestsellerdata from '@/Data/Bestsellerdata'
import ItemCard from '../Common/Itemcard/ItemCard'
const BestSeller = () => {
  return (
    <div className={style.bestseller}>
        <div className={style.bestsellersub}>
        <h4>Bestseller</h4>
        <h4>Everyone's favorite Starbucks put together in a specially curated collection.</h4>
        <div className={style.orderpagedata}>
          {bestsellerdata.map((data,index)=>(
            <div className={style.card}>
             <ItemCard data={data}/>
             </div>
          ))}
        </div>
        </div>
    </div>
  )
}

export default BestSeller