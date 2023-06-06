import React, { useEffect, useRef } from "react";
import SliderBannerData from "@/Data/SliderBannerData";
import SliderbannerCard from "../Common/SliderBanner/SliderBannerCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DoubleRightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import style from "./Homepagestyle/SliderBanner.module.scss";

const SliderBannerList = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const autoplay = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 3500);
    return () => clearInterval(autoplay);
  }, []);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 550,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    prevArrow: (
      <Button>
        <DoubleRightOutlined />
      </Button>
    ),
    nextArrow: <Button></Button>,
  };

  const sliderItems = SliderBannerData.map((data, index) => (
    <div key={index}>
      <div className={style.sliderbanner}>
        <SliderbannerCard data={data} />
      </div>
    </div>
  ));

  return (
    <div className={style.sliderbannercard}>
      <div className={style.sliders}>
        <Slider ref={sliderRef} {...sliderSettings}>
          {sliderItems}
        </Slider>
      </div>
    </div>
  );
};

export default SliderBannerList;
