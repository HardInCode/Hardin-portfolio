// Updated project details data with detailed image explanations
// Each project now supports the 'imageGallery' array for rich image documentation
// Each image can have a title, description, and optional features list

const projects = [

// Mobile POS
  {
    id: "POS",
    title: "Inventory Management & POS System",
    description: "A comprehensive inventory management and point of sale application designed to simplify business operations. Built with modern technologies to provide a fast, intuitive, and powerful user experience for managing inventory, processing sales, and tracking business metrics.",
    image: "/images/Projects/POS/Main.jpg", // Fallback for main image
    imageGallery: [
      {
        src: "/images/Projects/POS/POS-Main.jpg",
        title: "Main Dashboard Overview",
        description: "The central hub of the POS system featuring quick access to all major functions. The dashboard provides real-time sales metrics, inventory alerts, and quick action buttons for common tasks. The clean, modern interface ensures staff can navigate efficiently during busy periods.",
        features: [
          "Real-time sales analytics display",
          "Low inventory alerts and notifications",
          "Quick access to frequently used functions",
        ]
      },
      {
        src: "/images/Projects/POS/POS-Product.jpg",
        title: "Inventory Management System",
        description: "Comprehensive inventory tracking with automated reorder points, supplier management, and detailed product information. The system tracks stock levels in real-time and provides insights into product performance.",
      },
      {
        src: "/images/Projects/POS/POS-Kasir.jpg",
        title: "Sales Transaction Interface",
        description: "the point where the transaction is made after product selection.",
        features: [
          "Automated stock level monitoring",
          "Product performance analytics",
        ]
      },
      {
        src: "/images/Projects/POS/POS-Report.jpg",
        title: "Sales Analytics Dashboard",
        description: "Detailed sales reporting and analytics interface providing insights into business performance, top-selling products, and customer trends. Interactive charts and customizable date ranges help identify patterns and opportunities.",
        features: [
          "Export capabilities for external analysis"
        ]
      },
      {
        src: "/images/Projects/POS/POS-Profil.jpg",
        title: "Profil and Settings",
        description: "Configuration Menu.",
        features: [
          "Dark mode and Light mode"
        ]
      },
    ],
    category: "Mobile Development",
    technologies: ["React Native", "Expo", "TailwindCSS", "JavaScript"],
    github: null,
    demo: null,
    screenshots: [], // Keep for backward compatibility
    report: null,
    details: `This comprehensive POS system was designed to streamline business operations for small to medium-sized retail businesses.

**Key Features:**
- Real-time inventory tracking with low-stock alerts
- Comprehensive sales analytics and reporting


**Technical Implementation:**
The application uses React Native with Expo for cross-platform compatibility, ensuring consistent performance across iOS and Android devices. The backend leverages cloud storage for real-time data synchronization across multiple devices.

**User Experience:**
The interface prioritizes speed and ease of use, with large touch-friendly buttons and clear visual feedback. The design follows material design principles while maintaining brand consistency.`,
  },


// PW analyzer
  {
    id: "password-analyzer",
    title: "Password Security Analyzer",
    description: "A comprehensive tool for analyzing password strength and security vulnerabilities. Features real-time analysis, security recommendations, and compliance checking against industry standards.",
    image: "/images/Projects/HardLockVault/passwordAnalyzer.png",
    imageGallery: [
   {
    src: "/images/Projects/HardLockVault/passwordAnalyzer.png",
    title: "Advanced Password Analysis",
    description: "Comprehensive password strength analysis featuring entropy calculations, common pattern detection, and detailed security scoring. Provides immediate feedback on password vulnerabilities and improvement suggestions.",
    features: [
      "Real-time password strength assessment",
      "Entropy calculation and complexity scoring",
      "Common pattern and dictionary attack detection",
      "Visual strength indicators with color coding",
      "Detailed security recommendations"
    ]
  },
  {
    src: "/images/Projects/HardLockVault/pwgenerator.png",
    title: "Secure Password Generator",
    description: "HardLock Vault's powerful password generation engine with customizable parameters including length, character sets, and complexity requirements. Features real-time entropy calculation and multiple generation algorithms.",
    features: [
      "Customizable password length and complexity",
      "Multiple character set options (uppercase, lowercase, numbers, symbols)",
      "Real-time entropy and strength calculation",
      "Cryptographically secure random generation",
      "Bulk password generation capability"
    ]
  },
  {
    src: "/images/Projects/HardLockVault/securityguide.png",
    title: "Security Dashboard",
    description: "Central hub for all password security tools and utilities. Monitor overall security posture, access generation tools, and view comprehensive security analytics in one unified interface.",
    features: [
      "Unified security tool access",
      "Password security analytics overview",
      "Quick access to generation and analysis tools",
      "Security best practices guidance",
      "Tool usage statistics and insights"
    ]
  },
  {
    src: "/images/Projects/HardLockVault/bulkanalysis.png",
    title: "Batch Processing Tools",
    description: "Efficient batch processing capabilities for enterprise users and security professionals. Generate multiple passwords, analyze password lists, and export results in various formats for organizational use.",
    features: [
      "Bulk password generation with custom rules",
      "Batch password strength analysis",
      "CSV/JSON export functionality",
      "Custom policy compliance checking",
      "Enterprise-grade security standards"
    ]
  }
],
    category: "Cybersecurity Education",
    technologies: ["JavaScript", "HTML5", "Tailwind CSS"],
    github: "https://github.com/HardInCode/secure-password-toolkit.git",
    demo: "https://hardincode.github.io/secure-password-toolkit/",
    screenshots: [],
    report: null,
    details: `A client-side password security analyzer that helps users create stronger, more secure passwords through real-time feedback and educational guidance.

**Security Features:**
- Common password detection against known breach databases
- Pattern recognition for predictable sequences
- Entropy calculation and complexity scoring

**Educational Components:**
- Interactive tutorials on password security best practices
- Visual feedback with color-coded strength indicators
- Detailed explanations of security vulnerabilities
- Recommendations for password managers and 2FA

**Privacy First:**
All analysis is performed client-side with no data transmission, ensuring complete privacy and security of user passwords.`,
  },


// Web Scrapping
  {
    id: "pdf-web-scraping",
    title: "PDF Journal Web Scraping Tool",
    description: "A manual web scraping application that helps find the journal you want from arxiv.com, with relevance sorting feature.",
    image: "/images/Projects/WebScrapping/PDF-Web-Scrapping.png",
    imageGallery: [  
      {
        src: "/images/Projects/WebScrapping/PDF-Web-Scrapping.png",
        title: "PDF Search Result",
        description: "Hasil pencarian scrapping web",
        features: [
          "Selectable search mode based on keywords or with categories.",
          "Selectable Field for example, title Only, author only, or all fields. ",
          "Specialized Topic Preset"
        ]
      },    // Advanced filtering options
      {
        src: "/images/Projects/WebScrapping/PDF-Result.png",
        title: "PDF Search Result",
        description: "Hasil pencarian scrapping web",
        features: [
          "Selectable search mode based on keywords or with categories.",
          "Selectable Field for example, title Only, author only, or all fields. ",
          "Specialized Topic Preset",
        ]
      },        // Advanced filtering options
    ],
    category: "Cybersecurity Education",
    technologies: ["Javascript", "TypeScript", "HTML5", "Tailwind CSS"],
    github: "https://github.com/HardInCode/arxiv-paper-finder.git",
    demo: "https://hardincode.github.io/arxiv-paper-finder/",
    screenshots: [],
    report: null,
    details: `An research paper discovery tool that streamlines the process of finding relevant academic papers from arXiv.

**Search Capabilities:**
- Advanced keyword
- Category-based filtering across multiple domains
- Author-specific searches

**Relevance Algorithms:**
- Custom scoring based on title, abstract, and keyword matches
- Citation count integration where available
- Publication date weighting for recent research
- Subject category relevance scoring

**User Experience:**
- Clean, academic-focused interface design
- Quick preview of abstracts and key information
- Direct links to full PDF downloads
- Bookmark and save functionality for research organization`,
  },


// Mayan Floating 
  {
    id: "mayan-floating-island",
    title: "Mayan Floating Island",
    description: "A web application that captures the floating island of the Mayan civilization, created using blender and displayed on the website using Three.js (learning about Three.js project).",
    image: "/images/Projects/MayaFloatingIsland/floatingIsland.png",
    images: [
      "/images/Projects/MayaFloatingIsland/floatingIsland.png",        // Main 3D view
      // "/images/mayan-temple-detail.jpg",   // Close-up of temple structures
      // "/images/island-landscape.jpg",      // Full island landscape
      // "/images/3d-modeling-process.jpg",   // Behind-the-scenes Blender work
      // "/images/lighting-effects.jpg"      // Dynamic lighting showcase
    ],
    category: "Three.js Implementation",
    technologies: ["Javascript", "Vite + React", "Three.js", "Blender", "HTML5", "Tailwind CSS"],
    github: "https://github.com/HardInCode/TryingThreeJS.git",
    demo: "https://trying-three-js.vercel.app/",
    screenshots: [],
    // report: "/reports/mayan-island-3d-development.pdf",
    details: `An immersive 3D web experience showcasing a mystical Mayan floating island, combining historical architectural elements with fantastical design.

**3D Modeling & Design:**
- Low Poly Mayan temple and pyramid structures modeled in Blender
- Historically-inspired architectural elements and decorations
- Organic island terrain with vegetation and natural features
- Custom textures and materials for authentic visual appeal

**Technical Implementation:**
- Three.js for real-time 3D rendering in the browser
- Optimized model loading and texture compression
- Interactive camera controls for exploration


**Learning Objectives:**
This project served as a comprehensive introduction to 3D web development, covering model optimization, lighting techniques, and performance considerations for browser-based 3D applications.`,
  },

// CTF
  {
    "id": "CTF",
    "title": "Capture The Flag Competition",
    "description": "An inter-class cyber competition for a total of 3 classes, held by lecturers in semester 5. This document is a detailed writeup from a team at President University for the Ethical Hacking & Digital Forensic Class of 2025.",
    "image": "/images/Projects/CTF/FuturisticCTF.png",
    "imageGallery": [
        {
            "src": "/images/Projects/CTF/Challanges.png",
            "title": "CTF Challenges",
            "description": "The competition featured a wide array of challenges across several categories: Web, OSINT, Miscellaneous, Cryptography, and Forensics.",
            "features": [
                null
            ]
        },
    ],
    "category": "Cybersecurity Competition",
    "technologies": [
        "Web",
        "OSINT",
        "Miscellaneous",
        "Cryptography",
        "Forensic"
    ],
    "report": "https://drive.google.com/file/d/1aNfOrVnCUKm1XGdz1nOBT-btBp6DtP9l/view?usp=sharing",
    "screenshots": [],
    "details": "details\n\n**CTF Categories**\n\n* **Web:** gottagofast, Homie, broken-eh, Library, Ding-dong, Travelcon, Qr-generator, Pdfgenerator, Recruitprogrammer, Pet-donation, Nopasswd, Reader-Reader\n* **OSINT:** namejumpheadbang, Find My Friend, My Favourite\n* **Cryptography:** supposedly-easy, XORry, Vinegar, Rizz Me Up, Triple Threat\n* **Miscellaneous:** My Fav Intro, New-Schedule, LastMessage\n* **Forensic:** Color-theory, Scout Code, Binbasecii, Nightmare, Mailer, Latte, Chameleon, lost-da-important-fil3, TripleThreat2, Gotta-fix-the-corruption\n\n**Learning Objectives:**\nThis CTF challenge was designed to increase and test a wide range of cyberskills, providing practical experience in:\n\n* **Vulnerability Analysis:** Identifying and understanding security flaws such as SQL Injection, Command Injection, JWT 'alg=none' vulnerability, Integer Overflow, and insecure file/directory permissions.\n* **Exploitation:** Actively exploiting vulnerabilities using manual techniques and specialized tools to gain unauthorized access, bypass security controls, and retrieve sensitive data like flags.\n* **Digital Forensics:** Conducting forensic analysis on various file types, including network packet captures (PCAP), disk images (AD1), and multimedia files. This includes data carving, metadata analysis (EXIF), steganography, and log analysis.\n* **Cryptography:** Solving cryptographic puzzles by recognizing and reversing various ciphers (Caesar, Atbash, Vigenère, ROT47) and understanding the weaknesses in cryptographic implementations like flawed RSA key generation.\n* **Tool Proficiency:** Gaining hands-on experience with essential cybersecurity tools such as Burp Suite, curl, Python (for scripting exploits), HxD, FTK Imager, Steghide, Wireshark, NetworkMiner, and various online decoders.\n* **OSINT Techniques:** Applying Open-Source Intelligence methods to gather information from public sources like social media profiles and websites to solve investigation-based challenges."
},
{
    "id": "3D CGA",
    "title": "3D Computer Graphics and Animation Project (Ancient Mayan civilization)",
    "description": "A fourth semester project in 3D Computer Graphics and Animation, building a comprehensive 3D environment and animating it using industry-standard tools.",
    "image": "/images/Projects/3DCGA/Maya128pixelNEw.png",
    "imageGallery": [
        {
            "src": "/images/Projects/3DCGA/Maya128pixelNEw.png",
            "title": "3D Environment Overview",
            "description": "The main 3D scene showcasing the complete environment with detailed modeling, texturing, and lighting setup. This project demonstrates advanced 3D modeling techniques and scene composition.",
            "features": [
                "Complex 3D environment modeling",
                "Advanced lighting and shading techniques",
                "Detailed texture work and material creation",
                "Professional scene composition"
            ]
        },
        {
            "src": "/images/Projects/3DCGA/XaltheonRunningAnim0001-0060.mp4",
            "type": "video",
            "title": "Animated Character Frame",
            "description": "Animated Character idle, walk, and run",
            "features": [
                "Smooth camera animations",
                "Object transformations and keyframing",
                "Dynamic lighting changes",
                "Professional rendering quality"
            ]
        }
    ],
    "category": "3D CGA",
    "technologies": [
        "Blender",
        "3D Modeling",
        "3D Animation",
        "Rendering",
        "Lighting Design",
        "Texture Mapping"
    ],
    "report": "https://docs.google.com/document/d/1cFPc_njY2SGSlIt0Oa6zD9tiWajKFcVI/edit?usp=sharing&ouid=103671008663272847110&rtpof=true&sd=true",
    "video": "/images/Projects/3DCGA/MayanCivilizationFreeAnimation.mp4", 
    "screenshots": [],
    "details": "This project was developed as part of my fourth semester coursework in 3D Computer Graphics and Animation. The project involved creating a complete 3D environment from scratch, including detailed modeling, texturing, lighting, and animation.\n\nThe project demonstrates proficiency in professional 3D software and covers essential aspects of 3D production pipeline including:\n\n**Modeling Phase**: Created detailed 3D models using industry-standard techniques, focusing on topology optimization and geometric accuracy.\n\n**Texturing and Materials**: Developed realistic materials using advanced shading techniques, including procedural textures and UV mapping.\n\n**Lighting Design**: Implemented professional lighting setups to enhance the visual appeal and create mood within the 3D environment.\n\n**Animation**: Created smooth animations with proper timing and easing, demonstrating understanding of animation principles and keyframe interpolation.\n\n**Rendering**: Produced high-quality final renders with optimized settings for both still images and animated sequences."
}
];

export default projects;