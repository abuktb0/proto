import Left from "./ui/section1.left";
import heroPic from "../imgs/web.png";

const Hero = () => {
  return (
    <div className="flex h-[calc(100vh-140px)] justify-center">
      <div className="paddingX flex w-full items-center justify-center py-8 xl:w-1/2">
        <Left />
      </div>
      <div className="paddingX hidden w-1/2 py-8 xl:block">
        <div className="flex h-full w-full items-center justify-center">
          <img src={heroPic} alt="laptop" className="absolute size-92 right-0 opacity-10 scale-x-[-1]" />
          <img src={heroPic} alt="laptop" className="w-4/6 scale-x-[-1]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
