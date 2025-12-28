import { useRef } from "react";
import PropTypes from "prop-types";
import {motion as Motion} from "framer-motion";
import Navbar from "../components/Navbar";

export default function About({ navigate }) {
  const ref = useRef(null);

  return (
    <>
      <Navbar navigate={navigate} />

      <section ref={ref} className="about-section">
        {/* TOP SECTION */}
        <div className="page-grid">
          {/* Left Text */}
          <div>
            <span className="badge">About Me</span>

            <h1 className="about-name">Craig Day</h1>

            <p className="about-text">
              Do you dream of a thriving pond or a vibrant aquarium that brings
              serenity and beauty to your home? I make that dream a reality with
              professional freshwater & tropical tank care.
            </p>

            <p className="about-text about-text--mt">
              My passion for aquatic life combined with 25+ years of experience
              makes my pond and aquarium maintenance services the perfect
              solution for keeping your underwater world healthy and vibrant.
            </p>
          </div>

          {/* Right Image + Badge */}
          <div className="image-wrapper">
            <div className="blob blob--one" />
            <div className="blob blob--two" />
            <img src="https://via.placeholder.com/600x400" alt="placeholder" className="profile-img" />
            <div className="experience-badge">
              <span className="experience-emoji">🐠</span>
              <span className="experience-text">25 Years of Aquatic Experience</span>
            </div>
          </div>
        </div>

        {/* SECOND SECTION */}
        <div className="section-container">
          <Motion.h2
            className="section-heading"
          >
            Unwavering Dedication — Exceptional Care
          </Motion.h2>

          <Motion.p
            className="section-text"
          >
            Maintaining aquatic habitats is more than a hobby—it's a lifelong
            passion. Whether you have a small tank or a full outdoor pond, I
            deliver expert care, deep knowledge, and consistent maintenance that
            keeps your environment thriving.
          </Motion.p>

          {/* ICON GRID */}
          <Motion.div
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.2 } }
            }}
            initial="hidden"
            animate="show"
            className="icon-grid"
          >
            {[
              {
                icon: "💡",
                title: "Unmatched Expertise",
                text:
                  "25+ years in ponds, freshwater, and tropical aquariums."
              },
              {
                icon: "🛠️",
                title: "Comprehensive Services",
                text:
                  "Setup, cleaning, filtration installs, and full maintenance."
              },
              {
                icon: "🤝",
                title: "Tailored Care",
                text:
                  "Personalized solutions for your unique aquatic system."
              }
            ].map((item) => (
              <Motion.div
                key={item.title}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  show: { opacity: 1, y: 0 }
                }}
                className="icon-card"
              >
                <div className="icon-emoji">{item.icon}</div>
                <h3 className="icon-title">
                  {item.title}
                </h3>
                <p className="icon-text">
                  {item.text}
                </p>
              </Motion.div>
            ))}
          </Motion.div>
        </div>
      </section>
    </>
  );
}

About.propTypes = {
  navigate: PropTypes.func.isRequired
};
