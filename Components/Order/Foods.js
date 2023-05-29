import React, { useEffect, useState } from 'react'
import style from './Orderpagestyle/Drinks.module.scss'
import { ControlOutlined } from '@ant-design/icons'
import { Filterfooddata, GetFoodData } from '@/Components/slice/FoodsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { flushSync } from 'react-dom'
import ItemCard from '../Common/Itemcard/ItemCard'
import { div } from 'antd/es/radio'
const Foods = () => {
//   console.log(Foodsdata);
  const Foods = useSelector(GetFoodData);
  console.log(Foods);
  const [selectedFilter, setSelectedFilter] = useState(null);
  const dispatch = useDispatch();
  function filter(value){
       dispatch(Filterfooddata(value));
       setSelectedFilter(value);
  }
  useEffect(() => {
    console.log(Foods);
  }, [Foods]);
  function Page(){
    return(
      <div className={style.drinkcardlist}>
         {Foods.map((data,index)=>(
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
       <div><ControlOutlined /></div>
       <div
         onClick={() => filter('veg')}
         className={selectedFilter === 'veg' ? style.selected : style.notselected} // Add the 'selected' class if it's the currently selected filter
       >
         <h4>veg</h4>
       </div>
       <div
         onClick={() => filter('non veg')}
         className={selectedFilter === 'non veg' ? style.selected : style.notselected} // Add the 'selected' class if it's the currently selected filter
       >
         <h4>non veg</h4>
       </div>
       <div
         onClick={() => filter('contains egg')}
         className={selectedFilter === 'contains egg' ? style.selected : style.notselected} // Add the 'selected' class if it's the currently selected filter
       >
         <h4>contains egg</h4>
       </div>
       <div
         onClick={() => filter('spicy')}
         className={selectedFilter === 'spicy' ? style.selected : style.notselected} // Add the 'selected' class if it's the currently selected filter
       >
         <h4>spicy</h4>
       </div>
       <div
         onClick={() => filter('sweet')}
         className={selectedFilter === 'sweet' ? style.selected : style.notselected} // Add the 'selected' class if it's the currently selected filter
       >
         <h4>sweet</h4>
       </div>
       <div
         onClick={() => filter('healthy')}
         className={selectedFilter === 'healthy' ? style.selected : style.notselected} // Add the 'selected' class if it's the currently selected filter
       >
         <h4>healthy</h4>
       </div>
     </div>
   </div>
   <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
     <Page />
   </div>
 </div>
  )
}

export default Foods