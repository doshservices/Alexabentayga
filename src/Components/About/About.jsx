import React from "react";
import Back from "./../Common/Back/Back";
import img from "/images/back.jpg";
import AboutSection from "./AboutSection/AboutSection";
import WhoWeAre from "./WhoWeAre/WhoWeAre";
import Mission from "../Home/Mission/Mission";
import OurCore from "./OurCore/OurCore";

const About = () => {
  return (
    <>
      <section className="about">
        <Back name="About us" title="About Us - Who We Are?" cover={img} />
        <div className="container"></div>
        <AboutSection />
        <WhoWeAre />
        <Mission />
        <OurCore />
      </section>
    </>
  );
};

export default About;
