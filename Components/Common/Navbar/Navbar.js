import Image from "next/image";
import logo from "../../../public/starbucks.png";
import { Button, Modal, Input, Space, Avatar } from "antd";
import { useState } from "react";
import styles from "./Navbar.module.scss";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/router";
import { GetCartData } from "@/Components/slice/CartSlice";
import { useSelector } from "react-redux";
import Cartdataitems from "./Cartdataitems";

export default function Navbar() {
  const CloseButton = ({ onClick }) => (
    <h5 style={{ color: "#00754a" }} onClick={handleCancel}>
      Skip
    </h5>
  );
  const router = useRouter();
  const [activeLink, setActiveLink] = useState(
    router.asPath.split("/")[1] != "" ? router.asPath.split("/")[1] : "home"
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    console.log("Modal opened");
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [setCart, setCartOpen] = useState(false);
  function openCart() {
    setCartOpen(!setCart);
  }
  const cartData = useSelector(GetCartData);
  const itemsinCart = cartData.counters;
  const Data = cartData.data;
  console.log(Data);
  // function Cartdataitems(){
  //   let totalCost = 0;
  //  {Object.entries(Data).map(([key, value], index) => {
  //   const { title, price } = value.data;
  //   const itemCost = price * value.counter;
  //   totalCost += itemCost;
  //   return (
  //     <div className={styles.cartdatastyle} key={index}>
  //       <div>{title}</div>
  //       <div>Quantity: {value.counter}</div>
  //       <div>Item Cost: {itemCost}</div>
  //     </div>
  //   );
  // })}

  // <div>Total Cost: {totalCost}</div>
  //   }
  return (
    <>
      <div className={styles.navbarcontainer}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <Image src={logo} alt="logo" height={40} width={40} />
          </div>
          <div className={styles.optionflex}>
            <div className={styles.options}>
              <Link
                href="/home"
                className={`${styles.link} ${
                  activeLink === "home" ? styles.active : ""
                }`}
                // onClick={() => setActiveLink("home")}
              >
                <div>
                  <h4>Home</h4>
                </div>
              </Link>
              <Link
                href="/gift"
                className={`${styles.link} ${
                  activeLink === "gift" ? styles.active : ""
                }`}
                // onClick={() => setActiveLink("gift")}
              >
                <div>
                  <h4>Gift</h4>
                </div>
              </Link>
              <Link
                href="/order"
                className={`${styles.link} ${
                  activeLink === "order" ? styles.active : ""
                }`}
                onClick={() => setActiveLink("order")}
              >
                <div>
                  <h4>Order</h4>
                </div>
              </Link>
              <div>
                <h4 onClick={showModal}>Pay</h4>
              </div>
              <Link
                href="/store"
                className={`${styles.link} ${
                  activeLink === "store" ? styles.active : ""
                }`}
                onClick={() => setActiveLink("store")}
              >
                <div>
                  <h4>Store</h4>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.search}>
            <Space.Compact style={{ width: "100%" }}>
              <Input placeholder="Looking for Something Specific?" />
              <Button style={{ backgroundColor: "#1e3933" }}>
                <SearchOutlined style={{ color: "white" }} />
              </Button>
            </Space.Compact>
          </div>
          <div className={styles.user}>
            <Link href="/profile">
              <Avatar
                style={{
                  border: "2px solid #1e3933",
                  backgroundColor: "white",
                  cursor: "pointer",
                }}
                size={35}
                icon={<UserOutlined style={{ color: "#1e3933" }} />}
              />
            </Link>

            <div className={styles.cart}>
              <div className={styles.cartCircle}>{itemsinCart}</div>
              <div className={styles.cartIcon}>
                <ShoppingCartOutlined
                  onClick={() => openCart()}
                  style={{ fontSize: "34px", color: "#1e3933" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        className={styles.modals}
        title="LOGIN"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        closeIcon={null}
      >
        <form>
          <div className={styles.modal}>
            <div className={styles.input}>
              <h5>Username</h5>
              <Input placeholder="Basic Input" />
            </div>
            <div className={styles.input}>
              <h5>Username</h5>
              <Input placeholder="Basic Input" />
            </div>
            <h5>
              Dont have an account ? <span>Lets Sign Up</span>
            </h5>
            <Button className={styles.buttons}>Login</Button>
          </div>
        </form>
      </Modal>
      {setCart && (
        <div className={styles.cartdrawer}>
          <h4>This is the cart drawer</h4>
          <Cartdataitems Data={Data} />
        </div>
      )}
    </>
  );
}