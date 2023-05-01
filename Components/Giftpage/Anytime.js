import styles from './Giftpagestyle/Anytime.module.scss'
import AnytimeList from './AnytimeList'

const Anytime = () => {
    return (
        <div className={styles.anytime}>
            <div className={styles.anytime_heading}>
                <h2> Anytime </h2>
            </div>
            <div className={styles.anytime_content} />
            <AnytimeList />
        </div>
    )
}

export default Anytime