import React from 'react'
import styles from './Homepagestyle/Store.module.scss'
import Link from 'next/link'
import { Card } from 'antd'
import { Button } from 'antd';

const Store = () => {
    const { Meta } = Card;
    return (
        <div className={styles.store}>
            <div className={styles.storeContent}>
                <div className={styles.storeHeading}>
                    <ul className={styles.storelist}>
                        <li className={styles.left}>
                            <h2 style={{ color: '#1e3933' }}> We have news for you! </h2>
                        </li>
                    </ul>
                    <ul className={styles.storelist}>
                        <li className={styles.right}>
                            <Link title='Discover More' href='/' className={styles.rightlink}> Find Out More </Link>
                        </li>
                    </ul>
                </div>
                <Card className={styles.cardStyling}
                hoverable
                style={{
                    width: 350, cursor: 'pointer', 
                  }}
                    cover={<img alt="Agra Store" height="180px" src={'/Store-images/agra-store.jpg'}/>}
                >
                    <Meta title="Find store in Agra" description="Tata Starbucks continues expansion in northern India with the opening of it ..." />
                    <Button className={styles.additembtn}> Know More </Button>
                </Card>
            </div>
        </div>
    )
}

export default Store
