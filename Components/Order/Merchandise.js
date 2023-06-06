import React, { useEffect, useState } from "react";
import style from "./Orderpagestyle/Drinks.module.scss";
import { ControlOutlined } from "@ant-design/icons";
import {
  Filtermerchandisedata,
  GetMerchandiseData,
} from "@/Components/slice/MerchandiseSlice";
import { useDispatch, useSelector } from "react-redux";
import ItemCard from "../Common/Itemcard/ItemCard";
import { motion } from "framer-motion";
const Merchandise = () => {
  const Merchandise = useSelector(GetMerchandiseData);
  const [selectedFilter, setSelectedFilter] = useState(null);
  const dispatch = useDispatch();
  function filter(value) {
    console.log(value);
    dispatch(Filtermerchandisedata(value));
    setSelectedFilter(value);
  }
  const itemVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 }
  };
  
  function Page() {
    return (
      <div className={style.drinkcardlist}>
        {Merchandise.map((data, index) => (
          <motion.div
          whileHover="hover"
          className={style.drinkcard}
          initial="initial"
          key={index}
          variants={itemVariants}
        >
            <ItemCard data={data} border="50%" />
            </motion.div>
        ))}
      </div>
    );
  }
  console.log(selectedFilter);
  return (
    <div className={style.drinks}>
      <div className={style.drinksfilter}>
        <div className={style.drinksfiltersub}>
          <div>
            <ControlOutlined />
          </div>
          <div
            onClick={() => filter("mugs")}
            className={
              selectedFilter === "mugs" ? style.selected : style.notselected
            }
          >
            <h4>Mugs</h4>
          </div>
          <div
            onClick={() => filter("cups")}
            className={
              selectedFilter === "cups" ? style.selected : style.notselected
            }
          >
            <h4>Cups</h4>
          </div>
          <div
            onClick={() => filter("tumblers")}
            className={
              selectedFilter === "tumblers" ? style.selected : style.notselected
            }
          >
            <h4>Tumblers</h4>
          </div>
          <div
            onClick={() => filter("water bottles")}
            className={
              selectedFilter === "water bottles"
                ? style.selected
                : style.notselected
            }
          >
            <h4>Water Bottles</h4>
          </div>
          <div
            onClick={() => filter("stationary")}
            className={
              selectedFilter === "stationary"
                ? style.selected
                : style.notselected
            }
          >
            <h4>Stationary</h4>
          </div>
          <div
            onClick={() => filter("accessories")}
            className={
              selectedFilter === "accessories"
                ? style.selected
                : style.notselected
            }
          >
            <h4>Accessories</h4>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection:'column',
        }}
      >
         <div style={{width:'80%'}}>
        <h3 >Mugs</h3>
        <h4 style={{ fontWeight: 'normal' }}>
        Artistic collection of ceramic mugs with acacia wood lids.
        </h4>
        </div>
        <Page />
      </div>
    </div>
  );
};

export default Merchandise;
