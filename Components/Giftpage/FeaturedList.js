import React from 'react'
import GiftCard from '../Common/GiftCard/GiftCard'
import Anytime from '@/Data/Anytime'
import styles from '../Giftpage/Giftpagestyle/FeaturedList.module.scss'

const FeaturedList = () => {
    return (
        <div className={styles.Featured_List}>
            <GiftCard content={Anytime[0]} />
        </div>
    )
}

export default FeaturedList