import React from "react";
import { TbClockHour3Filled } from "react-icons/tb";
import { MdOutlineTextsms, MdOutlinePhoneInTalk } from "react-icons/md";
import { IoShareSocial } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import "./Contact.scss";
const Contact = (props) => {
  return (
    <section className="contact">
      <div className="container">
        <h2 className="contact__title">{props.t("Contacts")}</h2>
        <div className="contact__start">
          <ul className="contact__list">
            <li className="contact__list-item">
              <IoLocationOutline />
              <div className="contact__list-card">
                <h2 className="contact__list-title">
                  {props.t("contact__title1")}
                </h2>
                <p className="contact__list-text">
                  {props.t("contact__text1")}
                </p>
              </div>
            </li>
            <li className="contact__list-item">
              <MdOutlinePhoneInTalk />
              <div className="contact__list-card">
                <h2 className="contact__list-title">
                  {props.t("contact__title2")}
                </h2>
                <a className="contact__list-text" href="tel:+998935138833">
                  +998 (33) 258 73 58
                </a>
              </div>
            </li>
            <li className="contact__list-item">
              <TbClockHour3Filled />
              <div className="contact__list-card">
                <h2 className="contact__list-title">
                  {props.t("contact__title3")}
                </h2>
                <p className="contact__list-text">
                9:00 18:00 {props.t("contact__text2")}
                </p>
              </div>
            </li>
            <li className="contact__list-item">
              <IoShareSocial />
              <div className="contact__list-card">
                <h2 className="contact__list-title">
                  {props.t("contact__title4")}
                </h2>
                <p className="contact__list-link">
                  <a
                    href="https://www.linkedin.com/company/limsa-2021/"
                    target="_blanc"
                  >
                    <FaLinkedin />
                  </a>
                  <a href="https://www.instagram.com/" target="_blanc">
                    <FaInstagramSquare />
                  </a>
                  <a href="https://telegram.org/" target="_blanc">
                    <FaTelegram />
                  </a>
                </p>
              </div>
            </li>
          </ul>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.643310333162!2d69.28572299999999!3d41.33836900000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b4e3088e9bf%3A0xdd9a89a16d423604!2sIT%20Time%20Academy!5e0!3m2!1sen!2s!4v1714640889918!5m2!1sen!2s"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
