import React, { useEffect } from "react";
import "./Hero.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import abBuild from "../../assets/images/abBuild.jpg";
import avtozoomWeb from "../../assets/images/avtozoomWebsite.jpg";
import homekit from "../../assets/images/homekit.jpg";
import itTime from "../../assets/images/itTime.jpg";
import loyalWebsite from "../../assets/images/loyalWebsite.jpg";
import noits from "../../assets/images/noits.jpg";
import propartnyor from "../../assets/images/propartnyor.jpg";
import zamonTour from "../../assets/images/zamonTour.jpg";

const Hero = (props) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  return (
    <section className="hero">
      <div className="container">
        <div className="hero__content">
          <div className="hero__left" data-aos="fade-down">
            <h1 className="hero__title">{props.t("hero__title")}</h1>
            <p className="hero__text">{props.t("hero__text")}</p>
            <a className="hero__button" aria-label={props.t("header__link4")} href="#order">
              {props.t("btn")}
            </a>
          </div>

          <div className="hero__right" data-aos="fade-down">
            <div className="hero__card">
              <a  aria-label="Visit AB Build" rel="noopener noreferrer" target="_blank">
                <img src={abBuild} alt="AB Build" loading="lazy" />
              </a>
              <a aria-label="Visit Homekit" rel="noopener noreferrer" target="_blank">
                <img src={homekit} alt="Homekit" loading="lazy" />
              </a>
              <a aria-label="Visit IT Time" rel="noopener noreferrer" target="_blank">
                <img src={itTime} alt="IT Time" loading="lazy" />
              </a>
            </div>

            <div className="hero__card">
              <a  aria-label="Visit Loyal Website" rel="noopener noreferrer" target="_blank">
                <img src={loyalWebsite} alt="Loyal Website" loading="lazy" />
              </a>
              <a  aria-label="Visit Avtozoom" rel="noopener noreferrer" target="_blank">
                <img src={avtozoomWeb} alt="Avtozoom" loading="lazy" />
              </a>
              <a  aria-label="Visit Noits" rel="noopener noreferrer" target="_blank">
                <img src={noits} alt="Noits" loading="lazy" />
              </a>
            </div>

            <div className="hero__card">
              <a  aria-label="Visit Propartnyor" rel="noopener noreferrer" target="_blank">
                <img src={propartnyor} alt="Propartnyor" loading="lazy" />
              </a>
              <a  aria-label="Visit Zamon Tour" rel="noopener noreferrer" target="_blank">
                <img src={zamonTour} alt="Zamon Tour" loading="lazy" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
