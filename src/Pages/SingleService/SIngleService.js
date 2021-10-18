import React from 'react';
import './SingleService.css';

const SIngleService = ({ service }) => {
  const { name, price, description, img } = service;
  return (
    <div className="service ">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <h5>Price:{price}</h5>
      <p className="px-5">{description}</p>
    </div>
  );
};

export default SIngleService;
