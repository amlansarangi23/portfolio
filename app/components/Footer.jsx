import React from "react";
import Image from "next/image";
import image from "./Images/icon.svg"

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent bg-[#6c426c] border-r-transparent text-white">
      <div className="container p-5 flex justify-between">
        <span><Image src={image}></Image></span>
        <p className="text-slate-200 my-auto">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;