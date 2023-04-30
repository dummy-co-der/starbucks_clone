import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from '../Common/Card/Card';
import RecData from '@/Data/RecData';
import styles from "./Homepagestyle/RecommendList.module.scss";

const RecommendList = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    prevArrow: <button className={styles.sliderbtnprev}></button>,
    nextArrow: <button className={styles.sliderbtnnext}></button>
  };

  const sliderItems = RecData.map((data, index) => (
    <div key={index}>
      <Card data={data} />
    </div>
  ));

  return (
    <div className={styles.recommendList}>
      <Slider {...sliderSettings}>
        {sliderItems}
      </Slider>
    </div>
  )
}

export default RecommendList