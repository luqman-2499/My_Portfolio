import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const AboutSection = () => {

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const introRef = useRef(null);


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);


    // TITLE ANIMATION
    gsap.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
          toggleActions: "play none none reverse",
        },
      }
    );


    // INTRO ANIMATION
    gsap.fromTo(
      introRef.current,
      { y: 100, opacity: 0, filter: "blur(10px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
          toggleActions: "play none none reverse",
        },
      }
    );

  }, []); // run only once from-black to-[#121019]


  return (
    <section
      ref={sectionRef}
      id="AboutSection"
      className="relative overflow-hidden bg-gradient-to-b from-black to-[#121019]"
    >
      <div className="container px-4 py-24 mx-auto md:py-32">
        <h1
          ref={titleRef}
          className="mb-12 text-4xl font-bold text-center text-white opacity-0 md:text-6xl"
        >
          About Me
        </h1>

        <div
          ref={introRef}
          // CHANGE: ensure clean two-column on desktop, stacked on mobile, matching screenshot spacing
          className="grid items-center gap-8 opacity-0 md:grid-cols-2 md:gap-14"
        >
          {/* CHANGE: placeholder copy kept; you can replace it later. Adjusted line-breaks to avoid awkward hyphenation */}
          <p className="text-base font-bold leading-7 tracking-wide text-purple-200 md:text-2xl md:leading-9">
          Hi, I am Luqman Khan — an ambitious MERN-Stack Developer.
          I specialize in building modern, responsive, and scalable web applications using the MERN Stack.
          Proficient in React, JavaScript, Node.js I stay focused crafting clean, efficient, and maintainable code to develop real-world projects.
          In addition I am also proficient in Python programming and its libraries such as Pandas and NumPy. Expereinced in analyzing large datasets using python libraries.
          Skilled at leveraging AI-powered tools to boost productivity, with strong communication skills and a collaborative approach to team-driven development.
          </p>

          {/* CHANGE: right-aligned avatar with object-contain and safe bounds so it never clips */}
          <div className="flex justify-center md:justify-end">
            <img
              className="object-contain max-h-[28rem] md:max-h-[32rem] lg:max-h-[36rem]"
              src="/images/person.png"
              alt="profile-pic"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
