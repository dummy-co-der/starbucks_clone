import React from "react";
import styles from "./Navbar.module.scss";
import { Button, notification } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { addData, deleteData } from "@/Components/slice/CartSlice";

function Cartdataitems({ Data }) {
  let totalCost = 0;
  const dispatch = useDispatch();
  const openaddNotification = () => {
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
  const openremoveNotification = () => {
    const placement = "bottomLeft";
    notification.open({
      message: "Item removed from cart Successfully",
      placement,
      icon: <CloseOutlined />,
      style: { backgroundColor: "#E76161", color: "white" },
      messageStyle: { color: "white" },
      duration: 2,
    });
  };
    function addtoCart(data){
      dispatch(addData(data));
      openaddNotification();
    }
    function removefromCart(data){
      dispatch(deleteData(data));
      openremoveNotification();
    }
  return (
    <div className={styles.cartdatadiv}>
      {Object.entries(Data).map(([key, value], index) => {
        const { title, price,image } = value.data;
        // const itemCost = ;
        const itemCost = price;
        totalCost += (price * value.counter);
        return (
          <div className={styles.cartdatastyle} key={index}>
            <div className={styles.cartdataimagediv}><img className={styles.cartdataimage} src={image} alt=''/></div>
            <div className={styles.cartdatatitle}>
            <div><h5>{title}</h5></div>
            </div>
            <div className={styles.cartquantity}>
            
            <div onClick={()=>removefromCart(value.data)}className={styles.cartquantitybtns}>-</div>
              {value.counter}
              <div onClick={()=>addtoCart(value.data)} className={styles.cartquantitybtns}>+</div>
              </div>
            <div className={styles.cartdataitemcost}>₹{itemCost}</div>

          </div>
        );
      })}

      <div className={styles.cost}>
        <div>Subtotal: ₹ {totalCost}</div>
        <button className={styles.cartbutton}>Checkout</button>
        </div>
    </div>
  );
}

export default Cartdataitems;
