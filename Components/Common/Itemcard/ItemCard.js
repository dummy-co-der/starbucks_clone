import React, { useState } from "react";
import styles from "./ItemCard.module.scss";
import { Button, Typography } from "antd";
import { addData, GetCartData } from "@/Components/slice/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { notification } from "antd";
import { CheckOutlined } from "@ant-design/icons";

const ItemCard = ({ data, border }) => {
  const { Paragraph } = Typography;
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
    <div className={styles.card}>
      <div className={styles.cardsub}>
        <div className={styles.cardlayout}>
          <img
            src={data.image}
            alt="image"
            className={styles.cardimage}
            style={{ borderRadius: `${border}` }}
          />
          <div className={styles.carddatalayout}>
            {data.vegan ? (
              <img
                src={
                  data.vegan == "yes"
                    ? "/Recommends/veg.jpg"
                    : "/Recommends/nonveg.jpg"
                }
                alt="category"
                className={styles.cat}
              />
            ) : null}
            <h4 style={{ marginTop: "2px" }}>{data.title}</h4>
            <h6 style={{ marginTop: "2px" }}>{data.serving}</h6>
            {data.description && (
              <h5 style={{ marginTop: "2px" }}>{data.description}</h5>
            )}
          </div>
        </div>
      </div>
      <div className={styles.carddatasublayout}>
        <h4>₹{data.price}</h4>
        <Button onClick={() => addtoCart(data)} className={styles.additembtn}>
          Add item
        </Button>
      </div>
    </div>
  );
};

export default ItemCard;
