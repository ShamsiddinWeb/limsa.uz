import React from "react";
import "./Footer.scss";
import footerImg from "../../assets/images/Limsa - Logotypecolor2.png";

const Footer = (props) => {
  return (
    <footer className="footer" aria-label="Footer Section">
      <div className="container">
        <div className="footer__start">
          <a href="#" aria-label="Homepage">
            <img
              className="footer__img"
              src={footerImg}
              alt="Limsa Logotype"
              width={150}
              loading="lazy" 
            />
          </a>
          <p className="footer__text">{props.t("footer__text")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
