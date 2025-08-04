import React from "react";
import { motion } from "framer-motion";

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap"
      style={{
        lineHeight: 0.75,
        fontFamily: "'Playfair Display', 'Georgia', 'Times New Roman', serif",
        fontWeight: 700,
        letterSpacing: '-0.01em',
        fontSize: '4rem'
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l === " " ? "\u00A0" : l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l === " " ? "\u00A0" : l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

export default FlipLink;