import React, { useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import FAQ from "../../components/FAQ/Faq";
import Services from "../../components/Services/Services";

const Home = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero t={props.t} />
      <FAQ t={props.t} />
      <Services t={props.t} />
    </>
  );
};

export default Home;
