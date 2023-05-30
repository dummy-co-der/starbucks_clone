import React from 'react'
import styles from './ItemCard.module.scss'
import { Button, Typography } from 'antd';

const ItemCard = ({ data ,border}) => {
  const { Paragraph } = Typography;
  // console.log(data.image)
  return (
    <div className={styles.card}>
      <div className={styles.cardsub}>
        <div className={styles.cardlayout}>
          <img src={data.image} alt="image" className={styles.cardimage} style={{borderRadius:`${border}`}}/>
          <div className={styles.carddatalayout}>
            {data.vegan?<img src={(data.vegan == 'yes') ? '/Recommends/veg.jpg' : '/Recommends/nonveg.jpg'} alt='category' className={styles.cat} />:null}
            <h4 style={{marginTop:'2px'}}>{data.title}</h4>
            <h6 style={{marginTop:'2px'}}>{data.serving}</h6>
            {data.description&&<h5 style={{marginTop:'2px'}}>{data.description}</h5>}
          </div>
        </div>

      </div>
      <div className={styles.carddatasublayout}>
        <h4>₹{data.price}</h4>
        <Button className={styles.additembtn}>Add item</Button>
      </div>
    </div>
  )
}

export default ItemCard