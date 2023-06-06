import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../Common/Itemcard/ItemCard";
import recommenddata from "@/Data/RecommendData";
import styles from "./Homepagestyle/RecommendList.module.scss";
import { motion, useAnimation, useInView } from "framer-motion";
const RecommendList = () => {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const sliderRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (sliderRef.current) {
      const { top, bottom } = sliderRef.current.getBoundingClientRect();
      const isVisible = top < window.innerHeight && bottom >= 0;
      setIsVisible(isVisible);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
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
    prevArrow: <button className={styles.sliderbtnprev}></button>,
    nextArrow: <button className={styles.sliderbtnnext}></button>,
  };
  
  const sliderItems = recommenddata.map((data, index) => (
       <motion.div
            key={index}
            variants={itemVariants}
          >
      <Card data={data} border="12px" />
      </motion.div>
  ));

  return (
    <div ref={sliderRef} className={styles.recommendList}>
       <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
      <Slider {...sliderSettings}>{sliderItems}</Slider>
      </motion.div>
      </div>
  );
};

export default RecommendList;
