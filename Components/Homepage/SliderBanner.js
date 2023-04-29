import React from 'react'
import SliderBannerData from '@/Data/SliderBannerData'
import SliderBannerCard from '../Common/SliderBanner/SliderBannerCard'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {DoubleRightOutlined} from '@ant-design/icons';
const SliderBanner = () => {
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <button><DoubleRightOutlined color="green"/></button>,//className={style.sliderbtnprev}
        nextArrow: <button></button> // className={style.sliderbtnnext}
      };
      const sliderItems = SliderBannerData.map((data, index) => (
        <div key={index}>
          <div style={{width:'100%'}}>
          <SliderBannerCard data={data} />
          </div>
        </div>
      ));
  return (
    <div style={{width:"100%",margin:"auto", borderRadius:"15px"}}>
        <div style={{maxWidth:'80rem',margin:"auto",overflow:'hidden'}}>
        <Slider {...sliderSettings}>
        {sliderItems}
        </Slider>
        </div>
    </div>
  )
}

export default SliderBanner