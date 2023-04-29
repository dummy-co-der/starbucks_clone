import styles from './Giftpagestyle/Featured.module.scss'
import FeaturedList from './FeaturedList'

const Featured = () => {
    return (
        <div className={styles.featured}>
            <div className={styles.featured_heading}>
                <h2> Anytime </h2>
            </div>
            <div className={styles.featured_content}>
                <div className={styles.featured_card}>

                </div>
            </div>
            <FeaturedList />
        </div>
    )
}

export default Featured