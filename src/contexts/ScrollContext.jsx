import { useState } from "react";
import { createContext, useContext, useRef } from "react";

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const AboutView = useRef(null);
  const ContactView = useRef(null);
  const ExperienceView = useRef(null);
  const QualitiesView = useRef(null);
  const SkillsView = useRef(null);

const [contactActive, setContactActive] = useState(false)

  return (
    <ScrollContext.Provider value={{ AboutView, ContactView, ExperienceView, QualitiesView, SkillsView, contactActive, setContactActive }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);
