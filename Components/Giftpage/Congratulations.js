import styles from './Giftpagestyle/Anytime.module.scss'
import CongratulationsList from './CongratulationsList'

const Congratulations = () => {
    return (
        <div className={styles.anytime}>
            <div className={styles.anytime_heading}>
                <h2> Congratulations </h2>
            </div>
            <div className={styles.anytime_content} />
            <CongratulationsList />
        </div>
    )
}

export default Congratulations