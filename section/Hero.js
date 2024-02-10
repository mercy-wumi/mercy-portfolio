import Button from "../components/Button";
import heroStyles from "../styles/section/Hero.module.css";
import Social from "../components/Social";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      className={heroStyles.hero}
      initial={{ y: 30, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
        },
      }}
    >
      <div>
        <h1 className={heroStyles.heading}>
          <span className={heroStyles.salute}>Hi, I'm</span>
          <span>Mercy Adams,</span>
          <span>Frontend Professional,</span>
        </h1>
        <p className={heroStyles.intro}>
          An experienced frontend developer with a strong foundation in
          frontend development and agile methodologies with proven track
          record of delivering high-quality software solutions, collaborating
          effectively in cross-functional teams, and staying updated with
          emerging technologies. My willingness to learn and improve my skills
          has put me ahead and relevant in my field and interest.
        </p>
        <a
          href="#contact"
          onClick={(e) => {
            let about = document.getElementById("contact");
            e.preventDefault();
            about &&
              about.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          <Button text="Contact Me!" />
        </a>
      </div>
      <div className={heroStyles.socialLinks}>
        <Social row="true" />
      </div>
    </motion.section>
  );
};

export default Hero;
