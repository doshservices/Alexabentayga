import React from "react";
import "../About.css";
import Heading from "../../Common/Heading";
import { Core } from "../../Data/Data";
import Card from "../../Common/Card/Card";

const OurCore = () => {
  return (
    <>
      <section className="ourcore padding">
        <div className="container ourcore">
          <Heading title="Our Core Value" />
          <br />
          <p>
            At Alexa Bentayga Energy Solutions, our ALEXIC values serve as our
            guiding principles, shaping our decisions, actions, and
            relationships as we strive to transform the energy landscape and
            empower communities for a brighter future.
          </p>
          <br />
          <p>
            At Alexa Bentayga Energy Solutions, our core values are encapsulated
            in the acronym ALEXIC:
          </p>

          <div className="row grid3">
            {Core.map((value) => (
              <Card value={value} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurCore;
