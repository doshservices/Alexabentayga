import React from "react";
import Heading from "../../Common/Heading";
import { WhatWeDo } from "../../Data/Data";

const WhoWeAre = () => {
  return (
    <>
      <section className="WhoWeAre padding">
        <div className="container">
          <Heading title="What We Do" />
          <br />
          <p>
            At Alexa Bentayga Energy Solutions, we specialise in providing
            comprehensive services to meet the diverse needs of the power
            sector. Leveraging our collective expertise and constant vigilance
            on global innovations, we offer a wide range of solutions tailored
            to enhance the efficiency, reliability, and sustainability of energy
            projects. From feasibility studies to project implementation and
            ongoing support, Alexa Bentayga Energy Solutions is your trusted
            partner in driving efficiency, reliability, and sustainability in
            the power sector. With our expertise and dedication to excellence,
            we are committed to delivering superior results and exceeding our
            clients' expectations.
          </p>
          <br />
          <div className="row grid2">
            {WhatWeDo.map((value) => (
              <div className="card" key={value.id}>
                <h4>{value.title}</h4>
                <p>{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoWeAre;
