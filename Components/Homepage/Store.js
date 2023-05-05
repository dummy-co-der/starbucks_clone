import React from "react";
import styles from "./Homepagestyle/Store.module.scss";
import Link from "next/link";
import StoreData from "@/Data/StoreData";
import StoreCard from "../Common/Storecard/StoreCard";

const Store = () => {
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
                            <Link title="Find Out More" href="/" className={styles.rightlink}>
                                {" "}
                                Find Out More{" "}
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.store_card}>
                    {StoreData.map((data, index) => (
                        <div className={styles.card}>
                            <StoreCard data={data} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Store;
