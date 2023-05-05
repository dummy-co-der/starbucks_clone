import React, { useEffect } from 'react'
import style from './Orderpagestyle/Drinks.module.scss'
import { ControlOutlined } from '@ant-design/icons'
import { Filterdata, GetDrinksData } from '@/pages/store/slice/DrinksSlice'
import { useDispatch, useSelector } from 'react-redux'
import { flushSync } from 'react-dom'
import drinksdata from '@/Data/DrinksData'
import ItemCard from '../Common/Itemcard/ItemCard'
const Drinks = () => {
//   console.log(drinksdata);
  const drinks = useSelector(GetDrinksData);
  console.log(drinks);
  const dispatch = useDispatch();
  function filter(value){
       dispatch(Filterdata(value));
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
         <div onClick={()=>filter('black')}>
            <h4>Black</h4>
         </div>
         <div onClick={()=>filter('blended')}>
            <h4>Blended</h4>
         </div>
         <div onClick={()=>filter('brew')}>
            <h4>Brew</h4>
         </div>
         <div onClick={()=>filter('caffeine free')}>
            <h4>Caffeine Free</h4>
         </div>
         <div onClick={()=>filter('cold')}>
            <h4>Cold</h4>
         </div>
         <div onClick={()=>filter('cream')}>
            <h4>Cream</h4>
         </div>
         <div onClick={()=>filter('hot')}>
            <h4>Hot</h4>
         </div>
         <div onClick={()=>filter('ice cream')}>
            <h4>IceCream</h4>
         </div>
         <div onClick={()=>filter('juice')}>
            <h4>Juice</h4>
         </div>
         <div onClick={()=>filter('milkshake')}>
            <h4>Milkshake</h4>
         </div>
         <div onClick={()=>filter('nitro')}>
            <h4>Nitro</h4>
         </div>
         <div onClick={()=>filter('on tap')}>
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