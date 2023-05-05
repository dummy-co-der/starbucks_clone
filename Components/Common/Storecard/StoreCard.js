import React from 'react'
import styles from './StoreCard.module.scss'
import { Card } from 'antd'
import { Button } from 'antd'
import Link from 'next/link'

const StoreCard = ({ data }) => {
    var w = "200px";
    return (
        <div>
            <Card
                className={styles.cardStyling}
                cover={
                    <img
                        alt="Agra Store"
                        height={w}
                        src={data.image}
                    />
                }
                style={{width: '500px'}}
            >
                <h2> {data.title} </h2>
                <p> {data.description} </p>
                <Button className={styles.additembtn}> <Link title='Blogs' href='/blog' className={styles.link}> Know More </Link> </Button>
            </Card>
        </div>
    )
}

export default StoreCard