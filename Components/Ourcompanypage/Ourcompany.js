import React from "react";
import styles from "../Aboutuspage/Aboutuspagestyle/Aboutus.module.scss";
import Link from "next/link";
import OurcompanyData from "@/Data/OurcompanyData";
import StoreCard from "../Common/Storecard/StoreCard";

const Ourcompany = () => {
  return (
    <div className={styles.aboutus_content}>
      <h2 style={{ marginBottom: "0" }}> Our Company </h2>
      <p style={{ color: "#00000094", fontWeight: "600", lineHeight: "20px" }}>
        Our Company
      </p>
      <h1 className={styles.a_subheading}> Our Company </h1>
      <h3 className={styles.a_quote}>
        To say Starbucks purchases and roasts high-quality whole bean coffees is
        very true. That’s the essence of what we do – but it hardly tells the
        whole story.
      </h3>
      <p>
        Our coffeehouses have become a beacon for coffee lovers everywhere. Why
        do they insist on Starbucks? Because they know they can count on genuine
        service, an inviting atmosphere and a superb cup of expertly roasted and
        richly brewed coffee every time.
      </p>
      <h1 style={{ marginBottom: "1rem", fontSize: "1.75rem" }}>
        Expect More Than Coffee
      </h1>
      <p>
        We are passionate purveyors of coffee and everything else that goes with
        a rewarding coffeehouse experience. We also offer a selection of premium
        Tazo® teas, fine pastries and other delectable treats to please the
        taste buds. And the music you hear in store is chosen for its artistry
        and appeal. People come to Starbucks to chat, meet up or work.
      </p>
      <p>
        We’re a neighborhood gathering place, a part of the daily routine – and
        we couldn’t be happier about it. Get to know us and you’ll see: we are
        so much more than what we brew.
      </p>
      <h1 style={{ marginBottom: "1rem", fontSize: "1.75rem" }}>
        Learn More About
      </h1>
      <p>
        We are passionate purveyors of coffee and everything else that goes with
        a rewarding coffeehouse experience.
      </p>
      <h1 style={{ marginBottom: "1rem", fontSize: "1.75rem" }}>
        Tata Starbucks Private Limited (formerly known as "Tata Starbucks
        Limited")
      </h1>
      <p>
        Learn more about our Joint Venture that operates our stores in India.
      </p>
      <p> Newsroom </p>
      <p>
        <b> Company Profile </b>
        <br />
        A closer look at us. <br />
        <Link href="https://www.starbucks.in/media/AboutUs-Company_Profile-30.01.18_tcm87-34806.pdf"> PDF </Link>
      </p>
      <p>
        <b> Timeline </b> <br />
        Our history from 1971 on. <br />
        <Link href="https://www.starbucks.in/media/AboutUs-Timeline-1.25.18_tcm87-35812.pdf"> PDF </Link>
      </p>
      <p>
        <b> Recognition </b>
        <br />
        Awards and honours we've have received. <br />
        <Link href="https://www.starbucks.in/media/starbucks-company-recognition_tcm87-10743.pdf"> PDF </Link>
      </p>
      <div className={styles.aboutcard}>
        {OurcompanyData.map((data, index) => (
          <div className={styles.card}>
            <StoreCard data={data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ourcompany;
