import React from "react";
import PhonCard from "./PhonCard";

const PhonContainer = ({ phons }) => {
  console.log(phons);
  return (
    <div className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {
          phons.map(phone=><PhonCard key={phone.id} phone={phone} />)
        }
        
        <button className="btn btn-primary">Show All</button>
      </div>
    </div>
  );
};

export default PhonContainer;
