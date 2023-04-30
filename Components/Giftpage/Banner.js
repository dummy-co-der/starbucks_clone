import styles from './Giftpagestyle/Banner.module.scss'
import { useState } from 'react'
import Image from 'next/image'
import Gbanner from '../../public/gift-banner.png'
import { Button } from 'antd';
// import Featured from '@/Components/Giftpage/Featured'
import Anytime from '@/Components/Giftpage/Anytime'
import Congratulations from '@/Components/Giftpage/Congratulations'
import Thankyou from '@/Components/Giftpage/Thankyou'

function Banner() {
    const [activeLink, setActiveLink] = useState(0);
    function Choose() {
        if (activeLink === 'anytime')
            return <Anytime />
        else if (activeLink === 'congratulations')
            return <Congratulations />
        else if (activeLink === 'thankyou')
            return <Thankyou />
    }
    return (
        <div className={styles.g_banner}>
            <div className={styles.g_heading}>
                <p> Home Gift Cards </p>
            </div>
            <div className={styles.g_content}>
                <div className={styles.g_card}>
                    <Image src={Gbanner} alt="Gift's Banner" className={styles.g_card_background} />
                    <div className={styles.g_card_content}>
                        <p> Introducing </p>
                        <h3> Savannah Animals Mug </h3>
                        <p> Wander into the wilderness with every sip in this Savannah Animals Mug with giraffe head ornament on rim. </p>
                        <p> For </p>
                        <p> ₹ 2190 </p>
                        <Button> Order Now </Button>
                    </div>
                </div>
            </div>
            <div className={styles.g_tab}>
                <ul className={styles.g_tab_list}>
                    <li className={styles.tab_item1}>
                        <div title='Featured'
                            className={`${styles.link} ${activeLink === "featured" ? styles.active : ""}`}
                            onClick={() => setActiveLink("featured")}
                        >
                            FEATURED
                        </div>
                    </li>
                    <li className={styles.tab_item2}>
                        <div title='Anytime'
                            className={`${styles.link} ${activeLink === "anytime" ? styles.active : ""}`}
                            onClick={() => setActiveLink("anytime")}
                        >
                            ANYTIME
                        </div>
                    </li>
                    <li className={styles.tab_item2}>
                        <div title='Congratulations'
                            className={`${styles.link} ${activeLink === "congratulations" ? styles.active : ""}`}
                            onClick={() => setActiveLink("congratulations")}
                        >
                            CONGRATULATIONS
                        </div>
                    </li>
                    <li className={styles.tab_item3}>
                        <div title='ThankYou'
                            className={`${styles.link} ${activeLink === "thankyou" ? styles.active : ""}`}
                            onClick={() => setActiveLink("thankyou")}
                        >
                            THANK YOU
                        </div>
                    </li>
                </ul>
            </div>
            <Choose />
        </div>
    )
}

export default Banner