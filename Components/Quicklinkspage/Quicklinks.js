import React from 'react'
import styles from '../Aboutuspage/Aboutuspagestyle/Aboutus.module.scss'
import QuicklinksData from '@/Data/QuicklinksData'
import StoreCard from '../Common/Storecard/StoreCard'

const Quicklinks = () => {
    return (
        <div className={styles.aboutus_content}>
            <h1 className={styles.a_subheading} style={{ marginBottom: '4rem' }}> Quick Links </h1>
            <div className={styles.aboutcard}>
                {QuicklinksData.map((data, index) => (
                    <div className={styles.card}>
                        <StoreCard data={data} />
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Quicklinks