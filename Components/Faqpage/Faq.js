import React, { useState } from "react";
import styles from "./Faqpagestyle/Faq.module.scss";
import FaqData from "@/Data/FaqData";
import Image from "next/image";
import image1 from "../../public/Faq-images/image1.png";
import { PhoneOutlined, SearchOutlined, DownOutlined } from "@ant-design/icons";
import { Button, Input, Space } from "antd";
import Link from "next/link";

const Faq = () => {
  const [expandedQuestion, setExpandedQuestion] = useState(null);
  const [expandedSubQuestion, setExpandedSubQuestion] = useState(null);

  const toggleQuestion = (questionIndex) => {
    if (expandedQuestion === questionIndex) {
      setExpandedQuestion(null);
    } else {
      setExpandedQuestion(questionIndex);
    }
  };

  const toggleSubQuestion = (subQuestionIndex) => {
    if (expandedSubQuestion === subQuestionIndex) {
      setExpandedSubQuestion(null);
    } else {
      setExpandedSubQuestion(subQuestionIndex);
    }
  };

  return (
    <div className={styles.faq}>
      <div className={styles.backcolor}>
        <div className={styles.backcolor_content}>
          <div className={styles.head}>
            <Image src={image1} style={{ height: "2.5rem", width: "2.7rem" }} />
            <h6 style={{ fontSize: "1rem", color: "#ffffff" }}>
              Please get in touch and we will be happy to help you.
            </h6>
          </div>
          <div className={styles.contact}>
            <button className={styles.faqbtn}> Write to us </button>
            <PhoneOutlined style={{ fontSize: "1.8rem", color: "#ffffff" }} />
            <h6
              style={{
                fontSize: "1rem",
                color: "#ffffff",
                textDecoration: "underline",
              }}
            > 
              18602660010
            </h6>
          </div>
        </div>
      </div>
      <div className={styles.faq_content}>
        <h2
          style={{ marginBottom: "1rem", marginLeft: "5rem", color: "#1e3932" }}
        > 
          Frequently Asked Questions
        </h2>
        <div className={styles.faq_content_backcolor}>
          <div className={styles.faq_questions}>
            <Space.Compact
              style={{ width: "50%", boxShadow: "0px 1px 1px 0px #1e3933" }}
            >
              <Input placeholder="Search for a keyword" />
              <Button style={{ backgroundColor: "#1e3933" }}>
                <SearchOutlined style={{ color: "white" }} />
              </Button>
            </Space.Compact>
          </div>
          <div className={styles.faqcard_questions}>
            {FaqData.map((faqItem, i) => (
              <div key={i}>
                <div className={styles.title}>
                  <h4 onClick={() => toggleQuestion(i)}>{faqItem.question} </h4>
                  <div className={styles.toggleicondiv}>
                    <DownOutlined
                      onClick={() => toggleQuestion(i)}
                      style={{ color: "black" }}
                    />
                  </div>
                </div>
                {expandedQuestion === i &&
                  faqItem.subQuestions.map((subItem, j) => (
                    <div key={j}>
                      <div className={styles.subQuestions}>
                        <h4 onClick={() => toggleSubQuestion(j)}>
                          {subItem.question}
                        </h4>
                        <div className={styles.toggleicondiv}>
                          <DownOutlined
                            onClick={() => toggleSubQuestion(i)}
                            style={{ color: "black" }}
                          />
                        </div>
                      </div>
                      {expandedSubQuestion === j && (
                        <p className={styles.answers}> {subItem.answer} </p>
                      )}
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.bottompage}>
          <p> Statutory Information </p>
          <p>
            <Link className={styles.linkStyle}
              href="https://www.starbucks.in/assets/pdf/Form%20MGT%207%20(2022)_protected.pdf"
            > 
              Form No. MGT-7
            </Link>
          </p>
          <p>
            <Link className={styles.linkStyle}
              href="https://www.starbucks.in/assets/pdf/AGM%20Notice%20CTC.pdf"
            >
              Notice of AGM 2021
            </Link>
          </p>
          <p>
            <Link className={styles.linkStyle}
              href="https://www.starbucks.in/assets/pdf/CSR_Policy_tcm87-74231.pdf"
            >
              CSR Policy
            </Link>
          </p>
          <p> Resources </p>
          <p>
            <Link className={styles.linkStyle}
              href="https://www.starbucks.in/assets/pdf/TATA%20Starbucks_NI_Guide_Food_and_Bev.pdf"
            >
              Nutrition Guide
            </Link>
          </p>
          <p> Reach us at </p>
          <p>
            Tata Starbucks Private Limited CIN: U74900MH2011PTC222589 4th Floor,
            New Excelsior Building, Amrit Keshav Nayak Marg, Fort, Mumbai 400
            001 Ph No. 022-66113939, email: contact@tatastarbucks.com
          </p>
          <p> Disclaimer </p>
          <p>
            Tata Starbucks Pvt. Ltd. has sole and exclusive rights to own and
            operate Tata Starbucks Restaurants in India and do not offer any
            franchisees.
          </p>
          <p>
            We have come across a few instances of fraudsters posing as
            agents/employees of Tata Starbucks and asking for payments from
            gullible investors against fake promise of a Tata Starbucks’s
            franchise.
          </p>
          <p>
            We therefore caution and urge all interested parties to be extremely
            careful and vigilant. Anyone dealing with such fraudusters shall be
            doing so at their own peril, risk and consequences.
          </p>
          <p>
            Neither Tata Starbucks Pvt. Ltd. nor its directors/
            officers/employees shall be responsible for any loss, harm, damage
            or fraud that occurs or may occur or arise to any person who decides
            to deal with such fake agents/websites.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
