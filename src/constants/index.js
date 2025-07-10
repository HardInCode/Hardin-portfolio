// ============================================================================
// CONSTANTS FILE - Central Data Storage
// ============================================================================
// This file contains all the data used throughout the portfolio website
// Each array/object is used in specific sections of the application

// ============================================================================
// NAVIGATION DATA
// ============================================================================

// Navigation links used in the navbar - appears in NavBar.jsx
// Each object contains the display name and the section ID to scroll to
const navLinks = [
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  }
];

// ============================================================================
// HERO SECTION DATA
// ============================================================================

// Words used in the hero section text slider animation - appears in Hero.jsx
// Each word cycles through with its corresponding icon in the animated text
// The array is duplicated to create a seamless loop effect
const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Problems", imgPath: "/images/puzzle.svg" },
  { text: "Challenges", imgPath: "/images/target.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Problems", imgPath: "/images/puzzle.svg" },
  { text: "Challenges", imgPath: "/images/target.svg" },
];

// ============================================================================
// ABOUT SECTION DATA
// ============================================================================

// Counter items displayed in the statistics section - appears in AnimatedCounter.jsx
// Shows your key achievements with animated counting effect
const counterItems = [
  { value: 3, suffix: "+", label: "Years of Study" },
  { value: 15, suffix: "+", label: "Projects" },
  { value: 3.7, suffix: "+", label: "GPA" },
  { value: 95, suffix: "%", label: "Academic Performance" },
];

// ============================================================================
// LOGO SHOWCASE DATA (Currently Disabled)
// ============================================================================

// Company logos used in the marquee section - appears in LogoShowcase.jsx
// Currently commented out in App.jsx but available for future use
const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

// ============================================================================
// FEATURE CARDS DATA
// ============================================================================

// Abilities/skills displayed in the feature cards section - appears in FeatureCards.jsx
// Highlights your key professional abilities with icons and descriptions
const abilities = [
 {
   imgPath: "/images/time.png",
   title: "Consistent Progress Tracking",
   desc: "set-and achieve-organized targets, constantly moving forward so that nothing is left until the last minute.",
 },
 {
    imgPath: "/images/seo.png",
    title: "Detail-Oriented Execution",
    desc: "handle each task with care and precision, ensuring every element of the project is polished before proceeding.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Feedback-Friendly",
    desc: "actively sought and received feedback, quickly addressing any gaps and continuously honing my skills.",
  },
];

// ============================================================================
// TECH STACK DATA
// ============================================================================

// Tech stack images used in the skills section - appears in TechStack.jsx
// 2D images for the tech stack cards (fallback for non-3D displays)
const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

// 3D models used in the skills section - appears in TechStack.jsx
// Interactive 3D models for each technology skill with custom scaling and rotation
const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Security Tester",
    modelPath: "/models/BurpSuiteIcon.glb",
    scale: 1.2,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

// ============================================================================
// EXPERIENCE SECTION DATA
// ============================================================================

// Experience cards displayed in the experience section - appears in Experience.jsx
// Your work history with detailed descriptions, responsibilities, and company info
const expCards = [
  {
    review: "My Creativity and teamwork shone in the Buzzy Wizzy Studio community, where he contributed to innovative game development projects and fostered a collaborative spirit.",
    imgPath: "/images/BW.png",
    logoPath: "/images/logos/BW.png",
    title: "Game Developer, Buzzy Wizzy Studio (Campus GameDev Community)",
    date: "October 2024 - Present",
    responsibilities: [
      "Collaborated with fellow students to design and develop engaging game prototypes using Unity.",
      "Participated in brainstorming sessions, contributing creative ideas for gameplay mechanics and storylines.",
      "Assist in building 3D environments and become an animation team leader."
    ],
  },
  {
  review: "Successfully delivered a comprehensive cybersecurity solution for a real startup client, demonstrating practical application of security expertise and technical development skills in a professional environment.",
  imgPath: "/images/openqquantify.png",
  logoPath: "/images/logos/openqquantify.png",
  title: "Cyber Security Team - Industry Client Project",
  date: "April 2025 - May 2025",
  responsibilities: [
    "Collaborated directly with OpenQQuantify startup as part of a 5th-semester industry project, delivering real-world cybersecurity solutions.",
    "Developed and implemented a PDF webscraping tool to extract and organize academic journal data from arXiv.org for client needs.",
    "Designed and built a radio frequency simulation and analyzer application, demonstrating advanced technical problem-solving skills.",
    ],
  },
  {
    review: "Excelled as a Customer Data Coordinator, demonstrating strong organizational skills and attention to detail in managing large datasets and supporting customer operations.",
    imgPath: "/images/telkom.png",
    logoPath: "/images/logos/telkom.png",
    title: "Customer Data Coordinator, PT Telkom Indonesia Gresik",
    date: "October 2022 - November 2022",
    responsibilities: [
      "Accurately processed and recorded new customerservice orders for IndiHome products (WiFi, TV) into the companydatabase.",
      "Managed the status of over 200 customer records monthly, ensuring a seamless progression from initial request to the technicalinstallation phase.",
      "Maintained high levels of data integrity to prevent discrepancies and support efficient hand-offs to field technician teams."
    ],
  },
  
];

// Experience logos used in the experience section - appears in Experience.jsx
// Additional company logos for the experience timeline
const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

// Project categories used in the projects section
const projectCategories = ["All", "Security Tools", "Web Applications", "Mobile App", "Automation Tools", "Educational Tools", "Others"];

import projects from "./projects";

const testimonials = [
  {
    name: "Dr. Sarah Johnson",
    mentions: "@cybersecurity_prof",
    review:
      "Hardin shows exceptional aptitude in cyber security concepts. His analytical approach to security challenges and attention to detail make him stand out among his peers.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Prof. Michael Chen",
    mentions: "@mchen_tech",
    review:
      "Working with Hardin on our security research project was a pleasure. His dedication to understanding complex security vulnerabilities and developing effective solutions demonstrates his potential in the cyber security field.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Amanda Rodriguez",
    mentions: "@arod_secops",
    review:
      "During his internship, Hardin quickly grasped our security protocols and contributed valuable insights to our vulnerability assessment process. His ability to think like both a defender and an attacker is impressive.",
    imgPath: "/images/client2.png",
  },
  {
    name: "David Park",
    mentions: "@dpark_security",
    review:
      "Hardin's work on our secure application development project showed his strong understanding of both coding principles and security best practices. He has a bright future in the security field.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Lisa Wong",
    mentions: "@lwong_ciso",
    review:
      "I was impressed by Hardin's presentation on network security vulnerabilities. His research was thorough and his recommendations were practical and well-considered. A promising cyber security professional in the making.",
    imgPath: "/images/client4.png",
  },
  {
    name: "Robert Taylor",
    mentions: "@rtaylor_pentest",
    review:
      "Hardin's approach to our CTF challenge was methodical and creative. He demonstrated excellent technical skills and a deep understanding of security concepts that will serve him well in his career.",
    imgPath: "/images/client6.png",
  },
];

// Add your actual social media links here
const socialImgs = [
  {
    name: "Instagram",
    imgPath: "/images/instagram.png",
    href: "https://www.instagram.com/hrdin03?igsh=MTAxaGs0aHFmZmZ6cA==",
  },
  {
    name: "Github",
    imgPath: "/images/github.png",
    href: "https://github.com/HardInCode", // <-- Add your X link
  },
  {
    name: "LinkedIn",
    imgPath: "/images/linkedin.png",
    href: "https://www.linkedin.com/in/hardinirfan39/", // <-- Add your LinkedIn link
  },
];
export {
  navLinks,
  words,
  counterItems,
  logoIconsList,
  abilities,
  techStackImgs,
  techStackIcons,
  expCards,
  expLogos,
  projectCategories,
  projects,
  testimonials,
  socialImgs
};
