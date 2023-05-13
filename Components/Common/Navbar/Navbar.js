import Image from 'next/image'
import logo from '../../../public/starbucks.png'
import { Button, Modal, Input, Space, Avatar } from 'antd'
import { useState } from 'react'
import styles from './Navbar.module.scss'
import { SearchOutlined, UserOutlined } from '@ant-design/icons'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar() {
  const CloseButton = ({ onClick }) => (
    <h5 style={{ color: "#00754a" }} onClick={handleCancel}>
      Skip
    </h5>
  );
  const router = useRouter();
  const activeLink = (router.asPath.split('/')[1]!='')?router.asPath.split('/')[1]:'home';
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
                className={`${styles.link} ${activeLink === "home" ? styles.active : ""}`}
                // onClick={() => setActiveLink("home")}
              >
                <div>
                  <h4>Home</h4>
                </div>
              </Link>
              <Link
                href="/gift"
                className={`${styles.link} ${activeLink === "gift" ? styles.active : ""}`}
                // onClick={() => setActiveLink("gift")}
              >
                <div>
                  <h4>Gift</h4>
                </div>
              </Link>
              <Link
                href="/order"
                className={`${styles.link} ${activeLink === "order" ? styles.active : ""}`}
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
                className={`${styles.link} ${activeLink === "store" ? styles.active : ""}`}
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
            <Avatar
              style={{ border: "2px solid #1e3933", backgroundColor: "white", cursor: 'pointer' }}
              size={35}
              icon={<UserOutlined style={{ color: "#1e3933" }} />}
            />
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
    </>
  );
}

//   <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//   <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
// </svg>
