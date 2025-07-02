import { useScroll } from "../contexts/ScrollContext";
import { WhyHireMe } from "../data/SiteData";

const Hire = () => {

  const {QualitiesView} = useScroll()

  return (
    <div ref={QualitiesView} className="paddingX relative flex flex-col items-center justify-center gap-8 py-32">
      <div className="my-4">
        <p className="text-4xl">Why Hire Me</p>
        <p className="text-stroke-3 absolute top-20 left-0 text-5xl text-white/0 opacity-10 sm:text-9xl">
          Why Hire Me
        </p>
      </div>
      <div className="flex flex-wrap gap-8 sm:flex-nowrap sm:gap-0">
        {WhyHireMe.map((item) => {
          const Icon = item.icon;
          return (
            <div className="flex flex-col items-center justify-center gap-2 sm:gap-4">
              <div className="bg-lavender/0 flex size-40 sm:size-48 items-center justify-center rounded-full border border-white/30">
                <div className="bg-lavender/10 hover:bg-lavender/20 border-lavender flex size-10/12 items-center justify-center rounded-full border duration-300">
                  <Icon className="text-lavender text-5xl"></Icon>
                </div>
              </div>
              <div className="flex w-2/3 flex-col gap-2">
                <h1 className="text-center text-lg font-semibold sm:text-2xl">
                  {item.title}
                </h1>
                <p className="text-center text-[12px] sm:text-sm text-white/70">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hire;
