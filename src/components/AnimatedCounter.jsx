// ============================================================================
// ANIMATED COUNTER COMPONENT - Statistics Display (IMPROVED MOBILE VERSION)
// ============================================================================
// Displays key statistics with animated counting effect
// Features: Scroll-triggered counting animation, better mobile responsive design
// Used in: About section to show achievements and statistics

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

// Counter data from constants (Years of Study, Projects, GPA, etc.)
import { counterItems } from "../constants";

// Register ScrollTrigger for scroll-based animations
gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = () => {
  // Ref for the main counter container
  const counterRef = useRef(null);
  // Array ref to store individual counter elements
  const countersRef = useRef([]);

  // GSAP animation hook - runs when component mounts
  useGSAP(() => {
    // Loop through each counter element
    countersRef.current.forEach((counter, index) => {
      // Find the number element within each counter
      const numberElement = counter.querySelector(".counter-number");
      // Get the corresponding data from counterItems array
      const item = counterItems[index];

      // ============================================================================
      // INITIAL SETUP
      // ============================================================================
      // Set initial display value to 0
      gsap.set(numberElement, { innerText: "0" });

      // ============================================================================
      // COUNTING ANIMATION
      // ============================================================================
      // Create the counting animation from 0 to target value
      gsap.to(numberElement, {
        innerText: item.value, // Target value to count to
        duration: 2.5,         // Animation duration (2.5 seconds)
        ease: "power2.out",    // Smooth easing curve
        snap: { innerText: 1 }, // Ensures whole numbers (no decimals during animation)
        scrollTrigger: {
          trigger: "#counter", // Element that triggers the animation
          start: "top center", // Start when counter section reaches center of viewport
        },
        // ============================================================================
        // COMPLETION CALLBACK
        // ============================================================================
        // Add the suffix (+, %, etc.) after counting animation completes
        onComplete: () => {
          numberElement.textContent = `${item.value}${item.suffix}`;
        },
      });
    }, counterRef);
  }, []);

  return (
    <div id="counter" ref={counterRef} className="w-full">
      {/* 
        IMPROVED RESPONSIVE GRID:
        - xs (0-640px): 2 columns with smaller gaps
        - sm (640px+): 2 columns with medium gaps  
        - md (768px+): 4 columns with larger gaps
        - lg (1024px+): 4 columns with full gaps
        - Removed padding here to match About section container
      */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-full">
        {/* Map through counter items to create individual stat cards */}
        {counterItems.map((item, index) => (
          <div
            key={index}
            // Store reference to each counter element for animation targeting
            ref={(el) => el && (countersRef.current[index] = el)}
            className="
              bg-zinc-900 
              rounded-lg 
              p-2 sm:p-3 md:p-4 lg:p-6 
              flex flex-col 
              justify-center 
              items-center 
              text-center 
              min-w-0 
              w-full 
              aspect-square
              sm:aspect-auto
              sm:min-h-[120px]
              md:min-h-[140px]
              lg:min-h-[160px]
            "
          >
            {/* 
              IMPROVED NUMBER DISPLAY:
              - Better responsive font sizing
              - Proper line height for mobile
              - Break-all for long numbers
            */}
            <div className="
              counter-number 
              text-white 
              text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl
              font-bold 
              mb-1 sm:mb-2 
              break-all
              leading-tight
              w-full
            ">
              0{item.suffix}
            </div>
            
            {/* 
              IMPROVED LABEL:
              - Better responsive text sizing
              - Proper line height for readability
              - Break-words for long labels
            */}
            <div className="
              text-gray-400
              text-xs sm:text-sm md:text-base lg:text-lg
              break-words 
              w-full 
              text-center
              leading-tight
              px-1
            ">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;