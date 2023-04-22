import React from 'react'
import RecData from '@/Data/RecData';
import style from './style/Card.module.scss'
import { Button, Typography } from 'antd';
// import image from '../../public/'
// import Paragraph from 'antd/es/skeleton/Paragraph';
const Card = () => {
  const {Paragraph} = Typography;
  console.log(RecData);
  const data = RecData[0];
  return (
    <div className={style.card}>
        <div className={style.cardsub}> 
        <div className={style.cardlayout}>
          <img src={data.image} alt="image"/>
          <div className={style.carddatalayout}>
            {data.vegan=='yes'?<h4>Yes</h4>:<h4>no</h4>}
            <Typography.Title level={5}>{data.title}</Typography.Title>
            <Paragraph>{data.serving}</Paragraph>
          </div>
        </div>

        </div>
        <div className={style.carddatasublayout}>
            <Typography.Title level={4}>{data.price}</Typography.Title>
            <Button>Add item</Button>
        </div>
    </div>
  )
}

export default Card