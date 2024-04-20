import React from "react";
import Heading from "../../Common/Heading";
import "./HomeAbout.css";
import AboutImg from "/images/about2.jpg";

const HomeAbout = () => {
  return (
    <>
      <section className="container padding Habout">
        <div className="flex1">
          <div className="left gap-20">
            <Heading title="About Alexabentayga" subtitle="" />
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
          <div className="right">
            <div className="img_layer shadow">
              <img src={AboutImg} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeAbout;
