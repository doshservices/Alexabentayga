import React from 'react'

const Card = ({value}) => {
  return (
    <>
      <div className="thumbnail" key={value.id}>
        <img src={value.icon} alt="" className={value.title} />
        <h4>{value.title}</h4>
        <p>{value.text}</p>
      </div>
    </>
  );
}

export default Card