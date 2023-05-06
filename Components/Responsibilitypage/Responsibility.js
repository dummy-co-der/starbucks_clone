import React from 'react'
import styles from '../Aboutuspage/Aboutuspagestyle/Aboutus.module.scss'
import ResponsibilityData from '@/Data/ResponsibilityData'
import StoreCard from '../Common/Storecard/StoreCard'

const Responsibility = () => {
    return (
        <div className={styles.aboutus_content}>
            <p> Home Articles </p>
            <h1 className={styles.a_subheading} style={{ marginBottom: '5rem' }}> Responsibility </h1>
            <div className={styles.aboutcard}>
                {ResponsibilityData.map((data, index) => (
                    <div className={styles.card}>
                        <StoreCard data={data} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Responsibility