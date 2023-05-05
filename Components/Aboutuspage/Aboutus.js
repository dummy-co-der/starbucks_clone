import React from 'react'
import styles from '../Aboutuspage/Aboutuspagestyle/Aboutus.module.scss'
import AboutusData from "@/Data/AboutusData";
import StoreCard from '../Common/Storecard/StoreCard'

const Aboutus = () => {
    return (
        <div className={styles.a_aboutus}>
            <div className={styles.a_heading}>
                <p> Home Articles </p>
                <h2> About Us </h2>
                <h5> About Us </h5>
                <h1> About Us </h1>
                <p> It happens millions of times each week – a customer receives a drink from a Starbucks barista – but each interaction is unique. </p>
                <p> It’s just a moment in time – just one hand reaching over the counter to present a cup to another outstretched hand. </p>
                <p> But it’s a connection....  </p>
                <p> We make sure everything we do honors that connection – from our commitment to the highest quality coffee in the world, to the way we engage with our customers and communities to do business responsibly. </p>
                <p> From our beginnings as a single store over forty years ago, in every place that we’ve been, and every place that we touch, we've tried to make it a little better than we found it. </p>
            </div>
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