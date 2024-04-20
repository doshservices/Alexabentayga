import React from 'react'
import "../Services.css";
import Heading from '../../Common/Heading';
import { Ourcore } from '../../Data/Data';
// import Card from '../../Common/Card/Card';

const CoreServices = () => {
  return (
    <>
      <section className="coreservices padding">
        <div className="container ourcore">
          <Heading
            title="
                Our Core Services"
          />
          <br />
          <div className="grid2">
            {Ourcore.map((value) => (
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

export default CoreServices