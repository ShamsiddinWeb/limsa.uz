import React from "react";
import "./Work.scss";
import abBuild from "../../assets/images/abBuild.jpg";
import avtozoomWeb from "../../assets/images/avtozoomWebsite.jpg";
import homekit from "../../assets/images/homekit.jpg";
import itTime from "../../assets/images/itTime.jpg";
import loyalWebsite from "../../assets/images/loyalWebsite.jpg";
import noits from "../../assets/images/noits.jpg";
import propartnyor from "../../assets/images/propartnyor.jpg";
import zamonTour from "../../assets/images/zamonTour.jpg";

const Work = (props) => {
  const data = [
    {
      id: 1,
      img: abBuild,
      link: "https://www.ataevbahodirbuild.uz/",
      text: "ataevbahodirbuild.uz",
    },
    {
      id: 2,
      img: avtozoomWeb,
      link: "https://www.autozoomrental.com/",
      text: "autozoomrental.com",
    },
    {
      id: 3,
      img: itTime,
      link: "https://www.it-time-academy.uz/",
      text: "it-time-academy.uz",
    },
    {
      id: 4,
      img: homekit,
      link: "https://www.homekit.uz/",
      text: "homekit.uz",
    },
    {
      id: 5,
      img: loyalWebsite,
      link: "https://www.uzloyal.uz/",
      text: "uzloyal.uz",
    },
    {
      id: 6,
      img: noits,
      link: "https://www.namanganoits.uz/",
      text: "namanganoits.uz",
    },
    {
      id: 7,
      img: propartnyor,
      link: "https://propartnyor.uz/",
      text: "propartnyor.uz",
    },
    {
      id: 8,
      img: zamonTour,
      link: "https://zamontour.uz/",
      text: "zamontour.uz",
    },
  ];

  const workData = data.map((e) => (
    <li key={e.id} className="work__list-item">
      <a href={e.link} target="_blank" rel="noopener noreferrer" aria-label={e.text}>
        <img className="work__list-img" src={e.img} alt={e.text} width={700} loading="lazy" />
        <p className="work__list-text">{e.text}</p>
      </a>
    </li>
  ));

  return (
    <section className="work">
      <div className="container">
        <div className="work__start">
          <p className="ourServices__text">{props.t("header__link2")}</p>
          <h2 className="work__title">{props.t("work__title")}</h2>
          <ul className="work__list">{workData}</ul>
        </div>
      </div>
    </section>
  );
};

export default Work;
