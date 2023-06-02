import React from "react";
import GiftCard from "../Common/GiftCard/GiftCard";
import ThankyouData from "@/Data/ThankyouData";
import styles from "../Giftpage/Giftpagestyle/ThankyouList.module.scss";

const ThankyouList = () => {
  return (
    <div className={styles.Thankyou_List}>
      <GiftCard data={ThankyouData[0]} />
    </div>
  );
};

export default ThankyouList;
