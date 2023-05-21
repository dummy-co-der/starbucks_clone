import styles from './Giftpagestyle/Featured.module.scss'
import FeaturedList from './FeaturedList'
import CongratulationsList from './CongratulationsList'

const Featured = () => {
    return (
        <div className={styles.featured}>
            <div className={styles.featured_heading}>
                <h2> Anytime </h2>
            </div>
            <div className={styles.featured_content} />
                <FeaturedList />
            <div className={styles.featured_heading}>
                <h2> Congratulations </h2>
            </div>
            <div className={styles.featured_content} />
            <CongratulationsList />
        </div>
    )
}

export default Featured