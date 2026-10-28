import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import "./SelectedWorks.css";

const portraitWorks = [
  {
    number: "02",
    category: "EDITZ",
    title: "Influencer Edit",
    video: "/videos/reel-02.mp4",
  },
  {
    number: "03",
    category: "EDITZ",
    title: "Troll Speedramp",
    video: "/videos/reel-03.mp4",
  },
  {
    number: "04",
    category: "PHONK",
    title: "Party Edit",
    video: "/videos/reel-04.mp4",
  },
  {
    number: "05",
    category: "Presets",
    title: "Birthday Edit",
    video: "/videos/reel-05.mp4",
  },
];

function VideoCard({ video, number, category, title, featured = false }) {
  const handleEnter = async (event) => {
    const media = event.currentTarget;

    try {
      media.muted = false;
      media.volume = 0.8;
      await media.play();
    } catch (error) {
      // Browser may block sound until the user interacts with the page.
      media.muted = true;

      try {
        await media.play();
      } catch {
        // Ignore playback errors.
      }
    }
  };

  const handleLeave = (event) => {
    const media = event.currentTarget;

    media.pause();
    media.currentTime = 0;
  };

  return (
    <motion.article
      className={`work-card ${featured ? "work-card-landscape" : ""}`}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7 }}
    >
      <div
  className="work-media"
  onClick={(event) => {
    if (window.matchMedia("(hover: none)").matches) {
      const media = event.currentTarget.querySelector("video");

      if (media.paused) {
        handleEnter({ currentTarget: media });
      } else {
        handleLeave({ currentTarget: media });
      }
    }
  }}
        onMouseEnter={(event) => {
          if (window.matchMedia("(hover: hover)").matches) {
            handleEnter({
              currentTarget:
                event.currentTarget.querySelector("video"),
            });
          }
        }}
        onMouseLeave={(event) => {
          if (window.matchMedia("(hover: hover)").matches) {
            handleLeave({
              currentTarget:
                event.currentTarget.querySelector("video"),
            });
          }
        }}
      >
        <video
          src={video}
          muted
          loop
          playsInline
          preload="metadata"
        />

        <div className="work-media-overlay" />

        <span className="work-number">
          {number}
        </span>

        {/* Sound indicator */}
        <span className="work-sound">
          <span className="sound-bars">
            <i />
            <i />
            <i />
            <i />
          </span>

          <span className="sound-text">
            SOUND
          </span>
        </span>

        <span className="work-open">
          <FiArrowUpRight />
        </span>
      </div>

      <div className="work-info">
        <div>
          <span className="work-category">
            {category}
          </span>

          <h3>{title}</h3>
        </div>
      </div>
    </motion.article>
  );
}

export default function SelectedWorks() {
  return (
    <section id="work" className="works">

      <div className="works-container">

        {/* HEADER */}

        <motion.div
          className="works-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-label">
            <span>02</span>
            SELECTED WORKS
          </div>

          <div className="works-heading-row">
            <h2>
              SELECTED
              <br />
              WORKS<span>.</span>
            </h2>

            <p>
              A curated collection of
              visual stories, edits and
              cinematic experiments.
            </p>
          </div>
        </motion.div>


        {/* FEATURED LANDSCAPE */}

        <VideoCard
          number="01"
          category="SHOWREEL"
          title="Selected Visuals"
          video="/videos/landscape-01.mp4"
          featured
        />


        {/* PORTRAIT REELS */}

        <div className="portrait-grid">

          {portraitWorks.map((work) => (
            <VideoCard
              key={work.number}
              {...work}
            />
          ))}

        </div>


        {/* SECOND LANDSCAPE */}

        <VideoCard
          number="06"
          category="FEATURED PROJECT"
          title="Cinematic Work"
          video="/videos/landscape-02.mp4"
          featured
        />


        {/* VIEW ALL */}

        <motion.a
          href="#"
          className="works-view-all"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          VIEW ALL WORK

          <span>
            <FiArrowUpRight />
          </span>
        </motion.a>

      </div>

    </section>
  );
}