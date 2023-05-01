import React from 'react'
import styles from './Itemcard.module.scss'
import { Button, Typography } from 'antd';

const Card = ({ data }) => {
  const { Paragraph } = Typography;
  // console.log(data.image)
  return (
    <div className={styles.card}>
      <div className={styles.cardsub}>
        <div className={styles.cardlayout}>
          <img src={data.image} alt="image" width={100} height={100} className={styles.cardimage} />
          <div className={styles.carddatalayout}>
            <img src={(data.vegan == 'yes') ? '/Recommends/veg.jpg' : '/Recommends/nonveg.jpg'} alt='category' className={styles.cat} />
            <Typography.Title level={5}>{data.title}</Typography.Title>
            <Paragraph>{data.serving}</Paragraph>
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

export default Card