import React, { useState } from "react";
import style from "./Orderpagestyle/Drinks.module.scss";
import { ControlOutlined } from "@ant-design/icons";
import { Filterreadytoeatdata, GetreadytoeatData } from "../slice/ReadyToEat";
import { useDispatch, useSelector } from "react-redux";
import ItemCard from "../Common/Itemcard/ItemCard";

const ReadyToEat = () => {
  const [selectedFilter, setSelectedFilter] = useState(null);
  const readytoeat = useSelector(GetreadytoeatData);
  const dispatch = useDispatch();
  function filter(value) {
    dispatch(Filterreadytoeatdata(value));
    setSelectedFilter(value);
  }
  function Page() {
    return (
      <div className={style.drinkcardlist}>
        {readytoeat.map((data, index) => (
          <div className={style.drinkcard}>
            <ItemCard data={data} border="50%" />
          </div>
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
        }}
      >
        <Page />
      </div>
    </div>
  );
};

export default ReadyToEat;
