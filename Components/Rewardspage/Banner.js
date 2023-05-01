import styles from './Rewardspagestyle/Banner.module.scss'
import Image from 'next/image'
import Rleft from '../../public/Rewards-images/rewards-left.png'
import Rright from '../../public/Rewards-images/rewards-right.png'
import Rlogo from '../../public/Rewards-images/r-logo.png'
import Largestar from '../../public/Rewards-images/LargeStar.png'
import Account from '../../public/Rewards-images/account.png'
import Spent from '../../public/Rewards-images/spent.png'
import Redeem from '../../public/Rewards-images/redeem.png'
import { Button } from 'antd'

function Banner() {
    return (
        <div className={styles.r_banner}>
            <div className={styles.r_heading}>
                <p> Home Starbucks Rewards </p>
            </div>
            <div className={styles.r_content}>
                <div className={styles.r_card}>
                    <div className={styles.stars}>
                        <Image src={Rleft} alt="Star Left" className={styles.r_left} />
                        <Image src={Rright} alt="Star Right" className={styles.r_right} />
                    </div>
                    <div className={styles.r_card_content}>
                        <div className={styles.r_card_contentsub}>
                            <div className={styles.rContentleft}>
                                <Image src={Rlogo} alt="Rewards Starbucks Logo" className={styles.r_logo} />
                                <p> Earn stars on every border </p>
                                <Button className={styles.bannerButton}> Know More </Button>
                            </div>
                            <div className={styles.rContentright}>
                                <Image src={Largestar} alt="Large Star" className={styles.r_largestar} />
                            </div>
                        </div></div>
                </div>
            </div>
            <div className={styles.r_tab}>
                <div className={styles.r_tab_heading}>
                    <h2> How to collect stars </h2>
                </div>
                <div className={styles.r_tab_content}>
                    <div className={styles.r_tab_text}>
                        <Image src={Account} alt="Account" className={styles.r_tab_pic} />
                        <p> Create an account to get access to full range of Starbucks Rewards Benefits  </p>
                    </div>
                    <div className={styles.r_tab_text}>
                        <Image src={Spent} alt="Spent" className={styles.r_tab_pic} bodyStyle={{ textAlign: 'center' }} />
                        <p> Earn a star on every Rs 300 spent on your registered Starbucks Card  </p>
                    </div>
                    <div className={styles.r_tab_text}>
                        <Image src={Redeem} alt="Redeem" className={styles.r_tab_pic} bodyStyle={{ textAlign: 'center' }} />
                        <p> As you earn stars, you can redeem them for rewards—like free drinks, and more when you annually spend Rs 600 or more.  </p>
                    </div>
                    {/* <Button className={styles.bannerButton}> Know More </Button> */}

                </div>
            </div>
        </div>
    )
}

export default Banner