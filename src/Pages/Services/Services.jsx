import React, { useEffect } from "react";
import Services from "../../components/Services/Services";

const OurServices = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="ourServices">
      <p className="ourServices__text">{props.t("header__link1")}</p>
      <Services t={props.t} />
    </div>
  );
};

export default OurServices;
