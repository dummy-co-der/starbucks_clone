import styles from './Giftpagestyle/Thankyou.module.scss'
import ThankyouList from './ThankyouList'

const Thankyou = () => {
    return (
        <div className={styles.thankyou}>
            <div className={styles.thankyou_heading}>
                <h2> Thankyou </h2>
            </div>
            <div className={styles.thankyou_content} />
            <ThankyouList />
        </div>
    )
}

export default Thankyou