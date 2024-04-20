import React from 'react'
import "../Services.css"
import Heading from '../../Common/Heading'
import { Whyus } from '../../Data/Data';
import Card from '../../Common/Card/Card';

const WhyUs = () => {
  return (
    <>
      <section className="whyus padding">
        <div className="container whyus">
          <Heading title="Why Choose Us?" />
          <br />
          <div className="grid2">
            {Whyus.map((value) => (
              <div className="thumbnail" key={value.id}>
                <span>{value.icon} </span>
                <h4>{value.title}</h4>
                <p>{value.text}</p>
              </div>
              // <Card value={value} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default WhyUs