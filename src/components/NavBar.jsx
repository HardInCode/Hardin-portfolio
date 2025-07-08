// ============================================================================
// NAVIGATION BAR COMPONENT
// ============================================================================
// Fixed header that changes appearance on scroll and provides navigation
// Features: Logo, menu links, contact button, scroll-based styling

import { useState, useEffect } from "react";

// Navigation links array from constants (About, Projects, Experience, Skills)
import { navLinks } from "../constants";

const NavBar = () => {
  // State to track if user has scrolled down the page
  // Used to change navbar styling (background, position)
  const [scrolled, setScrolled] = useState(false);

  // Effect hook to handle scroll events
  useEffect(() => {
    // Function to handle scroll events and update scrolled state
    const handleScroll = () => {
      // Check if user has scrolled down more than 10px from top
      // This triggers navbar style change (background appears)
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    // Add scroll event listener to window
    window.addEventListener("scroll", handleScroll);

    // Cleanup: remove event listener when component unmounts
    // Prevents memory leaks
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      {/* Main navbar container with dynamic styling based on scroll */}
      <div className="inner">
        {/* Logo - links back to hero section */}
        <a href="#hero">
          <img 
            src="images\LogoNav.png" 
            alt="Logo" 
            className="logo"
            width="80" 
            height="20"
          />
        </a>

        {/* Desktop navigation menu - hidden on mobile */}
        <nav className="desktop">
          <ul>
            {/* Map through navigation links from constants */}
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  {/* Link text */}
                  <span>{name}</span>
                  {/* Animated underline that appears on hover */}
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact button - links to contact section */}
        <a href="#contact" className="contact-btn group">
          <div className="inner">
            <span>Contact me</span>
          </div>
        </a>
      </div>
    </header>
  );
}

export default NavBar;
