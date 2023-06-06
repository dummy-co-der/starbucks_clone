import React from "react";
import style from "./Orderpagestyle/Bestseller.module.scss";
import bestsellerdata from "@/Data/Bestsellerdata";
import ItemCard from "../Common/Itemcard/ItemCard";
import { motion } from "framer-motion";
const BestSeller = () => {
  const itemVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 }
  };
  return (
    <div className={style.bestseller}>
      <div className={style.bestsellersub}>
        <h4>Bestseller</h4>
        <h4>
          Everyone's favorite Starbucks put together in a specially curated
          collection.
        </h4>
        <div className={style.orderpagedata}>
          {bestsellerdata.map((data, index) => (
             <motion.div
             whileHover="hover"
             className={style.card}
             initial="initial"
             key={index}
             variants={itemVariants}
           >
              <ItemCard data={data} border="50%" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
