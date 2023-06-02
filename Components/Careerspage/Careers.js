import React from "react";
import styles from "../Diversitypage/Diversitypagestyle/Diversity.module.scss";
import Link from "next/link";

const Careers = () => {
  return (
    <div className={styles.diversity_content}>
      <h1 className={styles.d_subheading}> Careers </h1>
      <p style={{ marginTop: "3rem" }}> Head over to
        <Link href="https://careers.starbucks.in/"> https://careers.starbucks.in/ </Link>
      </p>
    </div>
  );
};

export default Careers;
