import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiPlay } from "react-icons/fi";
import "./Hero.css";

const words = ["VISUALS", "THAT", "MOVE", "PEOPLE"];

const wordVariants = {
  hidden: {
    opacity: 0,
    y: 70,
    filter: "blur(12px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Hero() {
  const heroVideoRef = useRef(null);

  const [heroSound, setHeroSound] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);

  const toggleHeroSound = () => {
    const video = heroVideoRef.current;

    if (!video) return;

    video.muted = !heroSound;
    setHeroSound(!heroSound);
  };
  return (
    <section className="hero">

      {/* =====================================================
          BACKGROUND VIDEO
          Large cinematic canvas behind the entire hero
      ====================================================== */}

      <div className="hero-video-layer">
        <video
  ref={heroVideoRef}
  src="/videos/hero.mp4"
  autoPlay
  muted
  loop
  playsInline
  preload="metadata"
  onTimeUpdate={(e) => {
    const video = e.currentTarget;

    if (video.duration) {
      setVideoProgress(
        (video.currentTime / video.duration) * 100
      );
    }
  }}
/>

        <div className="hero-video-dark" />
        <div className="hero-video-left" />
        <div className="hero-video-bottom" />
      </div>


      {/* Purple atmosphere */}
      <div className="hero-glow" />


      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="hero-container">

        {/* Availability */}

        <motion.div
          className="availability"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <span className="availability-dot" />

          <div>
            <span>AVAILABLE</span>
            <strong>FOR PROJECTS</strong>
          </div>
        </motion.div>


        {/* ===================================================
            LEFT CONTENT
        ==================================================== */}

        <div className="hero-content">

          <motion.div
            className="eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span />
            VIDEO EDITOR
          </motion.div>


          <motion.h1
            className="hero-title"
            initial="hidden"
            animate="visible"
            transition={{
              staggerChildren: 0.08,
              delayChildren: 0.2,
            }}
          >
            {words.map((word) => (
              <motion.span
                key={word}
                variants={wordVariants}
              >
                {word}
                {word === "PEOPLE" && (
                  <b>.</b>
                )}
              </motion.span>
            ))}
          </motion.h1>


          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.75,
              duration: 0.7,
            }}
          >
            Creating edits people don't just watch —
            <strong> they remember.</strong>
          </motion.p>


          {/* Buttons */}

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.9,
              duration: 0.7,
            }}
          >

            <a
              href="#work"
              className="hero-button hero-button-primary"
            >
              <span>EXPLORE WORK</span>

              <i>
                <FiArrowUpRight />
              </i>
            </a>


            <button className="hero-button hero-button-secondary">

              <i>
                <FiPlay />
              </i>

              <span>WATCH REEL</span>

            </button>

          </motion.div>


          {/* Socials */}

          <motion.div
            className="hero-socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >

            <a href="https://www.instagram.com/sxrth_28?vrfl=Y3pva2ltNGp2NHJj&utm_source=qr">
              INSTAGRAM
            </a>

            <a href="https://wa.me/919860146250" target="_blank" rel="noopener noreferrer">
              WHATSAPP
            </a>

            <a href="mailto:sarthssawant0317@gmail.com">
              EMAIL
            </a>

          </motion.div>

        </div>


        {/* ===================================================
            FOREGROUND REEL
        ==================================================== */}

        <motion.div
          className="featured-reel"
          initial={{
            opacity: 0,
            scale: 0.92,
            x: 50,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.35,
            ease: [0.16, 1, 0.3, 1],
          }}
        >

          <div className="reel-glow" />

          <div className="reel-frame">

            <div className="reel-video">

              <video
                ref={heroVideoRef}
                src="/videos/hero.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />

              <div className="reel-overlay" />
<button
  type="button"
  className="hero-sound-toggle"
  onClick={toggleHeroSound}
>
  {heroSound ? "SOUND ON" : "SOUND OFF"}
</button>


              {/* Metadata */}

              <div className="reel-info">

                <div className="reel-progress">
  <span
    style={{
      width: `${videoProgress}%`,
    }}
  />
</div>

                <div className="reel-meta">

                  <div>
                    <small>SHOWREEL 2026</small>
                    <strong>SELECTED VISUALS</strong>
                  </div>

                  <small>01:28</small>

                </div>

              </div>

            </div>

          </div>

        </motion.div>


        {/* ===================================================
            BOTTOM
        ==================================================== */}

        <div className="scroll-indicator">

          <div className="scroll-line" />

          <span>
            SCROLL TO EXPLORE
          </span>

        </div>


        <div className="location">

          BASED IN INDIA

          <i />

        </div>

      </div>

    </section>
  );
}