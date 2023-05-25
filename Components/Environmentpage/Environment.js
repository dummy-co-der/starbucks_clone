import React from 'react'
import styles from '../Aboutuspage/Aboutuspagestyle/Aboutus.module.scss'
import EnvironmentData from '@/Data/EnvironmentData'
import StoreCard from '../Common/Storecard/StoreCard'

const Environment = () => {
    return (
        <div className={styles.aboutus_content}>
            <h1 className={styles.a_subheading}> Environment </h1>
            <p style={{ color: '#00000094', fontWeight: '600', lineHeight: '20px', marginBottom: '3rem', marginTop: '.4rem' }}> Environmental Stewardship </p>
            <h1 className={styles.d_subheading}> Environmental Stewardship </h1>
            <h3 className={styles.d_quote} style={{ marginTop: '0rem'}}> We share our customers' commitment to the environment </h3>
            <p style={{ marginBottom: '1.7rem' }}> And we believe in the importance of caring for our planet and working with and encouraging others to do the same. As a company that relies on an agricultural product, it makes good business sense. And as people living in the world, it is simply the right thing to do. </p>
            <div className={styles.aboutcard}>
                {EnvironmentData.map((data, index) => (
                    <div className={styles.card}>
                        <StoreCard data={data} />
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Environment