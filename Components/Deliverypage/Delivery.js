import React from "react";
import styles from "../Aboutuspage/Aboutuspagestyle/Aboutus.module.scss";
import DeliveryData from "@/Data/DeliveryData";
import StoreCard from "../Common/Storecard/StoreCard";

const Delivery = () => {
  return (
    <div className={styles.aboutus_content}>
      <h1 className={styles.a_subheading} style={{ marginBottom: "4rem" }}> Delivery </h1>
      <div className={styles.aboutcard}>
        {DeliveryData.map((data, index) => (
          <div className={styles.card}>
            <StoreCard data={data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Delivery;
