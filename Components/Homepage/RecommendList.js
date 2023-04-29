import React from 'react'
import Card from '../Common/Card/Card'
import RecData from '@/Data/RecData'
import style from '../Homepage/Homepagestyle/RecommendList.module.scss'
const RecommendList = () => {
  return (
    <div className={style.Reclist}>
      <Card  data={RecData[0]}/>
      <Card  data={RecData[1]}/>
      <Card  data={RecData[2]}/>
    </div>
  )
}

export default RecommendList