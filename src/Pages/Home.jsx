import React, { useState } from "react";
import Hero from './../Component/Hero';
import PhonContainer from './../Component/PhonContainer';
import { useLoaderData } from "react-router";

const Home = () => {
  const data = useLoaderData();
  const [phons, setPhons]=useState(data);
  const handleSearch = (e, text)=>{
    e.preventDefault()
   const searchPhons = data.filter(phone=>
    phone?.name?.toLowerCase.split(' ').includes (text.toLowerCase))||
    phone.brand?.toLowerCase.split(' ').includes (text.toLowerCase))
    setPhons(searchPhons)
  }
  return (
    <div>
      <Hero handleSearch={handleSearch}/>
      <PhonContainer phons={phons}/>
    </div>
  );
};

export default Home;
