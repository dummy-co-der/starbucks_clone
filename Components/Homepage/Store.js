import React, { useEffect, useRef, useState } from "react";
import styles from "./Homepagestyle/Store.module.scss";
import Link from "next/link";
import StoreData from "@/Data/StoreData";
import StoreCard from "../Common/Storecard/StoreCard";
import { motion, useInView } from "framer-motion";
const Store = () => {
  const storeRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
      },
    },
  };

  const handleScroll = () => {
    if (storeRef.current) {
      const { top, bottom } = storeRef.current.getBoundingClientRect();
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


  return (
    <div className={styles.store}>
      <div className={styles.storeContent}>
        <div className={styles.storeHeading}>
          <ul className={styles.storelist}>
            <li className={styles.left}>
              <h2 style={{ color: "#1e3933" }}> We have news for you! </h2>
            </li>
          </ul>
          <ul className={styles.storelist}>
            <li className={styles.right}>
              <Link
                title="Find Out More"
                href="/"
                className={styles.rightlink}
              >
                Find Out More
              </Link>
            </li>
          </ul>
        </div>
        <motion.div
          ref={storeRef}
          className={styles.store_card}
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {StoreData.map((data, index) => (
            <div className={styles.card} key={index}>
              <StoreCard data={data} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};


export default Store;
