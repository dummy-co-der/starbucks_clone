import React from "react";
import styles from "../Aboutuspage/Aboutuspagestyle/Aboutus.module.scss";
import CommunityData from "@/Data/CommunityData";
import StoreCard from "../Common/Storecard/StoreCard";

const Community = () => {
  return (
    <div className={styles.aboutus_content}>
      <h1 className={styles.a_subheading}> Community </h1>
      <p
        style={{
          color: "#00000094",
          fontWeight: "600",
          lineHeight: "20px",
          marginBottom: "3rem",
          marginTop: ".4rem",
        }}
      >
        Every store is a part of a community.
      </p>
      <p style={{ marginBottom: "1.7rem" }}>
        Every store is part of a community. We are committed to being a good
        neighbor and a catalyst for change by bringing together our partners,
        our customers and their communities to take positive action around the
        world.
      </p>
      <div className={styles.aboutcard}>
        {CommunityData.map((data, index) => (
          <div className={styles.card}>
            <StoreCard data={data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
