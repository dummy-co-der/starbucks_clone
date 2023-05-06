import React from 'react'
import styles from '../Aboutuspage/Aboutuspagestyle/Aboutus.module.scss'
import AboutusData from '@/Data/AboutusData'
import StoreCard from '../Common/Storecard/StoreCard'
// import { useState } from 'react'
// import { Button } from 'antd'

const Aboutus = () => {
    return (
        <div className={styles.aboutus_content}>
            <p> Home Articles </p>
            <h2 style={{ marginBottom: '0' }}> About Us </h2>
            <p style={{ color: '#00000094', fontWeight: '600', lineHeight: '20px' }}> About Us </p>
            <h1 className={styles.a_subheading}> About Us </h1>
            <h3 className={styles.a_quote}> It happens millions of times each week – a customer receives a drink from a Starbucks barista – but each interaction is unique. </h3>
            <p> It’s just a moment in time – just one hand reaching over the counter to present a cup to another outstretched hand. </p>
            <p> But it’s a connection....  </p>
            <p> We make sure everything we do honors that connection – from our commitment to the highest quality coffee in the world, to the way we engage with our customers and communities to do business responsibly. </p>
            <p> From our beginnings as a single store over forty years ago, in every place that we’ve been, and every place that we touch, we've tried to make it a little better than we found it. </p>
            <div className={styles.aboutcard}>
                {AboutusData.map((data, index) => (
                    <div className={styles.card}>
                        <StoreCard data={data} />
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Aboutus