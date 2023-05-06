import React from 'react'
import styles from '../Diversitypage/Diversitypagestyle/Diversity.module.scss'
import Link from 'next/link'

const Ourheritage = () => {
    return (
        <div className={styles.diversity_content}>
            <p> Home Articles </p>
            <h2 style={{ marginBottom: '0' }}> Our Heritage </h2>
            <p style={{ color: '#00000094', fontWeight: '600', lineHeight: '20px' }}> Our Heritage </p>
            <h1 className={styles.d_subheading}> Our Heritage </h1>
            <h3 className={styles.d_quote}> Every day, we go to work hoping to do two things: share great coffee with our friends and help make the world a little better. It was true when the first Starbucks opened in 1971, and it’s just as true today.  </h3>
            <p> Back then, the company was a single store in Seattle’s historic Pike Place Market. From just a narrow storefront, Starbucks offered some of the world’s finest fresh-roasted whole bean coffees. The name, inspired by Moby Dick, evoked the romance of the high seas and the seafaring tradition of the early coffee traders.  </p>
            <p> In 1981, Howard Schultz (Starbucks chairman, president and chief executive officer) first walked into a Starbucks store. From his first cup of Sumatra, Howard was drawn into Starbucks and joined a year later.   </p>
            <p> A year later, in 1983, Howard travelled to Italy and became captivated by Italian coffee bars and the romance of the coffee experience. He had a vision to bring the Italian coffeehouse tradition back to the United States. A place for conversation and a sense of community. A third place between work and home. He left Starbucks for a short period of time to start his own Il Giornale coffeehouses and returned in August 1987 to purchase Starbucks with the help of local investors.  </p>
            <p> From the beginning, Starbucks set out to be a different kind of company. One that not only celebrated coffee and the rich tradition, but that also brought a feeling of connection. </p>
            <p><Link href='https://www.starbucks.in/about-us/company-information/mission-statement.html'> Our mission </Link> to inspire and nurture the human spirit – one person, one cup and one neighbourhood at a time. </p>
            <p> Today, with store in more than 75 markets, Starbucks is the premier roaster and retailer of speciality coffee in the world. And with every cup, we strive to bring both our heritage and an exceptional experience to life. </p>
        </div>
    )
}

export default Ourheritage