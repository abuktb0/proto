import { IoIosArrowBack } from "react-icons/io";
import Slider from "./ui/slider";
import mobile from "../imgs/mobile.png";
import web from "../imgs/web.png";
import todo from "../imgs/todo.png";
import { useState } from "react";
import { useRef } from "react";
import { useScroll } from "../contexts/ScrollContext";

const Slide = () => {
  const [state, setState] = useState(2);
  const {AboutView} = useScroll()
  return (
    <div ref={AboutView} className="paddingX my-32 py-2 flex flex-col items-center justify-center gap-4 lg:gap-8">
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="text-base text-white/50 lg:text-xl">What Do I Offer</p>
        <p className="w-2/3 text-center text-xl lg:text-3xl">
          Creates Professional Design That’s Oriented Towards Client Needs
        </p>
      </div>

      <div>
        <div className="border-lavender/10 bg-lavender/2 flex items-center justify-center gap-8 rounded-lg border p-6 lg:p-16">
          <button
            className={`${state === 1 ? "block" : "hidden"} lg:block`}
            onClick={() => setState(1)}
          >
            <Slider
              image={todo}
              active={state === 1 ? true : false}
              text="UI/UX Planning"
            />
          </button>
          <button
            className={`${state === 2 ? "block" : "hidden"} lg:block`}
            onClick={() => setState(2)}
          >
            <Slider
              image={web}
              active={state === 2 ? true : false}
              text="Web Applications"
            />
          </button>
          <button
            className={`${state === 3 ? "block" : "hidden"} lg:block`}
            onClick={() => setState(3)}
          >
            <Slider
              image={mobile}
              active={state === 3 ? true : false}
              text="Mobile Applications"
            />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4">
        <IoIosArrowBack
          onClick={() =>
            setState(state === 1 ? 3 : state === 2 ? 1 : state === 3 ? 2 : 1)
          }
          className="hover:text-lavender cursor-pointer text-2xl duration-300 lg:text-4xl"
        />
        <button
          onClick={() => setState(1)}
          className={`hover:bg-lavender h-1 w-8 cursor-pointer rounded duration-300 lg:h-2 lg:w-12 ${
            state === 1 ? "bg-lavender" : "bg-white/30"
          }`}
        />
        <button
          onClick={() => setState(2)}
          className={`hover:bg-lavender h-1 w-8 cursor-pointer rounded duration-300 lg:h-2 lg:w-12 ${
            state === 2 ? "bg-lavender" : "bg-white/30"
          }`}
        />
        <button
          onClick={() => setState(3)}
          className={`hover:bg-lavender h-1 w-8 cursor-pointer rounded duration-300 lg:h-2 lg:w-12 ${
            state === 3 ? "bg-lavender" : "bg-white/30"
          }`}
        />
        <IoIosArrowBack
          onClick={() =>
            setState(state === 1 ? 2 : state === 2 ? 3 : state === 3 ? 1 : 2)
          }
          className="hover:text-lavender rotate-180 cursor-pointer text-2xl duration-300 lg:text-4xl"
        />
      </div>
    </div>
  );
};

export default Slide;
