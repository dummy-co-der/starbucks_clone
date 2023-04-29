import React from 'react'
import RecData from '@/Data/RecData';
import style from './Card.module.scss'
import { Button, Typography } from 'antd';
import Image from 'next/image';
const Card = ({data}) => {
  const { Paragraph } = Typography;
  console.log(data.image)
  return (
    <div className={style.card}>
      <div className={style.cardsub}>
        <div className={style.cardlayout}>
          <img src={data.image} alt="image" width={100} height={100} className={style.cardimage}/>
          <div className={style.carddatalayout}>
            <img src = {(data.vegan == 'yes')?'/veg.jpg':'/nonveg.jpg'} alt = 'category' className={style.cat}/>
            <Typography.Title level={5}>{data.title}</Typography.Title>
            <Paragraph>{data.serving}</Paragraph>
          </div>
        </div>

      </div>
      <div className={style.carddatasublayout}>
        <h4>₹{data.price}</h4>
        <Button className={style.additembtn}>Add item</Button>
      </div>
    </div>
  )
}

export default Card