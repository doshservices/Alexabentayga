import React from "react";
import "./WhatWeDo.css";
import Heading from "../../Common/Heading";
import img from "/images/what2.jpg";

const WhatWeDo = () => {
  return (
    <>
      <section className="padding whatwedo">
        <div className="container flex1">
          <div className="right">
            <div className="img_lay">
              <img src={img} alt="" />
            </div>
          </div>
          <div className="left">
            <Heading title="What We Do" />
            <br />
            <p>
              At Alexa Bentayga Energy Solutions, we specialise in providing
              comprehensive services to meet the diverse needs of the power
              sector. Leveraging our collective expertise and constant vigilance
              on global innovations, we offer a wide range of solutions tailored
              to enhance the efficiency, reliability, and sustainability of
              energy projects.
            </p>
            <br />
            <h4>➩ Feasibility and Commercial Viability Studies</h4>
            <h4>➩ Project Implementation</h4>
            <h4>➩ Quality Assurance in Distribution Systems</h4>
            <h4>➩ Continuous Improvement and Innovation</h4>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatWeDo;
