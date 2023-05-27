import React from 'react'
import styles from '../Aboutuspage/Aboutuspagestyle/Aboutus.module.scss'
import EthicalsourcingData from '@/Data/EthicalsourcingData'
import StoreCard from '../Common/Storecard/StoreCard'

const Ethicalsourcing = () => {
    return (
        <div className={styles.aboutus_content}>
            <h1 className={styles.a_subheading}> Ethical Sourcing </h1>
            <p style={{ color: '#00000094', fontWeight: '600', lineHeight: '20px', marginBottom: '3rem', marginTop: '.4rem' }}> We've always believed in buying and serving the best coffee possible. </p>
            <p style={{ marginBottom: '1.7rem' }}> We've always believed in buying and serving the best coffee possible. And it's our goal for all of our coffee to be grown under the highest standards of quality, using ethical trading and responsible growing practices. We think it's a better cup of coffee that also helps create a better future for farmers and a more stable climate for the planet.  </p>
            <div className={styles.aboutcard}>
                {EthicalsourcingData.map((data, index) => (
                    <div className={styles.card}>
                        <StoreCard data={data} />
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Ethicalsourcing