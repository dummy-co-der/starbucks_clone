import React, { useEffect, useState } from "react";
import style from "./Orderpagestyle/Drinks.module.scss";
import { ControlOutlined } from "@ant-design/icons";
import { Filterfooddata, GetFoodData } from "@/Components/slice/FoodsSlice";
import { useDispatch, useSelector } from "react-redux";
import ItemCard from "../Common/Itemcard/ItemCard";
import { motion } from "framer-motion";
const Foods = () => {
  const Foods = useSelector(GetFoodData);
  const [selectedFilter, setSelectedFilter] = useState(null);
  const dispatch = useDispatch();
  function filter(value) {
    dispatch(Filterfooddata(value));
    setSelectedFilter(value);
  }
  const itemVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 }
  };
  function Page() {
    return (
      <div className={style.drinkcardlist}>
        {Foods.map((data, index) => (
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
            onClick={() => filter("veg")}
            className={
              selectedFilter === "veg" ? style.selected : style.notselected
            }
          >
            <h4>veg</h4>
          </div>
          <div
            onClick={() => filter("non veg")}
            className={
              selectedFilter === "non veg" ? style.selected : style.notselected
            }
          >
            <h4>non veg</h4>
          </div>
          <div
            onClick={() => filter("contains egg")}
            className={
              selectedFilter === "contains egg"
                ? style.selected
                : style.notselected
            }
          >
            <h4>contains egg</h4>
          </div>
          <div
            onClick={() => filter("spicy")}
            className={
              selectedFilter === "spicy" ? style.selected : style.notselected
            }
          >
            <h4>spicy</h4>
          </div>
          <div
            onClick={() => filter("sweet")}
            className={
              selectedFilter === "sweet" ? style.selected : style.notselected
            }
          >
            <h4>sweet</h4>
          </div>
          <div
            onClick={() => filter("healthy")}
            className={
              selectedFilter === "healthy" ? style.selected : style.notselected
            }
          >
            <h4>healthy</h4>
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
        <h3 >Sandwiches and Wrap</h3>
        <h4 style={{ fontWeight: 'normal' }}>
        Signature breads made with fresh ingredients and in-house sauces.
        </h4>
        </div>
        <Page />
      </div>
    </div>
  );
};

export default Foods;
