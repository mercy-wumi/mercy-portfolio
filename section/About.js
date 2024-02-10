import Image from "next/image";
import Heading from "../components/Heading";
import aboutStyles from "../styles/section/About.module.css";
import { motion } from "framer-motion";
import { animateIn } from "../components/Animation";
import { useScroll } from "../components/useScroll";

const About = () => {
  const [element, controls] = useScroll();
  return (
    <section id="about-me" ref={element}>
      <Heading title="About Me" />
      <motion.div
        variants={animateIn}
        animate={controls}
        className={aboutStyles.container}
      >
        <div className={aboutStyles.aboutme}>
          <div className={aboutStyles.desc}>
            <p>
              Hello again! Here is a bit more about Mercy, a frontend developer
              with over three years of collaborating and building scalable web
              applications.
            </p>
            <p>
              Over the years, I have worked with organisations remotely and
              on-site building products using relevant and up to date skill sets
              while ensuring user friendliness. Part of what I do on a regular
              basics includes bringing designs to live with accurate match, code
              reviews with team members, connecting application with apis, code
              debugging with team members, and more.
            </p>
            <p>
              As learning and staying relevant has always been my goal, I am
              currently learning and building web3 applications. I concluded a
              Blockchain Development (Cohort IV 2023 Training) organized by
              Web3Ladies where myself and other team members worked on a web3
              project which I am proud of.
            </p>
            <p>
              Aside tech, I bake, read, write articles and explore youtube to
              learn new stuffs sometimes.
            </p>
            <p>Here are some of the technologies I work with:</p>
            <div className={aboutStyles.stack}>
              <ul className={aboutStyles.stackList}>
                <li>JavaScript</li>
                <li>React</li>
                <li>GraphQL</li>
              </ul>
              <ul>
                <li>NextJs</li>
                <li>TypeScript</li>
                <li>Solidity</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={aboutStyles.img}>
          <Image
            src="/images/profile.jpg"
            width={300}
            height={400}
            alt="Profile Picture"
            className={aboutStyles.profileImg}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default About;
