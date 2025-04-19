import React from "react";
import Hero from './../Component/Hero';
import PhonContainer from './../Component/PhonContainer';
import { useLoaderData } from "react-router";

const Home = () => {
  const data = useLoaderData();
  // console.log(data);
  return (
    <div>
      <Hero/>
      <PhonContainer phons={data}/>
    </div>
  );
};

export default Home;
