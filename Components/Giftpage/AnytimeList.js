import React from 'react'
import GiftCard from '../Common/Giftcard/GiftCard'
import AnyTimeData from '@/Data/AnyTimeData'
import styles from '../Giftpage/Giftpagestyle/AnytimeList.module.scss'

const AnytimeList = () => {
    return (
        <div className={styles.Anytime_List}>
            {AnyTimeData.map((data, ind) => (
                <GiftCard data={data} />
            ))}
        </div>
    )
}

export default AnytimeList