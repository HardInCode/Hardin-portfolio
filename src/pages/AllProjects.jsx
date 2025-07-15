import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import ProjectsNavBar from "../components/ProjectsNavBar";
import Footer from "../sections/Footer";
import { projects, projectCategories } from "../constants";

gsap.registerPlugin(ScrollTrigger);


// Utility function to shuffle an array
const shuffleArray = (array) => {
  let currentIndex = array.length, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

const AllProjects = () => {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  const headerRef = useRef(null);
  const containerRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const isAnimating = useRef(false);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for project cards (only on initial load)
    gsap.fromTo(
      ".project-card",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top bottom-=100",
        },
      }
    );

    // Animation for category filters
    gsap.fromTo(
      ".filter-btn",
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".filter-container",
          start: "top bottom-=50",
        },
        onComplete: () => {
          gsap.set(".filter-btn", { clearProps: "transform" });
        }
      }
    );
  }, []);

  // Hover animation handlers
  const handleCardHover = (e) => {
    const card = e.currentTarget;
    const image = card.querySelector('.project-image');
    const overlay = card.querySelector('.image-overlay');
    const content = card.querySelector('.card-content');

    gsap.to(image, {
      scale: 1.1,
      duration: 0.6,
      ease: "power2.out"
    });

    gsap.to(overlay, {
      opacity: 0.3,
      duration: 0.4,
      ease: "power2.out"
    });

    gsap.to(card, {
      y: -8,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.6)",
      duration: 0.4,
      ease: "power2.out"
    });

    gsap.to(content, {
      y: -4,
      duration: 0.4,
      ease: "power2.out"
    });
  };

  const handleCardLeave = (e) => {
    const card = e.currentTarget;
    const image = card.querySelector('.project-image');
    const overlay = card.querySelector('.image-overlay');
    const content = card.querySelector('.card-content');

    gsap.to(image, {
      scale: 1,
      duration: 0.6,
      ease: "power2.out"
    });

    gsap.to(overlay, {
      opacity: 0,
      duration: 0.4,
      ease: "power2.out"
    });

    gsap.to(card, {
      y: 0,
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
      duration: 0.4,
      ease: "power2.out"
    });

    gsap.to(content, {
      y: 0,
      duration: 0.4,
      ease: "power2.out"
    });
  };

  // Initialize filtered projects on mount
  useEffect(() => {
    const shuffledProjects = shuffleArray([...projects]);
    setFilteredProjects(shuffledProjects);
  }, []);

  // Handle main category filter change
  const handleFilterChange = (category) => {
    if (category === activeFilter) return;

    setActiveFilter(category);

    // Update filtered projects based on new category mapping
    const newFilteredProjects = category === "All"
      ? shuffleArray([...projects])
      : projects.filter(project => {
          switch (category) {
            case "Web Development":
              return project.category === "Web Applications" || 
                     project.category === "Three.js Implementation";                
            case "Mobile Development":
              return project.category === "Mobile App" ||
                     project.category === "Mobile Development";
            case "3D & Graphics and Animations":
              return project.category === "3D CGA" || project.category === "3D Graphic" || project.category === "3D Animation";
            case "Cybersecurity":
              return project.category === "Others" && 
                     (project.id === "CTF" || project.title.toLowerCase().includes("security")) || 
                     project.category === "Cybersecurity" ||  project.category === "Cybersecurity Education" || project.category === "Cybersecurity Competition" ;
            case "AI and Automation":
              return project.category === "AI and Automation" || project.category === "AI" || project.category === "Automation";  
            default:
              return project.category === category;
          }
        });

    setFilteredProjects(newFilteredProjects);
  };

  // Handle subcategory filter change
  const handleSubcategoryChange = (subcategory) => {
    if (subcategory === activeSubcategory) {
      // If clicking the same subcategory, show all tools
      setActiveSubcategory(null);
      const newFilteredProjects = projects.filter(project => 
        project.category === "Educational Tools" || 
        project.category === "Security Tools" || 
        project.category === "Development Tools"
      );
      setFilteredProjects(newFilteredProjects);
    } else {
      // Filter by specific subcategory
      setActiveSubcategory(subcategory);
      const newFilteredProjects = projects.filter(project => project.category === subcategory);
      setFilteredProjects(newFilteredProjects);
    }
  };

  // Toggle subcategory visibility
  const toggleSubcategories = (categoryName) => {
    setShowSubcategories(prev => ({
      ...prev,
      [categoryName]: !prev[categoryName]
    }));
  };

  // Get display name for header
  const getDisplayName = () => {
    return activeFilter === "All" ? "All Projects" : `${activeFilter} Projects`;
  };

  return (
    <>
      <ProjectsNavBar />
      <section ref={sectionRef} className="all-projects-section pt-32 pb-20">
        <div ref={containerRef} className="w-full h-full md:px-10 px-5">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-white-50 bg-clip-text text-transparent">
              My Projects Portfolio
            </h1>
            <p className="text-white-50 text-xl max-w-4xl mx-auto leading-relaxed">
              A comprehensive collection of my projects spanning mobile applications, web development,
              cybersecurity tools, and automation solutions. Each project represents a unique challenge
              and innovative solution.
            </p>
          </div>

          {/* Category Filter */}
          <div className="filter-container mb-16">
            <div className="flex flex-wrap justify-center gap-4">
              {projectCategories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => handleFilterChange(category)}
                  className={`filter-btn inline-flex items-center gap-2 md:gap-3 font-semibold transition-all duration-200 px-4 py-2 md:px-6 md:py-3 text-sm md:text-base rounded-full ${
                    activeFilter === category
                      ? 'bg-[#1a1a1a] text-white border border-[#1a1a1a]'
                      : 'bg-transparent text-white-50 border border-[#333] hover:bg-[#1a1a1a] hover:text-white hover:border-[#1a1a1a]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {/* Projects Header */}
            <div ref={headerRef} className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2">
                {getDisplayName()}
              </h2>
              <p className="text-white-50 mt-2">
                Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
              </p>
            </div>

            {/* Projects Grid Container */}
            <div
              ref={gridRef}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch"
            >
              {filteredProjects.map((project, index) => (
                <div
                  key={`${project.category}-${project.title}-${index}`}
                  className="project-card card-border rounded-xl overflow-hidden transition-all duration-300 cursor-pointer h-full flex flex-col"
                  onMouseEnter={handleCardHover}
                  onMouseLeave={handleCardLeave}
                >
                  <div className="flex flex-col h-full flex-1">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="project-image w-full h-48 object-cover"
                      />
                      <div className="image-overlay absolute inset-0 bg-black opacity-0"></div>
                      <div className="absolute top-4 left-4 z-10">
                        <span className="bg-black bg-opacity-50 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-white">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <div className="card-content p-6 flex flex-col flex-1 justify-between">
                      <h3 className="text-xl font-semibold mb-3 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-white-50 mb-4 flex-1 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 6).map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="bg-[#1a1a1a] px-2 py-1 rounded text-xs text-white-50 border border-white-10"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-3 mt-6">
                        <Link
                          to={`/projects/${project.id}`}
                          className="back-btn flex-1 text-sm min-h-[40px] flex items-center justify-center"
                        >
                          <span>VIEW DETAILS</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* No projects found message */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-white-50 text-lg">No projects found in this category.</p>
                <button
                  onClick={() => handleFilterChange("All")}
                  className="mt-4 text-blue-400 hover:text-blue-300 transition-colors duration-300"
                >
                  View all projects
                </button>
              </div>
            )}
          </div>

          {/* Back to Home */}
          <div className="flex justify-center mt-20">
            <Link
              to="/"
              className="back-btn group"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transform group-hover:-translate-y-1 transition-transform duration-300"
              >
                <path d="M8 15L8 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M1 8L8 1L15 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>BACK TO HOME</span>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AllProjects;