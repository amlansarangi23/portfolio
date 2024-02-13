"use client";
import React from "react";
import Image from "next/image";
import image from "./Images/image.jpg"
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import bgimg from "./Images/image.jpg"

const HeroSection = () => {
  return (
    <div>
      {/* <Image src={bgimg} className="opacity-[0.5] z-[0] absolute top-0 left-0 w-[100%] h-inherit"></Image> */}
    <section className="pb-16">
      
      <div className="grid grid-cols-1 md:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-fuchsia-300 mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold text-center md:text-left opacity-95">
            <span className=" bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 z-10">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Amlan",
                1000,
                "a CSE Student",
                1000,
                "a Web Developer",
                1000,
                "a Programmer",
                1000,
                
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ffffff] text-lg mb-10 lg:text-xl md:w-5/6 text-center sm:text-left opacity-100">
          Welcome to my corner of the web! Here, you'll find a showcase of my projects, where I blend creativity with tech to create meaningful solutions. Join me on this journey as I explore the endless possibilities of coding and design!
          </p>
          <div className="flex justify-center md:justify-normal flex-wrap">
          <div className=" text-center md:text-left mr-5  max-[415px]:mb-10  max-[415px]:mx-auto">
            
            <Link
              href="https://drive.google.com/file/d/1oBxGRX_BznKOcNmlPNen6Yl-cbu-RcXX/view?usp=sharing"
              className="z=10 px-4 py-4 text-2xl rounded-full bg-violet-700 w-3/4 h-16 text-center hover:bg-sky-900 text-white border-slate-900 border-2 mt-5 m-auto"
            >
                Download CV
              
            </Link>
          </div>
          <div className="text-center md:text-left">
            
            <Link
              href=""
              className="z=10 px-4 py-4 text-2xl rounded-full bg-violet-700 w-3/4 h-16 text-center hover:bg-sky-900 text-white border-slate-900 border-2 mt-5 m-auto"
            >
                Contact Me
              
            </Link>
          </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[170px] h-[170px] md:w-[250px] md:h-[250px] xl:w-[400px] xl:h-[400px] relative mt-5">
            <Image
              src={image}
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
    </div>
  );
};

export default HeroSection;