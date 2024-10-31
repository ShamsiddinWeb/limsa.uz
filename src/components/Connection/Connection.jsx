import React, { useEffect, useState } from "react";
import "./Connection.scss";

import { MdOutlineTextsms, MdOutlinePhoneInTalk } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const BOT_TOKEN = "6708331572:AAGi5u0j5WT-UkQ0u7eU69qHg3ZCE59DKbc";
const CHAT_ID = "-1002028151929";

const Connection = (props) => {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [text, setText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  function handleSubmit(e) {
    e.preventDefault();

    const message = `
      Mijoz xabar yubordi: %0A%0A
      Mijoz Telefon Raqami: ${tel} %0A
      Mijoz xabari: ${text} %0A
    `;

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(
      message
    )}`;
    fetch(url);
    setName("");
    setTel("");
    setText("");
    setIsModalOpen(true);
  }

  const closeModal = () => setIsModalOpen(false);

  const handleChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) setTel(value);
  };



  return (
    <section
      className="connection"
      id="order"
      aria-labelledby="connection-heading"
    >
      <div className="container">
        <div className="connection__start">
          <div className="connection__left" >
            <h2 className="connection__left-title">
             {props.t("form__title")}
            </h2>
            <p className="connection__left-text">
            {props.t("form__text")}
            </p>
            <div className="connection__left-group">
              <div className="connection__left-card">
                <h3 className="connection__card-title">{props.t("form__list1")}</h3>
                <div className="connection__card-span"></div>
                <ul className="connection__left-list">
                  <li className="connection__left-item">
                    <Link className="connection__left-link" to={"/"}>
                      {props.t("header__link4")}
                    </Link>
                  </li>
                  <li className="connection__left-item">
                    <Link className="connection__left-link" to={"/services"}>
                      {props.t("header__link1")}
                    </Link>
                  </li>
                  <li className="connection__left-item">
                    <Link className="connection__left-link" to={"/work"}>
                      {props.t("header__link2")}
                    </Link>
                  </li>
                  <li className="connection__left-item">
                    <Link className="connection__left-link" to={"/prices"}>
                      {props.t("header__link3")}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="connection__left-card">
                <h3 className="connection__card-title">{props.t("form__list2")}</h3>
                <div className="connection__card-span"></div>
                <ul className="connection__left-list">
                  <li className="connection__left-item">
                    <Link className="connection__left-link" to={"/services"}>
                      {props.t("form__list3")}
                    </Link>
                  </li>
                  <li className="connection__left-item">
                    <Link className="connection__left-link" to={"/services"}>
                      {props.t("form__list4")}
                    </Link>
                  </li>
                  <li className="connection__left-item">
                    <Link className="connection__left-link" to={"/services"}>
                      {props.t("form__list5")}
                    </Link>
                  </li>
                  <li className="connection__left-item">
                    <Link className="connection__left-link" to={"/services"}>
                      {props.t("form__list6")}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <form
            className="connection__form"
            onSubmit={handleSubmit}
           
            aria-describedby="form-description"
          >
            <h3 id="connection-heading" className="connection__form-title">
              {props.t("connection__title")}
            </h3>
            <input
              type="text"
              placeholder={props.t("connection__name")}
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              aria-label="User Name"
            />
            <input
              type="tel"
              placeholder={props.t("connection__tel")}
              value={tel}
              onChange={handleChange}
              required
              aria-label="User Phone Number"
            />
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              id="feedback"
              name="feedback"
              rows="6"
              maxLength="200"
              placeholder={props.t("connection__n")}
              aria-label="User Message"
            ></textarea>
            <button type="submit" className="connection__form-btn">
              {props.t("connection__btn")}
            </button>
          </form>
          {isModalOpen && (
            <div className="modal-overlay">
              <div className="modal">
                <p className="modal__text">{props.t("modal__text")}</p>
                <button className="modal__btn" onClick={closeModal}>
                  {props.t("modal__btn")}
                </button>
              </div>
              <div className="modal__black"></div>
            </div>
          )}
        </div>
        <div className="connection__end">
          <ul className="connection__list" aria-label="Contact Information">
            <li className="connection__list-item">
              <MdOutlineTextsms />
              <a href="mailto:info@bnpfabric.uz">Email: </a>
            </li>
            <li className="connection__list-item">
              <MdOutlinePhoneInTalk />
              <a href="tel:+998935138833">Тел: +998 (93) 513-88-33</a>
            </li>
            <li className="connection__list-item">
              <IoLocationOutline />
              <span>{props.t("footer__contact1")}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Connection;
