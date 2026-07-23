import { Link } from "@tanstack/react-router";
import {
  Zap, Linkedin, Github, Mail,
  Briefcase, Code2, Cpu, FlaskConical, Trophy, Target,
  Building2, Globe, Link2,
} from "lucide-react";
import pCansat from "@/assets/project-cansat.jpg";
import pFlood from "@/assets/project-flood.jpg";
import pEnergy from "@/assets/project-energy.jpg";
import pNexa from "@/assets/project-nexa.jpg";
import pNeuro from "@/assets/project-neuro.jpg";
import pHeal from "@/assets/project-heal.jpg";
import pHealth from "@/assets/project-health.jpg";
import pCircuit from "@/assets/project-circuit.jpg";
import logoPenovatech from "@/assets/logo-penovatech.svg";
import logoTenbit from "@/assets/logo-tenbit.jpg";
import logoNtdc from "@/assets/logo-ntdc.jpg";

export const navItems: { label: string; to: string }[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/" },
  { label: "Experience", to: "/experience" },
  { label: "Projects", to: "/projects" },
  { label: "Skills", to: "/" },
  { label: "Achievements", to: "/achievements" },
  { label: "Research", to: "/research" },
  { label: "Certifications", to: "/certifications" },
  { label: "Contact", to: "/" },
];

export const stats = [
  { icon: Briefcase, n: "3+", l: "Years of Experience" },
  { icon: Code2, n: "15+", l: "Projects Completed" },
  { icon: Cpu, n: "10+", l: "Technologies" },
  { icon: FlaskConical, n: "6+", l: "Research Projects" },
  { icon: Trophy, n: "8+", l: "Awards & Honors" },
  { icon: Target, n: "100%", l: "Commitment" },
];

export type Project = {
  img: string; featured?: boolean; title: string; desc: string; tags: string[]; github?: string;
  details?: {
    role?: string;
    achievement?: { label: string; by: string };
    features?: string[];
    specs?: { icon: "chip" | "battery" | "sensor" | "structure" | "comm" | "mission"; label: string; value: string }[];
    bullets?: string[];
    systemFlow?: string[];
  };
};

export const projects: Project[] = [
  {
    img: pCansat, featured: true, title: "CanSat Competition (SUPARCO)",
    desc: "Led Pakistan's first drone-based CanSat deployment, engineering real-time telemetry and predictive analytics for safe descent.",
    tags: ["ESP32", "ESP-NOW", "IMU", "Sensors", "Python"],
    github: "https://github.com/Hafiza-Laiba-Faisal/national-cansat-competition-2025",
    details: {
      role: "Team Lead – 1st Position in Pakistan's 1st National CanSat Competition 2025",
      achievement: { label: "1st Position", by: "Level 3 Missions by SUPARCO & RESOLVE" },
      features: [
        "Real-time Telemetry & Visualization",
        "IMU Sensor Fusion & 3D Trajectory",
        "Predictive Analytics for Descent",
        "Autonomous Mission Event Detection",
      ],
      specs: [
        { icon: "chip", label: "Microcontroller", value: "ESP32 | Arduino C++" },
        { icon: "sensor", label: "Sensors", value: "MPU6050 (IMU), BMP180, DHT22, NEO-M8 GPS" },
        { icon: "comm", label: "Communication", value: "ESP-NOW Protocol | Long-Range Telemetry" },
        { icon: "structure", label: "Role", value: "Team Lead & Mission Systems Engineer" },
        { icon: "mission", label: "Mission", value: "Real-time telemetry, 3D trajectory mapping & event detection" },
      ],
    },
  },
  { img: pEnergy, title: "Smart Energy Audit Monitoring System", desc: "Engineered an ESP32 and PZEM-004T based IoT solution for real-time energy monitoring, anomaly detection, and remote power control.", tags: ["ESP32", "PZEM-004T", "Modbus-RTU", "IoT Dashboard"],
    github: "https://github.com/Hafiza-Laiba-Faisal/smart-energy-audit-system",
    details: {
    role: "IoT Embedded Systems Developer — Power Electronics Lab, LCWU",
    features: [
      "Real-Time Energy Auditing",
      "Dual-Interface (TFT + Web)",
      "RS485 Modbus-RTU Integration",
      "Over-Voltage/Current Protection",
      "Auto-Relay Power Cutoff",
      "Prepaid Balance Management",
      "Remote Load Control",
      "Smart Metering & IoT",
    ],
    specs: [
      { icon: "chip", label: "Hardware", value: "ESP32 | PZEM-004T V3.0 | TFT LCD | Relay Module" },
      { icon: "comm", label: "Communication", value: "RS485 / Modbus-RTU | WiFi" },
      { icon: "structure", label: "Tech Stack", value: "ESP32 (Arduino C++) | PZEM-004T V3.0 | RS485 / Modbus-RTU | TFT LCD | Relay Module | WiFi" },
    ],
    bullets: [
      "Developed a dual-interface monitoring system (Local TFT + WiFi Web) for live tracking of voltage, current, and power via RS485 / Modbus-RTU.",
      "Designed automated protection logic to trigger immediate relay-based power cutoff during over-voltage or over-current faults.",
      "Built a prepaid energy management module for balance tracking, usage limits, and remote load toggling.",
    ],
  } },
  { img: pFlood, title: "FloodGuard AI (NIGHEBAN Cortex)", desc: "Architected a multi-agent AI command system for end-to-end flood disaster management, integrating real-time prediction, evacuation routing, and relief resource optimization.", tags: ["Custom MCP Server", "Multi-Agent AI"], details: {
    role: "System Architect & Lead Developer",
    achievement: { label: "Most Innovative Award – Innovista Hackathon 2025 (Regional Level, Lahore)", by: "Innovista Hackathon 2025" },
    features: [
      "Custom MCP Server Architecture",
      "Multi-Agent AI Coordination",
      "Real-time Evacuation Routing",
      "Automated Relief Estimation",
    ],
    specs: [
      { icon: "chip", label: "Frontend", value: "React.js | Central Command Dashboard" },
      { icon: "sensor", label: "Backend & AI", value: "Python | FastAPI | Custom MCP Server | Multi-Agent System" },
      { icon: "comm", label: "Database", value: "PostgreSQL | MongoDB" },
      { icon: "structure", label: "Role", value: "System Architect & Lead Developer" },
      { icon: "mission", label: "Domains", value: "Geospatial Analysis | Predictive Modeling | Resource Optimization" },
    ],
    bullets: [
      "Built a custom MCP Server from scratch to orchestrate the 4-agent AI pipeline (Hydro-Met, Evacuation, Relief, Reconstruction) and manage data flow across the system.",
      "Implemented intelligent algorithms for safe route optimization, dynamic camp capacity management, and prioritized vehicle assignment for affected populations.",
      "Developed real-time resource estimation logic for food, water, and medical supplies based on live affected-family data and inventory tracking.",
      "Built a central command dashboard (React) providing authorities (NDMA/PDMA) with a unified view of risk alerts, camp statuses, and damage assessments.",
    ],
  } },
  { img: pNexa, title: "NEXA ⚡ — AI-Powered Electronics Engineering Agent", desc: "Engineered an advanced agentic AI platform that transforms electronics design and debugging. By combining Google Gemini 3's reasoning with a deterministic Physics Validation Engine, NEXA autonomously designs schematics, generates firmware, and validates circuits using fundamental physics laws to eliminate AI hallucinations.", tags: ["FastAPI", "Gemini 3", "Multi-Agent AI", "React", "Computer Vision"],
    github: "https://github.com/anoneurx/nexa",
    details: {
      role: "AI Systems Engineer — Agentic Electronics",
      features: [
        "7-Agent Collaborative Swarm",
        "Physics-Validated Debugging",
        "Vision-to-Netlist Extraction",
        "SPICE-Level AI Simulation",
        "10+ Gemini Function Declarations",
        "Automated BOM & Firmware Gen",
        "Adaptive Learning (Viva Mode)",
        "Deterministic Math Engine",
      ],
      specs: [
        { icon: "chip", label: "Frontend", value: "React 18 | Node.js / Express" },
        { icon: "mission", label: "Backend & AI", value: "Python (FastAPI) | Google Gemini 3 | Function Calling" },
        { icon: "sensor", label: "Data & Storage", value: "MongoDB | YAML-based RAG" },
        { icon: "comm", label: "Vision", value: "Breadboard/Schematic Images | Netlist Extraction" },
        { icon: "structure", label: "Role", value: "AI Systems Engineer — Agentic Electronics" },
      ],
      bullets: [
        "Architected a 7-Agent Collaborative Swarm (Orchestrator, Design, Diagnostic, Simulation, Vision, Code, Component) using Gemini Function Calling for intelligent intent routing and task execution.",
        "Developed a deterministic Physics Validation Engine that cross-checks AI recommendations against Ohm's Law and Kirchhoff's Laws to ensure mathematically accurate circuit analysis and safe component values.",
        "Built a Vision-Powered Analysis pipeline enabling users to upload breadboard photos or schematic images, which the AI autonomously converts into structured netlists.",
        "Implemented AI-powered SPICE-level simulation capabilities, generating Bode plots, transient analyses, and DC operating points without requiring external simulation software.",
      ],
      systemFlow: [
        "Input: User provides a text prompt or uploads a schematic/breadboard image.",
        "Vision & Routing: Vision Agent extracts netlists; Orchestrator routes the task to specialized agents.",
        "Design & Code: Design Agent generates schematics/BOM, Code Agent writes ESP32/Arduino firmware.",
        "Physics Validation: Engine applies Ohm/Kirchhoff laws to verify calculations and prevent hallucinations.",
        "Simulation: Simulation Agent generates Bode plots and transient waveforms.",
        "Output: Platform delivers a complete, validated engineering package to the user.",
      ],
    } },
  { img: pNeuro, title: "NeuroShield – EEG-Powered Addiction Recovery Platform", desc: "Engineered a mental health platform combining neuroscience and multi-agent AI to provide 24/7 addiction recovery support, real-time trigger detection, and CBT-based coping tools.", tags: ["Python", "Flask", "Multi-Agent AI", "EEG/ML (SVM)", "AutoGen"],
    github: "https://github.com/Hafiza-Laiba-Faisal/Neuroshield",
    details: {
      role: "AI/ML Engineer — Multi-Agent Systems",
      achievement: { label: "Honorable Mention – PeerBridge Hackathon 2025 (International)", by: "PeerBridge Mental Health Hacks 2025" },
      features: [
        "6-Agent AI Therapist Roundtable",
        "Real-Time EEG Brain Monitoring",
        "ML-Based Trigger Detection (SVM)",
        "Context-Aware NLP AI Coach",
        "Interactive Coping Tools (Urge Surfing)",
        "Privacy-First Anonymous Design",
        "Mood Calendar & Gamification",
        "24/7 Digital Safe Space",
      ],
      specs: [
        { icon: "chip", label: "Frontend", value: "Flask Templates | Socket.IO | Real-Time UI" },
        { icon: "mission", label: "Backend & AI", value: "Python (Flask) | AutoGen | OpenAI/Groq API | scikit-learn (SVM)" },
        { icon: "comm", label: "Communication", value: "Socket.IO | WebSockets | Anonymous Sessions" },
        { icon: "sensor", label: "Database", value: "PostgreSQL" },
        { icon: "structure", label: "Role", value: "AI/ML Engineer — Multi-Agent Systems" },
      ],
      bullets: [
        "Developed a 6-Agent AI Therapist Roundtable using AutoGen and LLMs (GPT-4, Claude, Llama 3.3) to provide multi-perspective therapy (CBT, Holistic, Trauma-informed) via real-time Socket.IO debates.",
        "Implemented an ML pipeline (SVM) to process simulated EEG signals (via NumPy/SciPy) for classifying brain states (Focused, Relaxed, Triggered) with 87% accuracy.",
        "Built an interactive NLP AI Coach providing context-aware CBT strategies, urge surfing, and automated mood-tracking journal integration.",
        "Ensured a privacy-first architecture with anonymous IDs, bcrypt password hashing, and local-first storage using Flask and PostgreSQL.",
      ],
    } },
  { img: pHeal, title: "HealTalk — AI-Powered Recovery Support Platform", desc: "Engineered a real-time mental health and recovery platform that bridges EEG-based emotion detection with multi-agent AI therapy, designed to assist users (including those with communication barriers) in their emotional healing journey.", tags: ["Python", "Flask", "WebSockets", "Multi-Agent AI", "EEG Processing"],
    github: "https://github.com/Hafiza-Laiba-Faisal/Hafiza_Laiba_Faisal-VieroMind_Lhr_Pakathon_4_Oct_2025", details: {
      role: "AI Engineer — Real-Time Mental Health Systems",
      achievement: { label: "3rd Position – VieroMind Pakathon 2025", by: "VieroMind Pakathon 2025" },
      features: [
        "Live AI Therapy Debates (WebSocket)",
        "Real-Time EEG Emotion Classification",
        "24/7 NLP Support Coach",
        "Dynamic Brain Wave Visualization",
        "Digital Recovery Journaling",
        "Emergency Calming Interventions",
        "Anonymous & Secure Local Storage",
        "Gamified Daily Streaks",
      ],
      specs: [
        { icon: "chip", label: "Frontend", value: "Bootstrap 5 | Chart.js | Real-Time Dashboard" },
        { icon: "mission", label: "Backend & AI", value: "Python (Flask) | Flask-SocketIO | AutoGen | OpenRouter GPT" },
        { icon: "comm", label: "Communication", value: "WebSockets | Socket.IO | Live Agent Debates" },
        { icon: "sensor", label: "Data & Processing", value: "EEG (.npy) | NumPy | Emotion Classification" },
        { icon: "structure", label: "Storage", value: "SQLite" },
      ],
      bullets: [
        "Architected a real-time multi-agent therapy system using Microsoft AutoGen and Flask-SocketIO, enabling six distinct AI therapists to conduct live, concurrent debates for personalized emotional support.",
        "Developed an EEG signal processing pipeline capable of ingesting raw brain wave data (.npy) to classify emotional states (Focused, Triggered, Relaxed) and visualize them dynamically via Chart.js.",
        "Integrated a 24/7 NLP AI Support Coach using OpenRouter GPT models to deliver continuous behavioral guidance, paired with streak tracking and digital journaling for long-term engagement.",
        "Built a responsive, low-latency web architecture using Flask, WebSockets, and Bootstrap 5 to ensure seamless live communication between the user and AI agents.",
      ],
    } },
  { img: pHealth, title: "HealthLink360 — Multi-Agent AI Healthcare Ecosystem", desc: "Engineered a next-generation AI healthcare platform connecting Pakistan's major hospitals in real-time. Used a network of specialized AI agents and a Human-in-the-Loop (HITL) architecture to automate emergency response, medico-legal workflows, and hospital operations.", tags: ["FastAPI", "Multi-Agent AI", "Human-in-the-Loop", "Custom MCP Servers"], details: {
      role: "AI Systems Architect — Healthcare Automation",
      features: [
        "Human-in-the-Loop (HITL) Design",
        "Multi-Agent Ecosystem with MCP",
        "Cross-Agent Emergency Handoffs",
        "AI Video Waste Classification",
        "Automated PII Data Redaction",
        "Real-Time WebSocket Agent Tracing",
      ],
      specs: [
        { icon: "chip", label: "Frontend", value: "Dashboard UI | Real-Time Monitoring" },
        { icon: "mission", label: "Backend & AI", value: "Python (FastAPI) | Anthropic Agents SDK | Custom MCP Servers" },
        { icon: "comm", label: "Communication", value: "WebSockets | Real-Time Agent Tracing" },
        { icon: "sensor", label: "Data & Processing", value: "MongoDB | Computer Vision (Video AI)" },
        { icon: "structure", label: "Role", value: "AI Systems Architect — Healthcare Automation" },
      ],
      bullets: [
        "Architected a multi-agent ecosystem using custom Model Context Protocol (MCP) servers to orchestrate specialized agents (Maternal, Pharmacy, Waste, Mental Health, Medico-Legal) for autonomous task execution.",
        "Implemented a Human-in-the-Loop (HITL) flow where hospital staff interact with AI agents via a dashboard—agents process data, suggest actions (e.g., FIR drafting, waste disposal), and humans approve or trigger final actions.",
        "Enabled cross-agent handoffs (e.g., Maternal Agent seamlessly handing off emergency cases to Tracking Agent for real-time ambulance dispatch with ETA calculation).",
        "Built an AI-powered video analysis pipeline where the Waste Agent processes hospital CCTV/video uploads to detect and classify bio-medical waste (sharps, placenta) and estimate weights.",
        "Developed a real-time FastAPI backend with WebSockets for live agent tracing, automated PII redaction for sensitive cases, and dynamic dashboard updates.",
      ],
      systemFlow: [
        "Human Input: Staff triggers task via dashboard (e.g., Emergency, Video Upload).",
        "Agent Routing: FastAPI routes query to specialized AI Agent.",
        "MCP Execution: Agent uses custom MCP servers to fetch data or process documents.",
        "Cross-Agent Handoff: Agents collaborate (e.g., Maternal → Tracking for ambulance).",
        "Human Approval: System returns AI-generated report/action for human verification.",
        "Action Logged: Final action is dispatched and traced via WebSockets.",
      ],
    } },
  { img: pCircuit, title: "Circuit Sathi ⚡ — Gamified AI Electronics Tutor", desc: "Engineered an AI-driven STEM platform that transforms static electronics education into a gamified experience. Students can visually simulate electron flow, interact with a Socratic AI tutor, and upload lab manuals to auto-generate interactive circuit schematics.", tags: ["Next.js", "Express", "PixiJS", "Mistral AI", "MNA Physics Engine"], details: {
      role: "Full-Stack AI Engineer — EdTech Gamification",
      features: [
        "Gamified Real-Time Circuit Sim",
        "Server-Side MNA Physics Solver",
        "Agentic Socratic AI Tutor",
        "AI Vision Schematic Parser",
        "Multi-Provider LLM Fallback",
        "Voice Q&A & Audio Narration",
        "Native KiCad/SPICE Parsing",
        "XP & Level Progression System",
      ],
      specs: [
        { icon: "chip", label: "Frontend", value: "Next.js 14 | PixiJS (WebGL) | TypeScript" },
        { icon: "mission", label: "Backend & AI", value: "Express.js | Mistral Large | Gemini Flash | Multi-Provider LLM" },
        { icon: "comm", label: "Communication", value: "Web Speech API | Camb.AI TTS | Real-Time Audio" },
        { icon: "sensor", label: "Data & Storage", value: "MongoDB | KiCad/SPICE Parsing | PDF/DOCX Vision" },
        { icon: "structure", label: "Role", value: "Full-Stack AI Engineer — EdTech Gamification" },
      ],
      bullets: [
        "Built a dual-architecture physics engine combining client-side BFS for instant visual feedback and server-side Modified Nodal Analysis (MNA) with Gaussian elimination for accurate V/I/R/P calculations.",
        "Developed an Agentic Socratic AI Tutor using a multi-provider LLM cascade (Mistral → Cohere → OpenRouter) with a 5-round tool-calling loop to generate structured, step-by-step tutorials instead of direct answers.",
        "Implemented a Vision Pipeline using Google Gemini Flash to parse uploaded PDFs, DOCX, and raw circuit images into structured schematics, natively supporting KiCad and SPICE formats.",
        "Created a gamified WebGL simulation using PixiJS, rendering an 'Electron Traveler' traversing themed biomes (Forest, Lava, etc.) to represent circuit states visually.",
        "Integrated Voice AI using Web Speech API for speech-to-text and Camb.AI TTS for real-time audio narration of circuit behavior and tutor responses.",
      ],
      systemFlow: [
        "Input: User builds a circuit visually or uploads a lab manual/image.",
        "Vision Parsing: Gemini Flash parses raw files into structured JSON schematics.",
        "Physics Solve: Server-side MNA (Gaussian Elimination) calculates exact node voltages and currents.",
        "Gamification: PixiJS renders the circuit as a game world, showing real-time electron flow.",
        "AI Tutoring: Socratic AI (Mistral) explains the physics using a multi-round tool-calling loop.",
        "Voice Output: Camb.AI narrates the AI's explanation back to the student.",
      ],
    } },
];

export interface ExperienceItem {
  icon: typeof Code2;
  color: string;
  logo: string | null;
  role: string;
  org: string;
  subtitle?: string;
  current?: boolean;
  when: string;
  where: string;
  shortDesc: string;
  shortBullets: string[];
  shortTag: string;
  shortStack: string[];
  detailedDesc: string;
  detailedBullets: string[];
  detailedTag: string;
  detailedStack: string[];
}

export const experience: ExperienceItem[] = [
  {
    icon: Code2, color: "emerald", logo: logoPenovatech,
    role: "AI Full Stack Software Engineer", org: "PenTutor — Production Educational AI Platform", current: true,
    when: "Jan 2026 – Present", where: "Remote",
    shortDesc: "Building AI-powered educational platforms with LLM integration, scalable backend services, and automated deployments.",
    shortBullets: [
      "Architected LLM-powered student support systems and privacy-aware AI content moderation workflows.",
      "Designed scalable Django backend services with role-based access control (RBAC).",
    ],
    shortTag: "AI & Full Stack",
    shortStack: ["Django · LLMs · PostgreSQL · AWS"],
    detailedDesc: "Building AI-powered educational platforms combining LLMs, real-time communication, role-based access control, and scalable backend infrastructure.",
    detailedBullets: [
      "Architected LLM-powered student support systems and privacy-aware AI content moderation workflows serving real users.",
      "Designed and implemented Role-Based Access Control (RBAC) across the platform.",
      "Developed scalable Django backend services and REST APIs to handle educational data.",
      "Worked on deployment automation pipelines and cloud infrastructure management.",
      "Integrated AI-driven features into the platform to enhance student learning experiences.",
    ],
    detailedTag: "Technical Domains",
    detailedStack: [
      "AI & ML: LLMs, AI Content Moderation",
      "Backend: Django, REST APIs, PostgreSQL",
      "Infrastructure: AWS, CI/CD, Docker",
    ],
  },
  {
    icon: Zap, color: "amber", logo: logoNtdc,
    role: "Power System Planning Intern", org: "National Transmission & Despatch Company (NTDC)",
    subtitle: "Grid Girls Pakistan — ADB-funded",
    when: "Jun 2025 – Aug 2025", where: "Lahore, Pakistan",
    shortDesc: "Power system planning and reliability analysis for Pakistan's high-voltage transmission network.",
    shortBullets: [
      "Conducted power flow and N-1 contingency analysis using PSS®E.",
      "Supported dynamic stability and long-range transmission planning studies.",
    ],
    shortTag: "Power Systems",
    shortStack: ["PSS®E · Power Flow · N-1 Contingency · Grid Reliability"],
    detailedDesc: "Worked within power system planning and reliability analysis, gaining practical exposure to Pakistan's national high-voltage transmission network.",
    detailedBullets: [
      "Selected top 12% nationwide (Grid Girls Pakistan, ADB-funded) for competitive power system planning internship.",
      "Executed power flow studies and N-1 contingency analysis for the national high-voltage network using PSS®E.",
      "Conducted dynamic stability analysis supporting long-range transmission planning.",
      "Contributed to grid reliability assessments and power system simulation workflows.",
    ],
    detailedTag: "Technical Exposure",
    detailedStack: [
      "PSS®E, Power Flow Analysis, N-1 Contingency",
      "Dynamic Stability, Transmission Planning",
      "Grid Reliability",
    ],
  },
  {
    icon: Code2, color: "primary", logo: logoTenbit,
    role: "AI Software Engineering Intern", org: "TenBit Solutions", current: true,
    when: "Jun 2026 – Present", where: "Onsite",
    shortDesc: "Developing production-grade AI platforms, RAG systems, and intelligent document processing pipelines.",
    shortBullets: [
      "Engineered multi-tenant RAG platforms with hybrid retrieval and configurable LLM providers.",
      "Built automated web intelligence pipelines and high-availability OCR microservices.",
    ],
    shortTag: "Generative AI",
    shortStack: ["RAG · LLMs · OCR · AI Infrastructure"],
    detailedDesc: "Working on production-grade AI systems spanning RAG, intelligent document processing, web intelligence, OCR, and generative AI infrastructure.",
    detailedBullets: [
      "Engineered a multi-tenant RAG platform featuring hybrid retrieval, OCR integration, and configurable LLM providers.",
      "Deployed a domain-specific UAE VAT AI assistant, utilizing RAG grounded in official government documentation.",
      "Architected automated web intelligence pipelines (including Facebook) with background processing for structured data export.",
      "Developed high-availability OCR microservices with failover mechanisms for intelligent document processing and ingestion.",
      "Contributing to AI Video Generation SaaS architecture, driving model evaluation, GPU infrastructure planning, and deployment strategies.",
    ],
    detailedTag: "Technical Domains",
    detailedStack: [
      "Generative AI: LLMs, RAG, Hybrid Retrieval",
      "Document Intelligence: OCR, Data Extraction",
      "Web Intelligence: Web Scraping, Background Processing",
      "Infrastructure: GPU Infrastructure, MLOps, Deployment",
    ],
  },
];

export const skillGroups = [
  { icon: Code2, title: "Programming Languages", items: ["Python", "C / C++", "JavaScript", "Java", "SQL", "Rust"] },
  { icon: Cpu, title: "AI & Machine Learning", items: ["LLMs", "RAG Systems", "Multi-Agent AI (AutoGen, CrewAI, LangGraph)", "Custom MCP Servers", "Computer Vision", "NLP", "Scikit-learn", "PyTorch"] },
  { icon: Building2, title: "Backend Development", items: ["Python (FastAPI, Flask, Django)", "Node.js (Express.js)", "REST APIs", "WebSockets"] },
  { icon: Globe, title: "Frontend Development", items: ["React.js", "Next.js", "Tailwind CSS", "JavaScript/TypeScript"] },
  { icon: Link2, title: "Databases & Big Data", items: ["PostgreSQL", "MongoDB", "MySQL", "SQLite", "Apache Hadoop"] },
  { icon: Target, title: "Hardware & Industrial Automation", items: ["ESP32", "AVR Microcontrollers", "Arduino C++", "PLC Programming (GX Works2)", "HMI Design (EasyBuilder Pro)", "Power Electronics (MOSFETs)", "RS485 / Modbus"] },
  { icon: FlaskConical, title: "Simulation & Power Systems", items: ["PSS\u00aeE", "MATLAB / Simulink", "Proteus", "Multisim", "KiCad"] },
  { icon: Trophy, title: "Cloud & DevOps", items: ["AWS (EC2, S3, RDS)", "Docker", "GitHub Actions", "CI/CD"] },
];

export const research = [
  { title: "EEG-Based Cognitive Load & Confusion Detection", desc: "A deep learning approach to detect cognitive load and confusion using EEG signals for adaptive learning and real-time feedback systems.", tags: ["EEG", "Signal Processing", "Deep Learning", "Python", "MNE"], status: "Active Research", when: "Jan 2025" },
  { title: "Multi-Agent AI System for Flood Prediction & Evacuation Planning", desc: "Developed a multi-agent framework using satellite & sensor data for flood forecasting, risk assessment and intelligent evacuation route optimization.", tags: ["Multi-Agent Systems", "Remote Sensing", "Python", "GeoSpatial AI", "Simulation"], status: "Completed", when: "Oct 2024" },
  { title: "Smart Energy Audit System with IoT & Analytics", desc: "IoT-based energy monitoring system using ESP32 and PZEM-004T with real-time analytics dashboard for efficient energy management.", tags: ["IoT", "ESP32", "PZEM-004T", "Cloud", "Data Analytics"], status: "Prototype Completed", when: "Aug 2024" },
  { title: "NEXA – AI Electronics Engineering Agent", desc: "An AI agent that assists in circuit design, analysis, documentation and troubleshooting using LLMs and retrieval-augmented generation.", tags: ["LLM", "RAG", "LangChain", "Electronics AI", "Python"], status: "Ongoing Research", when: "Feb 2024" },
  { title: "EEG-Based Addiction Detection Using Hybrid Deep Learning", desc: "Hybrid CNN-LSTM architecture for classifying addiction-related EEG patterns.", tags: ["EEG", "CNN", "LSTM", "Deep Learning"], status: "Published", when: "ICCSAI 2024" },
  { title: "Sustainable Buildings – Smart IoT Monitoring", desc: "IoT sensor mesh for energy efficiency in commercial buildings.", tags: ["IoT", "Sustainability", "Buildings"], status: "Published", when: "IEEE ICEE 2025" },
];

export const researchInterests = [
  "AI & Machine Learning",
  "Signal Processing (EEG, Time-Series)",
  "Multi-Agent Systems & Autonomous Agents",
  "Embedded Systems & IoT",
  "Computer Vision & Remote Sensing",
  "Power Systems & Smart Grids",
  "Natural Language Processing",
  "Edge AI & Real-time Systems",
];

export type Cert = { title: string; by: string; when: string; category: "AI & Machine Learning" | "Cloud & DevOps" | "Programming" | "Professional" };
export const certs: Cert[] = [
  { title: "Generative AI with LLMs", by: "Coursera", when: "May 2024", category: "AI & Machine Learning" },
  { title: "Building AI Agents with AutoGen", by: "DeepLearning.AI", when: "Apr 2024", category: "AI & Machine Learning" },
  { title: "Azure AI Fundamentals (AI-900)", by: "Microsoft", when: "Jan 2024", category: "AI & Machine Learning" },
  { title: "Huawei Certified ICT Associate – AI", by: "Huawei", when: "Dec 2023", category: "AI & Machine Learning" },
  { title: "Machine Learning with Python", by: "IBM", when: "Nov 2023", category: "AI & Machine Learning" },
  { title: "AWS Cloud Practitioner Essentials", by: "Amazon Web Services", when: "Oct 2023", category: "Cloud & DevOps" },
  { title: "Introduction to Cybersecurity", by: "Cisco Networking Academy", when: "Sep 2023", category: "Cloud & DevOps" },
  { title: "AI for Everyone", by: "Microsoft", when: "Aug 2023", category: "Cloud & DevOps" },
  { title: "Database Systems", by: "Meta", when: "Jul 2023", category: "Programming" },
  { title: "Responsive Web Design", by: "freeCodeCamp", when: "Jun 2023", category: "Programming" },
  { title: "Data Analytics Essentials", by: "Simplilearn", when: "May 2023", category: "Professional" },
  { title: "First Aid & Emergency Care", by: "Pakistan Red Crescent", when: "Apr 2023", category: "Professional" },
];

export const achievements = [
  { title: "1st Position – National CanSat Competition", by: "SUPARCO 2025", desc: "Led the winning team in Pakistan's 1st National CanSat Competition." },
  { title: "Innovative Award – FloodGuard AI", by: "Innovista AI Hackathon 2025", desc: "Recognized for building a multi-agent AI system for flood prediction." },
  { title: "3rd Position – Pakathon", by: "Vieromind 2025", desc: "National hackathon focused on impactful engineering solutions." },
  { title: "Best Research Paper", by: "ICCSAI 2024", desc: "Award for EEG-based addiction detection using hybrid deep learning." },
  { title: "Grid Girls Program", by: "NTDC 2025", desc: "Selected among top interns nationwide for the Grid Girls Internship." },
  { title: "Dean's Honor Roll", by: "University 2023 – 2025", desc: "Consistent academic excellence across multiple semesters." },
];

/* ---------- Shared UI ---------- */

export function SiteHeader({ active }: { active?: string }) {
  return (
    <header className="mx-auto max-w-[1440px] px-6 pt-6">
      <nav className="flex items-center gap-6">
        <Link to="/" className="flex items-center gap-3">
          <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-primary bg-background">
            <Zap className="h-5 w-5 text-primary" fill="currentColor" />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-[15px] font-bold tracking-wide text-primary">HAFIZA LAIBA FAISAL</span>
            <span className="block text-[11px] tracking-wide text-foreground/60">Electrical Engineer &amp; AI Developer</span>
          </span>
        </Link>

        <ul className="mx-auto hidden items-center gap-6 xl:flex">
          {navItems.map((n) => {
            const isActive = active === n.label;
            return (
              <li key={n.label} className="relative">
                <Link
                  to={n.to}
                  className={`text-[14px] font-medium transition-colors ${isActive ? "text-primary" : "text-foreground/70 hover:text-primary"}`}
                >
                  {n.label}
                </Link>
                {isActive && (
                  <span className="absolute -bottom-2 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-ember" />
                )}
              </li>
            );
          })}
        </ul>

        <div className="ml-auto flex items-center gap-2">
          {[Linkedin, Github, Mail].map((I, i) => (
            <a key={i} href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground/70 transition-colors hover:text-primary">
              <I className="h-4 w-4" />
            </a>
          ))}
          <Link to="/" hash="contact" className="ml-2 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]">
            Let's Connect
          </Link>
        </div>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mx-auto mt-8 max-w-[1440px] px-6 pb-6">
      <div className="rounded-2xl bg-primary px-6 py-4 text-center text-[13px] text-primary-foreground/85">
        © 2025 Hafiza Laiba Faisal. All rights reserved.
        <span className="mx-3 text-ember">♥</span>
        Built with passion and purpose.
      </div>
    </footer>
  );
}

export function PageHeader({
  eyebrow, title, description, action,
}: { eyebrow: string; title: string; description: string; action?: React.ReactNode }) {
  return (
    <section className="mx-auto mt-8 max-w-[1440px] px-6">
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="mb-2 flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.22em] text-ember">
            <span className="h-1.5 w-1.5 rounded-full bg-ember" /> {eyebrow}
          </p>
          <h1 className="font-display text-5xl font-bold text-primary md:text-6xl">{title}</h1>
          <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-foreground/70">{description}</p>
        </div>
        {action && <div className="shrink-0">{action}</div>}
      </div>
    </section>
  );
}

export function Card({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) {
  return <div id={id} className={`rounded-3xl border border-border bg-card p-6 shadow-sm ${className}`}>{children}</div>;
}
