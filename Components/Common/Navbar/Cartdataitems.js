import React from 'react';
import styles from './Navbar.module.scss'; 
function Cartdataitems({ Data }) { 
  let totalCost = 0;
  return (
    <div>
      {Object.entries(Data).map(([key, value], index) => {
        const { title, price } = value.data;
        const itemCost = price * value.counter;
        totalCost += itemCost;
        return (
          <div className={styles.cartdatastyle} key={index}>
            <div>{title}</div>
            <div>Quantity: {value.counter}</div>
            <div>Item Cost: {itemCost}</div>
          </div>
        );
      })}

      <div>Total Cost: {totalCost}</div>
    </div>
  );
}

export default Cartdataitems;