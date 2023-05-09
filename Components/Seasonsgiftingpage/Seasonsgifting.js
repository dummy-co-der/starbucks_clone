import React from 'react'
import styles from '../Aboutuspage/Aboutuspagestyle/Aboutus.module.scss'
import SeasonsgiftingData from '@/Data/SeasonsgiftingData'
import StoreCard from '../Common/Storecard/StoreCard'

const Seasonsgifting = () => {
    return (
        <div className={styles.aboutus_content}>
            <p> Home Articles </p>
            <h1 className={styles.a_subheading} style={{ marginBottom: '4rem' }}> Season's Gifting </h1>
            <div className={styles.aboutcard}>
                {SeasonsgiftingData.map((data, index) => (
                    <div className={styles.card}>
                        <StoreCard data={data} />
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Seasonsgifting