export const personalInfo = {
  name: "TEJDEEP MUNJAMPALLY",
  title: "AI & Full-Stack Developer",
  headline: "B.Tech Computer Science student building AI-powered applications, intelligent systems, and scalable web solutions.",
  subtitle: "AI • Full-Stack Development • Software Engineering",
  aboutSummary: "B.Tech Computer Science student skilled in AI, Full-Stack Development and scalable web applications. Proficient in Python, Java, React, Node.js, Django, SQL and LangGraph with a passion for building AI-powered software solutions.",
  
  socials: {
    github: "https://github.com/tejdeepmunjampally",
    linkedin: "https://linkedin.com/in/munjampally-tejdeep-7182793a4",
    email: "munjampallytejdeep@gmail.com",
    phone: "+91 7569784079",
    location: "Hyderabad, Telangana",
  },
  
  resumeUrl: "/resume.pdf"
};

export const aboutHighlights = [
  {
    title: "AI & Machine Learning",
    description: "Developing context-aware intelligent agents using LangGraph, RAG, and LLM orchestration.",
    icon: "Brain"
  },
  {
    title: "Full-Stack Development",
    description: "Engineering scalable web applications with React, Node.js, Django, and modern SQL/NoSQL databases.",
    icon: "Code"
  },
  {
    title: "Agentic AI / LangGraph",
    description: "Architecting stateful multi-agent workflows and adaptive recommendation pipelines.",
    icon: "Cpu"
  },
  {
    title: "Problem Solving",
    description: "Solid Data Structures & Algorithms foundation with 250+ solved competitive programming challenges.",
    icon: "Zap"
  }
];

export const statistics = [
  { label: "CGPA (Current)", value: 9.65, max: 10, suffix: "/10", color: "from-brand-cyan to-blue-500" },
  { label: "CodeChef Solved", value: 150, suffix: "+", color: "from-purple-500 to-indigo-500" },
  { label: "LeetCode DSA", value: 100, suffix: "+", color: "from-amber-500 to-orange-500" },
  { label: "Key AI Projects", value: 2, suffix: " Major", color: "from-emerald-500 to-teal-500" }
];

export const skillCategories = [
  {
    id: "languages",
    name: "Languages",
    skills: [
      { name: "Python", level: "Advanced", icon: "FileCode2", desc: "AI pipelines, Django, LangGraph, Scripting" },
      { name: "Java", level: "Intermediate", icon: "Coffee", desc: "OOP, Data Structures, Algorithms" },
      { name: "C", level: "Foundational", icon: "Binary", desc: "Memory management, Systems programming" }
    ]
  },
  {
    id: "web",
    name: "Web Development",
    skills: [
      { name: "React", level: "Advanced", icon: "Atom", desc: "Hooks, SPA, Framer Motion, Tailwind" },
      { name: "Node.js", level: "Intermediate", icon: "Server", desc: "REST APIs, Express backend services" },
      { name: "Express.js", level: "Intermediate", icon: "Layers", desc: "Middleware, Routing, Microservices" },
      { name: "Django", level: "Intermediate", icon: "ShieldCheck", desc: "ORM, Authentication, Admin panels" },
      { name: "HTML5", level: "Advanced", icon: "Layout", desc: "Semantic HTML, Accessibility, SEO" },
      { name: "CSS3", level: "Advanced", icon: "Palette", desc: "Flexbox, Grid, Animations, Responsive UI" }
    ]
  },
  {
    id: "databases",
    name: "Databases",
    skills: [
      { name: "MySQL", level: "Intermediate", icon: "Database", desc: "Relational modeling, Indexing, Joins" },
      { name: "Oracle SQL", level: "Intermediate", icon: "Database", desc: "Complex queries, PL/SQL basics" },
      { name: "MongoDB", level: "Intermediate", icon: "HardDrive", desc: "Document store, Aggregations" }
    ]
  },
  {
    id: "ai",
    name: "AI / ML",
    skills: [
      { name: "LangGraph", level: "Advanced", icon: "Workflow", desc: "Multi-agent workflows, Cyclic state graphs" },
      { name: "RAG", level: "Advanced", icon: "Search", desc: "Vector DBs, Embeddings, Context retrieval" },
      { name: "Prompt Engineering", level: "Advanced", icon: "Sparkles", desc: "System prompts, Few-shot learning, Guardrails" }
    ]
  },
  {
    id: "tools",
    name: "Tools",
    skills: [
      { name: "Git", level: "Advanced", icon: "GitBranch", desc: "Version control, Branching, Pull requests" },
      { name: "Docker", level: "Intermediate", icon: "Container", desc: "Containerization, Environment isolation" },
      { name: "Jenkins", level: "Foundational", icon: "PlaySquare", desc: "CI/CD automation pipelines" },
      { name: "Selenium", level: "Foundational", icon: "CheckCircle2", desc: "Automated web testing" }
    ]
  },
  {
    id: "visualization",
    name: "Visualization",
    skills: [
      { name: "Tableau", level: "Intermediate", icon: "BarChart3", desc: "Interactive dashboards, Analytics" },
      { name: "Power BI", level: "Intermediate", icon: "PieChart", desc: "Business intelligence reports, DAX" }
    ]
  }
];

export const projectsData = [
  {
    id: "capital-compass-ai",
    number: "01",
    featured: true,
    title: "Capital Compass AI",
    subtitle: "AI-Powered Financial Recommendation System",
    description: "Developed an AI-powered financial guidance platform using LangGraph and RAG to deliver personalized investment strategies.",
    technologies: ["Python", "LangGraph", "RAG", "React", "Node.js", "MySQL"],
    githubUrl: "https://github.com/tejdeepmunjampally/capital-compass-ai",
    liveUrl: null,
    badgeText: "Featured AI Project",
    highlights: [
      "Built a context-aware recommendation pipeline for personalized investment suggestions.",
      "Integrated LLMs with backend APIs for adaptive recommendations.",
      "Designed scalable workflows for concurrent low-latency requests."
    ],
    details: {
      problem: "Traditional financial advisory systems either rely on static rule sets or lack real-time context integration, failing to provide tailored financial recommendations based on dynamic market data and user risk profiles.",
      solution: "Engineered a stateful agentic system using LangGraph and Retrieval-Augmented Generation (RAG). The graph orchestrates user query understanding, vector storage retrieval for financial literature, and adaptive LLM reasoning to produce risk-rated advice.",
      architecture: [
        "React Frontend for interactive multi-step financial profile questionnaire & portfolio visualizer.",
        "Node.js API gateway routing financial requests with concurrent request pool management.",
        "LangGraph Engine executing directed cyclical graph nodes (Query Sanitizer -> RAG Vector Retriever -> Risk Analysis Agent -> LLM Formatter).",
        "MySQL Database storing user session history, portfolio states, and risk metrics."
      ],
      metrics: [
        { label: "Recommendation Accuracy", value: "94%" },
        { label: "Avg Query Latency", value: "< 350 ms" },
        { label: "Concurrent Flow Support", value: "High Scale" }
      ]
    }
  },
  {
    id: "domain-forge-ai",
    number: "02",
    featured: false,
    title: "Domain Forge AI",
    subtitle: "AI-Based Website Optimization Platform",
    description: "Built an AI-powered website optimization platform analyzing live user interactions to automate UI/UX recommendations.",
    technologies: ["React", "Django", "Machine Learning", "REST APIs"],
    githubUrl: "https://github.com/tejdeepmunjampally/Domain-redesign",
    liveUrl: null,
    badgeText: "High-Performance Web AI",
    highlights: [
      "Analyzed 500+ user interactions to improve UI/UX recommendations.",
      "Integrated frontend with backend AI services using REST APIs.",
      "Optimized response latency to below 200 ms."
    ],
    details: {
      problem: "Website redesigns and performance tuning often rely on manual split testing or static heuristics, causing slow feedback loops and delayed conversion optimization.",
      solution: "Created an automated telemetry and AI analysis suite that evaluates DOM interactions, layout bottlenecks, and response latency, outputting targeted CSS/React code refactoring suggestions.",
      architecture: [
        "React Web Application featuring real-time interaction metrics dashboard.",
        "Django REST Framework backend handling data ingestion, session logging, and analytics aggregation.",
        "Scikit-learn / ML heuristic models evaluating interaction heatmaps to score conversion friction.",
        "Asynchronous task workers processing heavy dataset analyses."
      ],
      metrics: [
        { label: "Interactions Analyzed", value: "500+" },
        { label: "API Response Latency", value: "< 200 ms" },
        { label: "UI Improvement Yield", value: "35% Faster" }
      ]
    }
  }
];

export const achievementsData = [
  {
    platform: "CodeChef",
    stat: "150+",
    label: "Problems Solved",
    description: "Active competitive programming practitioner focusing on algorithmic efficiency.",
    icon: "Code2",
    badge: "Active Solved 150+",
    color: "from-amber-500/20 to-orange-500/20 border-amber-500/30 text-amber-400",
    link: "https://www.codechef.com"
  },
  {
    platform: "LeetCode",
    stat: "100+",
    label: "DSA Problems Solved",
    description: "Consistent practice in Data Structures, Dynamic Programming, and Graph Algorithms.",
    icon: "Cpu",
    badge: "DSA 100+ Solved",
    color: "from-cyan-500/20 to-blue-500/20 border-cyan-500/30 text-cyan-400",
    link: "https://leetcode.com"
  },
  {
    platform: "HackerRank",
    stat: "5-Star",
    label: "Python & Bronze Problem Solving",
    description: "Earned 5-Star Gold Badge in Python programming and Bronze Badge in Problem Solving.",
    icon: "Award",
    badge: "5★ Python & Bronze Badge",
    color: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-400",
    link: "https://www.hackerrank.com"
  }
];

export const educationData = {
  institution: "Vignan Institute of Technology and Science",
  degree: "B.Tech in Computer Science Engineering",
  period: "2023 – 2027",
  cgpa: "9.65 / 10",
  location: "Hyderabad, Telangana",
  highlights: [
    "Consistently maintained top academic rank with 9.65/10 CGPA.",
    "Core focus areas: Artificial Intelligence, Data Structures & Algorithms, Database Systems, Web Engineering.",
    "Active technical hackathon participant and Executive Member in student body chapters."
  ]
};

export const leadershipData = [
  {
    organization: "Computer Society of India (CSI)",
    role: "Executive Member",
    period: "2024 – Present",
    badge: "CSI Hyderabad Chapter",
    details: [
      "Mentored junior students and supported technical workshops under CSI Hyderabad Chapter.",
      "Organized technical hackathons, coding competitions, workshops, and cultural events.",
      "Secured Top 10 positions in multiple college-level hackathons."
    ]
  },
  {
    organization: "National Service Scheme (NSS)",
    role: "Volunteer",
    period: "2023 – Present",
    badge: "Community Outreach",
    details: [
      "Coordinated volunteer activities and community service events.",
      "Participated in awareness programs and college outreach initiatives."
    ]
  }
];

export const allCertificates = {
  nptel: [
    {
      id: "java",
      title: "Programming In Java",
      issuer: "NPTEL / IIT Kharagpur",
      period: "Jan-Apr 2025 (12 Week Course)",
      score: "65%",
      badge: "Elite",
      badgeColor: "from-amber-400 to-amber-600 text-dark-900 font-extrabold",
      rollNo: "NPTEL25CS57S1147004120",
      assignmentsScore: "24.94 / 25",
      examScore: "40.5 / 75",
      totalCertified: 16040,
      credits: "3 or 4 Credits",
      verifyUrl: "https://swayam.gov.in"
    },
    {
      id: "python_nptel",
      title: "Programming in Python",
      issuer: "SWAYAM / Dibrugarh University",
      period: "May 2024 (Issued 21/06/2024)",
      score: "65%",
      badge: "4 Credit Course",
      badgeColor: "from-brand-cyan to-blue-500 text-dark-900 font-bold",
      rollNo: "TL01067669",
      assignmentsScore: "16 / 30",
      examScore: "49 / 70",
      instructor: "Dr. Rizwan Rehman",
      credits: "4 Credits",
      verifyUrl: "https://swayam.gov.in"
    },
    {
      id: "ml",
      title: "Introduction to Machine Learning",
      issuer: "NPTEL / IIT Kharagpur",
      period: "Jul-Sep 2025 (8 Week Course)",
      score: "54%",
      badge: "Certified",
      badgeColor: "from-brand-violet to-purple-600 text-white font-bold",
      rollNo: "NPTEL25CS149S537002022",
      assignmentsScore: "23.13 / 25",
      examScore: "31.25 / 75",
      totalCertified: 9715,
      credits: "2 or 3 Credits",
      verifyUrl: "https://swayam.gov.in"
    },
    {
      id: "dbms",
      title: "Data Base Management System",
      issuer: "NPTEL / IIT Kharagpur",
      period: "Jan-Mar 2025 (8 Week Course)",
      score: "53%",
      badge: "Certified",
      badgeColor: "from-teal-400 to-emerald-600 text-dark-900 font-bold",
      rollNo: "NPTEL25CS18S647003320",
      assignmentsScore: "20.21 / 25",
      examScore: "33 / 75",
      totalCertified: 8423,
      credits: "2 or 3 Credits",
      verifyUrl: "https://swayam.gov.in"
    },
    {
      id: "rtos",
      title: "Real Time Operating System",
      issuer: "NPTEL / IIT Kharagpur",
      period: "Feb-Mar 2025 (4 Week Course)",
      score: "46%",
      badge: "Certified",
      badgeColor: "from-slate-400 to-slate-600 text-white font-bold",
      rollNo: "NPTEL25CS78S347002454",
      assignmentsScore: "15.58 / 25",
      examScore: "30 / 75",
      totalCertified: 387,
      credits: "1 or 2 Credits",
      verifyUrl: "https://swayam.gov.in"
    }
  ],
  cisco: [
    {
      id: "cisco_python",
      title: "Python Essentials 1",
      issuer: "Cisco Networking Academy",
      offeredBy: "VIGNAN INSTITUTE OF TECHNOLOGY & SCIENCE (TASK)",
      completionDate: "03 Apr 2025",
      instructor: "Nagaram Nagarjuna",
      category: "Programming Languages",
      badge: "Cisco Certified",
      badgeColor: "from-cyan-400 to-blue-600 text-dark-900 font-bold"
    },
    {
      id: "cisco_c",
      title: "CLA: Programming Essentials in C",
      issuer: "C++ Institute / Cisco Networking Academy",
      offeredBy: "VIGNAN INSTITUTE OF TECHNOLOGY & SCIENCE (TASK)",
      completionDate: "11 Nov 2024",
      instructor: "Nagaram Nagarjuna",
      category: "C Programming & Systems",
      badge: "Statement of Achievement",
      badgeColor: "from-indigo-400 to-purple-600 text-white font-bold",
      skills: [
        "Universal concepts of computer programming & developer tools",
        "Syntax and semantics of C language & data types",
        "Algorithm implementation & hardware memory management",
        "Preprocessor directives & standard library functions"
      ]
    }
  ],
  tableau: {
    id: "tableau_365",
    title: "Introduction to Tableau",
    issuer: "365 Data Science",
    certId: "CC-14EC82A235",
    date: "17/11/2024",
    chair: "N. Krustev (Chair of the Board)",
    category: "Analytics & Data Visualization",
    badge: "Verified Achievement",
    badgeColor: "from-emerald-400 to-teal-600 text-dark-900 font-bold"
  },
  cambridge: {
    id: "cambridge_english",
    title: "Cambridge English Interchange Level 3 Course",
    issuer: "Cambridge University Press & Assessment",
    institution: "Vignan Institute of Technology and Science, Hyderabad",
    venue: "Hyderabad",
    regionalDirector: "TK Arunachalam (Regional Director - English)",
    category: "Professional Communication",
    badge: "Certificate of Completion",
    badgeColor: "from-amber-400 to-orange-500 text-dark-900 font-bold"
  }
};

export const certificationsData = [
  {
    id: "nptel-group",
    type: "nptel",
    title: "NPTEL / SWAYAM Online Certifications (5 Courses)",
    issuer: "IIT Kharagpur & Dibrugarh Univ",
    category: "Core CS & AI (Click to view 5 Certificates)",
    icon: "BookOpen",
    count: 5,
    highlight: "Java (Elite 65%), Python (65%), Machine Learning (54%), DBMS (53%), RTOS (46%)"
  },
  {
    id: "cisco-group",
    type: "cisco",
    title: "Cisco – Python and C Programming (2 Courses)",
    issuer: "Cisco Networking Academy & C++ Institute",
    category: "Programming Languages (Click to view)",
    icon: "ShieldCheck",
    count: 2,
    highlight: "Python Essentials 1 & CLA: Programming Essentials in C"
  },
  {
    id: "tableau-card",
    type: "tableau",
    title: "Tableau – Data Visualization",
    issuer: "365 Data Science",
    category: "Analytics & Data Viz (Click to view)",
    icon: "BarChart2",
    highlight: "Introduction to Tableau (Certificate ID: CC-14EC82A235)"
  },
  {
    id: "cambridge-card",
    type: "cambridge",
    title: "Cambridge English – Professional Communication",
    issuer: "Cambridge University Press & Assessment",
    category: "Professional Skills (Click to view)",
    icon: "CheckCircle",
    highlight: "Cambridge English Interchange Level 3 Course"
  }
];


