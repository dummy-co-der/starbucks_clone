import React, { useEffect, useState } from 'react'
import style from './Orderpagestyle/Drinks.module.scss'
import { ControlOutlined } from '@ant-design/icons'
import { Filtercoffeedata,GetCoffeeData } from '../slice/CoffeeSlice'
import { useDispatch, useSelector } from 'react-redux'
import { flushSync } from 'react-dom'
import drinksdata from '@/Data/DrinksData'
import ItemCard from '../Common/Itemcard/ItemCard'
const Coffee = () => {
//   console.log(drinksdata);
  const coffee = useSelector(GetCoffeeData);
  const [selectedFilter, setSelectedFilter] = useState(null);
  const dispatch = useDispatch();
  function filter(value){
       dispatch(Filtercoffeedata(value));
    //    console.log(drinks)
    setSelectedFilter(value);
  }
  function Page(){
    return(
      <div className={style.drinkcardlist}>
         {coffee.map((data,index)=>(
             <div className={style.drinkcard}>
             <ItemCard data={data} border='50%'/>
             </div>
         ))}
      </div>
    )
  }
  return (
    <div className={style.drinks}>
      <div className={style.drinksfilter}>
       <div className={style.drinksfiltersub}>
         <div><ControlOutlined/></div>
         <div onClick={()=>filter('blends')}
          className={selectedFilter === 'blends' ? style.selected : style.notselected}>
            <h4>Blends</h4>
         </div>
         <div onClick={()=>filter('Blonde roast')}
         className={selectedFilter === 'Blonde roast' ? style.selected : style.notselected}>
            <h4>Blonde roast</h4>
         </div>
       </div>
       </div>
       <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            <Page/>
         </div>
    </div>
  )
}

export default Coffee