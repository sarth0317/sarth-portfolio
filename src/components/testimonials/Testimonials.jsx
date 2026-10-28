import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import "./Testimonials.css";

const testimonials = [
  {
    quote:
      "The edit completely changed how the project felt. The pacing, music and transitions made everything hit harder.",
    name: "NAAD PRATISHTHA",
    role: "SOCIAL MEDIA MANAGER",
    number: "01",
  },
  {
    quote:
      "What stood out was the attention to detail. Every transition had a purpose and the final result felt extremely polished.",
    name: "CLIENT_02",
    role: "BIRTHDAY EDIT",
    number: "02",
  },
  {
    quote:
      "Sarth understood the vision before I even had the words to explain it. The final cut was exactly the feeling I wanted.",
    name: "CLIENT_03",
    role: "INFLUENCER EDIT",
    number: "03",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  useEffect(() => {
  const timer = setInterval(() => {
    setActive((current) => {
      return (current + 1) % testimonials.length;
    });
  }, 5000);

  return () => clearInterval(timer);
}, []);
  const current = testimonials[active];

  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-container">

        {/* HEADER */}

        <motion.div
          className="testimonials-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span>07</span>
          WORDS
        </motion.div>


        {/* MAIN */}

        <div className="testimonial-main">

          <motion.div
            className="testimonial-heading"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span>KIND WORDS</span>

            <strong>
              FROM PEOPLE
              <br />
              I'VE WORKED
              <br />
              WITH.
            </strong>
          </motion.div>


          {/* QUOTE */}

          <div className="testimonial-content">

            <div className="quote-mark">
              “
            </div>

            <AnimatePresence mode="wait" initial={false}>
  <motion.div
    key={active}
    className="testimonial-quote"
    drag="x"
    dragConstraints={{ left: 0, right: 0 }}
    dragElastic={0.2}
    onDragEnd={(event, info) => {
      if (info.offset.x < -70) {
        setActive(
          (active + 1) % testimonials.length
        );
      }

      if (info.offset.x > 70) {
        setActive(
          (active - 1 + testimonials.length) %
            testimonials.length
        );
      }
    }}
    initial={{
      opacity: 0,
      x: 80,
    }}
    animate={{
      opacity: 1,
      x: 0,
    }}
    exit={{
      opacity: 0,
      x: -80,
    }}
    transition={{
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1],
    }}
  >
    <p>{current.quote}</p>

    <div className="testimonial-author">
      <div>
        <strong>{current.name}</strong>
        <span>{current.role}</span>
      </div>

      <span className="testimonial-number">
        {current.number} / 03
      </span>
    </div>
  </motion.div>
</AnimatePresence>


            {/* NAVIGATION */}

            <div className="testimonial-navigation">

              {testimonials.map((item, index) => (
                <button
                  key={item.number}
                  className={
                    active === index
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    setActive(index)
                  }
                  aria-label={`View testimonial ${index + 1}`}
                >
                  <span />
                </button>
              ))}

            </div>

          </div>

        </div>


        {/* BOTTOM */}

        <motion.div
          className="testimonials-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span>TRUST</span>

          <div />

          <span>COLLABORATION</span>

          <div />

          <span>RESULTS</span>
        </motion.div>

      </div>
    </section>
  );
}