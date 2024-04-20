import React from "react";
import "./Footer.css";
import { footer } from "../../Data/Data";

const Footer = () => {
  return (
    <>
      {/* <section className="footerContact">
        <div className="container">
          <div className="send flex">
            <div className="text">
              <h1>Do You Have Questions?</h1>
              <p>We'll help you to grow your career and growth.</p>
            </div>
            <button className="btn5">Contact Us Today</button>
          </div>
        </div>
      </section> */}

      <footer>
        <div className="container footer">
          <div className="box">
            <div className="logo">
              <img src="/images/logo2.png" alt="" />
              <h2>Do You Need Help With Anything?</h2>
              <p>
                At Alexa Bentayga Energy Solutions, we are dedicated to
                revolutionising the power sector in Nigeria and across the
                African continent. As a leading energy consultancy firm, we
                specialise in providing innovative and sustainable solutions
                that address the complex challenges facing the industry.
              </p>
              
            </div>
          </div>
          {footer.map((val, index) => {
            return (
              <div className="box2" key={index}>
                <h3>{val.title}</h3>
                <ul>
                  {val.text.map((items, index) => {
                    return <li key={index}>{items.list}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </footer>
      <div className="legal">
        <span>© 2024 Alexa Bentayga.</span>
      </div>
    </>
  );
};

export default Footer;
