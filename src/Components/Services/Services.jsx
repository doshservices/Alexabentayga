import React from "react";
import Back from "../Common/Back/Back";
import img from "/images/back.jpg";
import CoreServices from "./CoreServices/CoreServices";
import WhyUs from "./WhyUs/WhyUs";

const Services = () => {
  return (
    <>
      <section className="services">
        <Back name="WHAT WE DO" title="OUR SERVICES" cover={img} />
        <CoreServices />
        <WhyUs />
      </section>
    </>
  );
};

export default Services;
