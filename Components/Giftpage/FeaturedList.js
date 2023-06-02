import React from "react";
import GiftCard from "../Common/GiftCard/GiftCard";
import AnyTimeData from "@/Data/AnyTimeData";
import styles from "../Giftpage/Giftpagestyle/CongratulationsList.module.scss";

const FeaturedList = () => {
  return (
    <div className={styles.Congratulations_List}>
      <GiftCard data={AnyTimeData[0]} />
      <GiftCard data={AnyTimeData[1]} />
      <GiftCard data={AnyTimeData[2]} />
    </div>
  );
};

export default FeaturedList;
