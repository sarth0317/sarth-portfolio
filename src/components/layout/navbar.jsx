import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="fixed left-1/2 top-6 z-50 w-[calc(100%-32px)] max-w-[1025px] -translate-x-1/2"
    >
      <nav
        className="
          flex
          items-center
          justify-between
          rounded-full
          border
          border-white/[0.10]
          bg-black/45
          px-5
          py-3
          backdrop-blur-2xl
          sm:px-8
          sm:py-4
        "
      >

        {/* Logo */}
        <a
          href="/"
          className="text-xs font-bold tracking-[0.38em] text-white sm:text-sm"
        >
          SARTH.
        </a>


        {/* Desktop links */}
        <div className="hidden items-center gap-8 sm:flex">

          {[
            ["WORK", "#work"],
            ["VISION", "#vision"],
            ["TOOLS", "#tools"],
            ["AGENTS", "#agents"],
            ["CONTACT", "#contact"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="
                relative
                text-[9px]
                uppercase
                tracking-[0.15em]
                text-zinc-400
                transition-colors
                hover:text-white
              "
            >
              {label}

              <span className="absolute -bottom-1 left-0 h-px w-0 bg-violet-400 transition-all duration-300 hover:w-full" />
            </a>
          ))}

        </div>


        {/* Status orb */}
        <div
          className="
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-white/[0.03]
          "
        >
          <span className="relative flex h-2 w-2">

            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-500 opacity-50" />

            <span className="relative h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_12px_rgba(139,92,246,0.9)]" />

          </span>
        </div>

      </nav>
    </motion.header>
  );
}