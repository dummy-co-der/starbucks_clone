import React from "react";
import styles from "./GiftCard.module.scss";
import { Button } from "antd";

const GiftCard = ({ data }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardsub}>
        <div className={styles.cardlayout}>
          <img
            src={data.image}
            alt="image"
            width={100}
            height={100}
            className={styles.cardimage}
          />
          <div className={styles.carddatalayout}>
            <h4>{data.title}</h4>
            <p>{data.description}</p>
          </div>
        </div>
      </div>
      <div className={styles.carddatasublayout}>
        <Button className={styles.additembtn}> Add item </Button>
      </div>
    </div>
  );
};

export default GiftCard;
