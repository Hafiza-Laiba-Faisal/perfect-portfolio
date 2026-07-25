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
  img: string;
  featured?: boolean;
  title: string;
  desc: string;
  tags: string[];
  category: "AI & Multi-Agent Systems" | "Embedded & IoT" | "Power Systems & IoT" | "Healthcare & EdTech" | "Aerospace & Embedded";
  github?: string;
  details?: {
    role?: string;
    problemStatement?: string;
    solutionOverview?: string;
    achievement?: { label: string; by: string };
    features?: string[];
    specs?: { icon: "chip" | "battery" | "sensor" | "structure" | "comm" | "mission"; label: string; value: string }[];
    bullets?: string[];
    systemFlow?: string[];
    architectureDiagram?: {
      title: string;
      steps: { step: string; label: string; desc: string }[];
    };
    techStackCategories?: {
      category: string;
      items: string[];
    }[];
  };
};

export const projects: Project[] = [
  {
    img: pCansat, featured: true, title: "CanSat Competition (SUPARCO)",
    category: "Aerospace & Embedded",
    desc: "Led Pakistan's first drone-based CanSat deployment, engineering real-time telemetry and predictive analytics for safe descent.",
    tags: ["ESP32", "ESP-NOW", "IMU", "Sensors", "Python"],
    github: "https://github.com/Hafiza-Laiba-Faisal/national-cansat-competition-2025",
    details: {
      role: "Team Lead – 1st Position in Pakistan's 1st National CanSat Competition 2025",
      problemStatement: "High-altitude environmental data acquisition and payload descent tracking requires real-time telemetry, sensor fusion, and zero-loss wireless transmission under extreme flight dynamics.",
      solutionOverview: "Engineered a compact CanSat satellite featuring dual ESP32 controllers, ESP-NOW protocol, and a ground control station rendering live 3D trajectory mapping.",
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
      bullets: [
        "Led Pakistan's first drone-deployed CanSat mission, handling system architecture, hardware assembly, and flight telemetry.",
        "Integrated MPU6050 IMU sensor fusion for 6-axis attitude estimation and 3D trajectory reconstruction during parachute descent.",
        "Engineered low-latency ESP-NOW wireless links for continuous telemetry transmission to the ground control station.",
      ],
      systemFlow: [
        "Launch & Drone Ascent: CanSat payload lifted to 1000m target altitude.",
        "Sensor Data Acquisition: MPU6050 + BMP180 + GPS sampled at 50Hz by ESP32.",
        "Telemetry Transmission: Raw data packetized and streamed over ESP-NOW RF link.",
        "Ground Station 3D Render: Python/WebGL dashboard displays real-time 3D flight trajectory.",
      ],
      architectureDiagram: {
        title: "CanSat Telemetry & Flight System Architecture",
        steps: [
          { step: "01", label: "Drone Deployment & Sensors", desc: "MPU6050 IMU, BMP180 Barometer, & GPS sample environmental data at 50Hz." },
          { step: "02", label: "ESP32 Sensor Fusion", desc: "Kalman filtering combines IMU & GPS vectors for high-precision 3D trajectory calculation." },
          { step: "03", label: "ESP-NOW Wireless Telemetry", desc: "Packets streamed over low-power 2.4GHz RF link to ground receiver node." },
          { step: "04", label: "Ground Control Dashboard", desc: "Live WebGL dashboard renders 3D descent trajectory, altitude plots, & parachute events." },
        ],
      },
      techStackCategories: [
        { category: "Hardware & Sensors", items: ["ESP32 Microcontroller", "MPU6050 IMU", "BMP180 Barometer", "NEO-M8 GPS Module"] },
        { category: "Firmware & Protocols", items: ["Arduino C++", "ESP-NOW Protocol", "I2C Bus", "UART Telemetry"] },
        { category: "Ground Station & UI", items: ["Python", "PyQt5 / WebGL", "Matplotlib 3D", "Serial Communication"] },
      ],
    },
  },
  {
    img: pEnergy, title: "Smart Energy Audit Monitoring System",
    category: "Power Systems & IoT",
    desc: "Engineered an ESP32 and PZEM-004T based IoT solution for real-time energy monitoring, anomaly detection, and remote power control.",
    tags: ["ESP32", "PZEM-004T", "Modbus-RTU", "IoT Dashboard"],
    github: "https://github.com/Hafiza-Laiba-Faisal/smart-energy-audit-system",
    details: {
      role: "IoT Embedded Systems Developer — Power Electronics Lab, LCWU",
      problemStatement: "Industrial and commercial energy monitoring lacks low-cost automated fault protection, live billing analytics, and instant power cutoff during over-current or over-voltage anomalies.",
      solutionOverview: "Designed a smart energy auditing hardware platform combining ESP32, PZEM-004T energy sensors, RS485/Modbus-RTU, and dual TFT/Web displays with auto-relay protection.",
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
      systemFlow: [
        "AC Sensing: PZEM-004T module reads RMS Voltage, Current, Power Factor & Energy via CT coil.",
        "Modbus Polling: ESP32 polls PZEM-004T via RS485 Modbus-RTU protocol at 100ms intervals.",
        "Fault Protection: Threshold check triggers immediate 10ms relay cutoff on over-current.",
        "Cloud & TFT Sync: Local 3.5\" TFT screen and WiFi Web Dashboard update in real-time.",
      ],
      architectureDiagram: {
        title: "Smart Energy Hardware & Protection Architecture",
        steps: [
          { step: "01", label: "High-Voltage AC Sensing", desc: "PZEM-004T V3.0 measures V, I, kW, kWh, and Power Factor via current transformer." },
          { step: "02", label: "Modbus RS485 Bus", desc: "ESP32 polls energy parameters over isolated RS485 serial communication." },
          { step: "03", label: "Automated Safety Logic", desc: "Firmware monitors limits and fires 10ms relay disconnect during power anomalies." },
          { step: "04", label: "Dual TFT & Web UI", desc: "Real-time updates to 3.5\" SPI TFT display and remote HTTP cloud dashboard." },
        ],
      },
      techStackCategories: [
        { category: "Microcontroller & Sensors", items: ["ESP32 Wi-Fi SoC", "PZEM-004T V3.0 Energy Sensor", "Current Transformer (CT Coil)"] },
        { category: "Industrial Protocols", items: ["RS485 Transceiver", "Modbus-RTU Protocol", "SPI TFT Interface", "HTTP WebSockets"] },
        { category: "Protection & Hardware", items: ["High-Current Relay Module", "Optocoupler Isolation", "PCB Layout (KiCad)"] },
      ],
    },
  },
  {
    img: pFlood, title: "FloodGuard AI (NIGHEBAN Cortex)",
    category: "AI & Multi-Agent Systems",
    desc: "Architected a multi-agent AI command system for end-to-end flood disaster management, integrating real-time prediction, evacuation routing, and relief resource optimization.",
    tags: ["Custom MCP Server", "Multi-Agent AI"],
    details: {
      role: "System Architect & Lead Developer",
      problemStatement: "Disaster response during catastrophic floods suffers from fragmented agency data, delayed evacuation route planning, and inefficient relief inventory distribution.",
      solutionOverview: "Architected a multi-agent AI system with a custom Model Context Protocol (MCP) server that orchestrates 4 specialized AI agents for real-time flood prediction and evacuation.",
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
      architectureDiagram: {
        title: "Multi-Agent MCP Command Architecture",
        steps: [
          { step: "01", label: "Hydro-Met Agent", desc: "Ingests satellite rainfall telemetry and river gauge data to predict flood crest time." },
          { step: "02", label: "Custom MCP Server Core", desc: "Orchestrates inter-agent context, tool calls, and secure database connections." },
          { step: "03", label: "Evacuation & Relief Swarm", desc: "Computes flood-safe dry land routes and allocates camp medical inventory." },
          { step: "04", label: "NDMA Command Dashboard", desc: "React UI displays live geospatial heatmaps, evacuation status, & resource logs." },
        ],
      },
      techStackCategories: [
        { category: "AI & Agent Frameworks", items: ["Custom MCP Server", "Multi-Agent Swarm Framework", "LLM Tool Calling"] },
        { category: "Backend Infrastructure", items: ["Python", "FastAPI", "WebSockets", "Celery Task Queue"] },
        { category: "Frontend & Geospatial", items: ["React.js", "Leaflet / Mapbox GL", "Tailwind CSS", "Recharts"] },
        { category: "Databases", items: ["PostgreSQL (PostGIS)", "MongoDB Document Store"] },
      ],
    },
  },
  {
    img: pNexa, title: "NEXA ⚡ — AI-Powered Electronics Engineering Agent",
    category: "AI & Multi-Agent Systems",
    desc: "Engineered an advanced agentic AI platform that transforms electronics design and debugging. By combining Google Gemini 3's reasoning with a deterministic Physics Validation Engine, NEXA autonomously designs schematics, generates firmware, and validates circuits using fundamental physics laws to eliminate AI hallucinations.",
    tags: ["FastAPI", "Gemini 3", "Multi-Agent AI", "React", "Computer Vision"],
    github: "https://github.com/anoneurx/nexa",
    details: {
      role: "AI Systems Engineer — Agentic Electronics",
      problemStatement: "Traditional LLMs produce severe hallucinations when asked to design or debug electronic circuits, resulting in burnt components and incorrect resistor/capacitor values.",
      solutionOverview: "Engineered a 7-agent collaborative AI swarm coupled with a deterministic Physics Validation Engine that enforces Ohm's and Kirchhoff's Laws to guarantee hallucination-free circuit designs.",
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
      architectureDiagram: {
        title: "7-Agent Electronics Swarm & Physics Engine Pipeline",
        steps: [
          { step: "01", label: "Vision & Intent Parser", desc: "Computer vision extracts netlist from breadboard image or parses text requirements." },
          { step: "02", label: "7-Agent Collaborative Swarm", desc: "Orchestrator delegates to Design, Diagnostic, Code, and Component Agents." },
          { step: "03", label: "Physics Validation Engine", desc: "Deterministic engine evaluates KVL, KCL, & thermal limits to prevent hallucinations." },
          { step: "04", label: "SPICE & Hardware Package", desc: "Outputs verified schematic, BOM list, SPICE Bode plots, & C++ firmware." },
        ],
      },
      techStackCategories: [
        { category: "AI & Agents", items: ["Google Gemini 3", "7-Agent Custom Swarm", "Gemini Function Declarations", "RAG Engine"] },
        { category: "Physics & Computer Vision", items: ["Physics Engine (Ohm/KVL/KCL)", "OpenCV Netlist Extraction", "SPICE Simulation Engine"] },
        { category: "Web Stack", items: ["React 18", "Python (FastAPI)", "Express.js", "MongoDB"] },
      ],
    },
  },
  {
    img: pNeuro, title: "NeuroShield – EEG-Powered Addiction Recovery Platform",
    category: "Healthcare & EdTech",
    desc: "Engineered a mental health platform combining neuroscience and multi-agent AI to provide 24/7 addiction recovery support, real-time trigger detection, and CBT-based coping tools.",
    tags: ["Python", "Flask", "Multi-Agent AI", "EEG/ML (SVM)", "AutoGen"],
    github: "https://github.com/Hafiza-Laiba-Faisal/Neuroshield",
    details: {
      role: "AI/ML Engineer — Multi-Agent Systems",
      problemStatement: "Addiction recovery requires 24/7 personalized mental health guidance and objective, non-invasive detection of emotional triggers before relapse occurs.",
      solutionOverview: "Built an anonymous recovery platform combining a 6-agent AI therapist roundtable (AutoGen) with real-time simulated EEG brain-state classification (SVM).",
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
      architectureDiagram: {
        title: "EEG Processing & AutoGen Therapist Roundtable Architecture",
        steps: [
          { step: "01", label: "EEG Signal Sampling", desc: "NumPy/SciPy pre-processes simulated 8-channel EEG brain wave signals." },
          { step: "02", label: "SVM Classifier Engine", desc: "scikit-learn SVM model classifies brain state (Focused, Relaxed, Triggered) with 87% accuracy." },
          { step: "03", label: "AutoGen Therapist Roundtable", desc: "6 AI Therapists (CBT, Trauma, Holistic) debate treatment approaches live over Socket.IO." },
          { step: "04", label: "Anonymous Client UI", desc: "Flask frontend streams live therapist debate, urge surfing exercises, & mood journals." },
        ],
      },
      techStackCategories: [
        { category: "AI & Agents", items: ["Microsoft AutoGen", "OpenAI / Groq API", "Multi-Agent Therapy Swarm"] },
        { category: "EEG & Machine Learning", items: ["scikit-learn (SVM)", "NumPy & SciPy", "EEG Signal Processing"] },
        { category: "Backend & DB", items: ["Python (Flask)", "Flask-SocketIO (WebSockets)", "PostgreSQL"] },
      ],
    },
  },
  {
    img: pHeal, title: "HealTalk — AI-Powered Recovery Support Platform",
    category: "Healthcare & EdTech",
    desc: "Engineered a real-time mental health and recovery platform that bridges EEG-based emotion detection with multi-agent AI therapy, designed to assist users (including those with communication barriers) in their emotional healing journey.",
    tags: ["Python", "Flask", "WebSockets", "Multi-Agent AI", "EEG Processing"],
    github: "https://github.com/Hafiza-Laiba-Faisal/Hafiza_Laiba_Faisal-VieroMind_Lhr_Pakathon_4_Oct_2025",
    details: {
      role: "AI Engineer — Real-Time Mental Health Systems",
      problemStatement: "Individuals experiencing severe emotional distress or speech barriers need non-verbal emotion tracking and continuous, multi-perspective AI therapy conversations.",
      solutionOverview: "Engineered a real-time recovery platform integrating live multi-perspective AI therapist debates via WebSockets with EEG-based emotion classification.",
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
      architectureDiagram: {
        title: "Live WebSocket Therapy & Emotion Flow",
        steps: [
          { step: "01", label: "EEG (.npy) File Parser", desc: "Ingests binary brain wave array files and extracts spectral frequency bands." },
          { step: "02", label: "Emotion Feature Extraction", desc: "Classifies emotional states (Stress, Focus, Anxiety) and calculates wellness score." },
          { step: "03", label: "AutoGen Live Debate Engine", desc: "Flask-SocketIO streams concurrent AI therapist dialogue to client interface." },
          { step: "04", label: "Chart.js Real-Time UI", desc: "Renders live brain wave charts, streaks, & emergency intervention popups." },
        ],
      },
      techStackCategories: [
        { category: "AI & Agents", items: ["Microsoft AutoGen", "OpenRouter GPT Models", "6-Agent Therapy Swarm"] },
        { category: "EEG Processing", items: ["Python NumPy", "EEG Array (.npy) Parsing", "Frequency Band Analysis"] },
        { category: "Web Architecture", items: ["Python (Flask)", "Flask-SocketIO", "Bootstrap 5", "Chart.js", "SQLite"] },
      ],
    },
  },
  {
    img: pHealth, title: "HealthLink360 — Multi-Agent AI Healthcare Ecosystem",
    category: "Healthcare & EdTech",
    desc: "Engineered a next-generation AI healthcare platform connecting Pakistan's major hospitals in real-time. Used a network of specialized AI agents and a Human-in-the-Loop (HITL) architecture to automate emergency response, medico-legal workflows, and hospital operations.",
    tags: ["FastAPI", "Multi-Agent AI", "Human-in-the-Loop", "Custom MCP Servers"],
    details: {
      role: "AI Systems Architect — Healthcare Automation",
      problemStatement: "Hospital emergency handoffs, medical-legal documentation, and bio-medical waste compliance suffer from manual delays and lack of real-time coordination.",
      solutionOverview: "Architected a multi-agent healthcare ecosystem using custom MCP servers and Human-in-the-Loop (HITL) authorization to automate emergency dispatch and hospital operations.",
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
      architectureDiagram: {
        title: "Human-in-the-Loop MCP Healthcare Architecture",
        steps: [
          { step: "01", label: "Staff Dashboard Input", desc: "Hospital staff initiates emergency dispatch or uploads waste video." },
          { step: "02", label: "Custom MCP Server Network", desc: "Orchestrates Maternal, Pharmacy, Waste, & Medico-Legal AI agents." },
          { step: "03", label: "Cross-Agent Handoff", desc: "Maternal Agent transfers live location to Tracking Agent for ambulance ETA." },
          { step: "04", label: "HITL Verification", desc: "Human supervisor approves AI action before dispatching final response." },
        ],
      },
      techStackCategories: [
        { category: "AI & Agents", items: ["Anthropic Agents SDK", "Custom MCP Servers", "Human-in-the-Loop (HITL) Framework"] },
        { category: "Computer Vision & Processing", items: ["OpenCV / Video AI", "PII Data Redaction Engine"] },
        { category: "Backend & Datastore", items: ["Python (FastAPI)", "WebSockets", "MongoDB", "PostgreSQL"] },
      ],
    },
  },
  {
    img: pCircuit, title: "Circuit Sathi ⚡ — Gamified AI Electronics Tutor",
    category: "Healthcare & EdTech",
    desc: "Engineered an AI-driven STEM platform that transforms static electronics education into a gamified experience. Students can visually simulate electron flow, interact with a Socratic AI tutor, and upload lab manuals to auto-generate interactive circuit schematics.",
    tags: ["Next.js", "Express", "PixiJS", "Mistral AI", "MNA Physics Engine"],
    details: {
      role: "Full-Stack AI Engineer — EdTech Gamification",
      problemStatement: "STEM students struggle to grasp abstract circuit concepts like voltage drops and electron flow from static textbook diagrams.",
      solutionOverview: "Created an EdTech platform featuring a server-side MNA physics solver, WebGL electron flow gamification (PixiJS), and an agentic Socratic AI tutor.",
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
      architectureDiagram: {
        title: "MNA Physics & WebGL Gamification Pipeline",
        steps: [
          { step: "01", label: "Schematic / Vision Input", desc: "Gemini Flash parses lab manual photos or KiCad files into circuit JSON." },
          { step: "02", label: "Server MNA Physics Solver", desc: "Gaussian elimination computes exact node voltages, currents, & power dissipation." },
          { step: "03", label: "PixiJS WebGL Renderer", desc: "Renders animated Electron Traveler moving through game biomes." },
          { step: "04", label: "Socratic AI & Camb.AI Voice", desc: "Mistral AI tool-calling loop generates Socratic guidance with TTS narration." },
        ],
      },
      techStackCategories: [
        { category: "Frontend & Gamification", items: ["Next.js 14", "PixiJS (WebGL)", "TypeScript", "Tailwind CSS"] },
        { category: "Physics & AI Engine", items: ["MNA Physics Solver (Gaussian Elimination)", "Mistral Large", "Google Gemini Flash", "Camb.AI Voice TTS"] },
        { category: "Backend & Datastore", items: ["Node.js / Express.js", "MongoDB", "KiCad / SPICE Parser"] },
      ],
    },
  },
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
  
  // Short preview properties for homepage
  shortDesc: string;
  shortBullets: string[];
  shortTag: string;
  shortStack: string[];
  
  // Detailed 5-section properties for experience page
  roleOverview: string[];
  keyContributions: { title?: string; desc: string }[];
  engineeringChallenges: string[];
  techStack: string[];
  impact: string[];
}

export const experience: ExperienceItem[] = [
  {
    icon: Code2,
    color: "emerald",
    logo: logoTenbit,
    role: "AI Software Engineer",
    org: "TenBit Solutions",
    current: true,
    when: "Jun 2026 – Present",
    where: "Onsite",
    shortDesc: "Developing production-grade AI platforms, multi-tenant RAG systems, intelligent document processing pipelines, and generative AI infrastructure.",
    shortBullets: [
      "Engineered multi-tenant RAG platforms with hybrid retrieval, metadata ranking, and fallback OCR microservices.",
      "Built UAE VAT AI Assistant and web intelligence scraping pipelines with anti-bot/Cloudflare protection.",
    ],
    shortTag: "Generative AI",
    shortStack: ["Python · FastAPI · PaddleOCR · Qdrant · RAG · Docker"],
    roleOverview: [
      "Developed production-grade AI systems spanning Retrieval-Augmented Generation (RAG), intelligent document processing, OCR, web intelligence, and generative AI infrastructure.",
      "Designed backend AI services and contributed to evaluation, testing, debugging, and feature development across multiple production products.",
      "Built modular AI pipelines emphasizing reliability, maintainability, and scalable deployment.",
    ],
    keyContributions: [
      { title: "Enterprise RAG Platform", desc: "Evaluated retrieval quality, resolved production issues, and improved multi-tenant RAG workflows." },
      { title: "Intelligent OCR Service", desc: "Engineered a modular OCR service from scratch using fallback pipelines supporting PaddleOCR and LLM-based OCR." },
      { title: "UAE VAT AI Assistant", desc: "Built a domain-specific legal AI assistant with automated document ingestion, scheduled scraping, metadata-aware retrieval, and adaptive response generation for different user expertise levels." },
      { title: "Web Intelligence Platform", desc: "Developed automated scraping pipelines supporting multiple websites, including Facebook, handling Cloudflare protection, bot detection, and structured content extraction." },
      { title: "AI Video Generation Platform", desc: "Contributing to GPU evaluation, deployment planning, infrastructure selection, and production architecture research." },
    ],
    engineeringChallenges: [
      "Designing resilient OCR pipelines capable of handling diverse document formats.",
      "Improving retrieval quality using hybrid search and metadata-aware document ranking.",
      "Handling anti-bot mechanisms and Cloudflare protection for reliable web intelligence pipelines.",
      "Evaluating GPU infrastructure and deployment trade-offs for large-scale AI video generation.",
    ],
    techStack: [
      "Python", "FastAPI", "PaddleOCR", "Mistral OCR", "Playwright", "BeautifulSoup", "Qdrant", "PostgreSQL", "MongoDB", "RAG", "Hybrid Search", "OCR", "Docker"
    ],
    impact: [
      "Improved document processing reliability through fallback OCR architecture.",
      "Enabled continuously updated AI knowledge bases using automated document ingestion.",
      "Increased data collection reliability for web intelligence workflows.",
      "Contributed to production-ready AI infrastructure across multiple enterprise products.",
    ],
  },
  {
    icon: Code2,
    color: "sky",
    logo: logoPenovatech,
    role: "AI Full Stack Software Engineer",
    org: "PenTutor — Production Educational AI Platform",
    subtitle: "Penovatech",
    current: true,
    when: "Jan 2026 – Present",
    where: "Remote",
    shortDesc: "Building AI-powered educational platforms with LLM integration, scalable backend services, and automated deployments.",
    shortBullets: [
      "Architected LLM-powered student support systems and privacy-aware AI content moderation workflows.",
      "Designed scalable Django backend REST APIs with role-based access control (RBAC).",
    ],
    shortTag: "AI & Full Stack",
    shortStack: ["Django · LLMs · PostgreSQL · Agora · Ollama"],
    roleOverview: [
      "Developed production-grade backend services and AI-powered features for the PenTutor Learning Management System.",
      "Designed and maintained Django REST APIs, real-time classroom features, and academic management modules.",
      "Implemented new platform capabilities while maintaining and improving existing production services.",
      "Collaborated with engineering leads to deliver scalable backend solutions for educational workflows.",
    ],
    keyContributions: [
      { desc: "Architected the four-level curriculum hierarchy and automated academic data seeding workflows." },
      { desc: "Integrated Agora-based live classrooms with collaborative whiteboard functionality." },
      { desc: "Developed a local LLM-based privacy detection system for monitoring sensitive information during live learning sessions." },
      { desc: "Designed and implemented Role-Based Access Control (RBAC) for secure permission management." },
      { desc: "Built an AI assistant for student support, feedback handling, and payment-related queries." },
      { desc: "Engineered CRM modules with automated lead generation through intelligent web scraping pipelines." },
    ],
    engineeringChallenges: [
      "Designed a privacy-aware AI pipeline capable of extracting speech from recorded sessions and detecting sensitive information using locally hosted LLMs.",
      "Balanced AI-assisted moderation with user privacy by keeping inference on local infrastructure.",
      "Improved platform maintainability by automating curriculum initialization and academic data provisioning.",
    ],
    techStack: [
      "Django", "Django REST Framework", "PostgreSQL", "Agora", "Ollama", "Local LLMs", "Web Scraping", "RBAC", "REST APIs"
    ],
    impact: [
      "Reduced manual administrative effort through automation.",
      "Improved platform security with privacy-aware AI moderation.",
      "Enabled scalable academic management for future platform growth.",
      "Enhanced student and instructor experience with intelligent support features.",
    ],
  },
  {
    icon: Zap,
    color: "amber",
    logo: logoNtdc,
    role: "Power System Planning Engineering Trainee",
    org: "National Grid Company (NGC) — formerly NTDC",
    subtitle: "NTDC Grid Girls Summer Internship Program 2025 (ADB-funded)",
    current: false,
    when: "Jun 2025 – Aug 2025",
    where: "Lahore, Pakistan",
    shortDesc: "Power system planning and reliability analysis for Pakistan's high-voltage transmission network.",
    shortBullets: [
      "Conducted power flow and N-1 contingency analysis using PSS®E.",
      "Supported dynamic stability and long-range transmission planning studies.",
    ],
    shortTag: "Power Systems",
    shortStack: ["PSS®E · Power Flow · N-1 Contingency · Grid Reliability"],
    roleOverview: [
      "Worked within Pakistan's national power system planning environment, gaining practical exposure to transmission planning, grid reliability, and long-term network expansion.",
      "Performed power system studies using industry-standard simulation software and planning methodologies.",
      "Participated in technical discussions, simulations, reporting, and field visits to operational power facilities.",
    ],
    keyContributions: [
      { desc: "Conducted power flow studies and N-1 contingency analysis using PSS®E." },
      { desc: "Performed transmission planning and load forecasting exercises." },
      { desc: "Contributed to contingency analysis reports for simulated transmission scenarios." },
      { desc: "Studied grid expansion planning, power factor improvement strategies, and transmission reliability." },
      { desc: "Visited national power generation and transmission facilities to understand operational workflows and engineering practices." },
    ],
    engineeringChallenges: [
      "Evaluated transmission system reliability under contingency conditions.",
      "Analyzed load balancing strategies for future grid expansion.",
      "Studied cost-effective planning methodologies for transmission infrastructure.",
      "Investigated reactive power compensation techniques using STATCOMs, capacitor banks, and related equipment.",
    ],
    techStack: [
      "PSS®E", "Power Flow Analysis", "N-1 Contingency Analysis", "Grid Code", "Load Forecasting", "Grid Planning", "Transmission System Analysis"
    ],
    impact: [
      "Developed practical understanding of national-scale transmission planning and grid operation.",
      "Strengthened knowledge of power system reliability, planning standards, and engineering decision-making.",
      "Gained hands-on exposure to real-world utility infrastructure and planning methodologies.",
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

export type Cert = { title: string; by: string; when: string; category: "AI & Machine Learning" | "Cloud & DevOps" | "Programming" | "Professional"; link?: string; img?: string };
export const certs: Cert[] = [
  { title: "Microsoft AI Product Manager", by: "Microsoft", when: "2025", category: "AI & Machine Learning", link: "https://coursera.org/share/13dc5c6173080cb37368d9547c5a4b82" },
  { title: "Exploratory Data Analysis for Machine Learning", by: "Coursera", when: "2025", category: "AI & Machine Learning", link: "https://coursera.org/share/a49a626a5c5a042f2cfff4080271908e" },
  { title: "Generative AI for Customer Success", by: "Coursera", when: "2025", category: "AI & Machine Learning", link: "https://coursera.org/share/3b00272e89bf756daa44aa6b26808303" },
  { title: "Building AI Cloud Apps with Microsoft Azure", by: "Microsoft", when: "2025", category: "Cloud & DevOps", link: "", img: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~JQZSXIHYI2FZ/CERTIFICATE_LANDING_PAGE~JQZSXIHYI2FZ.jpeg" },
  { title: "HCIA-AI Digital Certificate", by: "Huawei", when: "2023", category: "AI & Machine Learning", link: "https://drive.google.com/file/d/1jcckzVCeIACU73SRBl5Ks2a9txWlxmg7/view?usp=sharing", img: "https://drive.google.com/thumbnail?id=1jcckzVCeIACU73SRBl5Ks2a9txWlxmg7&sz=w400" },
  { title: "Artificial Intelligence (ML & DL)", by: "KICS, UET & NVTTC", when: "2023", category: "AI & Machine Learning" },
  { title: "Rescue CPR Training (First Aid)", by: "Pakistan Red Crescent", when: "2024", category: "Professional" },
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
