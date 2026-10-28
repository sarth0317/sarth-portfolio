import { motion } from "framer-motion";
import "./Arsenal.css";
 
const tools = [
  {
    number: "01",
    name: "PREMIERE PRO",
    role: "EDITING",
    description:
      "My primary workspace for sequencing and shaping the final story.",
    logo: "/logos/premiere-pro.png",
  },
  {
    number: "02",
    name: "AFTER EFFECTS",
    role: "MOTION / VFX",
    description:
      "Motion graphics, compositing, animation and visual effects.",
    logo: "/logos/after-effects.png",

  },
  {
    number: "03",
    name: "DAVINCI RESOLVE",
    role: "COLOR",
    description:
      "Color grading and finishing for another level of control.",
    logo: "/logos/davinci-resolve.png",
  },
  {
    number: "04",
    name: "PHOTOSHOP",
    role: "DESIGN",
    description:
      "Thumbnails, graphic elements, composition development.",
    logo: "/logos/photoshop.png",
  },
  {
    number: "05",
    name: "CAPCUT",
    role: "EDITING",
    description:
      "Used for quick edits and social media content with flashy needs.",
    logo: "/logos/capcut.png",
  },
];

export default function Arsenal() {
  return (
    <section id="tools" className="arsenal">
      <div className="arsenal-container">

        {/* Header */}

        <motion.div
          className="arsenal-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="arsenal-label">
            <span>05</span>
            THE ARSENAL
          </div>

          <div className="arsenal-heading">
            <span>THE TOOLS</span>
            <strong>
              I USE TO
              <br />
              BRING STORIES
              <br />
              TO LIFE.
            </strong>
          </div>

          <p>
            Software is only the instrument.
            The real work is knowing when,
            where and why to use it.
          </p>
        </motion.div>


        {/* Tool grid */}

        <div className="arsenal-grid">

          {tools.map((tool, index) => {
           

            return (
              <motion.article
                className={`tool-card ${
                  tool.large ? "tool-card-large" : ""
                }`}
                key={tool.number}
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
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                }}
              >

                <div className="tool-card-glow" />

                <div className="tool-top">
                  <span>{tool.number}</span>

                  <span className="tool-role">
                    {tool.role}
                  </span>
                </div>

                <div className="tool-icon">
  <img src={tool.logo} alt={`${tool.name} logo`} />
</div>

                <div className="tool-content">
                  <h3>{tool.name}</h3>

                  <p>{tool.description}</p>
                </div>

                <div className="tool-bottom">
                  <span>VIEW TOOL</span>
                  <span className="tool-arrow">↗</span>
                </div>

              </motion.article>
            );
          })}

        </div>


        {/* Adobe ecosystem strip */}

        <motion.div
          className="arsenal-strip"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="arsenal-strip-line" />

          <span>CREATIVE WORKFLOW</span>

          <div className="arsenal-strip-tools">
         
    
          </div>

          <span>FRAME → MOTION → COLOR → SOUND</span>
        </motion.div>

      </div>
    </section>
  );
}