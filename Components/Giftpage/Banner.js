import styles from './Giftpagestyle/Banner.module.scss'
import Image from 'next/image'
import Gbanner from '../../public/gift-banner.png'
import { Button } from 'antd';
import Link from 'next/link'

function Banner() {
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
                        <Link title='Featured' href='/' className={styles.link}> FEATURED </Link>
                    </li>
                    <li className={styles.tab_item2}>
                        <Link title='Anytime' href='/' className={styles.link}> ANYTIME </Link>
                    </li>
                    <li className={styles.tab_item2}>
                        <Link title='Congratulations' href='/' className={styles.link}> CONGRATULATIONS </Link>
                    </li>
                    <li className={styles.tab_item3}>
                        <Link title='Thank You' href='/' className={styles.link}> THANK YOU </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Banner