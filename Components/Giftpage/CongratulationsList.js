import React from 'react'
import GiftCard from '../Common/GiftCard/GiftCard'
import CongratulationsData from '@/Data/CongratulationsData'
import styles from '../Giftpage/Giftpagestyle/CongratulationsList.module.scss'

const CongratulationsList = () => {
    return (
        <div className={styles.Congratulations_List}>
            <GiftCard data={CongratulationsData[0]} />
        </div>
    )
}

export default CongratulationsList