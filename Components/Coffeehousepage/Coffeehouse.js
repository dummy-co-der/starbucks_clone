import React from 'react'
import styles from '../Aboutuspage/Aboutuspagestyle/Aboutus.module.scss'
import CoffeehouseData from '@/Data/CoffeehouseData'
import StoreCard from '../Common/Storecard/StoreCard'

const Coffeehouse = () => {
    return (
        <div className={styles.aboutus_content}>
            <h1 className={styles.a_subheading} style={{ marginBottom: '5rem' }}> Coffeehouse </h1>
            <div className={styles.aboutcard}>
                {CoffeehouseData.map((data, index) => (
                    <div className={styles.card}>
                        <StoreCard data={data} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Coffeehouse