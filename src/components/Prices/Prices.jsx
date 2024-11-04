import React from "react";
import "./Prices.scss";

const Prices = (props) => {
  const servicesData = [
    {
      title: props.t("prices__title1"),
      description: props.t("prices_text1"),
      features: [
        props.t("prices__list1"),

        props.t("prices__list3"),
        props.t("prices__list4"),
        props.t("prices__list5"),
      ],
      price: "$190",
    },
    {
      title: props.t("prices__title2"),
      description: props.t("prices_text2"),
      features: [
        props.t("prices__list1"),

        props.t("prices__list3"),
        props.t("prices__list6"),
        props.t("prices__list7"),
      ],
      price: "$310",
    },
    {
      title: props.t("prices__title3"),
      description: props.t("prices_text3"),
      features: [
        props.t("prices__list1"),

        props.t("prices__list3"),
        props.t("prices__list8"),
        props.t("prices__list9"),
      ],
      price: props.t("prices"),
    },
  ];

  return (
    <section className="prices" aria-labelledby="prices-title">
      <div className="container">
        <div className="prices__start">
          <p className="ourServices__text">{props.t("prices__text")}</p>
          <h2 id="prices-title" className="work__title">
            {props.t("prices__title")}
          </h2>
          <div className="prices__group">
            {servicesData.map((service, index) => (
              <div className="prices-card" key={index}>
                <div className="prices__left">
                  <h3 className="prices__left-title">{service.title}</h3>
                  <p className="prices__left-text">{service.description}</p>
                </div>
                <ul className="prices__list" role="list">
                  {service.features.map((feature, i) => (
                    <li className="prices__list-item" key={i}>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="prices__right">
                  <div className="prices__right-price">{service.price}</div>
                  <a
                    href="#order"
                    className="prices__right-btn"
                    aria-label={`${service.title} - ${props.t("prices__btn")}`}
                  >
                    {props.t("prices__btn")}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prices;
