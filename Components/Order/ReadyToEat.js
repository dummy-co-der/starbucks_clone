import React, { useState } from "react";
import style from "./Orderpagestyle/Drinks.module.scss";
import { ControlOutlined } from "@ant-design/icons";
import { Filterreadytoeatdata, GetreadytoeatData } from "../slice/ReadyToEat";
import { useDispatch, useSelector } from "react-redux";
import ItemCard from "../Common/Itemcard/ItemCard";
import { motion } from "framer-motion";
const ReadyToEat = () => {
  const [selectedFilter, setSelectedFilter] = useState(null);
  const readytoeat = useSelector(GetreadytoeatData);
  const dispatch = useDispatch();
  function filter(value) {
    dispatch(Filterreadytoeatdata(value));
    setSelectedFilter(value);
  }
  const itemVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 }
  };
  function Page() {
    return (
      <div className={style.drinkcardlist}>
        {readytoeat.map((data, index) => (
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
  return (
    <div className={style.drinks}>
      <div className={style.drinksfilter}>
        <div className={style.drinksfiltersub}>
          <div>
            <ControlOutlined />
          </div>
          <div
            onClick={() => filter("chocolate")}
            className={
              selectedFilter === "chocolate"
                ? style.selected
                : style.notselected
            }
          >
            <h4>Chocolate</h4>
          </div>
          <div
            onClick={() => filter("nuts")}
            className={
              selectedFilter === "nuts" ? style.selected : style.notselected
            }
          >
            <h4>Nuts</h4>
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
        <h3 >Quick Bites</h3>
        <h4 style={{ fontWeight: 'normal' }}>
        Starbucks snacks available on the go.
        </h4>
        </div>
        <Page />
      </div>
    </div>
  );
};

export default ReadyToEat;
