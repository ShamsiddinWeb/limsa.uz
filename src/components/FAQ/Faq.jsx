import React, { useEffect, useState } from "react";
import "./Faq.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import faqImg1 from "../../assets/images/faq__img1.png";
import faqImg2 from "../../assets/images/faq__img2.png";
import { FaAnglesRight, FaAnglesDown } from "react-icons/fa6";

const FAQ = (props) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: props.t("faq__title1"),
      answer: props.t("faq__text1"),
    },
    {
      question: props.t("faq__title2"),
      answer: props.t("faq__text2"),
    },
    {
      question: props.t("faq__title3"),
      answer: props.t("faq__text3"),
    },
  ];

  const items = [
    props.t("ScrollingText1"),
    props.t("ScrollingText2"),
    props.t("ScrollingText3"),
    props.t("ScrollingText4"),
  ];

  const toggleFAQ = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  return (
    <section className="faq" aria-labelledby="faq-title">
      <div className="container">
        <div className="faq__content">
          <div className="faq__left" data-aos="fade-up">
            <img src={faqImg1} alt="FAQ Illustration 1" />
            <img className="faq__left-img" src={faqImg2} alt="FAQ Illustration 2" />
          </div>
          <div className="faq__right" data-aos="fade-up">
            <p className="faq__right-text">{props.t("header__link2")}</p>
            <h2 id="faq-title" className="faq__right-title">
              {props.t("faq__title")}
            </h2>
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button
                  className={`faq-question ${activeIndex === index ? "active" : ""}`}
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={activeIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  {faq.question}
                  <span>
                    {activeIndex === index ? <FaAnglesDown /> : <FaAnglesRight />}
                  </span>
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className="faq-answer"
                  style={{ maxHeight: activeIndex === index ? "200px" : "0px", overflow: "hidden" }}
                  aria-hidden={activeIndex !== index}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="scrolling-container">
        <div className="scrolling-text left">
          <div className="breadcrumb">
            {items.map((item, index) => (
              <React.Fragment key={index}>
                <span className="breadcrumb-item">{item}</span>
                {index < items.length - 1 && (
                  <span className="breadcrumb-separator">/</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
