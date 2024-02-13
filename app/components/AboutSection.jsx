"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import image from "./Images/image.jpg"
import Tabs from "./Tabs"



const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 mb-10">

        <div className="mr-7 mb-10 text-center lg:text-left">
          <h2 className="text-5xl font-bold text-white mb-4 ">About Me</h2>
          <div
          className="w-[35%] lg:w-[53%] xl:w-[40%] 2xl:w-[33%] h-1 bg-fuchsia-700 mb-5 m-auto lg:ml-0"></div>
          <p className="text-lg lg:text-xl">
          I'm Amlan Sarangi, a passionate Computer Science ans Engineering sophomore at NIT Rourkela, with a keen interest in Web Development and leveraging technology to tackle real-world challenges.
          <br></br>
          <br></br>
          I am equipped with relevant skills including MERN stack, DSA in C++ and various other CS core concepts.
          <br></br>
          <br></br>
          I am part of the official Web Dev club of NITR, Webwiz where I am a Pod Leader and also a part of its annual hackathon HackOdisha's organising team which had over 3000 participants.
          </p>
          </div>
          <div className="w-11/12 ml-[-1rem]">
           <Tabs />
          </div>
           
      </div>
    </section>
  );
};

export default AboutSection;