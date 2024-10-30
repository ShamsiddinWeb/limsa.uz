import React, { useEffect } from "react";
import "./Services.scss";
import { MdOutlinePhonelink, MdOutlineHealthAndSafety } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
import { SlEarphonesAlt } from "react-icons/sl";
import { SiBisecthosting } from "react-icons/si";
import { CiGlobe } from "react-icons/ci";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = (props) => {
  const data = [
    {
      id: 1,
      title: props.t("services__title1"),
      text: props.t("services__text1"),
      icon: <MdOutlinePhonelink aria-hidden="true" />,
    },
    {
      id: 2,
      title: props.t("services__title2"),
      text: props.t("services__text2"),
      icon: <GrUserAdmin aria-hidden="true" />,
    },
    {
      id: 3,
      title: props.t("services__title3"),
      text: props.t("services__text3"),
      icon: <MdOutlineHealthAndSafety aria-hidden="true" />,
    },
    {
      id: 4,
      title: props.t("services__title4"),
      text: props.t("services__text4"),
      icon: <SlEarphonesAlt aria-hidden="true" />,
    },
    {
      id: 5,
      title: props.t("services__title5"),
      text: props.t("services__text5"),
      icon: <SiBisecthosting aria-hidden="true" />,
    },
    {
      id: 6,
      title: props.t("services__title6"),
      text: props.t("services__text6"),
      icon: <CiGlobe aria-hidden="true" />,
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  return (
    <section className="services" data-aos="fade-down" aria-labelledby="services-title">
      <div className="container">
        <div className="services__content">
          <h3 id="services-title" className="services__title">{props.t("services__title")}</h3>
          <p className="services__title services__text">{props.t("services__text")}</p>
          <ul className="services__list" role="list">
            {data.map((service) => (
              <li key={service.id} className="services__list-item">
                <div className="services__list-left">
                  <div className="services__list-icon" aria-hidden="true">
                    {service.icon}
                  </div>
                  <p className="services__list-text">0{service.id}</p>
                </div>
                <div className="services__list-right">
                  <h4 className="services__list-title">{service.title}</h4>
                  <p className="services__list-description">{service.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
