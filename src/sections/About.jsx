// ============================================================================
// ABOUT SECTION - Personal Introduction and Statistics (IMPROVED MOBILE VERSION)
// ============================================================================
// This section introduces you personally and displays key statistics
// Features: Profile image, personal description, skill tags, animated counters
// Animations: Scroll-triggered reveal animations for each element

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "../components/TitleHeader";
import AnimatedCounter from "../components/AnimatedCounter";

// Register ScrollTrigger plugin for scroll-based animations
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  // Refs for targeting specific elements for animations
  const sectionRef = useRef(null); // Main section container
  const imageRef = useRef(null);   // Profile image
  const contentRef = useRef(null); // Text content container
  const tagsRef = useRef(null);    // Skill tags container

  // GSAP animation hook - runs when component mounts
  useGSAP(() => {
    // ============================================================================
    // SECTION REVEAL ANIMATION
    // ============================================================================
    // Fade in the entire section when it comes into view
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 }, // Start: invisible
      { 
        opacity: 1, // End: fully visible
        duration: 1, // Animation duration
        scrollTrigger: {
          trigger: sectionRef.current, // Element that triggers animation
          start: "top 80%", // Start when top of section is 80% down viewport
        }
      }
    );

    // ============================================================================
    // PROFILE IMAGE ANIMATION
    // ============================================================================
    // Scale and fade in the profile image with upward movement
    gsap.fromTo(
      imageRef.current,
      { 
        scale: 0.8,    // Start: 80% size
        opacity: 0,    // Start: invisible
        y: 50          // Start: 50px down
      },
      { 
        scale: 1,      // End: full size
        opacity: 1,    // End: visible
        y: 0,          // End: normal position
        duration: 1,   // Animation duration
        ease: "power2.out", // Smooth easing
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
        }
      }
    );

    // ============================================================================
    // CONTENT TEXT ANIMATION
    // ============================================================================
    // Animate all paragraphs with stagger effect
    gsap.fromTo(
      contentRef.current.querySelectorAll("p"), // Target all paragraphs
      { 
        opacity: 0,    // Start: invisible
        y: 30          // Start: 30px down
      },
      { 
        opacity: 1,    // End: visible
        y: 0,          // End: normal position
        duration: 0.8, // Animation duration
        stagger: 0.2,  // Each paragraph animates 0.2s after the previous
        ease: "power2.out", // Smooth easing
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 70%", // Start earlier than other elements
        }
      }
    );

    // ============================================================================
    // SKILL TAGS ANIMATION
    // ============================================================================
    // Animate skill tags with scale and bounce effect
    gsap.fromTo(
      tagsRef.current.querySelectorAll("div"), // Target all skill tag divs
      { 
        scale: 0.8,    // Start: 80% size
        opacity: 0,    // Start: invisible
        y: 20          // Start: 20px down
      },
      { 
        scale: 1,      // End: full size
        opacity: 1,    // End: visible
        y: 0,          // End: normal position
        duration: 0.5, // Animation duration
        stagger: 0.1,  // Each tag animates 0.1s after the previous
        ease: "back.out(1.7)", // Bounce effect
        scrollTrigger: {
          trigger: tagsRef.current,
          start: "top 80%",
        }
      }
    );
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="about" 
      className="flex-center section-padding mt-32 md:mt-20 xl:mt-0 min-h-0 h-auto"
    >
      <div className="w-full h-auto min-h-0 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto">
        {/* Section header with title */}
        <TitleHeader title="About Me" />
        
        {/* 
          IMPROVED MAIN CONTENT GRID:
          - Better mobile stacking (lg breakpoint instead of xl)
          - Reduced gaps on mobile
          - Added max-width container
        */}
        <div className="grid grid-cols-12 mt-6 sm:mt-8 gap-4 sm:gap-6 md:gap-8 lg:gap-10 min-h-0 h-auto">
          {/* LEFT: Profile Image */}
          <div className="lg:col-span-5 col-span-12">
            <div className="card-border rounded-xl p-3 sm:p-4 md:p-6 lg:p-8 h-full">
              <img 
                ref={imageRef}
                src="/images/about-profile.jpg" 
                alt="Hardin Irfan"
                width="400" 
                height="300" 
                className="w-full h-auto rounded-lg object-cover mb-3 sm:mb-4 md:mb-6"
              />
            </div>
          </div>
          
          {/* RIGHT: Personal Information and Skills */}
          <div className="lg:col-span-7 col-span-12">
            <div 
              ref={contentRef} 
              className="card-border rounded-xl p-3 sm:p-4 md:p-6 lg:p-8 h-full flex flex-col justify-center"
            >
              {/* Name heading - better responsive sizing */}
              <h3 className="text-white text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
                Hardin Irfan
              </h3>
              
              {/* 
                IMPROVED PERSONAL DESCRIPTION:
                - Better responsive text sizing
                - Improved spacing for mobile
                - Better line height for readability
              */}
              <p className="text-white-50 text-sm sm:text-base md:text-lg mb-3 md:mb-4 text-justify leading-relaxed">
                I believe that the best technology is not only built with code, but also with a vision for the future. As an Information Technology student at President University, my approach is driven by a combination of analytical thinking and strong technical intuition. This allows me not only to solve existing problems, but also to predict potential obstacles and opportunities in the future.
              </p>
              
              <p className="text-white-50 text-sm sm:text-base md:text-lg mb-3 md:mb-4 text-justify leading-relaxed">
                My passion lies in using my knowledge of information technology to develop into a versatile person in this modern era. By combining creative strategies with cybersecurity principles, I strive to create solutions that are not only technically sound, but also truly intelligent and designed for the future.
              </p>
              
              {/* 
                IMPROVED SKILL TAGS:
                - Better mobile spacing
                - Improved responsive sizing
                - Better text wrapping
                - Consistent padding
              */}
              <div 
                ref={tagsRef} 
                className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mt-3 sm:mt-4 md:mt-6"
              >
                <div className="bg-[#1a1a1a] px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-full text-white text-xs sm:text-sm md:text-base whitespace-nowrap">
                  Web Development
                </div>
                <div className="bg-[#1a1a1a] px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-full text-white text-xs sm:text-sm md:text-base whitespace-nowrap">
                  Python Development
                </div>
                <div className="bg-[#1a1a1a] px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-full text-white text-xs sm:text-sm md:text-base whitespace-nowrap">
                  Cybersecurity Analysist
                </div>
                <div className="bg-[#1a1a1a] px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-full text-white text-xs sm:text-sm md:text-base whitespace-nowrap">
                  IT Support
                </div>
                <div className="bg-[#1a1a1a] px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-full text-white text-xs sm:text-sm md:text-base whitespace-nowrap">
                  Network Architecture
                </div>
                <div className="bg-[#1a1a1a] px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-full text-white text-xs sm:text-sm md:text-base whitespace-nowrap">
                  SQL Database Management
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 
          IMPROVED STATISTICS SECTION:
          - Better spacing for mobile
          - Added container constraints
        */}
        <div className="grid grid-cols-12 mt-8 sm:mt-10 md:mt-12 min-h-0 h-auto">
          <div className="col-span-12 min-h-0 h-auto">
            <AnimatedCounter />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;