import Social from "../components/Social";
import footerStyles from "../styles/section/Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={footerStyles.footer}>
        <span>
          Crafted and Designed by{" "}
          <span className={footerStyles.crafted}>Adams Mercy</span>
        </span>
        <Social row="false" />
      </div>
    </footer>
  );
};

export default Footer;
