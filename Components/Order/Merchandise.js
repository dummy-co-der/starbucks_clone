import React, { useEffect } from 'react'
import style from './Orderpagestyle/Drinks.module.scss'
import { ControlOutlined } from '@ant-design/icons'
import { Filtermerchandisedata, GetMerchandiseData } from '@/Components/slice/MerchandiseSlice'
import { useDispatch, useSelector } from 'react-redux'
import { flushSync } from 'react-dom'
import ItemCard from '../Common/Itemcard/ItemCard'
const Merchandise = () => {
//   console.log(Foodsdata);
  const Merchandise = useSelector(GetMerchandiseData);
  console.log(Merchandise);
  const dispatch = useDispatch();
  function filter(value){
       dispatch(Filtermerchandisedata(value));
    //    console.log(Foods)
  }
  useEffect(() => {
    console.log(Merchandise);
  }, [Merchandise]);
  function Page(){
    return(
      <div className={style.drinkcardlist}>
         {Merchandise.map((data,index)=>(
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
         <div onClick={()=>filter('mugs')}>
            <h4>Mugs</h4>
         </div>
         <div onClick={()=>filter('cups')}>
            <h4>Cups</h4>
         </div>
         <div onClick={()=>filter('tumblers')}>
            <h4>Tumblers</h4>
         </div>
         <div onClick={()=>filter('water bottles')}>
            <h4>Water Bottles</h4>
         </div>
         <div onClick={()=>filter('stationary')}>
            <h4>Stationary</h4>
         </div>
         <div onClick={()=>filter('accessories')}>
            <h4>Accessories</h4>
         </div>
       </div>
       </div>
       <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            <Page/>
         </div>
    </div>
  )
}

export default Merchandise