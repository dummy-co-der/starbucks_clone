import styles from './Giftpagestyle/Congratulations.module.scss'
import CongratulationsList from './CongratulationsList'

const Congratulations = () => {
    return (
        <div className={styles.congratulations}>
            <div className={styles.congratulations_heading}>
                <h2> Congratulations </h2>
            </div>
            <div className={styles.congratulations_content} />
            <CongratulationsList />
        </div>
    )
}

export default Congratulations