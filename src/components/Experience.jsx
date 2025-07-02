import section3bg from "../imgs/section3bg.png";

import { WorkInfo } from "../data/SiteData";
import { useScroll } from "../contexts/ScrollContext";
const Experience = () => {

  const {ExperienceView} = useScroll()

  return (
    <div
    ref={ExperienceView}
      className={`bg-cover paddingX py-28 relative flex flex-wrap justify-center items-center gap-4`}
      style={{ backgroundImage: `url(${section3bg})` }}
    >
      <div className="absolute h-full w-full bg-lavender/30 top-0">
      <div className="absolute h-full w-full bg-black/80">

      </div>
      </div>
      {WorkInfo.map((item) => {
        return (
          <div
          key={item.id}
            className={`z-0 size-36 sm:size-48 lg:size-52 bg-[#101010] flex flex-col gap-4 justify-center items-center rounded-xl border-dashed border-2  ${
              item.title === "Completed Projects" ? "bg-lavender border-none" : ""
            }`}
          >
            <p className="text-3xl sm:text-5xl">{item.value}</p>
            <p className="text-[12px] sm:text-sm">{item.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Experience;
