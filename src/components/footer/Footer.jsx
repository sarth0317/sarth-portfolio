import { motion } from "framer-motion";
import {
  FiArrowUp,
  FiInstagram,
  FiGithub,
  FiMail,
} from "react-icons/fi";
import "./Footer.css";

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        <motion.div
          className="footer-top"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="footer-brand">
            <span>SARTH</span>
            <small>VISUAL EDITOR / CREATIVE</small>
          </div>

          <button
            className="footer-top-button"
            onClick={scrollTop}
          >
            BACK TO TOP
            <FiArrowUp />
          </button>
        </motion.div>


        <div className="footer-line" />


        <div className="footer-middle">

          <div className="footer-statement">
            <span>EDIT.</span>
            <span>CREATE.</span>
            <strong>MOVE.</strong>
          </div>


          <div className="footer-links">

            <a
              href="https://instagram.com/sxrth_28?vrfl=Y3pva2ltNGp2NHJj&utm_source=qr"
              target="_blank"
              rel="noreferrer"
            >
              <FiInstagram />
              INSTAGRAM
            </a>

            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub />
              GITHUB
            </a>

            <a href="mailto:sarthssawant0317@gmail.com">
              <FiMail />
              EMAIL
            </a>

          </div>

        </div>


        <div className="footer-bottom">

          <span>
            © {new Date().getFullYear()} SARTH.
            ALL RIGHTS RESERVED.
          </span>

          <span>
            BUILT WITH INTENTION.
          </span>

          <span>
            09 / 09
          </span>

        </div>

      </div>
    </footer>
  );
}