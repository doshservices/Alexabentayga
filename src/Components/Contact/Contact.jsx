import React, { useState } from "react";
import "./Contact.css";
import Back from "../Common/Back/Back";
import cover from "/images/back.jpg";
import {
  FaLocationDot,
  FaEnvelopeCircleCheck,
  FaSquarePhone,
} from "react-icons/fa6";
import Button from "../Common/Button/Button";
// import Form from "./Form/Form";
// import Aside from "./Aside/Aside";

const Contact = () => {

  const [email, setEmail] = useState("");
  const [fname, setFname] = useState("");
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState(false);

  const valid = email === "" || fname === "" || message === "";

  const handleSubmit = (e) => {
    e.preventDefault();
    setAlert(!alert);
  };
  
  return (
    <>
      <section className="contact">
        <Back cover={cover} title="GET IN TOUCH" name="CONNECT WITH US" />
        <div className="container contact_form padding">
          <div className="Aside">
            <h4>You can reach us via</h4>
            <p>Tell us about your project and lets work our magic.</p>
            <div className="aside_box">
              <div className="contact_group">
                <FaSquarePhone className="Fa" />
                <span>
                  <a href="tel:+2348031942406">+ (234) 803 194 2406</a>
                </span>
              </div>
              <div className="contact_group">
                <FaEnvelopeCircleCheck className="Fa" />
                <span>
                  <a href="mailto:info@alexabentayga.com">
                    info@alexabentayga.com
                  </a>
                </span>
              </div>
              <div className="contact_group">
                <FaLocationDot className="Fal" />
                <span>
                  33, CliNand Estate, Plot 614, GUdu-Apo Road, Dutse Apo
                  District, Abuja
                </span>
              </div>
            </div>
          </div>

          <div className="Form">
            <h4>Let's Hear From You</h4>
            <p>Tell us about your project and lets work our magic.</p>
            <form>
              <div className="Input">
                <p className="label">E-mail:</p>
                <input
                  value={email}
                  type="email"
                  placeholder="Paul@gmail.com"
                  className="input_field"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="Input">
                <p className="label">Full Name:</p>
                <input
                  value={fname}
                  type="text"
                  placeholder="e.g Paul Ibeh"
                  className="input_field"
                  onChange={(e) => setFname(e.target.value)}
                />
              </div>

              <div className="Input">
                <p className="label">Message:</p>
                <textarea
                  value={message}
                  placeholder="Message Here"
                  className="textarea"
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <Button
                type="submit"
                title="Send"
                onClick={handleSubmit}
              />
            </form>
          </div>

          {alert ? (
            <div className="outnotice" onClick={() => setAlert(!alert)}>
              <div className="notice">
                <h2 className={valid ? "error" : "success"}>
                  {valid ? "ATTENTION!!!" : "MESSAGE SENT!"}
                </h2>
                <p className={valid ? "error" : "success"}>
                  {valid
                    ? "Please fill the inputs with the neccessary information."
                    : "Thank You for messaging us, we would reach out to you shortly"}
                </p>
              </div>
            </div>
          ): null}
        </div>
      </section>
    </>
  );
};

export default Contact;
