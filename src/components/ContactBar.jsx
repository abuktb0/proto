import { useState } from "react";
import { useScroll } from "../contexts/ScrollContext";
import { contactBarData } from "../data/SiteData";
import { useEffect } from "react";
const ContactBar = () => {
  const [background, setBackground] = useState("bg-none")

  const {ContactView, contactActive, setContactActive} = useScroll()

  useEffect(() => {
    if(contactActive === true){
      setBackground("bg-lavender/10")
      setTimeout(() => {
        setBackground("bg-none")
        setContactActive(false)
      }, 800)
    }
  }, [contactActive])
  return (
    <div ref={ContactView} className={`${background} duration-500 flex w-full py-2 flex-col items-center justify-end gap-4 px-24 lg:flex-row lg:gap-8`}>
      <p className="text-lg font-semibold">Find me on</p>
      <div className="flex gap-2 lg:gap-4 xl:gap-8">
        {contactBarData.map((item) => {
          return (
            <a
              target="_blank"
              key={item.id}
              href={item.link}
              className="bg-lavender/10 flex size-10 items-center justify-center rounded-full hover:bg-black/10"
            >
              <item.image className="text-lavender text-base" />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default ContactBar;
