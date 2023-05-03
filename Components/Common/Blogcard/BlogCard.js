import React from 'react'
import styles from './BlogCard.module.scss'

const BlogCard = ({ data }) => {

    return (
        <div className={styles.card}>
            <div className={styles.cardlayout}>
                <img src={data.image} alt="image" className={styles.cardimage} />
            </div>
            <div className={styles.carddatalayout}>
                <div className={styles.content}>
                    <ul className={styles.content_styling}>
                        <li className={styles.heading}>{data.title}</li>
                        <li className={styles.content_news}> News </li>
                        <li className={styles.content_logo}> <img src='/starbucks.png' />
                            <div style={{ marginLeft: '.5rem', fontSize: '12px', fontWeight: '500', display: 'flex', alignItems: 'center', color: '#000000de' }}>
                                Starbucks India
                            </div>
                            <div style={{ marginLeft: '.4rem', fontSize: '10px', display: 'flex', alignItems: 'center', color: '#212529', fontWeight: '400' }}>
                                • 4 minutes read
                            </div>
                        </li>
                    </ul>
                    <div>
                        <p className={styles.content_para}>{data.description}</p>
                        <img src={data.image1} alt="image" className={styles.cardimageDown} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard