import Image from 'next/image'
import logo from '../public/starbucks.png'
import { Button, Modal,Input,Select,Space } from 'antd';
import { useState } from 'react';
import styles from './Navigation.module.scss'
import {SearchOutlined} from '@ant-design/icons'

export default function Navigation() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    console.log('Modal opened');
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
        <Image src={logo} alt='logo' height={40} width={40}/>
        </div>
        <div className={styles.optionflex}>
            <div className={styles.options}>
            <div><h4>Home</h4></div>
            <div><h4>Gift</h4></div>
            <div><h4>Order</h4></div>
            <div><h4 onClick={showModal}>Pay</h4></div>
            <div><h4>Store</h4></div>
            </div>
            </div>
        </div>
        <div class={styles.right}>
        <div class={styles.search}>
    <Space.Compact style={{ width: '100%' }}>
      <Input defaultValue="Looking for Something Specific?" />
      <Button type="primary"><SearchOutlined /></Button>
    </Space.Compact>
</div>
</div>
</div>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      </>
    )
  }

//   <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//   <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
// </svg>