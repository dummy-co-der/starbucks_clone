import React, { useEffect, useState } from 'react'
import style from './Orderpagestyle/Drinks.module.scss'
import { ControlOutlined } from '@ant-design/icons'
import { Filterdata, GetDrinksData } from '@/Components/slice/DrinksSlice'
import { useDispatch, useSelector } from 'react-redux'
import { flushSync } from 'react-dom'
import drinksdata from '@/Data/DrinksData'
import ItemCard from '../Common/Itemcard/ItemCard'
const Drinks = () => {
//   console.log(drinksdata);
  const drinks = useSelector(GetDrinksData);
  const [selectedFilter, setSelectedFilter] = useState(null);
  console.log(drinks);
  const dispatch = useDispatch();
  function filter(value){
       dispatch(Filterdata(value));
       setSelectedFilter(value);
    //    console.log(drinks)
  }
  useEffect(() => {
    console.log(drinks);
  }, [drinks]);
  function Page(){
    return(
      <div className={style.drinkcardlist}>
         {drinks.map((data,index)=>(
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
         <div onClick={()=>filter('black')} className={selectedFilter === 'black' ? style.selected : style.notselected}>
            <h4>Black</h4>
         </div>
         <div onClick={()=>filter('blended')} className={selectedFilter === 'blended' ? style.selected : style.notselected}>
            <h4>Blended</h4>
         </div>
         <div onClick={()=>filter('brew')} className={selectedFilter === 'brew' ? style.selected : style.notselected}>
            <h4>Brew</h4>
         </div>
         <div onClick={()=>filter('caffeine free')} className={selectedFilter === 'caffeine free' ? style.selected : style.notselected}>
            <h4>Caffeine Free</h4>
         </div>
         <div onClick={()=>filter('cold')} className={selectedFilter === 'cold' ? style.selected : style.notselected}>
            <h4>Cold</h4>
         </div>
         <div onClick={()=>filter('cream')} className={selectedFilter === 'cream' ? style.selected : style.notselected}>
            <h4>Cream</h4>
         </div>
         <div onClick={()=>filter('hot')} className={selectedFilter === 'hot' ? style.selected : style.notselected}>
            <h4>Hot</h4>
         </div>
         <div onClick={()=>filter('ice cream')} className={selectedFilter === 'ice cream' ? style.selected : style.notselected}>
            <h4>IceCream</h4>
         </div>
         <div onClick={()=>filter('juice')} className={selectedFilter === 'juice' ? style.selected : style.notselected}>
            <h4>Juice</h4>
         </div>
         <div onClick={()=>filter('milkshake')} className={selectedFilter === 'milkshake' ? style.selected : style.notselected}>
            <h4>Milkshake</h4>
         </div>
         <div onClick={()=>filter('nitro')} className={selectedFilter === 'nitro' ? style.selected : style.notselected}>
            <h4>Nitro</h4>
         </div>
         <div onClick={()=>filter('on tap')} className={selectedFilter === 'on tap' ? style.selected : style.notselected}>
            <h4>On Tap</h4>
         </div>
       </div>
       </div>
       <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            <Page/>
         </div>
    </div>
  )
}

export default Drinks