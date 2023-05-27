import React, { useState } from 'react'
import styles from './footer.module.scss'
import Image from 'next/image'
import logo from '../../../public/starbucks.png'
import ios from '../../../public/Footer-images/appstoreiOS.png'
import android from '../../../public/Footer-images/appstoreAndroid.png'
import Link from 'next/link'
import { InstagramOutlined, FacebookOutlined, TwitterOutlined, CloseCircleOutlined, DownOutlined } from '@ant-design/icons';
import TncData from '@/Data/TncData'

const Footer = () => {

    const [showContent, setShowContent] = useState(false);
    const handleClick = () => {
        setShowContent(!showContent);
    };
    const handleClose = () => {
        setShowContent(false);
    };

    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const handleQuestionClick = (index) => {
        setSelectedQuestion(index);
    };

    return (
        <div className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerUp}>
                    <div className={styles.logo}>
                        <Image src={logo} alt='logo' height={62} width={62} />
                    </div>
                    <div className={styles.aboutus}>
                        <h3 className={styles.footerHeading}>
                            <Link title='About Us' href='/aboutus' className={styles.link}> About Us </Link> </h3>
                        <ul className={styles.boxlist}>
                            <li>
                                <Link title='Our Heritage' href='/ourheritage' className={styles.link}> Our Heritage </Link>
                            </li>
                        </ul>
                        <ul className={styles.boxlist}>
                            <li>
                                <Link title='Our Comapny' href='/ourcompany' className={styles.link}> Our Company </Link>
                            </li>
                        </ul>
                        <ul className={styles.boxlist}>
                            <li>
                                <Link title='Coffeehouse' href='/coffeehouse' className={styles.link}> Coffeehouse </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.responsibility}>
                        <h3 className={styles.footerHeading}>
                            <Link title='Responsibility' href='/responsibility' className={styles.link}> Responsibility </Link> </h3>
                        <ul className={styles.boxlist}>
                            <li>
                                <Link title='Community' href='/community' className={styles.link}> Community </Link>
                            </li>
                        </ul>
                        <ul className={styles.boxlist}>
                            <li>
                                <Link title='Ethical Sourcing' href='/ethicalsourcing' className={styles.link}> Ethical Sourcing </Link>
                            </li>
                        </ul>
                        <ul className={styles.boxlist}>
                            <li>
                                <Link title='Environment' href='/environment' className={styles.link}> Environment </Link>
                            </li>
                        </ul>
                        <ul className={styles.boxlist}>
                            <li>
                                <Link title='Diversity' href='/diversity' className={styles.link}> Diversity </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.quick}>
                        <h3 className={styles.footerHeading}>
                            <Link title='Quick Links' href='/quicklinks' className={styles.link}> Quick Links </Link> </h3>
                        <ul className={styles.boxlist}>
                            <li>
                                <Link title='Delivery' href='/delivery' className={styles.link}> Delivery </Link>
                            </li>
                        </ul>
                        <ul className={styles.boxlist}>
                            <li>
                                <Link title='Season Gifting' href='/seasonsgifting' className={styles.link}> Season's Gifting </Link>
                            </li>
                        </ul>
                        <ul className={styles.boxlist}>
                            <li>
                                <Link title='Careers' href='/careers' className={styles.link}> Careers </Link>
                            </li>
                        </ul>
                        <ul className={styles.boxlist}>
                            <li>
                                <Link title='Customer Service' href='/customerservice' className={styles.link}> Customer Service </Link>
                            </li>
                        </ul>
                        <ul className={styles.boxlist}>
                            <li>
                                <Link title='FAQs' href='/faq' className={styles.link}> FAQs </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.socialLogo}>
                        <h3 className={styles.footerHeading}> Social Media </h3>
                        <ul className={styles.socialList}>
                            <li>
                                <Link href='https://www.instagram.com/starbucksindia/'>
                                    <InstagramOutlined style={{ fontSize: '30px', color: '#ffffff' }} />
                                </Link>
                            </li>
                            <li>
                                <Link href='https://www.facebook.com/starbucksindia/'>
                                    <FacebookOutlined style={{ fontSize: '30px', color: '#ffffff' }} />
                                </Link>
                            </li>
                            <li>
                                <Link href='https://www.twitter.com/starbucksindia/'>
                                    <TwitterOutlined style={{ fontSize: '30px', color: '#ffffff' }} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.store}>
                        <Link href='https://apps.apple.com/in/app/starbucks-india/id1210203958'>
                            <Image src={ios} alt='ios' height={55} width={175} />
                        </Link>
                        <Link href='https://play.google.com/store/apps/details?id=com.starbucks.in'>
                            <Image src={android} alt='android' height={55} width={175} />
                        </Link>
                    </div>
                </div>
                <div className={styles.footerDown}>
                    <ul className={styles.legallist}>
                        <li className={styles.item1}>
                            <div className={styles.slide_up}>
                                <a onClick={handleClick}>
                                    Web Accessibility
                                </a>
                                {showContent && (
                                    <div className={styles.slide_up_content}>
                                        <div className={styles.slide_heading}>
                                            <h1> Terms and Conditions </h1>
                                            <CloseCircleOutlined className={styles.closeButton} onClick={handleClose} />
                                        </div>
                                        <div className={styles.slide_content}>
                                            {TncData.map((item, index) => (
                                                <div key={index}>
                                                    <div className={styles.title}>
                                                        <h3
                                                            className={selectedQuestion === index ? 'active' : ''}
                                                            onClick={() => handleQuestionClick(index)}
                                                        >
                                                            {item.question}
                                                        </h3>
                                                        <DownOutlined onClick={() => handleQuestionClick(index)} />
                                                    </div>
                                                    {selectedQuestion === index && <p style={{ color: 'black'}}>{item.answer}</p>}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </li>

                        <li className={styles.item1}>
                        <div className={styles.slide_up}>
                                <a onClick={handleClick}>
                                    Privacy Statement
                                </a>
                                {showContent && (
                                    <div className={styles.slide_up_content}>
                                        <div className={styles.slide_heading}>
                                            <h1> Terms and Conditions </h1>
                                            <CloseCircleOutlined className={styles.closeButton} onClick={handleClose} />
                                        </div>
                                        <div className={styles.slide_content}>
                                            {TncData.map((item, index) => (
                                                <div key={index}>
                                                    <div className={styles.title}>
                                                        <h3
                                                            className={selectedQuestion === index ? 'active' : ''}
                                                            onClick={() => handleQuestionClick(index)}
                                                        >
                                                            {item.question}
                                                        </h3>
                                                        <DownOutlined onClick={() => handleQuestionClick(index)} />
                                                    </div>
                                                    {selectedQuestion === index && <p style={{ color: 'black'}}>{item.answer}</p>}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </li>
                        <li className={styles.item1}>
                        <div className={styles.slide_up}>
                                <a onClick={handleClick}>
                                    Terms of Use
                                </a>
                                {showContent && (
                                    <div className={styles.slide_up_content}>
                                        <div className={styles.slide_heading}>
                                            <h1> Terms and Conditions </h1>
                                            <CloseCircleOutlined className={styles.closeButton} onClick={handleClose} />
                                        </div>
                                        <div className={styles.slide_content}>
                                            {TncData.map((item, index) => (
                                                <div key={index}>
                                                    <div className={styles.title}>
                                                        <h3
                                                            className={selectedQuestion === index ? 'active' : ''}
                                                            onClick={() => handleQuestionClick(index)}
                                                        >
                                                            {item.question}
                                                        </h3>
                                                        <DownOutlined onClick={() => handleQuestionClick(index)} />
                                                    </div>
                                                    {selectedQuestion === index && <p style={{ color: 'black'}}>{item.answer}</p>}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </li>
                        <li className={styles.item2}>
                            <Link title='Contact Us' href='/faq' className={styles.link}> Contact Us </Link>
                        </li>
                    </ul>
                    <ul className={styles.legallist}>
                        <li className={styles.item3}>
                            <Link title='Contact Us' href='/' className={styles.link}> © 2023 Starbucks Coffee Company. All rights reserved. </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
