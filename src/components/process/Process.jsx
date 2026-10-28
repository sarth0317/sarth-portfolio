import { motion } from "framer-motion";
import "./Process.css";

const steps = [
  {
    number: "01",
    title: "DISCOVERY",
    text: "Understand the story, audience, references and direction before touching the timeline.",
  },
  {
    number: "02",
    title: "EDITING",
    text: "Shape raw footage into a deliberate sequence with pacing, structure and visual rhythm.",
  },
  {
    number: "03",
    title: "SOUND + MUSIC",
    text: "Build the emotional layer through music, sound design, transitions and timing.",
  },
  {
    number: "04",
    title: "COLOR + POLISH",
    text: "Refine the visual identity through color, motion, effects and the details that make the cut feel finished.",
  },
  {
    number: "05",
    title: "DELIVERY",
    text: "Export the final piece in the right format, resolution and platform specification.",
  },
];

export default function Process() {
  return (
    <section id="process" className="process">
      <div className="process-container">

        {/* Header */}

        <motion.div
          className="process-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="process-label">
            <span>04</span>
            THE PROCESS
          </div>

          <div className="process-heading">
            <span>FROM RAW CLIP</span>
            <strong>TO FINAL CUT.</strong>
          </div>

          <p>
            From the first frame to the final export,
            every stage has a purpose.
          </p>
        </motion.div>


        {/* Timeline */}

        <div className="process-layout">

          <div className="process-timeline">

            <div className="timeline-line">
              <motion.div
                className="timeline-progress"
                initial={{ height: "0%" }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{
                  duration: 2.2,
                  ease: "easeInOut",
                }}
              />
            </div>


            {steps.map((step, index) => (
              <motion.div
                className="process-step"
                key={step.number}
                initial={{
                  opacity: 0,
                  x: -25,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.1,
                }}
              >

                <div className="step-marker">
                  <span />
                </div>

                <div className="step-content">

                  <span className="step-number">
                    {step.number}
                  </span>

                  <h3>{step.title}</h3>

                  <p>{step.text}</p>

                </div>

                <span className="step-arrow">
                  ↗
                </span>

              </motion.div>
            ))}

          </div>


          {/* Right visual */}

          <motion.div
            className="process-visual"
            initial={{
              opacity: 0,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 1,
              delay: 0.25,
            }}
          >

            <div className="process-visual-grid" />

            <div className="process-screen">

              <div className="screen-top">
                <span>TIMELINE</span>
                <span>EDIT_04</span>
              </div>

              <div className="screen-content">

                <div className="screen-play">
                  ▶
                </div>

                <div className="screen-time">
                  00:42:18
                </div>

              </div>

              <div className="timeline-preview">

                <span />
                <span />
                <span />
                <span />
                <span />
                <span />

              </div>

            </div>

            <div className="visual-caption">
              <span>WORKFLOW</span>
              <span>FRAME / 0428</span>
            </div>

          </motion.div>

        </div>


        {/* Bottom */}

        <motion.div
          className="process-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span>RAW FOOTAGE</span>
          <div />
          <span>FINAL CUT</span>
        </motion.div>

      </div>
    </section>
  );
}