import { motion } from "framer-motion";
import { FiArrowUpRight, FiMail, FiInstagram } from "react-icons/fi";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact">

      <div className="contact-glow" />

      <div className="contact-container">

        {/* LABEL */}

        <motion.div
          className="contact-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span>08</span>
          CONTACT
        </motion.div>


        {/* MAIN CTA */}

        <motion.div
          className="contact-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
        >
          <motion.span
            variants={{
              hidden: {
                opacity: 0,
                y: 70,
                filter: "blur(10px)",
              },
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0)",
                transition: {
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                },
              },
            }}
          >
            LET'S CREATE
          </motion.span>

          <motion.span
            variants={{
              hidden: {
                opacity: 0,
                y: 70,
                filter: "blur(10px)",
              },
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0)",
                transition: {
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                },
              },
            }}
          >
            SOMETHING
          </motion.span>

          <motion.strong
            variants={{
              hidden: {
                opacity: 0,
                y: 70,
                filter: "blur(10px)",
              },
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0)",
                transition: {
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                },
              },
            }}
          >
            UNFORGETTABLE.
          </motion.strong>
        </motion.div>


        {/* LOWER CONTENT */}

        <div className="contact-lower">

          {/* Availability */}

          <motion.div
            className="contact-availability"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.35,
            }}
          >
            <div className="availability-status">
              <span />
              AVAILABLE FOR PROJECTS
            </div>

            <p>
              Video editing
              <br />
              Motion & VFX
              <br />
              Short-form content
              <br />
              Creative collaborations
            </p>
          </motion.div>


          {/* CTA */}

          <motion.a
            href="mailto:your@email.com"
            className="contact-cta"
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.4,
            }}
          >
            <span>START A PROJECT</span>

            <div className="contact-cta-icon">
              <FiArrowUpRight />
            </div>
          </motion.a>

        </div>


        {/* SOCIAL LINKS */}

        <motion.div
          className="contact-links"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.55,
          }}
        >

          <a
            href="https://instagram.com/Sxrth_28"
            target="_blank"
            rel="noreferrer"
          >
            <FiInstagram />
            INSTAGRAM
          </a>

          <a href="mailto:sarthsssawant0317@gmail.com">
            <FiMail />
            EMAIL
          </a>

        </motion.div>


        {/* BOTTOM */}

        <div className="contact-bottom">
          <span>LET'S MAKE SOMETHING MOVE.</span>

          <span>08 / 08</span>
        </div>

      </div>
    </section>
  );
}