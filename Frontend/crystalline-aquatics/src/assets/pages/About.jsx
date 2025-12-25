import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Navbar from "../components/Navbar";

export default function About({ navigate }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const bgGradient = useTransform(scrollYProgress, [0, 1], [
    "linear-gradient(to bottom, #ffffff, #dff9ff, #b0e6ff)",
    "linear-gradient(to bottom, #b0e6ff, #6ac7ff, #003f73)"
  ]);

  const shimmer = useTransform(scrollYProgress, [0, 1, 1], [1, 1.04, 1]);

  return (
    <>
      <Navbar navigate={navigate} />
      <motion.section
        ref={ref}
        style={{
          background: bgGradient,
          filter: `brightness(${shimmer.get()})`,
          width: "100%",
          padding: "5rem 1.5rem",
          overflow: "hidden",
          transition: "all 0.7s"
        }}
      >
        {/* TOP SECTION */}
      <div style={{
        maxWidth: "96rem",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "3.5rem",
        padding: "0 1.5rem"
      }}>
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span style={{
            display: "inline-block",
            backgroundColor: "#d1fae5",
            color: "#047857",
            padding: "0.25rem 1rem",
            borderRadius: "9999px",
            fontSize: "0.875rem",
            fontWeight: 600,
            boxShadow: "0 1px 2px rgba(0,0,0,0.05)"
          }}>
            About Me
          </span>

          <h1 style={{
            fontSize: "2.25rem",
            fontWeight: 700,
            marginTop: "1rem",
            color: "#064e3b",
            textShadow: "0 1px 2px rgba(0,0,0,0.1)"
          }}>
            Craig Day
          </h1>

          <p style={{
            marginTop: "1.5rem",
            color: "#1f2937",
            lineHeight: "1.75rem",
            fontSize: "1.125rem"
          }}>
            Do you dream of a thriving pond or a vibrant aquarium that brings serenity and beauty to your home? I make that dream a reality with professional freshwater & tropical tank care.
          </p>

          <p style={{
            marginTop: "1rem",
            color: "#1f2937",
            lineHeight: "1.75rem",
            fontSize: "1.125rem"
          }}>
            My passion for aquatic life combined with 25+ years of experience makes my pond and aquarium maintenance services the perfect solution for keeping your underwater world healthy and vibrant.
          </p>
        </motion.div>

        {/* Right Image + Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ position: "relative" }}
        >
          <div style={{
            position: "absolute",
            top: "-1.5rem",
            left: "-1.5rem",
            width: "6rem",
            height: "6rem",
            backgroundColor: "#a5f3fc",
            borderRadius: "50%",
            filter: "blur(4rem)",
            opacity: 0.6
          }} />

          <div style={{
            position: "absolute",
            bottom: "-2rem",
            right: "-2rem",
            width: "8rem",
            height: "8rem",
            backgroundColor: "#bfdbfe",
            borderRadius: "50%",
            filter: "blur(4rem)",
            opacity: 0.5
          }} />

          <img
            src="https://via.placeholder.com/600x400"
            alt="placeholder"
            style={{
              borderRadius: "1rem",
              width: "100%",
              objectFit: "cover",
              boxShadow: "0 10px 15px rgba(0,0,0,0.2)"
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              bottom: "-1.5rem",
              backgroundColor: "#059669",
              color: "white",
              padding: "1rem 1.5rem",
              borderRadius: "0.75rem",
              boxShadow: "0 10px 15px rgba(0,0,0,0.2)",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem"
            }}
          >
            <span style={{ fontSize: "1.25rem" }}>🐠</span>
            <span style={{ fontWeight: 500 }}>25 Years of Aquatic Experience</span>
          </motion.div>
        </motion.div>
      </div>

      {/* SECOND SECTION */}
      <div style={{
        maxWidth: "96rem",
        margin: "7rem auto 0 auto",
        padding: "0 1.5rem"
      }}>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{
            fontSize: "1.875rem",
            fontWeight: 700,
            color: "#064e3b"
          }}
        >
          Unwavering Dedication — Exceptional Care
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          style={{
            marginTop: "1.5rem",
            color: "#1f2937",
            lineHeight: "1.75rem",
            maxWidth: "48rem",
            fontSize: "1.125rem"
          }}
        >
          Maintaining aquatic habitats is more than a hobby—it's a lifelong passion. Whether you have a small tank or a full outdoor pond, I deliver expert care, deep knowledge, and consistent maintenance that keeps your environment thriving.
        </motion.p>

        {/* ICON GRID */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.2 } }
          }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "3rem",
            marginTop: "4rem"
          }}
        >
          {[
            {
              icon: "💡",
              title: "Unmatched Expertise",
              text: "25+ years in ponds, freshwater, and tropical aquariums."
            },
            {
              icon: "🛠️",
              title: "Comprehensive Services",
              text: "Setup, cleaning, filtration installs, and full maintenance."
            },
            {
              icon: "🤝",
              title: "Tailored Care",
              text: "Personalized solutions for your unique aquatic system."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 }
              }}
              style={{
                backgroundColor: "rgba(255,255,255,0.4)",
                backdropFilter: "blur(1rem)",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                borderRadius: "1rem",
                padding: "1.5rem",
                border: "1px solid rgba(255,255,255,0.3)"
              }}
            >
              <div style={{ fontSize: "2.25rem" }}>{item.icon}</div>
              <h3 style={{
                fontWeight: 700,
                fontSize: "1.25rem",
                marginTop: "0.75rem",
                color: "#065f46"
              }}>
                {item.title}
              </h3>
              <p style={{
                marginTop: "0.5rem",
                color: "#374151"
              }}>{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      </motion.section>
    </>
  );
}
