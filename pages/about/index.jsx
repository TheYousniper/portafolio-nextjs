import React, { useState } from "react";
import Link from "next/link";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

//  data
const htmlIcon = <FaHtml5 />;
const cssIcon = <FaCss3 />;
const jsIcon = <FaJs />;
const reactIcon = <FaReact />;
const nextIcon = <SiNextdotjs />;
const framerIcon = <SiFramer />;
const wordpressIcon = <FaWordpress />;
const figmaIcon = <FaFigma />;
const adobexdIcon = <SiAdobexd />;
const adobephotoshopIcon = <SiAdobephotoshop />;
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          htmlIcon,
          cssIcon,
          jsIcon,
          reactIcon,
          nextIcon,
          framerIcon,
          wordpressIcon,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [figmaIcon, adobexdIcon, adobephotoshopIcon],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Frontend Development Director",
        stage: "2023 - Present",
      },
      {
        title: "Freelancer",
        stage: "2018 - 2023",
      },
      {
        title: "University Teacher",
        stage: "2008 - 2018",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Full Stack Web Developer - Henry Bootcamp",
        stage: "2023",
        url: "https://certificates.soyhenry.com/new-cert?id=9b097f25e28695ff2009fafe3f60e857984a6ad820b8a4371c862b2b574754b1",
      },
      {
        title: "Teaching Assistant - Henry Bootcamp",
        stage: "2023",
        url: "https://certificates.soyhenry.com/new-cert?id=8e3aac27d2923e54ead3d4c585d6a1026bdfd7b67f377c78f703f006a71e823f",
      },
      {
        title: "JavaScript Algorithms and Data Structures - FreeCodeCamp",
        stage: "2023",
        url: "https://freecodecamp.org/certification/fccf15639f2-7e74-4854-9722-2500015cf26b/javascript-algorithms-and-data-structures",
      },
      {
        title: "Web Application Development with React - Academlo",
        stage: "2022",
        url: "https://i.postimg.cc/9Qy4cXf7/modulo02.png",
      },
      {
        title: "Web Development Fundamentals - Academlo",
        stage: "2022",
        url: "https://i.postimg.cc/QMkWJNG3/modulo01.png",
      },
      {
        title: "Responsive Web Design - FreeCodeCamp",
        stage: "2022",
        url: "https://freecodecamp.org/certification/fccf15639f2-7e74-4854-9722-2500015cf26b/responsive-web-design",
      },
    ],
  },
];

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Captivating <span className="text-accent">stories</span> birth
            magnificent designs.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            10 year ago, I began freelancing as a developer. Since then,
            I&apos;ve done remote work for agencies, counsulted for startups,
            and collaborated on digital products for bussines and consumer use.
          </motion.p>
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={4} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div>
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={150} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied clients
                </div>
              </div>
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={80} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished Projects
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className=" flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={` ${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  <div className="font-light mb-2 md:mb-0 hover:text-accent transition-all duration-300">
                    {item.url ? (
                      <Link href={item.url} target="blanck">
                        {item.title}
                      </Link>
                    ) : (
                      item.title
                    )}
                  </div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {item.icons?.map((icon, iconIndex) => {
                      return (
                        <div key={iconIndex} className="text-2xl text-white">
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
