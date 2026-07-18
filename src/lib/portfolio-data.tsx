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
  img: string; featured?: boolean; title: string; desc: string; tags: string[];
  details?: {
    role?: string;
    achievement?: { label: string; by: string };
    features?: string[];
    specs?: { icon: "chip" | "battery" | "sensor" | "structure" | "comm" | "mission"; label: string; value: string }[];
  };
};

export const projects: Project[] = [
  {
    img: pCansat, featured: true, title: "CanSat Competition (SUPARCO)",
    desc: "Team Lead – 1st Position in Pakistan's 1st National CanSat Competition 2025. Designed & developed a CanSat satellite prototype for real-time data acquisition, telemetry, and safe recovery during descent.",
    tags: ["ESP32", "Sensors", "LoRa", "Telemetry"],
    details: {
      role: "Team Lead – 1st Position in Pakistan's 1st National CanSat Competition 2025",
      achievement: { label: "1st Position", by: "Pakistan's 1st National CanSat Competition 2025 by SUPARCO" },
      features: ["Altitude & Temp. Monitoring", "Real-time Telemetry", "Compact & Lightweight Design", "Reliable Power & Communication"],
      specs: [
        { icon: "chip", label: "Microcontroller", value: "ESP32" },
        { icon: "battery", label: "Power System", value: "Li-Po Battery | Power Management" },
        { icon: "sensor", label: "Sensors", value: "BMP280, Pressure, Temperature, Altitude" },
        { icon: "structure", label: "Structure", value: "3D Printed Frame | Modular Stack Design" },
        { icon: "comm", label: "Communication", value: "LoRa | RF Telemetry" },
        { icon: "mission", label: "Mission", value: "Collect & transmit real-time environmental data during descent" },
      ],
    },
  },
  { img: pEnergy, title: "Smart Energy Audit System", desc: "Real-time energy monitoring system using ESP32 and PZEM-004T with cloud dashboard.", tags: ["ESP32", "IoT", "Power Systems"] },
  { img: pFlood, title: "FloodGuard AI", desc: "Multi-agent AI system for flood prediction and evacuation planning using satellite & sensor data.", tags: ["AI/ML", "GeoSpatial", "Python"] },
  { img: pNexa, title: "NEXA – AI Electronics Agent", desc: "AI assistant for electronics engineers that helps in circuit design, analysis, explanations and documentation.", tags: ["Python", "LLM", "LangChain", "AI"] },
  { img: pNeuro, title: "NeuroShield", desc: "EEG-based addiction recovery platform combining real-time EEG signal analysis with AI.", tags: ["EEG", "ML", "Python"] },
  { img: pHeal, title: "HealTalk", desc: "EEG-powered communication assistant for patients with locked-in syndrome using brain signal classification.", tags: ["EEG", "NLP", "Python"] },
  { img: pHealth, title: "HealthLink360", desc: "AI-powered platform integrating emergency response, pharmacy management and patient care.", tags: ["Django", "AI", "Healthcare", "Web"] },
  { img: pCircuit, title: "CircuitSathi", desc: "AI-powered learning assistant for circuit analysis, fault detection and step-by-step guidance.", tags: ["AI", "Circuit Analysis", "Web"] },
  { img: pEnergy, title: "E-Commerce Price Tracker", desc: "Django REST API platform for monitoring e-commerce product prices with alerts and insights.", tags: ["Django", "API", "Database"] },
];

export const experience = [
  {
    icon: Code2, color: "primary",
    role: "AI Full Stack Software Engineer", org: "Penovatech", subtitle: "AI Full Stack Software Engineer (Intern → Offer)", current: true,
    when: "Jan 2026 – Present", where: "Remote",
    desc: "Working on AI-powered learning management systems (PenTutor) and real-time ML solutions. Building scalable backend APIs, integrating real-time communication and ML models.",
    bullets: [
      "Developed PenTutor LMS using Django, DRF and PostgreSQL",
      "Integrated real-time video & live classes using Agora SDK",
      "Built and deployed REST APIs and microservices",
      "Implemented AI features for personalized learning paths",
      "Working with AWS (EC2, S3) for deployment and scalability",
    ],
    tag: "AI / Full Stack",
    stack: ["Django, DRF, Next.js", "PostgreSQL, AWS", "Agora, Redis"],
  },
  {
    icon: Zap, color: "ember",
    role: "NTDC – National Transmission & Despatch Company", org: "Grid Girls Internship Program 2025",
    when: "Jun 2025 – Aug 2025", where: "Lahore, Pakistan",
    desc: "Worked in the System Operation Department and gained practical exposure to power system operations and grid management.",
    bullets: [
      "Monitored real-time grid operations and system parameters",
      "Assisted in load management and outage scheduling",
      "Analyzed generation, transmission and system performance",
      "Prepared operational reports and documentation",
    ],
    tag: "Power Systems",
    stack: ["Grid Operations", "SCADA, EMS", "Load Management"],
  },
  {
    icon: Cpu, color: "primary",
    role: "Ezitech Institute", org: "Electronics Engineering Intern",
    when: "Jul 2024 – Aug 2024", where: "Lahore, Pakistan",
    desc: "Hands-on training in embedded systems, PCB designing and electronics prototyping.",
    bullets: [
      "Designed and tested electronic circuits and PCB layouts",
      "Worked with Arduino, ESP32 and various sensors",
      "Gained experience in soldering and hardware debugging",
      "Built mini projects and prototypes",
    ],
    tag: "Electronics",
    stack: ["PCB Design, Arduino", "ESP32, Sensors", "Embedded C"],
  },
  {
    icon: Code2, color: "primary",
    role: "TenBit Solutions", org: "Web Development Intern",
    when: "May 2024 – Jun 2024", where: "Remote",
    desc: "Worked on frontend and backend development tasks for real-world web applications.",
    bullets: [
      "Developed responsive web interfaces using HTML, CSS, JS",
      "Built backend features using Django and REST APIs",
      "Worked on bug fixing and performance improvements",
      "Collaborated in a team using Git and Agile workflow",
    ],
    tag: "Web Development",
    stack: ["Django, JavaScript", "HTML, CSS, Git", "REST APIs"],
  },
];

export const skillGroups = [
  { icon: Code2, title: "Programming Languages", items: ["Python", "C / C++", "JavaScript", "Java", "SQL", "Rust"] },
  { icon: Cpu, title: "AI & Machine Learning", items: ["LLMs", "LangGraph", "CrewAI", "AutoGen", "OpenAI API", "RAG", "NLP", "Computer Vision", "Scikit-learn", "PyTorch"] },
  { icon: Building2, title: "Backend Development", items: ["Django", "FastAPI", "Flask", "Node.js", "Express.js", "REST APIs"] },
  { icon: Globe, title: "Frontend Development", items: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"] },
  { icon: Link2, title: "Databases", items: ["PostgreSQL", "MongoDB", "MySQL", "Supabase", "SQLite"] },
  { icon: FlaskConical, title: "Cloud & DevOps", items: ["AWS (EC2, S3, RDS)", "Docker", "GitHub Actions", "CI/CD"] },
  { icon: Target, title: "Tools & Technologies", items: ["Git", "Linux", "VS Code", "Arduino IDE", "KiCad", "Postman", "MATLAB"] },
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
