// ============================================================================
// HERO SECTION - Main Landing Area
// ============================================================================
// This is the first section visitors see - contains animated text and 3D room
// Features: Text slider animation, 3D room model, call-to-action button

// GSAP animation library for smooth animations
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// Custom button component with hover effects
import Button from "../components/Button";
// Words array for the text slider animation (Ideas, Concepts, Problems, Challenges)
import { words } from "../constants";
// 3D room model component with Three.js
import HeroExperience from "../components/models/hero_models/HeroExperience";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  // GSAP animation hook - runs when component mounts
  useGSAP(() => {
    // Animate hero text headings - fade in from bottom with stagger effect
    gsap.fromTo(
      ".hero-text h1", // Target all h1 elements in hero-text
      { y: 50, opacity: 0 }, // Start: 50px down, invisible
      { 
        y: 0, opacity: 1, // End: normal position, visible
        stagger: 0.2, // Each h1 animates 0.2s after the previous
        duration: 1, // Animation takes 1 second
        ease: "power2.inOut" // Smooth easing curve
      }
    );
  });

  // Use react-intersection-observer to detect if the 3D canvas is in view
  const { ref, inView } = useInView({
    triggerOnce: false, // Remount every time it enters view
    threshold: 0.1, // 10% of the element must be visible
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Background image - positioned absolutely behind content */}
      <div className="absolute top-0 left-0 z-10 opacity-50">
        <img src="/images/bg2.png" alt="" />
      </div>

      {/* Main hero layout container */}
      <div className="hero-layout">
        {/* LEFT SIDE: Text content and call-to-action */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            {/* Hero text container with animated text slider */}
            <div className="hero-text">
              <h1>
                Turning
                {/* Text slider container - CSS animation cycles through words */}
                <span className="slide">
                  {/* Wrapper that moves vertically to show different words */}
                  <span className="wrapper">
                    {/* Map through words array to create sliding text options */}
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        {/* Icon for each word (ideas.svg, concepts.svg, etc.) */}
                        <img
                          src={word.imgPath}
                          alt="icon"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        {/* The actual word text */}
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              {/* Static text parts */}
              <h1>Into Working</h1>
              <h1>Secure Solutions</h1>
            </div>

            {/* Introduction paragraph */}
            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Hi, I'm Hardin, an Information Technology student at President University.
            </p>

            {/* Call-to-action button - scrolls to About section */}
            <Button
              text="See My Work"
              className="md:w-80 md:h-16 w-60 h-12"
              id="counter" // Target ID for smooth scrolling
            />
          </div>
        </header>

        {/* RIGHT SIDE: 3D Room Model */}
        <figure>
          <div className="hero-3d-layout" ref={ref}>
            {/* 3D room component with Three.js - interactive 3D scene */}
            {inView ? (
              <HeroExperience />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-black/80">
                <span className="loader" />
              </div>
            )}
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Hero;