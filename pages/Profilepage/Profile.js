import { Button } from 'antd'
import React from 'react'
import logo from '../../public/profileDP.svg'
import styles from './Profilepagestyle/Profile.module.scss'
import { SettingFilled } from '@ant-design/icons'
const Profile = () => {
  return (
    <div>
    <div className={styles.profile}>
         <div className={styles.settings}>
            <SettingFilled/>
        </div>
        <div style={{display:'flex',flexDirection:'column'}}>
        <div className={styles.imagesbox}>
        <img src='/profileDp.svg' alt="profile"/>
        </div>
        <h2>Welcome to Starbucks</h2>
        <Button>Login or Signup</Button>
        </div>
    </div>
    <h4>HELP CENTER</h4>
    </div>
  )
}

export default Profile