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
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nesciunt aspernatur deleniti, delectus modi minus fuga distinctio harum rerum dignissimos voluptatem, nostrum deserunt architecto, repellat ipsum libero. Est dicta aut quasi in necessitatibus placeat, consequuntur amet id qui nobis. A consequatur rerum nostrum deserunt! Veritatis, adipisci repellendus! Totam, ratione facilis?
          </p>
          </div>
          <div className="w-11/12 ml-[-1rem] ">
           <Tabs />
          </div>
           
      </div>
    </section>
  );
};

export default AboutSection;