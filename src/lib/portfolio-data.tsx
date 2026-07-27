import { Link } from "@tanstack/react-router";
import {
  Zap, Linkedin, Github, Mail,
  Briefcase, Code2, Cpu, FlaskConical, Trophy, Target,
  Building2, Globe, Link2,
} from "lucide-react";
import pCansat from "@/assets/project-cansat.png";
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
import aCanSat from "@/assets/Achivements/suparco-cansat-competition-2025.jpeg";
import aViero from "@/assets/Achivements/Viero-Mind-Third-Position.jpeg";
import aPB from "@/assets/Achivements/PB Hacks Winner (11).png";
import aStudentYear from "@/assets/Achivements/Student-of-The-Year-2025.jpeg";
import aNtdc from "@/assets/Achivements/NTDC Internship 2025 Certificate - Hafiza Laiba Faisal.jpg";
import aFlood from "@/assets/Achivements/Flood-Guard-AI.jpeg";
import archCh7 from "@/assets/architectures/cansat/arch_ch7.png";
import archCh8 from "@/assets/architectures/cansat/arch_ch8.png";
import archCh9 from "@/assets/architectures/cansat/arch_ch9.png";
import archCh10 from "@/assets/architectures/cansat/arch_ch10.png";
import archSmartEnergy from "@/assets/architectures/smart-energy/overview.png";
import archNigheban from "@/assets/architectures/nigheban/overview.png";
import archNexa from "@/assets/architectures/nexa/overview.png";
import archNeuroShield from "@/assets/architectures/neuroshield/overview.png";
import archHealTalk from "@/assets/architectures/healtalk/overview.png";
import archHealthLinkRCOS from "@/assets/architectures/healthlink360/rcos.png";
import archHealthLinkIAIB from "@/assets/architectures/healthlink360/iaib.png";
import archHealthLinkOverview from "@/assets/architectures/healthlink360/overview.png";
import archCircuitSathi from "@/assets/architectures/circuitsathi/overview.png";

import certPBCert from "@/assets/certificates/PB Hacks Winner (11).png";
import certDSH from "@/assets/certificates/DSH Hacks V1.png";
import certCanSat from "@/assets/certificates/suparco-cansat-competition-2025.jpeg";
import certUMT from "@/assets/certificates/UMT-TECHVERSE.jpg";
import certMSPM from "@/assets/certificates/Microsoft AI Product Manager Professional Certificate.jpg";
import certEDA from "@/assets/certificates/Exploratory Data Analysis for Machine Learning.jpg";
import certGenAI from "@/assets/certificates/GenerativeAI for Customer Success.jpg";
import certAzure from "@/assets/certificates/Building AI Cloud Apps With Microsoft Azure.jpg";
import certHuawei from "@/assets/certificates/Huawei Certification.jpg";
import certGeneric from "@/assets/certificates/NTDC Internship 2025 Certificate - Hafiza Laiba Faisal.jpg";

export const navItems: { label: string; to: string }[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Experience", to: "/experience" },
  { label: "Projects", to: "/projects" },
  { label: "Skills", to: "/skills" },
  { label: "Achievements", to: "/achievements" },
  { label: "Research", to: "/research" },
  { label: "Certifications", to: "/certifications" },
  { label: "Contact", to: "/contact" },
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
    archImages?: string[];
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
      archImages: [archCh7, archCh8, archCh9, archCh10],
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
      archImages: [archSmartEnergy],
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
    img: pFlood, title: "NIGHEBAN — AI National Command Solution for Flood Preparedness & Recovery",
    category: "AI & Multi-Agent Systems",
    desc: "An AI-powered national command and intelligence platform for end-to-end flood preparedness, early forecasting, automated evacuation planning, multi-level stakeholder coordination (NDMA → PDMA → District), and camp management & resettlement.",
    tags: ["Custom MCP Server", "Nigheban Cortex", "Multi-Agent AI", "FastAPI", "GeoSpatial AI", "PostGIS"],
    details: {
      role: "Team Lead & System Architect (Team: Hafiza Laiba Faisal - Team Lead, Ismat Hira)",
      problemStatement: "Pakistan faces catastrophic recurring floods (2022: 8M citizens affected, $33B damage, 1,700+ deaths; 2024–2025: rural submergence & urban risk in Lahore). Existing systems lack an integrated AI coordination, evacuation, and resettlement architecture to predict risks, guide relocation, and manage emergency camps systematically.",
      solutionOverview: "Engineered NIGHEBAN Cortex—an AI-driven national command hub orchestrating 4 specialized AI agents (Hydro-Met, Evacuation, Relief, Reconstruction) using custom MCP servers, GIS overlays, multi-channel alerting (Email, SMS, WhatsApp), and Gemini moderation guardrails to facilitate multi-level stakeholder coordination (NDMA → PDMA → District → UC → Community).",
      achievement: { label: "Most Innovative Award – Innovista Hackathon 2025 (Regional Level, Lahore)", by: "Innovista Hackathon 2025" },
      features: [
        "Nigheban Cortex 4-Agent Swarm",
        "Multi-Level Stakeholder Coordination",
        "AI Hydro-Met Early Forecasting (LSTM/CNN)",
        "Automated Evacuation Route Planning",
        "Camp Management & Relief Tracking",
        "Post-Disaster Reconstruction Assessment",
        "Automated Meeting Notices & Damage Reports",
        "Multi-Channel Alerting (SMS, WhatsApp, FM)",
      ],
      specs: [
        { icon: "chip", label: "Team", value: "Hafiza Laiba Faisal (Team Lead) & Ismat Hira" },
        { icon: "sensor", label: "Cortex Core", value: "Python (FastAPI) | Custom MCP Server | LangChain / LlamaIndex | MongoDB | gRPC" },
        { icon: "comm", label: "AI & GIS Engine", value: "PyTorch (LSTM/GRU + CNN) | PostGIS | GeoPandas | OSRM / pgRouting | GDAL" },
        { icon: "structure", label: "Frontend & Maps", value: "React.js | Spline 3D | Leaflet.js | Mapbox GL | TailwindCSS | Recharts" },
        { icon: "mission", label: "Guardrails & SDGs", value: "Pydantic Schema | Gemini Moderation | SDG 3 (Health), SDG 11 (Cities), SDG 13 (Climate Action)" },
      ],
      bullets: [
        "Architected Nigheban Cortex—the central intelligence hub orchestrating 4 specialized agents (Hydro-Met Intelligence, Evacuation & Route Optimization, Relief & Resource Management, Reconstruction & Return Planning) for national disaster resilience.",
        "Developed the Hydro-Met Agent utilizing LSTM/GRU time-series forecasting and CNN flood risk classification over satellite telemetry (Sentinel Hub, Google Earth Engine) and drone imagery (OpenDroneMap).",
        "Engineered the Evacuation & Route Optimization Agent powered by PostGIS/pgRouting and OSRM to calculate flood-safe dry land routes, optimize shelter assignments, and issue automated meeting notices.",
        "Built the Relief & Resource Management Agent featuring demand prediction (Prophet, Scikit-learn) for food, tents, and medical aid distribution across emergency camps with real-time crowd tracking.",
        "Integrated the Reconstruction Agent leveraging OpenCV, GDAL, and Rasterio on drone/satellite imagery to automate post-disaster damage assessment and safe return planning for affected families.",
        "Facilitated multi-level stakeholder coordination across Federal (NDMA, PM Office), Provincial (PDMA, Health), District (DC, DDMU), and Local Union Councils with automated report generation.",
      ],
      systemFlow: [
        "1. Detection & Prediction: Hydro-Met Agent ingests satellite (Sentinel Hub, GEE) and IoT data to forecast flood crests and output risk classification maps.",
        "2. Relocation & Evacuation: Evacuation Agent calculates flood-safe dry land routes via PostGIS/OSRM, schedules transport, and fires automated meeting notices to authorities.",
        "3. Camp & Relief Management: Relief Agent tracks evacuees, predicts food/tent/medical demands via Prophet ML, and logs allocations with zero aid leakage.",
        "4. Resettlement & Reconstruction: Reconstruction Agent executes CNN-based damage assessment on satellite/drone telemetry to issue safe return reports.",
      ],
      archImages: [archNigheban],
      architectureDiagram: {
        title: "NIGHEBAN Cortex 4-Agent National Disaster Architecture",
        steps: [
          { step: "01", label: "Hydro-Met Intelligence Agent", desc: "Early detection & risk classification via satellite (Sentinel / GEE), drone telemetry (OpenDroneMap), and LSTM/GRU time-series forecasting." },
          { step: "02", label: "Evacuation & Route Optimization Agent", desc: "Calculates flood-safe dry land routes (PostGIS + OSRM), schedules transport, and issues automated meeting notices to NDMA/PDMA." },
          { step: "03", label: "Relief & Resource Management Agent", desc: "Predicts evacuee demand (Prophet / Scikit-learn) and manages food, tent, and medical inventory distribution across emergency camps." },
          { step: "04", label: "Reconstruction & Return Planning Agent", desc: "Automates post-flood damage assessment using CNNs on raster imagery (GDAL/OpenCV) and coordinates safe family resettlement." },
        ],
      },
      techStackCategories: [
        { category: "Nigheban Cortex Core", items: ["FastAPI", "Custom MCP Server", "LangChain / LlamaIndex", "MongoDB", "gRPC / WebSockets", "Gemini Moderation", "Pydantic Schema", "OAuth2 / JWT"] },
        { category: "Hydro-Met & Evacuation Agents", items: ["Python (PyTorch / TensorFlow)", "LSTM / GRU", "PostgreSQL + PostGIS", "OSRM / pgRouting", "GeoPandas", "Shapely", "QGIS"] },
        { category: "Relief & Reconstruction Agents", items: ["Prophet", "Scikit-learn", "OpenCV", "GDAL", "Rasterio", "Sentinel Hub", "Google Earth Engine", "OpenDroneMap", "Redis", "Kafka / RabbitMQ"] },
        { category: "Frontend & Command UI", items: ["React.js", "Spline 3D", "Leaflet.js", "Mapbox GL", "TailwindCSS", "Recharts"] },
      ],
    },
  },
  {
    img: pNexa, title: "NEXA ⚡ — AI-Powered Electronics Engineering Agent",
    category: "AI & Multi-Agent Systems",
    desc: "An agentic AI platform that combines Google Gemini 3's reasoning power with a deterministic Physics Validation Engine. Nexa designs schematics, generates firmware, runs SPICE-level simulations, and validates circuits using fundamental physics laws to eliminate AI hallucinations.",
    tags: ["Google Gemini 3", "7-Agent AI Swarm", "Physics Validation Engine", "FastAPI", "React 18", "MongoDB"],
    github: "https://github.com/anoneurx/nexa",
    details: {
      role: "AI Systems Engineer — Agentic Electronics (Contributors: Hafiza Laiba Faisal, Muhammad Qasim)",
      problemStatement: "Electronics engineering students and hobbyists face a steep learning curve. Debugging a faulty circuit often requires expensive equipment, expert knowledge, or hours of trial-and-error. Traditional LLMs can 'help,' but they often hallucinate incorrect component values or dangerous configurations.",
      solutionOverview: "Nexa is an agentic AI platform combining the reasoning power of Google Gemini 3 with a deterministic Physics Validation Engine. Powered by a collaborative swarm of 7 specialized AI agents coordinated by an Orchestrator, Nexa designs, simulates, validates, and explains complex electronic circuits.",
      features: [
        "7-Agent Collaborative AI Swarm",
        "Physics-Validated Debugging (Ohm's & Kirchhoff's Laws)",
        "Vision-Powered Netlist Analysis",
        "SPICE-Level AI Simulation (Bode Plots & Waveforms)",
        "10+ Gemini Function Declarations",
        "Agentic Circuit Design (Schematic, BOM, Firmware)",
        "Adaptive Learning & Viva Mode Q&A",
        "YAML-Based Datasheet RAG Knowledge Base",
      ],
      specs: [
        { icon: "chip", label: "Frontend", value: "React 18 | TypeScript | Tailwind CSS | Vite" },
        { icon: "sensor", label: "Orchestrator & AI Engine", value: "Python 3.12 | FastAPI | Node.js / Express | Google GenAI SDK (Gemini 3)" },
        { icon: "comm", label: "Database & Knowledge Base", value: "MongoDB | YAML-based RAG (Datasheets, Lab Rules)" },
        { icon: "structure", label: "Agent Swarm (7 Agents)", value: "Orchestrator, Design, Diagnostic, Simulation, Code, Vision, Component" },
        { icon: "mission", label: "Physics Validation", value: "Calculates Ohm's Law (V=IR), KVL, KCL, & Datasheet thermal/current limits" },
      ],
      bullets: [
        "Architected a collaborative swarm of 7 specialized AI agents (Orchestrator, Design, Diagnostic, Simulation, Code, Vision, Component) using Gemini 3 Function Calling for intent routing and task execution.",
        "Engineered a deterministic Physics Validation Engine that enforces Ohm's Law, Kirchhoff's Voltage/Current Laws, and component datasheet limits to eliminate AI hallucinations.",
        "Developed a Vision-Powered Analysis module enabling users to upload breadboard photos or schematic images, which the Vision Agent converts into structured netlists.",
        "Built AI-powered SPICE simulation capabilities that generate frequency response Bode plots, transient analysis waveforms, DC operating points, and power dissipation calculations without external SPICE tools.",
        "Implemented an Adaptive Learning System with three explanation tiers (Beginner, Advanced, and Viva Mode interview Q&A) tailored to user skill levels.",
        "Integrated 10+ Gemini Function Declarations (analyze_circuit, calculate_component_value, fetch_datasheet, fetch_lab_rule, validate_solution, generate_project_plan, generate_learning_summary, etc.) for autonomous tool invocation.",
      ],
      systemFlow: [
        "1. Input & Intent Routing: User submits a text prompt or breadboard/schematic photo; Orchestrator Agent routes request to target agents.",
        "2. Agentic Design & Vision: Design Agent generates ASCII schematic, BOM, and C++ firmware while Vision Agent parses image netlists.",
        "3. Physics & Datasheet Validation: Validation Engine evaluates Ohm's Law and KVL/KCL equations to verify safety and component values.",
        "4. SPICE Simulation & Viva: Simulation Agent plots Bode frequency response & transient waveforms; Viva Mode generates concept Q&A.",
      ],
      archImages: [archNexa],
      architectureDiagram: {
        title: "NEXA 7-Agent Electronics Swarm & Physics Engine Architecture",
        steps: [
          { step: "01", label: "Orchestrator & Vision Agent", desc: "Computer vision extracts netlist from breadboard image or parses text prompt intent." },
          { step: "02", label: "7-Agent Collaborative Swarm", desc: "Orchestrator delegates tasks to Design, Diagnostic, Simulation, Code, and Component Agents." },
          { step: "03", label: "Deterministic Physics Validation Engine", desc: "Calculates Ohm's Law (V=IR), KVL, KCL, & datasheet thermal/current limits to prevent hallucinations." },
          { step: "04", label: "SPICE Waveforms & C++ Package", desc: "Outputs validated ASCII schematic, BOM list, SPICE Bode plots, and ESP32 C++ firmware." },
        ],
      },
      techStackCategories: [
        { category: "AI Engine & Swarm", items: ["Google Gemini 3", "7-Agent Collaborative Swarm", "10+ Gemini Function Declarations", "Google GenAI SDK", "YAML RAG Knowledge Base"] },
        { category: "Physics & Vision Validation", items: ["Deterministic Physics Engine (Ohm/KVL/KCL)", "OpenCV Vision Netlist Parser", "AI SPICE Simulator (Bode Plots, Waveforms)"] },
        { category: "Full-Stack Infrastructure", items: ["React 18", "TypeScript", "Tailwind CSS", "Vite", "Node.js (Express)", "Python 3.12 (FastAPI)", "MongoDB"] },
      ],
    },
  },
  {
    img: pNeuro, title: "NeuroShield 🧠 — EEG-Powered Addiction Recovery Platform",
    category: "Healthcare & EdTech",
    desc: "A groundbreaking mental health platform combining neuroscience, multi-agent AI, and evidence-based therapy to help individuals overcome compulsive behaviors. Built with empathy at its core — providing 24/7 support through 6 specialized AI therapists, real-time EEG brain state monitoring, and culturally sensitive interactive coping tools.",
    tags: ["Python", "Flask", "AutoGen", "SVM EEG (87%)", "Socket.IO", "OpenAI", "Groq"],
    github: "https://github.com/Hafiza-Laiba-Faisal/Neuroshield",
    details: {
      role: "Lead Developer & Designer — Hafiza Laiba Faisal (Full-Stack Python/Flask, AI/ML)",
      achievement: { label: "Honorable Mention – PeerBridge Mental Health Hacks 2025 (International)", by: "Track: Digital Safe Spaces + Cultural Stigma Breakers | Category: Adult/Post-Secondary (Ages 20–25)" },
      problemStatement: "93% of boys and 62% of girls are exposed to pornography before age 18. Shame and stigma prevent 70% of affected individuals from seeking help. Limited access to specialized therapy (6-month wait times), and no existing platform integrates real-time neuroscience with behavioral therapy for addiction recovery.",
      solutionOverview: "NeuroShield bridges cutting-edge neuroscience and accessible mental health support. A 6-Agent AI Therapist Roundtable (AutoGen) debates personalized treatment strategies in real-time via Socket.IO, while an ML-powered EEG pipeline classifies brain states (Focused / Relaxed / Triggered) with 87% accuracy to trigger instant coping interventions.",
      features: [
        "6-Agent AI Therapist Roundtable (AutoGen + Groq)",
        "Real-Time EEG Brain State Monitoring (SVM, 87% Accuracy)",
        "1-on-1 NLP AI Coach (Claude 3.5 Sonnet)",
        "Urge Surfing Meditation (15-min ocean visualization)",
        "Box Breathing 4-4-4-4 (animated breathing circles)",
        "5-4-3-2-1 Grounding (sensory awareness exercise)",
        "AI Thought Restructuring (CBT-powered NLP)",
        "Body Scan Meditation (progressive muscle relaxation)",
        "Emergency Distraction Wheel (random healthy activities)",
        "Mood Calendar Heatmap & Streak Gamification",
        "Anonymous ID Privacy-First Architecture",
        "Journal with Auto-Mood Sync & Analytics Dashboard",
      ],
      specs: [
        { icon: "chip", label: "Frontend", value: "HTML5 + CSS3 + Bootstrap 5 | Chart.js (EEG viz) | GSAP animations | Socket.IO Client" },
        { icon: "sensor", label: "ML Pipeline", value: "scikit-learn SVM | NumPy & SciPy | EEG Band Power Features (Delta/Theta/Alpha/Beta/Gamma) | 87% Accuracy" },
        { icon: "mission", label: "AI & Agents", value: "Microsoft AutoGen | OpenRouter (GPT-4) | Groq (Llama 3.3 70B) | Claude 3.5 Sonnet | 6-Therapist Swarm" },
        { icon: "comm", label: "Real-Time", value: "Flask-SocketIO | WebSockets (WSS) | Multi-agent live debates" },
        { icon: "structure", label: "Backend & DB", value: "Python Flask 3.0 | PostgreSQL 14 (prod) | SQLite (dev) | bcrypt auth | Railway.app deployment" },
      ],
      bullets: [
        "Architected a 6-Agent AI Therapist Roundtable using Microsoft AutoGen + Groq (Llama 3.3 70B): Dr. Sarah Chen (CBT), Dr. James Williams (Holistic), Dr. Maria Rodriguez (Psychologist), Dr. David Thompson (Psychiatrist), Dr. Lisa Park (Trauma/EMDR), Dr. Michael Chen (Mindfulness) — debating live over Socket.IO WebSockets.",
        "Engineered an ML EEG pipeline using NumPy/SciPy (Butterworth bandpass + Notch filters) for signal processing and a scikit-learn SVM classifier (RBF kernel) for brain state classification (Focused / Relaxed / Triggered) achieving 87% test accuracy.",
        "Built 6 interactive Coping Tools: Urge Surfing (15-min GSAP ocean visualization), Box Breathing (4-4-4-4 animated circles), 5-4-3-2-1 Grounding, AI Thought Restructuring (CBT-powered NLP), Body Scan Meditation, and Emergency Distraction Wheel.",
        "Implemented a 1-on-1 NLP AI Coach (Claude 3.5 Sonnet via OpenRouter) with full conversation history context, streak tracking, and mood-calendar auto-sync.",
        "Designed a privacy-first architecture: anonymous IDs (anon_8f4a2c9d format), bcrypt password hashing (10 rounds), HTTP-only session cookies, GDPR-compliant data export/deletion, and local-first storage.",
        "Deployed on Railway.app with PostgreSQL 14, Cloudflare CDN, Gunicorn + Eventlet workers, and 24/7 uptime monitoring via Uptime Robot + Sentry.",
      ],
      systemFlow: [
        "1. EEG Signal Input: NumPy/SciPy applies Butterworth bandpass and Notch filters to 8-channel simulated EEG data.",
        "2. SVM Brain Classification: Welch PSD extracts Delta/Theta/Alpha/Beta/Gamma band powers → SVM classifies state (Focused/Relaxed/Triggered) at 87% accuracy.",
        "3. Trigger Alert → Coping Tool: If 'Triggered' state detected, system pushes an emergency coping intervention (Urge Surfing / Box Breathing / Grounding).",
        "4. 6-Agent Roundtable (AutoGen): User query dispatched via Socket.IO to AutoGen orchestrator; 6 AI therapists debate treatment strategy in real-time.",
        "5. 1-on-1 AI Coach (Claude): Context-aware CBT coaching with conversation history, streak data, and mood journal integration.",
      ],
      archImages: [archNeuroShield],
      architectureDiagram: {
        title: "NeuroShield EEG Processing & AutoGen 6-Therapist Roundtable Architecture",
        steps: [
          { step: "01", label: "EEG Signal Sampling & Filtering", desc: "NumPy/SciPy pre-processes 8-channel simulated EEG with Butterworth bandpass & Notch filters." },
          { step: "02", label: "SVM Brain State Classifier", desc: "scikit-learn SVM (RBF kernel) classifies Focused / Relaxed / Triggered states at 87% accuracy." },
          { step: "03", label: "AutoGen 6-Therapist Roundtable", desc: "CBT, Holistic, Psychology, Psychiatry, Trauma, and Mindfulness AI therapists debate live over Socket.IO." },
          { step: "04", label: "Coping Tools & Anonymous UI", desc: "6 interactive tools (Urge Surfing, Box Breathing, Grounding) + mood calendar + privacy-first anonymous IDs." },
        ],
      },
      techStackCategories: [
        { category: "AI & Multi-Agent", items: ["Microsoft AutoGen", "OpenRouter (GPT-4)", "Groq (Llama 3.3 70B)", "Claude 3.5 Sonnet", "6-Therapist Swarm"] },
        { category: "EEG & Machine Learning", items: ["scikit-learn SVM (87% acc.)", "NumPy & SciPy", "Butterworth/Notch Filtering", "Welch PSD Feature Extraction", "EEG Band Power (Delta–Gamma)"] },
        { category: "Backend & Real-Time", items: ["Python Flask 3.0", "Flask-SocketIO (WebSockets)", "PostgreSQL 14", "bcrypt Auth", "Railway.app", "Cloudflare CDN"] },
        { category: "Frontend & UX", items: ["Bootstrap 5", "Chart.js (EEG viz)", "GSAP (coping animations)", "Socket.IO Client", "Mood Calendar Heatmap"] },
      ],
    },
  },

  {
    img: pHeal, title: "HealTalk 💬 — AI-Powered Recovery Support Platform",
    category: "Healthcare & EdTech",
    desc: "An AI-driven mental health and recovery support platform combining EEG-based emotional state detection, a 6-agent AI therapy roundtable, and a 24/7 AI support coach — empowering users in their emotional healing journey through technology.",
    tags: ["Python", "Flask", "AutoGen", "OpenRouter GPT", "Socket.IO", "EEG", "SQLite"],
    github: "https://github.com/Hafiza-Laiba-Faisal/Hafiza_Laiba_Faisal-VieroMind_Lhr_Pakathon_4_Oct_2025",
    details: {
      role: "Lead Developer — Hafiza Laiba Faisal (Full-Stack Python/Flask, AI/ML)",
      achievement: { label: "3rd Position – VieroMind Pakathon 2025", by: "VieroMind Lhr Pakathon 2025 — Mission: Empowering recovery through AI-driven emotional support" },
      problemStatement: "Individuals facing emotional distress, compulsive behaviors, or communication barriers need non-verbal emotion tracking and continuous multi-perspective AI therapy — without expensive or inaccessible professional therapy.",
      solutionOverview: "HealTalk combines EEG-based brain state detection (Focused / Triggered / Relaxed), a 6-Agent AI Therapy Roundtable (AutoGen + OpenRouter GPT), a 24/7 AI Support Coach, and emergency calming tools — all in a single real-time Flask-SocketIO platform with a private local SQLite database.",
      features: [
        "EEG-Based Brain State Detection (.npy files — Focused / Triggered / Relaxed)",
        "Real-Time EEG Brain Wave Visualization (Chart.js)",
        "6-Agent AI Therapy Roundtable (AutoGen + OpenRouter GPT)",
        "24/7 AI Support Coach (OpenRouter GPT, personalized guidance)",
        "Emergency Help Tools (Breathing guidance & calming interventions)",
        "Daily Streak Tracking & Gamification",
        "Digital Journal (emotions, triggers, personal reflections)",
        "Anonymous & Secure Local Storage (SQLite)",
      ],
      specs: [
        { icon: "chip", label: "Frontend", value: "Bootstrap 5 | Chart.js (EEG real-time viz) | jQuery | Socket.IO Client" },
        { icon: "sensor", label: "EEG Pipeline", value: "Upload .npy → Classify (Focused/Triggered/Relaxed) → Real-time Chart.js visualization" },
        { icon: "mission", label: "AI & Agents", value: "Microsoft AutoGen | OpenRouter GPT | 6-Therapist Swarm | Flask-SocketIO live debates" },
        { icon: "comm", label: "API Endpoints", value: "/api/nlp/message | /api/agents/start_debate | /api/user/streak | /api/journal" },
        { icon: "structure", label: "Backend & DB", value: "Python Flask | Flask-SocketIO (WebSockets) | SQLite (local, anonymized)" },
      ],
      bullets: [
        "Architected a 6-Agent AI Therapist Roundtable using Microsoft AutoGen + OpenRouter GPT: Dr. Sarah Chen (CBT), Dr. James Williams (Holistic Healing), Dr. Maria Rodriguez (Psychodynamic), Dr. David Thompson (Psychiatry & Neuroscience), Dr. Lisa Park (Trauma & EMDR), Dr. Michael Chen (Mindfulness & Meditation).",
        "Built an EEG signal processing pipeline to ingest raw .npy brain wave files, classify emotional states (Focused / Triggered / Relaxed) in real-time, and render live waveforms via Chart.js dashboards.",
        "Integrated a 24/7 AI Support Coach (OpenRouter GPT) delivering continuous personalized emotional and behavioral guidance with streak tracking, daily journaling, and mood correlation.",
        "Implemented 6 REST API endpoints (/api/nlp/message, /api/agents/start_debate, /api/user/streak, /api/journal, /api/login, /api/register) over Flask-SocketIO WebSockets for low-latency real-time communication.",
        "Designed an emergency help system with breathing guidance and calming intervention popups triggered by EEG 'Triggered' state detection.",
        "Ensured user privacy with anonymized local SQLite storage and an ethical-first design — HealTalk is a supportive educational tool, not a clinical device.",
      ],
      systemFlow: [
        "1. EEG Input: User uploads .npy brain wave file → Flask classifies as Focused / Triggered / Relaxed → Chart.js renders real-time visualization.",
        "2. Trigger Alert: If 'Triggered' state detected, emergency calming intervention popup is shown (breathing guide).",
        "3. 6-Agent Roundtable: User starts therapy debate via /api/agents/start_debate → AutoGen orchestrates 6 AI therapists over Socket.IO WebSockets.",
        "4. AI Support Coach: 1-on-1 GPT coaching via /api/nlp/message with daily streak and journal auto-sync.",
      ],
      archImages: [archHealTalk],
      architectureDiagram: {
        title: "HealTalk EEG Pipeline & AutoGen 6-Therapist Roundtable Architecture",
        steps: [
          { step: "01", label: "EEG (.npy) File Upload & Classification", desc: "Raw brain wave arrays classified as Focused / Triggered / Relaxed — visualized live via Chart.js." },
          { step: "02", label: "Emergency Intervention Engine", desc: "Triggered state fires immediate calming intervention (breathing guidance, distraction popups)." },
          { step: "03", label: "AutoGen 6-Therapist Roundtable", desc: "CBT, Holistic, Psychodynamic, Psychiatry, Trauma/EMDR, Mindfulness therapists debate live over Flask-SocketIO." },
          { step: "04", label: "24/7 AI Coach & Journal Sync", desc: "OpenRouter GPT coach delivers personalized guidance with streak tracking & digital journal auto-sync." },
        ],
      },
      techStackCategories: [
        { category: "AI & Multi-Agent", items: ["Microsoft AutoGen", "OpenRouter GPT Models", "6-Therapist Swarm"] },
        { category: "EEG & Visualization", items: ["Python NumPy", "EEG .npy File Parsing", "Focused/Triggered/Relaxed Classifier", "Chart.js Real-Time EEG Charts"] },
        { category: "Backend & Real-Time", items: ["Python Flask", "Flask-SocketIO (WebSockets)", "SQLite (anonymized)", "jQuery", "Bootstrap 5"] },
      ],
    },
  },
  {
    img: pHealth, title: "HealthLink360 — Pakistan's First Full-Stack Multi-Agent AI Healthcare Ecosystem",
    category: "Healthcare & EdTech / GovTech",
    desc: "HealthLink360 is a production-ready, dual-engine AI platform connecting Pakistan's hospitals in real time using 8+ specialized AI agents. It automates clinical operations — from medico-legal FIR drafting to maternal care registration — while bridging the Industry-Academia gap by feeding real hospital data directly to universities and WHO for research grants and policy reform in minutes instead of weeks.",
    tags: ["FastAPI", "Multi-Agent AI", "Model Context Protocol (MCP)", "Anthropic SDK", "WebSockets", "Computer Vision (OCR)", "MongoDB", "Gemini 2.0 Flash", "Claude Sonnet"],
    github: "https://github.com/Hafiza-Laiba-Faisal/Innovista_hackathon",
    details: {
      role: "Full-Stack AI Systems Architect & Lead Developer — Hafiza Laiba Faisal",
      achievement: { label: "Innovista Hackathon 2025 — Finalist / Showcase Project", by: "Innovista Hackathon 2025" },
      problemStatement: "Pakistan's hospitals operate in silos — critical clinical data (disease outbreaks, maternal deaths, criminal forensics) is managed manually, causing delays of weeks in emergency response and regulatory reporting. Meanwhile, universities conducting health research have zero access to real hospital data, creating a permanent disconnect between academic knowledge and on-ground healthcare reality. National bodies like NIH spend weeks manually aggregating quarterly reports from 80+ hospitals across the country.",
      solutionOverview: "HealthLink360 deploys two parallel AI systems: the Real-Time Clinical Operations System (RCOS) giving hospitals instant AI-powered tools for medico-legal, pharmacy, maternal, mental health, and waste management operations; and the Industry-Academia Intelligence Bridge (IAIB) that automatically aggregates data from 80+ hospitals, generates official NIH quarterly reports as formatted Word (.docx) documents, drafts WHO grant proposals, and sends research collaboration emails to universities in under 3 minutes.",
      features: [
        "Real-Time AI Clinical Agents (8 specialized agents: Criminal/FIR, Pharmacy, Maternal Care, Mental Health, Waste, NIH, R&D, Hospital Central)",
        "Automated FIR & Medico-Legal Drafting (Forensic case reports with evidence chain management)",
        "CNIC-Based Maternal Registration (EasyOCR CNIC scan with privacy-first Fernet encryption)",
        "AI Pharmacy Inventory Management (Stock tracking, stockout prediction, prescription verification)",
        "Mental Health Triage Agent (Suicide risk assessment & psychiatric consultation routing)",
        "Bio-hazard Waste Lifecycle Tracking (Hospital waste disposal compliance & vehicle scheduling)",
        "NIH Quarterly Report Auto-Generation (Aggregates 80+ hospital reports into formatted .docx in under 3 mins)",
        "WHO Grant Proposal Drafting (AI-generated international funding proposals based on outbreak data)",
        "University Research Outreach (Automated emails with hospital data for research, FYPs & internships)",
        "Real-Time WebSocket Trace Streaming (Live AI reasoning steps broadcast as agent thinks)",
        "Privacy-First CNIC OCR Microservice (Biometrics extracted locally, encrypted in MongoDB, never exposed to LLM)",
        "Fault-Tolerant MCP Architecture (Isolated subprocess execution with 30s–360s timeout protection)",
      ],
      specs: [
        { icon: "chip", label: "Frontend UI", value: "HTML5 | Tailwind CSS | Vanilla JavaScript | WebSocket API" },
        { icon: "sensor", label: "Backend & AI", value: "FastAPI | Uvicorn | Python 3.11 | Anthropic SDK | Gemini 2.0 Flash API | Claude Sonnet" },
        { icon: "mission", label: "Communication", value: "REST API | WebSockets (/ws/traces) | MCP Stdio Protocol (JSON-RPC Pipes)" },
        { icon: "comm", label: "Storage & Microservices", value: "MongoDB | PyMongo | Fernet Encryption | python-docx | EasyOCR + YOLO | JSON Stores" },
        { icon: "structure", label: "MCP Servers (5)", value: "nih_mcp.py | report_generation_mcp_tool.py | rnd_mcp_tools.py | agent_orchestrator_mcp.py | waste_mcp_tools.py" },
      ],
      bullets: [
        "Dual-Engine Architecture Design: Architected two independent FastAPI servers — backend.py (Port 8000) for real-time operations and api_server_fixed_v2.py (Port 8002) for heavy MCP-orchestrated workflows — ensuring neither system blocks the other.",
        "MCP Stdio Protocol Implementation: Built 5 standalone MCP Tool Servers (nih_mcp.py, report_generation_mcp_tool.py, rnd_mcp_tools.py, agent_orchestrator_mcp.py, waste_mcp_tools.py) running as isolated subprocesses with 30s–360s timeout protection.",
        "Industry-Academia Gap Solution: Designed the complete IAIB pipeline where real hospital outbreak data flows automatically from 80+ hospitals to NIH aggregation, WHO grant proposal drafting, and University research outreach emails in under 3 minutes.",
        "Privacy-First CNIC OCR Microservice: Built cnic_ocr_service.py using EasyOCR + Fernet encryption where CNIC biometric data is extracted, encrypted, and stored in MongoDB without ever being exposed to the AI agent layer.",
        "Real-Time Agent Trace Streaming: Implemented ConnectionManager WebSocket broadcaster in backend.py streaming live agent reasoning steps to the dashboard UI as the AI thinks and executes.",
        "NIH Automated Report Pipeline: Implemented end-to-end automated quarterly reporting aggregating 80+ hospital records into formatted Word (.docx) documents, reducing a weeks-long manual process to under 3 minutes.",
      ],
      systemFlow: [
        "System 1 (RCOS): User submits task via dashboard → backend.py dispatches to domain agent (Criminal, Pharmacy, Maternal, Mental, Waste) → Agent executes LLM + helper tools → ConnectionManager streams WebSocket thought steps live → Persisted to MongoDB/JSON.",
        "System 2 (IAIB): Admin triggers POST /api/workflow/full-quarterly-cycle → api_server_fixed_v2.py orchestrates 5 MCP subprocesses → nih_mcp aggregates 80+ hospital records → report_generation_mcp builds formatted NIH .docx → rnd_mcp drafts WHO proposals & emails Universities.",
      ],
      archImages: [archHealthLinkOverview, archHealthLinkRCOS, archHealthLinkIAIB],
      architectureDiagram: {
        title: "HealthLink360 Dual-Engine Architecture (RCOS + IAIB MCP Servers)",
        steps: [
          { step: "01", label: "RCOS Real-Time Clinical Dispatcher", desc: "backend.py (Port 8000) routes staff queries to 5 clinical agents with WebSocket trace streaming." },
          { step: "02", label: "IAIB Master MCP Orchestrator", desc: "api_server_fixed_v2.py (Port 8002) orchestrates 5 decoupled MCP Tool Servers over JSON-RPC Stdio." },
          { step: "03", label: "80+ Hospital Data Aggregation", desc: "nih_mcp.py validates metrics, detects Dengue/COVID outbreaks, and summarizes 8 departments." },
          { step: "04", label: "Automated Deliverables & Outreach", desc: "Generates official NIH Word (.docx) reports, WHO funding proposals, and emails research data to Universities." },
        ],
      },
      techStackCategories: [
        { category: "AI & Agent Framework", items: ["Anthropic SDK", "Claude Sonnet", "Gemini 2.0 Flash", "Model Context Protocol (MCP)", "MCPServerStdio", "8-Agent Swarm"] },
        { category: "Backend & Real-Time", items: ["FastAPI", "Uvicorn", "Python 3.11", "WebSockets (/ws/traces)", "REST API", "asyncio"] },
        { category: "Vision & Encryption", items: ["EasyOCR", "OpenCV", "YOLO (Object Detection)", "Fernet Encryption", "PyMongo"] },
        { category: "Storage & Documents", items: ["MongoDB", "python-docx (.docx Reports)", "OpenPyXL", "JSON Flat-File Stores"] },
      ],
    },
  },
  {
    img: pCircuit, title: "Circuit Sathi ⚡ — Gamified AI Electronics Tutor",
    category: "Healthcare & EdTech",
    desc: "Engineered an AI-driven STEM platform that transforms static electronics education into a gamified experience. Students can visually simulate electron flow, interact with a Socratic AI tutor, and upload lab manuals to auto-generate interactive circuit schematics.",
    tags: ["Next.js", "Express", "PixiJS", "Mistral AI", "MNA Physics Engine"],
    github: "https://github.com/Hafiza-Laiba-Faisal/CircuitSathi",
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
      archImages: [archCircuitSathi],
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
  {
    title: "Machine Learning-Based Symbol Detection in Drift-Enhanced Wireless Molecular Communication Systems",
    desc: "Designed and implemented a simulation-based wireless molecular communication system to investigate machine learning-driven symbol synchronization and detection in diffusion-drift channels, evaluating multiple supervised learning algorithms for reliable symbol detection under varying transmission distances and noise conditions.",
    tags: ["Molecular Communication", "Machine Learning", "Python", "Scikit-learn", "Signal Processing"],
    status: "Completed",
    when: "2026",
    overview: "Designed and implemented a simulation-based wireless molecular communication system to investigate machine learning-driven symbol synchronization and detection in diffusion-drift channels. The project models nanoscale communication under varying transmission distances and noise conditions and evaluates multiple supervised learning algorithms for reliable symbol detection.",
    contributions: [
      "Developed a physics-based diffusion-drift molecular communication simulator using On-Off Keying (OOK) modulation.",
      "Generated a synthetic dataset of 3,000 communication samples with varying transmission distances and noise levels.",
      "Implemented and evaluated Logistic Regression, Support Vector Machine (SVM), Random Forest, Gradient Boosting, and Neural Networks for symbol synchronization and detection.",
      "Performed comprehensive performance evaluation using confusion matrices, ROC curves, precision-recall analysis, BER analysis, PCA, feature importance, learning curves, and robustness analysis.",
      "Achieved 99.2% classification accuracy with Logistic Regression while maintaining low computational complexity suitable for resource-constrained nanonetwork applications.",
    ],
    techs: ["Python", "NumPy", "Scikit-learn", "Matplotlib", "Plotly", "Machine Learning", "Signal Processing", "Wireless Molecular Communication"],
    areas: ["Machine Learning", "Molecular Communication", "Internet of Nano Things (IoNT)", "Wireless Communication", "Computational Modeling"],
  },
];

export const researchInterests = [
  "Self-Healing Smart Grids",
  "Quantum Technologies & Quantum Sensing",
  "Molecular Communication & Nano-Scale Networks",
  "Advanced Functional Materials (MOFs) for Energy Storage",
  "Smart Sensing & Sustainable Infrastructure",
  "Neuromorphic Computing & Brain-Inspired Hardware",
  "Physics-Informed AI for Engineering Systems",
  "Swarm Robotics & Embodied AI",
  "Brain–Computer Interfaces (BCI)",
  "Space Systems Engineering",
  "AI for Scientific Discovery",
];

export type Cert = { title: string; by: string; when: string; category: "Hackathons & Competitions" | "Learning" | "Internship"; link?: string; img?: string };
export const certs: Cert[] = [
  { title: "National CanSat Competition – 1st Position", by: "SUPARCO & RESOLVE", when: "2025", category: "Hackathons & Competitions", img: certCanSat },
  { title: "PeerBridge Mental Health Hackathon – Honorable Mention", by: "PeerBridge", when: "2025", category: "Hackathons & Competitions", img: certPBCert },
  { title: "DSH Hacks V1", by: "DSH Hacks", when: "2025", category: "Hackathons & Competitions", img: certDSH },
  { title: "UMT TECHVERSE", by: "UMT", when: "2025", category: "Hackathons & Competitions", img: certUMT },
  { title: "Microsoft AI Product Manager", by: "Microsoft", when: "2025", category: "Learning", link: "https://coursera.org/share/13dc5c6173080cb37368d9547c5a4b82", img: certMSPM },
  { title: "Exploratory Data Analysis for Machine Learning", by: "Coursera", when: "2025", category: "Learning", link: "https://coursera.org/share/a49a626a5c5a042f2cfff4080271908e", img: certEDA },
  { title: "Generative AI for Customer Success", by: "Coursera", when: "2025", category: "Learning", link: "https://coursera.org/share/3b00272e89bf756daa44aa6b26808303", img: certGenAI },
  { title: "Building AI Cloud Apps with Microsoft Azure", by: "Microsoft", when: "2025", category: "Learning", img: certAzure },
  { title: "HCIA-AI Digital Certificate", by: "Huawei", when: "2023", category: "Learning", link: "https://drive.google.com/file/d/1jcckzVCeIACU73SRBl5Ks2a9txWlxmg7/view?usp=sharing", img: certHuawei },
  { title: "NTDC Internship 2025", by: "NTDC", when: "2025", category: "Internship", img: certGeneric },
  { title: "Artificial Intelligence (ML & DL)", by: "KICS, UET & NVTTC", when: "2023", category: "Learning" },
  { title: "Rescue CPR Training (First Aid)", by: "Pakistan Red Crescent", when: "2024", category: "Learning" },
];

export const achievements = [
  { title: "1st Position – National CanSat Competition", by: "SUPARCO 2025", desc: "Led the winning team in Pakistan's 1st National CanSat Competition.", img: aCanSat },
  { title: "Innovative Award – FloodGuard AI", by: "Innovista AI Hackathon 2025", desc: "Recognized for building a multi-agent AI system for flood prediction.", img: aFlood },
  { title: "3rd Position – Pakathon", by: "Vieromind 2025", desc: "National hackathon focused on impactful engineering solutions.", img: aViero },
  { title: "Honorable Mention – PeerBridge Hackathon", by: "PeerBridge 2025", desc: "Recognized for an innovative mental health platform.", img: aPB },
  { title: "Student of the Year 2025", by: "University", desc: "Awarded for outstanding academic performance and extracurricular achievements.", img: aStudentYear },
  { title: "Grid Girls Program", by: "NTDC 2025", desc: "Selected among top interns nationwide for the Grid Girls Internship.", img: aNtdc },
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
          {[
            { icon: Linkedin, href: "https://www.linkedin.com/in/h-laiba-faisal/" },
            { icon: Github, href: "https://github.com/Hafiza-Laiba-Faisal" },
            { icon: Mail, href: "mailto:hafizalaibafaisal@gmail.com" },
          ].map(({ icon: I, href }, i) => (
            <a key={i} href={href} target="_blank" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground/70 transition-colors hover:text-primary">
              <I className="h-4 w-4" />
            </a>
          ))}
          <Link to="/contact" className="ml-2 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]">
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
