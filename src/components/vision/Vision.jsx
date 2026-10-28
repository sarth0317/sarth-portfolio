import { motion } from "framer-motion";
import "./Vision.css";

const principles = [
  {
    number: "01",
    title: "STORY",
    text: "Every edit begins with something worth saying.",
  },
  {
    number: "02",
    title: "RHYTHM",
    text: "Timing, pacing and sound create the emotion.",
  },
  {
    number: "03",
    title: "IMPACT",
    text: "The final frame should leave something behind.",
  },
];

export default function Vision() {
  return (
    <section id="vision" className="vision">

      <div className="vision-bg-number">
        03
      </div>

      <div className="vision-container">

        {/* Section label */}

        <motion.div
          className="vision-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span>03</span>
          THE VISION
        </motion.div>


        {/* Main statement */}

        <div className="vision-main">

          <motion.div
            className="vision-heading"
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
                  filter: "blur(12px)",
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
              I DON'T
            </motion.span>

            <motion.span
              variants={{
                hidden: {
                  opacity: 0,
                  y: 70,
                  filter: "blur(12px)",
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
              EDIT
            </motion.span>

            <motion.span
              className="vision-outline"
              variants={{
                hidden: {
                  opacity: 0,
                  y: 70,
                  filter: "blur(12px)",
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
              VIDEOS.
            </motion.span>

          </motion.div>


          <motion.div
            className="vision-divider"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.5,
            }}
          />


          <motion.div
            className="vision-second-heading"
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: 0.35,
            }}
          >
            <span>I CRAFT</span>
            <strong>EXPERIENCES.</strong>
          </motion.div>

        </div>


        {/* Description */}

        <motion.div
          className="vision-description"
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
        >
          <span className="vision-description-line" />

          <p>
            An edit isn't just a sequence of clips.
            It's the rhythm between moments —
            knowing what to show, what to hide,
            and exactly when to make someone feel
            something.
          </p>
        </motion.div>


        {/* Principles */}

        <div className="vision-principles">

          {principles.map((principle, index) => (
            <motion.div
              key={principle.number}
              className="vision-principle"
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}
            >

              <span className="principle-number">
                {principle.number}
              </span>

              <h3>
                {principle.title}
              </h3>

              <p>
                {principle.text}
              </p>

              <span className="principle-arrow">
                ↗
              </span>

            </motion.div>
          ))}

        </div>


        {/* Bottom statement */}

        <motion.div
          className="vision-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span>
            FRAME BY FRAME
          </span>

          <div />

          <span>
            INTENTION BY INTENTION
          </span>
        </motion.div>

      </div>
    </section>
  );
}