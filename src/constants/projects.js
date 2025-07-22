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
  "id": "3D Graphic",
  "title": "3D Computer Graphics and Animation Project (Ancient Mayan civilization)",
  "description": "A fourth semester project in 3D Computer Graphics and Animation, building a comprehensive 3D environment and animating it using industry-standard tools.",
  "image": "/images/Projects/3DCGA/Maya128pixelNEw.png",
  "imageGallery": [
    {
      "src": "/images/Projects/3DCGA/Maya128pixelNEw.png",
      "title": "Final Rendered Scene",
      "description": "The final composition of the Mayan Civilization scene, showcasing the environment, characters, and atmospheric lighting. This image represents the culmination of all modeling, texturing, and lighting work.",
      "features": [
        "Dynamic lighting with a prominent full moon",
        "Dense, low-poly jungle environment",
        "Character interaction around a central campfire",
        "A distant pyramid adding depth to the scene"
      ]
    },
    {
        "src": "/images/Projects/3DCGA/MyFirstAssets.png",
        "title": "Environment and Prop Assets",
        "description": "A showcase of the custom-made, low-poly assets created for the project. This collection includes various types of trees, plants, flowers, rocks, and logs used to build the final scene.",
        "features": [
          "Manually modeled trees, flowers, grasses, and rocks.",
          "Randomized flower colors using Blender's 'Object Info' and 'Color Ramp' nodes.",
          "All assets designed to fit a consistent low-poly aesthetic."
        ]
    },
    {
        "src": "/images/Projects/3DCGA/Characters128.png",
        "title": "Character Models Showcase",
        "description": "A lineup of the character models in their T-pose, displaying the base meshes and the custom-designed clothing and accessories before rigging and animation.",
        "features": [
          "Separate human body templates for male and female characters.",
          "Accessories created by duplicating and sculpting faces from the base model.",
          "Use of 'Solidify' and 'Mirror' modifiers for efficient modeling."
        ]
    },
    {
      "src": "/images/Projects/3DCGA/XaltheonRunningAnim0001-0060.mp4",
      "type": "video",
      "title": "Character Animation Reel",
      "description": "A demonstration of the character animation, including idle, walk, and run cycles for the main character, Xaltheon. This reel highlights the rigging and keyframing work.",
      "features": [
        "Smooth character and camera animations",
        "Object transformations and keyframing",
        "Dynamic lighting that interacts with the moving character",
        "Professional rendering quality for animated sequences"
      ]
    }
  ],
  "category": "3D Graphic",
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
  "videoLink": "https://drive.google.com/drive/folders/1NrUQbW_tU2ygDTtJveSTKlPjmvbp2Joq?usp=sharing",
  "screenshots": [],
  "details": "This project, titled \"Mayan Civilization,\" was developed for a fourth-semester course in 3D Computer Graphics and Animation at President University. The goal was to create a complete 3D environment from scratch, featuring custom models, detailed texturing, atmospheric lighting, and full animation sequences. The project was a collaborative effort by Ahmad Akbar Sidiq, Athaillah Dea Arkananta, Hardin Irfan, and Putra Ananta Darmawan.\n\n**Background Story**\nThe narrative follows Xaltheon, an Aztec-born warrior orphaned during the Spanish conquest. Haunted by his past, he escapes into the jungle where he forges an unbreakable bond with an ocelot named Tecu after saving him from a trap. Xaltheon eventually finds refuge in a Mayan kingdom, though his heart remains hardened by loss. His life changes when he befriends the young Mayan prince, Kaan. They train together, and as Kaan ascends to the throne, he makes Xaltheon his most trusted warrior, gifting him the sacred spear, Astraeus. Now, Xaltheon serves his king with unmatched, merciless strength, his true intentions a mystery to all.\n\n**Character Profiles**\n* **Xaltheon**: The main character, a mysterious and quiet Mayan warrior who hides his face behind a mask. He is the king's most loyal warrior, respected for his strength and focus.\n* **Tecu**: Xaltheon's ocelot companion. While he appears as a normal ocelot, he can transform into a fierce, powerful creature when Xaltheon is in danger.\n* **Kaan**: The wise and brave king of the Mayan kingdom. He is a skilled leader and fighter who shares a deep, unbreakable friendship with Xaltheon.\n* **Astraeus**: A divine spear forged by the gods that channels the energy of the stars, granting its wielder immense power and agility.\n\n**Technical Implementation**\nThe entire 3D scene was built using Blender, with a focus on a low-poly art style.\n\n* **Modeling & Landscaping:** All environmental assets, including trees, flowers, grass, rocks, and buildings (huts, pyramids, statues), were modeled from scratch. These assets were placed manually to create the landscape. The low-poly ground was created by subdividing a plane and using 'Solidify' and 'Bevel' modifiers, then randomly moving vertices along the Z-axis.\n* **Character Modeling:** The team first created male and female human body templates. Clothes and accessories were designed by selecting faces on the body, duplicating them, and sculpting them into the desired shape using 'Solidify' and 'Mirror' modifiers for thickness and symmetry.\n* **Materials & Special Effects:** The fire effect was achieved using a particle system configured to emit cube particles with an emission color. For texturing, standard BSDF colors were used, with gradients on some elements and metallic effects for jewelry. A 'Color Ramp' node connected to an 'Object Info' node was used to generate random colors for duplicated objects like flowers and leaves. The sky and clouds were generated using the 'Dynamic Sky' addon.\n\n**Learning Outcomes**\nThe team gained significant experience with Blender, becoming more familiar with shortcuts, material creation, rigging, and animation techniques like keyframing. The main challenge was coordination and maintaining focus during group work sessions."
},


// Unityanim
{
  "id": "UnityCutscene",
  "title": "Dynamic 3D Animation Scene in Unity",
  "description": "A comprehensive project focused on creating a dynamic 3D animation scene using Unity. This project showcases skills in vehicle and character animation, timeline-based sequencing, and scene management for creating complex, synchronized animations.",
  "image": "/images/Projects/UnityCutscene/SceneOverview.png",
  "imageGallery": [
    {
      "src": "/images/Projects/UnityCutscene/SceneOverview.png",
      "title": "City Environment Overview",
      "description": "An overview of the 3D city environment created for the animation, showcasing various assets and the general layout.",
      "features": [
        "Detailed 3D city environment",
        "Multiple animated characters and vehicles",
        "Dynamic camera setup"
      ]
    },
    {
      "src": "/images/Projects/UnityCutscene/VehicleAnimation.png",
      "title": "Scripted Vehicle Animation",
      "description": "Vehicles animated using scripts to control their movement and wheel rotation, which activate when the scene is played.",
      "features": [
        "Transform location scripting for movement",
        "Wheel rotation synchronized with vehicle speed",
        "Timeline-controlled vehicle animations for specific events"
      ]
    },
    {
      "src": "/images/Projects/UnityCutscene/CharacterTimeline.png",
      "title": "Character and Camera Animation Timeline",
      "description": "The Unity Timeline is used to sequence camera movements and character animations, ensuring they are synchronized.",
      "features": [
        "Timeline-based camera choreography",
        "Character animations triggered at specific timeline points",
        "NPCs grouped and animated for efficiency"
      ]
    }
  ],
  "category": "3D Animation",
  "technologies": [
    "Unity",
    "C# Scripting",
    "3D Animation",
    "Timeline Editor",
    "Scene Management"
  ],
  "report": null,
  "video": "/images/Projects/UnityCutscene/RenderedAnimation480.mp4",
  "videoLink": "https://drive.google.com/drive/folders/16L8qtdT-yTroywsc1xXackndqK0BkvY_?usp=sharing",
  "screenshots": [],
  "details": "This project demonstrates the creation of a complex animated scene within the Unity engine, focusing on bringing a 3D environment to life through scripted and timeline-based animations.\n\n**Vehicle Animation**: Vehicles are animated using C# scripts to control their position and rotation. The wheels' rotation speed is directly tied to the vehicle's movement speed for added realism. Specific vehicles, like a yellow car, an airplane, and a UFO, are controlled via the Timeline to activate at precise moments in the animation.\n\n**Camera and Character Sequencing**: The main camera's movement is directed using the Timeline to create specific animated scenes. Characters' animations are also orchestrated within the Timeline, making them perform actions as the camera focuses on them.\n\n**NPC Management**: Non-player characters (NPCs) are organized into groups to streamline the animation process. Each group is assigned animations, allowing for efficient management of crowd scenes and background characters.\n\n**Asset Credits**: The 3D city assets used in this project were kindly provided by my friend Guido Sijabat, the founder of Buzzy Wizzy indie game Studio."
}, 

// ChurnPredict
{
    id: "ChurnPredict",
    title: "Customer Churn Prediction",
    category: "Machine Learning",
    image: "/images/Projects/customer-churn/churn-hero.png",
    technologies: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "XGBoost",
      "Matplotlib",
      "Seaborn",
      "SHAP",
      "Jupyter Notebook",
    ],
    description:
      "A machine learning workflow to predict customer churn for a telecom company, enabling proactive customer retention strategies by identifying at-risk customers.",
    demo: "",
    github: "https://github.com/HardInCode/customer-churn-prediction.git", // Replace with your actual GitHub link
     // Optional: Add a path to a detailed report
    details: `
This project tackles the critical business problem of customer churn. By leveraging a telecommunications dataset, I developed a machine learning model to predict which customers are likely to leave. The solution provides actionable insights that can help the business reduce revenue loss by implementing targeted retention campaigns.

The project follows a structured, multi-stage machine learning workflow, starting from initial data exploration and ending with in-depth model evaluation and interpretation. The final model, an **XGBoost Classifier**, was selected for its strong performance on this classification problem.
    `,
    imageGallery: [
      {
        src: "/images/Projects/customer-churn/churn-hero.png",
        title: "Understanding the Target: Churn Distribution",
        description: `The first step in any classification problem is to understand the target variable. The initial analysis revealed a class imbalance: **73.5% of customers did not churn**, while **26.5% did**. This is a crucial finding, as it means the model could become biased towards predicting the majority class (No Churn). This insight directly influenced the decision to use **SMOTE (Synthetic Minority Over-sampling Technique)** during the training phase to create a more balanced dataset, ensuring the model learns to identify churners effectively.`,
        features: [
          "**Target Variable:** 'Churn' (Yes/No)",
          "**Imbalance:** Fewer 'Yes' samples make prediction challenging.",
          "**Strategy:** Use SMOTE to balance the training data.",
          "**Visualization:** Bar and pie charts provide a clear view of the distribution.",
        ],
      },
      {
        src: "/images/Projects/customer-churn/churn-preprocessing.png",
        title: "Data Preprocessing and Feature Engineering",
        description: `Raw data is rarely ready for modeling. This stage involved cleaning and transforming the data to create a robust set of features. The *TotalCharges* column had missing values for new customers (0 tenure), which were imputed. Categorical features like 'Yes'/'No' were converted to \`1\`s and \`0\`s.

More importantly, **feature engineering** was performed to create more predictive signals. For instance, I created 'TotalServices' to count the number of services a customer uses and 'CustomerValue' from existing columns. Finally, all numerical features were scaled to ensure they contributed equally to the model's learning process.`,
        features: [
          "**Data Cleaning:** Handled missing values in 'TotalCharges'.",
          "**Encoding:** Converted text-based categories into numbers.",
          "**Feature Creation:** Engineered new features like 'TotalServices' and 'CustomerValue'.",
          "**Scaling:** Applied StandardScaler to normalize numerical features.",
        ],
      },
      {
        src: "/images/Projects/customer-churn/churn-training.png",
        title: "Model Training and Performance Comparison",
        description: `With a clean dataset, the next step was to train and compare several machine learning models. To address the class imbalance, **SMOTE** was applied to the training data. I evaluated three different classifiers:
        - *Logistic Regression*
        - *Random Forest*
        - *XGBoost*

After training, **XGBoost** emerged as the top-performing model, demonstrating the best balance of precision and recall for predicting churn, as indicated by its superior F1-Score and overall accuracy.`,
        features: [
          "**Models:** Logistic Regression, Random Forest, XGBoost.",
          "**Resampling:** SMOTE applied only to the training set to prevent data leakage.",
          "**Evaluation:** Models were compared based on accuracy, precision, recall, and F1-score.",
          "**Best Model:** XGBoost was selected for its superior performance on the churn class.",
        ],
      },
      {
        src: "/images/Projects/customer-churn/churn-importance.png",
        title: "Model Evaluation and Feature Importance",
        description: `Once the best model (XGBoost) was selected, I performed a deeper evaluation. The **ROC curve** showed a high Area Under the Curve (AUC) of **0.83**, indicating a strong ability to distinguish between churning and non-churning customers.

The **feature importance** plot revealed the key drivers of churn. As expected, the **contract type** was the most influential factor, with month-to-month customers being far more likely to churn. Other critical factors included **tenure**, **total charges**, and the type of **internet service**.`,
        features: [
          "**Performance:** ROC-AUC score of 0.83.",
          "**Key Driver:** 'Contract_Month-to-month' is the most significant predictor of churn.",
          "**Other Factors:** 'tenure', 'TotalCharges', and 'InternetService_Fiber optic' are highly influential.",
          "**Insight:** This analysis provides the business with clear targets for retention efforts.",
        ],
      },
      {
        src: "/images/Projects/customer-churn/churn-shap.png",
        title: "Advanced Interpretation with SHAP",
        description: `To understand the 'why' behind the model's predictions for individual customers, I used **SHAP (SHapley Additive exPlanations)**. The beeswarm plot provides a powerful visualization of feature impact.

Each dot represents a customer. Red dots indicate high feature values, and blue dots indicate low values. The plot shows how these values 'push' the model's prediction. For example, a low **tenure** (blue dots on the left) has a high positive SHAP value, strongly pushing the prediction towards churn. This level of detail is invaluable for explaining model behavior to stakeholders.`,
        features: [
          "**Interpretability:** SHAP explains the impact of each feature on individual predictions.",
          "**Tenure Impact:** Low tenure is a strong indicator of churn.",
          "**Contract Impact:** Two-year contracts significantly reduce the likelihood of churn.",
          "**Actionable Insights:** Helps explain *why* a customer is at risk, beyond just *if*.",
        ],
      },
    ],
    // New sections added from your README
    datasetSource: {
      title: "Dataset Source",
      description: "The dataset used for this project is the Telco Customer Churn dataset, sourced from Kaggle.",
      link: "https://www.kaggle.com/datasets/blastchar/telco-customer-churn"
    }
    //, keyFindings: {
    //   title: "Key Findings",
    //   findings: [
    //     "The final XGBoost model achieved an **accuracy of 77%** on the test set.",
    //     "The model's **recall for predicting churn was 66%**, meaning it successfully identified two-thirds of the customers who were at risk of leaving.",
    //     "The most important features for predicting churn were found to be **Contract Type (Month-to-month), Tenure, and Internet Service (Fiber optic)**."
    //   ]
    // },
    // futureImprovements: {
    //   title: "Future Improvements",
    //   improvements: [
    //     "Implement real-time prediction capabilities.",
    //     "Explore additional feature engineering techniques.",
    //     "Test ensemble methods for improved performance.",
    //     "Develop a web interface for business users."
    //   ]
    // }
  },
];

export default projects;