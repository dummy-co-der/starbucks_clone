import React from 'react'
import GiftCard from '../Common/GiftCard/GiftCard'
import AnyTimeData from '@/Data/AnyTimeData'
import styles from '../Giftpage/Giftpagestyle/FeaturedList.module.scss'

const FeaturedList = () => {
    return (
        <div className={styles.Featured_List}>
            <GiftCard data={AnyTimeData[0]} />
            <GiftCard data={AnyTimeData[1]} />
            <GiftCard data={AnyTimeData[2]} />
        </div>
    )
}

export default FeaturedList