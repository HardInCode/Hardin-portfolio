import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const ProjectsNavBar = () => {
  const imageRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // create an event listener for when the user scrolls
    const handleScroll = () => {
      // check if the user has scrolled down at least 10px
      // if so, set the state to true
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    // add the event listener to the window
    window.addEventListener("scroll", handleScroll);

    // cleanup the event listener when the component is unmounted
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <Link to="/" className="logo">
          <img 
                ref={imageRef} // Initialize with: const imageRef = useRef(null);
                src="images/LogoNav.png" 
                alt="Hardin Irfan"
                width="80" 
                height="20" 
                className="logo"
              />
        </Link>

        <Link to="/#contact" className="contact-btn group">
          <div className="inner">
            <span>Contact me</span>
          </div>
        </Link>
      </div>
    </header>
  );
}

export default ProjectsNavBar;
