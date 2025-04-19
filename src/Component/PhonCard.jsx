import React from "react";

const PhonCard = ({ phone }) => {
  const { name, image, description, model } = phone || {} ;
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img src={image} alt="Phone" />
      </figure>
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="card-title">{name}</h2>
          <h2 className="card-title">{model}</h2>
        </div>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View More</button>
        </div>
      </div>
    </div>
  );
};

export default PhonCard;
