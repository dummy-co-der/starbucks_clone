import React, { useState } from 'react'
import style from './Orderpagestyle/OrderOptionFilter.module.scss'
import BestSeller from './BestSeller';
import Drinks from './Drinks';

const OrderOptionFilter = () => {
  const [currentselection, setcurrentSelection] = useState('bestseller');
  function Page(){
    if(currentselection=='bestseller'){
      return <BestSeller/>
    }
    else if(currentselection=='drinks'){
      return <Drinks/>
    }
  }
  return (
    <div>
    <div className={style.filterbackground}>
      <div className={style.filtercontent}>
        <div
          onClick={() => setcurrentSelection('bestseller')}
          className={`${style.filterdata} ${currentselection === 'bestseller' ? style.selected : ''}`}
        >
          <h4>BestSeller</h4>
        </div>
        <div onClick={() => setcurrentSelection('drinks')} className={`${style.filterdata} ${currentselection === 'drinks' ? style.selected : ''}`}>
          <h4>Drinks</h4>
        </div>
        <div onClick={() => setcurrentSelection('foods')} className={`${style.filterdata} ${currentselection === 'foods' ? style.selected : ''}`}>
          <h4>Foods</h4>
        </div>
        <div onClick={() => setcurrentSelection('merchandise')} className={`${style.filterdata} ${currentselection === 'merchandise' ? style.selected : ''}`}>
          <h4>Merchandise</h4>
        </div>
        <div onClick={() => setcurrentSelection('coffee')} className={`${style.filterdata} ${currentselection === 'coffee' ? style.selected : ''}`}>
          <h4>Coffee at Home</h4>
        </div>
        <div onClick={() => setcurrentSelection('ready')} className={`${style.filterdata} ${currentselection === 'ready' ? style.selected : ''}`}>
          <h4>Ready To Eat</h4>
        </div>
      </div>
    </div>
    <Page/>
    </div>
  )
}

export default OrderOptionFilter