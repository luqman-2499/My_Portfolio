import { CometCard } from "@/components/ui/comet-card";

import RCT from "../assets/Skills_Images/React.png";
import NDE from "../assets/Skills_Images/Nodejs.png";
import GTH from "../assets/Skills_Images/GitHub.png";
import MGDB from "../assets/Skills_Images/MongoDB.png";
import SQL from "../assets/Skills_Images/SQL.png";
import TCS from "../assets/Skills_Images/TaillwindCSS.png";
import PHY from "../assets/Skills_Images/Python.png";
import JS from "../assets/Skills_Images/JavaScript.png";
import PD from "../assets/Skills_Images/Pandas.png";
import NP from "../assets/Skills_Images/NumPy.png";

import { useRef, useEffect } from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";


const SkillSection = () => {


  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    
    // ANIMATE THE TITLE TEXT
    gsap.fromTo(
      titleRef.current,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    
    // ANIMATE EACH SKILL CARD

    cardRefs.current.forEach((card, idx) => {
      gsap.fromTo(
        card,
        { y: 80, opacity: 0 }, // start hidden and below
        {
          y: 0,
          opacity: 1,
          duration: 1 + idx * 0.07, // stagger for cascading effect
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%", // trigger as each card enters viewport
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  
  
  const skills = [
    {
      id: 1,
      title: "REACT JS",
      image: RCT,
      alt: "REACT",
    },
    
    {
      id: 2,
      title: "Tailwind CSS",
      image: TCS,
      alt: "Tailwind CSS",
    },
    
    {
      id: 3,
      title: "JavaScript",
      image: JS,
      alt: "JavaScript",
    },
    
    {
      id: 4,
      title: "NODE JS",
      image: NDE,
      alt: "NODE JS",
    },
    
    {
      id: 5,
      title: "MongoDB",
      image: MGDB,
      alt: "MongoDB",
    },
    
    {
      id: 6,
      title: "SQL DATABASE",
      image: SQL,
      alt: "SQL DATABASE",
    },
    
    {
      id: 7,
      title: "Git & GitHub",
      image: GTH,
      alt: "Git & GitHub",
    },
    
    {
      id:8,
      title: "Python",
      image: PHY,
      alt: "Python"
    },
    
    {
      id:9,
      title: "Pandas",
      image: PD,
      alt: "Pandas"
    },
    
    {
      id:10,
      title: "NumPy",
      image: NP,
      alt: "NumPY"
    },
  ];

  return (
    <section
      id="skills"
      className="py-16 bg-gradient-to-b from-black via-[#9426c7] to-black"
    >
      {/* Title */}
      <h1 
      ref={titleRef}
      className="mb-12 text-4xl font-bold text-center text-white md:text-6xl">
        TECH SKILLS
      </h1>
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-5">
        {skills.map((skill, idx) => (
          <CometCard key={skill.id}>
            <button
              type="button"
              ref={el => cardRefs.current[idx]= el}
              className="my-10 flex w-60 cursor-pointer flex-col items-stretch rounded-[10px] border-0 bg-[#1F2121] p-2 md:my-20 md:p-4"
              aria-label={`View ${skill.title}`}
              style={{
                transformStyle: "preserve-3d",
                transform: "none",
              }}
            >
              <div className="flex-1 mx-2">
                <div className="relative mx-auto mt-2 aspect-square w-75">
                  <img
                    loading="lazy"
                    className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-contain contrast-75"
                    alt={skill.alt}
                    src={skill.image}
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                      opacity: 1,
                    }}
                  />
                </div>
              </div>
              <div className="p-4 mt-2 font-mono text-center text-white">
                <div className="text-lg font-semibold md:text-2xl">{skill.title}</div>
              </div>
            </button>
          </CometCard>
        ))}
      </div>
    </section>
  );
};

export default SkillSection;