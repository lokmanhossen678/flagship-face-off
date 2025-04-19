import React from "react";
import { Link } from "react-router";

const PhonCard = ({ phone }) => {
  const { name, image, description, model } = phone || {};
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
          <Link to="/phonDeitailes">
            <button
              href="#_"
              class="relative inline-block px-4 py-2 font-medium group cursor-pointer"
            >
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
              <span className="relative text-black group-hover:text-white">
                View More
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PhonCard;
