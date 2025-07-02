import React from "react";
import Image from "../imgs/footer.png";
import { FaCopy } from "react-icons/fa";
import toast from "react-hot-toast";
import { FooterData } from "../data/SiteData";
const Footer = () => {
  const copyHandler = (item) => {
    navigator.clipboard.writeText(item.value);
    toast.success("Copied !", {
      iconTheme: {
        primary: "#7456FF",
      },
    });
  };
  return (
    <div className="paddingX flex bg-black py-8">
      <div className="flex w-full flex-col items-start justify-center gap-3 sm:w-1/2 sm:gap-8">
        <h1 className="text-xl sm:text-3xl">Get in Touch</h1>
        <p className="w-3/4 text-sm text-white/60 sm:text-base">
          For business and partnership inquiry please contact me below!
        </p>
        <div className="flex flex-col gap-2">
          {FooterData.map((item) => {
            const Icon = item.icon;
            return (
              <div className="flex items-center justify-start gap-4">
                <div className="flex size-9 items-center justify-center rounded-full border">
                  <Icon />
                </div>
                <div className="flex flex-col">
                  <p className="text-sm text-white/60">{item.title}</p>
                  <div className="flex items-center justify-center gap-2">
                    <p>{item.value}</p>
                    <FaCopy
                      onClick={() => copyHandler(item)}
                      className="hover:text-lavender cursor-pointer text-sm"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="hidden w-1/2 items-center justify-end sm:flex">
        <img src={Image} alt="" className="h-5/6" />
      </div>
    </div>
  );
};

export default Footer;
