import React, { useState } from "react";
import styles from "./GiftCard.module.scss";
import { Button, notification } from "antd";
import { addData, GetCartData } from "@/Components/slice/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { CheckOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

const GiftCard = ({ data, border }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const openNotification = () => {
    const placement = "bottomLeft";
    notification.open({
      message: "Item added to cart Successfully",
      placement,
      icon: <CheckOutlined />,
      style: { backgroundColor: "#D0F5BE", color: "green" },
      messageStyle: { color: "white" },
      duration: 2,
    });
  };
  function addtoCart(data) {
    console.log(data);
    setOpen(true);
    dispatch(addData(data));
    openNotification();
  }
  const datas = useSelector(GetCartData);
  return (
    <motion.div
      className={styles.card}
      initial="initial"
      whileHover="hover"
    >
      <div className={styles.cardsub}>
        <div className={styles.cardlayout}>
          <img
            src={data.image}
            alt="image"
            width={100}
            height={100}
            className={styles.cardimage}
          />
          <div className={styles.carddatalayout}>
            <h4>{data.title}</h4>
            <p>{data.description}</p>
          </div>
        </div>
      </div>
      <div className={styles.carddatasublayout}>
      <h4>₹{data.price}</h4>
        <Button onClick={() => addtoCart(data)} className={styles.additembtn}>
          Add item
        </Button>
      </div>
      </motion.div>
  );
};

export default GiftCard;
