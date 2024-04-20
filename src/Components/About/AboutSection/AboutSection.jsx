import React from "react";
import "../About.css";
import AboutImg from "/images/about2.jpg";
import Heading from "../../Common/Heading";

const AboutSection = () => {
  return (
    <>
      <section className="AboutSection padding">
        <div className="container flex1">
          <div className="left">
            <div className="layer">
              <img src={AboutImg} alt="" />
            </div>
          </div>
          <div className="right">
            <Heading title="About Alexabentayga" />
            <br />
            <p>
              At Alexa Bentayga Energy Solutions, we are dedicated to
              revolutionising the power sector in Nigeria and across the African
              continent. As a leading energy consultancy firm, we specialise in
              providing innovative and sustainable solutions that address the
              complex challenges facing the industry.
            </p>
            <br />
            <p>
              It is with a view to improving lives that Alexa Bentayga was
              incorporated. Having recognized natural gas to be an efficient
              alternative to renewable energy for the African people, with fewer
              carbon monoxide and carbon dioxide emissions than other fossil
              fuel options, natural gas presents the safest and most utilitarian
              power option available to Nigeria.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
