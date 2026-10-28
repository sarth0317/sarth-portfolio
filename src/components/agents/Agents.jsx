import { motion } from "framer-motion";
import "./Agents.css";

const agents = [
  {
    number: "01",
    role: "EDITOR / VFX",
    name: "ATHARV SHINDE",
    username: "@atharvafx_",
    image: "/Images/atharv-shinde.png",
  },
  {
    number: "02",
    role: "CREATIVE EDITOR",
    name: "SARTHAK DEVKULE",
    username: "@iamsaarthak._",
    image: "/Images/sarthak.PNG",
  },
  {
    number: "03",
    role: "COLOR / VISUALS",
    name: "MAKARAND PATIL",
    username: "@makarand._03",
    image: "/Images/makarand.png",
  },
];

export default function Agents() {
  return (
    <section id="agents" className="agents">
      <div className="agents-container">

        {/* HEADER */}

        <motion.div
          className="agents-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="agents-label">
            <span>06</span>
            THE AGENTS
          </div>

          <div className="agents-heading">
            <span>THE CREATIVE</span>
            <strong>
              MINDS
              <br />
              BEHIND
              <br />
              THE VISION.
            </strong>
          </div>

          <p>
            Great work rarely happens alone.
            These are the creative minds I
            collaborate with to build something
            bigger than a single edit.
          </p>
        </motion.div>


        {/* AGENT GRID */}

        <div className="agents-grid">

          {agents.map((agent, index) => (
            <motion.article
              className="agent-card"
              key={agent.number}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}
            >

              {/* IMAGE */}

              <div className="agent-image">

                {agent.image ? (
                  <img
                    src={agent.image}
                    alt={agent.name}
                  />
                ) : (
                  <div className="agent-placeholder">
                    <span>{agent.number}</span>
                  </div>
                )}

                <div className="agent-image-overlay" />

                <div className="agent-scanline" />

                <div className="agent-status">
                  <span />
                  COLLABORATOR
                </div>

                <div className="agent-number">
                  {agent.number}
                </div>

              </div>


              {/* INFO */}

              <div className="agent-info">

                <div>
                  <span className="agent-role">
                    {agent.role}
                  </span>

                  <h3>
                    {agent.name}
                  </h3>
                </div>

               <a
  href={`https://www.instagram.com/${agent.username.replace("@", "")}/`}
  target="_blank"
  rel="noopener noreferrer"
  className="agent-link"
>
  {agent.username}
  <span>↗</span>
</a>

              </div>

            </motion.article>
          ))}

        </div>


        {/* FOOTER LINE */}

        <motion.div
          className="agents-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span>ONE VISION</span>

          <div className="agents-footer-line" />

          <span>MULTIPLE MINDS</span>

          <div className="agents-footer-dot" />
        </motion.div>

      </div>
    </section>
  );
}