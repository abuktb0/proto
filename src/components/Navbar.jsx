import { useScroll } from "../contexts/ScrollContext";
import { navbarData } from "../data/SiteData";

const Navbar = () => {

  const {AboutView, ExperienceView, QualitiesView, SkillsView,ContactView, setContactActive } = useScroll()

  const scrollHandler = (i) => {
    if(i.id === 2){
        AboutView.current?.scrollIntoView({ behavior: "smooth" });
    }else if(i.id === 3){
        ExperienceView.current?.scrollIntoView({ behavior: "smooth" });
      }else if(i.id === 4){
      QualitiesView.current?.scrollIntoView({ behavior: "smooth" });
    }else if(i.id === 5){
      SkillsView.current?.scrollIntoView({ behavior: "smooth" });
    }
    
    if(i.id === 6){
      ContactView.current?.scrollIntoView({ behavior: "smooth" });
      setContactActive(true)
    }
  }
  return (
    <div className="paddingX bg-background flex items-center justify-between py-6">
      <a href="/">
        <h1 className="text-3xl font-semibold">
          <span className="text-lavender">Al</span>-Khattab
        </h1>
      </a>

      <div className="hidden lg:block">
        <ul className="flex gap-10">
          {navbarData.map((item) => {
            return (
              <li className="group">
                <a
                onClick={() => scrollHandler(item)}
                  className={`cursor-pointer duration-300 ${
                    item.name === "Contact me"
                      ? "text-lavender rounded border-2 px-3 py-2 hover:border-white hover:text-white"
                      : `group-hover:text-white ${item.name === "Home" ? "text-white" : "text-white/50"}`
                  } `}
                >
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
