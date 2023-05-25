import React from 'react'
import styles from '../Diversitypage/Diversitypagestyle/Diversity.module.scss'
import Link from 'next/link'

const Customer = () => {
    return (
        <div className={styles.diversity_content}>
            <h2 className={styles.d_heading}> Customer Service </h2>
            <h1 className={styles.d_subheading}> Contact us </h1>
            <h3 className={styles.d_quote}> Hi, Welcome to Starbucks. What can we do for you? </h3>
            <p> We love hearing from our customers, all questions, comments and feedback are always welcome. They help us to ensure that every Starbucks experience you have is the best it can be. We're on <Link href='https://www.facebook.com/starbucksindia?ref=hl'> Facebook </Link> too, so please feel free to leave your comments on our page. </p>
            <p><b> Customer Care </b></p>
            <p> For general inquiries, you can call us on 18602660010. Alternatively, you can send us an email on customercare@tatastarbucks.com, and we’ll do our best to reply as quickly as possible. </p>
            <h3> For queries regarding the Starbucks Card, please send us an email on card@tatastarbucks.com. </h3>
            <p> For media queries, please contact <Link href='mailto:press.india@tatastarbucks.com'> Press. </Link></p>
            <p><b> Working for Starbucks </b></p>
            <p> Love coffee, love people? Find out about working for <Link href='mailto:partner.resources@tatastarbucks.com'> Starbucks. </Link></p>
            <p> For media queries, please contact <Link href='mailto:press.india@tatastarbucks.com'> Press. </Link></p>
            <p><b> Statutory Information </b></p>
            <p><Link href='https://dev.starbucks.in/media/Form_MGT_7_tcm87-74230.pdf'> Form No. MGT-7 </Link></p>
            <p><Link href='https://dev.starbucks.in/media/TSPL_Notice_of_AGM_tcm87-74229.pdf'> Notice of AGM 2021 </Link></p>
            <p><Link href='https://dev.starbucks.in/media/CSR_Policy_tcm87-74231.pdf'> CSR Policy </Link></p>
            <p><b> Reach us at </b></p>
            <p> Tata Starbucks Private Limited <br />
                CIN: U74900MH2011PTC222589 <br />
                4th Floor, New Excelsior Building, <br />
                Amrit Keshav Nayak Marg, Fort, Mumbai 400 001 <br />
                Ph No. 022-66113939, email: contact@tatastarbucks.com </p>
            <p><Link href='https://dev.starbucks.in/media/Store_List_delivery_and_take_away_v267_tcm87-76800.pdf'>Terms and Conditions </Link> for Dine-in and Takeaway in Select Stores. </p>
            <p><Link href='https://dev.starbucks.in/media/MOP_Select_store_list_v12_tcm87-69888.pdf'> List of select stores </Link> live on Mobile Order and Pay. </p>
            <p><Link href='https://dev.starbucks.in/media/Digital_Kerbside_Terms_and_Conditions_v2_tcm87-69602.pdf'> Terms and Conditions </Link> for Digital Ordering and Takeaway in Select Stores.</p>
            <p><Link href='https://dev.starbucks.in/media/Hyderabad_Neighborhood_Delivery_tcm87-74728.pdf'> Terms and Conditions </Link> for Delivery Services by Starbucks in Select Hyderabad Stores.</p>
            <p><Link href='https://dev.starbucks.in/media/Neighborhood_Delivery_tcm87-66698.pdf'> Terms and Conditions </Link> for Neighborhood Delivery Services.</p>
            <p><Link href='https://dev.starbucks.in/media/MERCHANDISEPOLICYFORINSTOREPURHCASE.pdf'> Terms and Conditions </Link> MERCHANDISE POLICY FOR IN STORE PURHCASE.</p>
            <p><Link href='https://dev.starbucks.in/media/TC-MobileAPP.pdf'> Terms and Conditions </Link> for Mobile APP.</p>
            <p><Link href='https://dev.starbucks.in/media/MERCH_CATALOGUE_tcm87-73230.pdf'> Starbucks Season's Gifting Catalogue. </Link></p>
            <p><Link href='https://dev.starbucks.in/media/TC_Friendship_Day_Raksha%20Bandhan.pdf'> Terms and Conditions </Link> Friendship Day & Raksha Bandhan.</p>
            <p><Link href='https://dev.starbucks.in/media/customer-price-revised-tc.pdf'> Terms and Conditions </Link> Customer Barista Pride</p>
            <p><Link href='https://dev.starbucks.in/media/for-anniversary-tactic-tc.pdf'> Terms and Conditions </Link> Anniversary Tactic</p>
        </div>
    )
}

export default Customer