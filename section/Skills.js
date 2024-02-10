import { useState } from "react";
import Experience from "../components/Experience";
import Heading from "../components/Heading";
import skillStyles from "../styles/section/Skills.module.css";
import { motion } from "framer-motion";
import { animateIn } from "../components/Animation";
import { useScroll } from "../components/useScroll";

const works = [
//   {
//     id: 1,
//     jobTitle: "Technical Contributor (Smart Contract developer)",
//     company: "Web3Ladies",
//     date: "2024 - Present",
//     jobDesc: [
//       "Working to improve the community brand and products",
//       "Working on web3 forntend and writing smart contracts",
//     ],
//   },
  {
    id: 1,
    jobTitle: "Frontend Developer",
    company: "Wiseki Technologies",
    date: "2023 - Present",
    jobDesc: [
      "Developed an E-commerce application",
      "Connected applications with apis, code reviews and debugging",
      "Brainstorming and ensuring user friendliness",
    ],
  },
  {
    id: 2,
    jobTitle: "Frontend Developer",
    company: "DigiScript Technical Solutions",
    date: "2021 - 2022",
    jobDesc: [
      "Developed user interface codes that are scalable, reusable and efficient using ReactJs",
      "Reviewed other team member's code for better performance and optimization",
      "Collaborated on building a blockchain MVP app with team members",
    ],
  },
  {
    id: 3,
    jobTitle: "Frontend Developer",
    company: "Ohealth",
    date: "2020 - 2021",
    jobDesc: [
      "Redesigned the existing company’s website ",
      "Created company’s ohealth web application using ReactJs, Rest Api, Material UI",
      "Created and implemented web pages for laboratories registered with the company to be able to track users booking for Covid test from the company’s mobile application, increasing the company’s revenue by over 30%",
    ],
  },
];

const Skills = () => {
  const [element, controls] = useScroll();
  const [workToDisplay, setWorkToDisplay] = useState(works[0]);

  const handleClick = (id) => {
    setWorkToDisplay(works[id - 1]);
    console.log(id);
  };
  return (
    <section id="skill">
      <Heading title="Work Experience" />
      <motion.div
        ref={element}
        variants={animateIn}
        animate={controls}
        className={skillStyles.skills}
      >
        <ul className={skillStyles.work}>
          {works.map((work) => (
            <li
              onClick={() => handleClick(work.id)}
              key={work.id}
              className={`${
                workToDisplay.id === work.id ? skillStyles.clicked : ""
              }`}
            >
              {work.company}
            </li>
          ))}
        </ul>
        <Experience works={workToDisplay} />
      </motion.div>
    </section>
  );
};

export default Skills;
