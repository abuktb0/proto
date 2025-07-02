import React from "react";
import { useState } from "react";

const Button = ({ type, icon, href, text }) => {
  const Icon = icon ? icon : "";

  return (
    <a
    download="CV-Youssef-louza.pdf"
      target="_blank"
      href={href}
      className={`cursor-pointer px-5 py-2 gap-2 font-semibold flex justify-center text-sm lg:text-base items-center rounded ${
        type ? "bg-lavender hover:bg-lavender/50 duration-500 " : "border hover:bg-white/30 duration-500"
      }`}
    >
      {icon && <Icon />}
      <p>{text}</p>
    </a>
  );
};

export default Button;
