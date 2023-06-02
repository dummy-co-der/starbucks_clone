import React from "react";
import styles from "./Homepagestyle/DiscoverMore.module.scss";
import Link from "next/link";
import Image from "next/image";
import Discover from "../../public/Discover-images/Discover.jpg";
import { Button } from "antd";

const DiscoverMore = () => {
  return (
    <div className={styles.discover}>
      <div className={styles.discoverContent}>
        <div className={styles.discoverHeading}>
          <ul className={styles.discoverlist}>
            <li className={styles.left}>
              <h2 style={{ color: "#1e3933" }}>
                Learn more about the world of coffee!
              </h2>
            </li>
          </ul>
          <ul className={styles.discoverlist}>
            <li className={styles.right}>
              <Link title="Discover More" href="/" className={styles.rightlink}>
                Discover More
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.discoverBox}>
          <div className={styles.discoverImage}>
            <div>
              <Image
                src={Discover}
                alt="Discover More"
                class={styles.discoverMore}
              />
            </div>
            <div className={styles.Image_text}>
              <h2> Behind Every Starbucks Cup </h2>
              <p>
                Ever wondered how Starbucks ensures the quality of your daily
                cup of coffee? Learn how we bring the best coffee experience
                possible.
              </p>
              <Button> Learn More </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverMore;
