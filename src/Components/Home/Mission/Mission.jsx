import React from "react";
import "./Mission.css";
import Heading from "../../Common/Heading";
import MissionImg from "/images/mision.png";
import VisionImg from "/images/vision2.png";

const Mission = () => {
  return (
    <>
      <section className="mission padding">
        <div className="container2">
          <div className="vision div1">
            <div className="img">
              <img src={MissionImg} alt="" />
            </div>
            <div className="content">
              <h3>Our Mission</h3>
              <p>
                We are committed to improving lives and driving social
                development through the provision of efficient and
                environmentally sustainable energy solutions. Our mission is to
                harness the power of natural gas to fuel economic growth,
                enhance energy access, and mitigate environmental impact.
              </p>
            </div>
          </div>

          <div className="vision .div2">
            <div className="content2">
              <h3>Our Vision</h3>
              <p>
                To be the premier provider of energy solutions in Africa,
                leveraging our expertise and technology to transform the power
                sector and empower communities with reliable and clean energy
                sources.
              </p>
            </div>
            
            <div className="img2">
              <img src={VisionImg} alt="" />
            </div>
          </div>
          
          
        </div>
      </section>
    </>
  );
};

export default Mission;
