import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Zap, Linkedin, Github, Mail, ArrowRight, ArrowUpRight, Download,
  Briefcase, Code2, Cpu, FlaskConical, Trophy, Target,
  MapPin, Link2, Calendar, Star, Award, Users, BookOpen,
  GraduationCap, Building2, Send, Twitter, Globe, Eye, Sparkles,
  Bot, Server, Activity, Radio, HeartPulse, Compass, Lightbulb,
  Binary, Wrench, Layers, CheckCircle2, Terminal, ShieldAlert,
  Clock, ArrowRightCircle
} from "lucide-react";

import heroBrainImg from "@/assets/hero-brain.png";
import engineeringNotesImg from "@/assets/engineering-notes.png";

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

export const Route = createFileRoute("/")({
  component: PortfolioHome,
  head: () => ({
    meta: [
      { title: "Hafiza Laiba Faisal — Engineering Intelligence Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Hafiza Laiba Faisal — Electrical Engineer & AI Developer working on AI systems, aerospace, embedded systems, and machine learning.",
      },
      { property: "og:title", content: "Hafiza Laiba Faisal — Engineering Intelligence Portfolio" },
      { property: "og:description", content: "Building intelligent engineering systems by combining AI, Embedded Systems, and Production Software." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500&family=Caveat:wght@500;600&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
});

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Research", to: "/research" },
  { label: "Experience", to: "/experience" },
  { label: "Skills", to: "/" },
  { label: "Notes", to: "/" },
  { label: "Publications", to: "/research" },
  { label: "Resume", to: "/experience" },
  { label: "Contact", to: "/" },
];

const stats = [
  { icon: Code2, n: "15+", l: "Engineering Projects" },
  { icon: FlaskConical, n: "3", l: "Research Domains" },
  { icon: Zap, n: "6+", l: "Hackathons" },
  { icon: Briefcase, n: "2", l: "Industry Internships" },
  { icon: Trophy, n: "1", l: "National Award" },
];

const researchInterests = [
  { title: "Multi-Agent Systems", icon: Users },
  { title: "Agentic AI", icon: Bot },
  { title: "Model Context Protocol (MCP)", icon: Server },
  { title: "Embedded AI", icon: Cpu },
  { title: "Robotics", icon: Compass },
  { title: "Computer Vision", icon: Eye },
  { title: "Signal Processing", icon: Activity },
  { title: "Power Systems AI", icon: Zap },
  { title: "Edge AI", icon: Radio },
  { title: "AI for Healthcare", icon: HeartPulse },
];

const featuredProjects = [
  {
    title: "NEXA ⚡",
    desc: "AI Electronics Engineering agent with 2-agent architecture and Physics Validation Engine.",
    tags: ["AI Systems", "Electronics"],
    img: pNexa,
    to: "/projects",
  },
  {
    title: "HealthLink360 ⚡",
    desc: "Multi-agent AI healthcare ecosystem with HL7 integration and real-time coordination.",
    tags: ["Healthcare AI", "MCP"],
    img: pHealth,
    to: "/projects",
  },
  {
    title: "FloodGuard AI",
    desc: "Multi-agent flood prediction and evacuation system with MCP orchestration.",
    tags: ["AI Systems", "Disaster AI"],
    img: pFlood,
    to: "/projects",
  },
  {
    title: "CanSat Mission",
    desc: "Pakistan's 1st National CanSat Competition – 1st Position (SUPARCO).",
    tags: ["Embedded", "Aerospace"],
    img: pCansat,
    to: "/projects",
  },
  {
    title: "Smart Energy Audit",
    desc: "ESP32 based IoT energy monitoring and anomaly detection system.",
    tags: ["IoT", "Power Systems"],
    img: pEnergy,
    to: "/projects",
  },
  {
    title: "Circuit Sathi",
    desc: "Gamified AI tutor for circuit simulation, analysis and learning.",
    tags: ["AI Education", "Electronics"],
    img: pCircuit,
    to: "/projects",
  },
];

const engineeringPhilosophy = [
  {
    title: "First-Principles Thinking",
    desc: "Solve problems from the ground up using fundamental physics, math, and engineering principles.",
    icon: Binary,
  },
  {
    title: "Hardware + AI Integration",
    desc: "Bridging embedded hardware and intelligent software to build reliable real-world systems.",
    icon: Cpu,
  },
  {
    title: "Evidence-Driven Engineering",
    desc: "Make engineering decisions based on validation, feasibility, cost efficiency, and real-world performance.",
    icon: Activity,
  },
  {
    title: "Engineering for Impact",
    desc: "Building systems that create measurable impact in society and the environment.",
    icon: Globe,
  },
];

const experiencePreview = [
  {
    companyId: "TenBit Solutions",
    org: "TenBit Solutions",
    role: "AI Software Engineer",
    when: "Jun 2026 – Present",
    where: "Onsite",
    logo: logoTenbit,
    letterLogo: null,
  },
  {
    companyId: "PenTutor",
    org: "PenTutor — Penovatech",
    role: "AI Full Stack Software Engineer",
    when: "Jan 2026 – Present",
    where: "Remote",
    logo: logoPenovatech,
    letterLogo: "P",
  },
  {
    companyId: "NTDC",
    org: "National Grid Company (NGC) — formerly NTDC",
    role: "Power System Planning Engineering Trainee",
    when: "Jun 2025 – Aug 2025",
    where: "Lahore, Pakistan",
    logo: logoNtdc,
    letterLogo: null,
  },
];

const skillCategories = [
  { title: "Artificial Intelligence", icon: Bot },
  { title: "Backend Development", icon: Server },
  { title: "Embedded Systems", icon: Cpu },
  { title: "Computer Vision", icon: Eye },
  { title: "System Design", icon: Layers },
  { title: "Cloud & DevOps", icon: Globe },
  { title: "Electrical Engineering", icon: Zap },
  { title: "Robotics & Control", icon: Compass },
  { title: "Power Systems", icon: Activity },
  { title: "Programming Languages", icon: Code2 },
];

const bottomResearchList = [
  "Multi-Agent Systems",
  "Embedded AI",
  "Power Systems AI",
  "Computer Vision",
  "Signal Processing",
  "Robotics",
  "Healthcare AI",
];

const bottomCertsList = [
  { title: "Generative AI with LLMs", date: "May 2024" },
  { title: "AWS Cloud Practitioner", date: "Dec 2024" },
  { title: "Azure AI Fundamentals AI-900", date: "Jan 2025" },
  { title: "Huawei HCIA-AI", date: "Feb 2025" },
];

const bottomAchievementsList = [
  { title: "1st Position – National CanSat Competition", year: "2025" },
  { title: "Innovista Finalist – FloodGuard AI", year: "2025" },
  { title: "3rd Position – Hackathon", year: "2024" },
  { title: "1st Position – National Circuit Competition", year: "2024" },
];

function Card({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) {
  return (
    <div id={id} className={`rounded-3xl border border-border/70 bg-[#FCFAF6] p-6 shadow-xs ${className}`}>
      {children}
    </div>
  );
}

function SectionHeader({ icon: Icon, title, actionText, actionLink }: { icon?: typeof Star; title: string; actionText?: string; actionLink?: string }) {
  return (
    <div className="flex items-center justify-between gap-4 mb-6">
      <div className="flex items-center gap-2.5">
        {Icon && <Icon className="h-4 w-4 text-[#D97706]" />}
        <h2 className="font-display text-xl font-bold tracking-tight text-[#1C2E2A] md:text-2xl">{title}</h2>
      </div>
      {actionText && (
        <Link to={actionLink ?? "/"} className="inline-flex items-center gap-1 text-xs font-semibold text-[#D97706] transition-colors hover:text-[#B45309]">
          {actionText} <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      )}
    </div>
  );
}

function PortfolioHome() {
  return (
    <div className="min-h-screen bg-[#FBF9F4] text-[#2C3E3A] font-sans antialiased selection:bg-[#1E3A34] selection:text-white">
      {/* 1. HEADER / NAVBAR */}
      <header className="mx-auto max-w-[1440px] px-6 pt-6">
        <nav className="flex items-center justify-between gap-4 rounded-full border border-border/60 bg-[#FCFAF6]/90 px-6 py-3 shadow-xs backdrop-blur-md">
          <Link to="/" className="flex items-center gap-3">
            <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#1E3A34] bg-white font-display text-xs font-extrabold text-[#1E3A34] shadow-xs">
              HLF
            </span>
            <span className="leading-tight">
              <span className="block font-display text-sm font-bold tracking-wide text-[#1E3A34]">
                HAFIZA LAIBA FAISAL
              </span>
              <span className="block text-[10.5px] font-medium tracking-wide text-foreground/60">
                Engineering Intelligence Portfolio
              </span>
            </span>
          </Link>

          {/* Navigation Links */}
          <ul className="hidden items-center gap-5 xl:flex">
            {navLinks.map((n, i) => (
              <li key={n.label}>
                <Link
                  to={n.to}
                  className={`text-[13px] font-medium transition-colors ${
                    i === 0 ? "text-[#1E3A34] font-semibold" : "text-foreground/70 hover:text-[#1E3A34]"
                  }`}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* 2. HERO SECTION */}
      <section className="mx-auto mt-6 max-w-[1440px] px-6">
        <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-[#FAF6F0] p-6 md:p-10 shadow-xs">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            {/* Left Bio Column */}
            <div className="flex flex-col justify-center">
              <p className="mb-2 font-script text-2xl font-semibold text-[#D97706]">Hello, I'm 👋</p>
              <h1 className="font-display text-4xl font-extrabold leading-tight text-[#1C2E2A] md:text-5xl lg:text-6xl">
                Hafiza Laiba Faisal
              </h1>

              <div className="mt-3 flex flex-wrap items-center gap-1.5 text-xs font-bold tracking-wider text-[#1C2E2A]/80 uppercase">
                <span>ELECTRICAL ENGINEER</span>
                <span className="text-[#D97706]">•</span>
                <span>AI SYSTEMS ENGINEER</span>
                <span className="text-[#D97706]">•</span>
                <span>RESEARCH-ORIENTED DEVELOPER</span>
              </div>

              <p className="mt-4 max-w-xl text-[14.5px] leading-relaxed text-foreground/80">
                Building intelligent engineering systems by combining Artificial Intelligence, Embedded Systems, Electronics and Production Software to solve real-world engineering problems.
              </p>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full bg-[#1E3A34] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-xs transition-transform hover:scale-[1.02] hover:bg-[#162D28]"
                >
                  View My Work <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  to="/experience"
                  className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#1C2E2A] shadow-xs transition-transform hover:bg-[#F4EFE6]"
                >
                  <Download className="h-4 w-4 text-[#D97706]" /> Download CV
                </Link>
              </div>

              {/* Contact / Location Meta Pills */}
              <div className="mt-8 flex flex-wrap gap-2.5 text-[12px] font-medium text-foreground/75">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-white px-3.5 py-1.5 shadow-2xs">
                  <Mail className="h-3.5 w-3.5 text-[#D97706]" /> hafizalaibafaisal@gmail.com
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-white px-3.5 py-1.5 shadow-2xs">
                  <MapPin className="h-3.5 w-3.5 text-[#D97706]" /> Lahore, Pakistan
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-white px-3.5 py-1.5 shadow-2xs">
                  <Globe className="h-3.5 w-3.5 text-[#D97706]" /> Open to Collaborate Worldwide
                </span>
              </div>
            </div>

            {/* Right Hero Diagram Image */}
            <div className="flex items-center justify-center p-2">
              <img
                src={heroBrainImg}
                alt="AI & Systems Mindmap Diagram"
                className="max-h-[460px] w-full object-contain filter drop-shadow-sm transition-transform duration-500 hover:scale-[1.01]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. STATS ROW */}
      <section className="mx-auto mt-6 max-w-[1440px] px-6">
        <Card className="!p-4 bg-white">
          <div className="grid grid-cols-2 gap-4 divide-y divide-border/40 sm:grid-cols-3 sm:divide-y-0 lg:grid-cols-5 lg:divide-x">
            {stats.map(({ icon: I, n, l }) => (
              <div key={l} className="flex items-center gap-3.5 px-3 py-2 first:pl-0">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FAF6F0] text-[#D97706] border border-border/50">
                  <I className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-display text-2xl font-extrabold text-[#1C2E2A]">{n}</div>
                  <div className="text-[11.5px] font-medium text-foreground/65">{l}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </section>

      {/* 4. RESEARCH INTERESTS */}
      <section className="mx-auto mt-6 max-w-[1440px] px-6">
        <Card className="bg-white">
          <SectionHeader icon={Sparkles} title="Research Interests" actionText="View all interests" actionLink="/research" />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10">
            {researchInterests.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group flex flex-col items-center justify-center rounded-2xl border border-border/60 bg-[#FAF7F2] p-3.5 text-center transition-all duration-200 hover:-translate-y-0.5 hover:border-[#D97706]/40 hover:bg-white hover:shadow-xs"
                >
                  <span className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#1E3A34] shadow-2xs group-hover:bg-[#1E3A34] group-hover:text-white transition-colors">
                    <Icon className="h-4.5 w-4.5" />
                  </span>
                  <span className="text-[11.5px] font-semibold leading-snug text-[#1C2E2A] group-hover:text-[#1E3A34]">
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>
        </Card>
      </section>

      {/* 5. FEATURED PROJECTS */}
      <section id="projects" className="mx-auto mt-6 max-w-[1440px] px-6">
        <Card className="bg-white">
          <SectionHeader icon={Star} title="Featured Projects" actionText="View all projects" actionLink="/projects" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((p) => (
              <article
                key={p.title}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-[#FAF7F2] transition-all duration-300 hover:-translate-y-1 hover:border-[#1E3A34]/30 hover:shadow-md"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-display text-lg font-bold text-[#1C2E2A] group-hover:text-[#1E3A34]">
                      {p.title}
                    </h3>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-[#D97706] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <p className="mt-2 text-[13px] leading-relaxed text-foreground/75 flex-1">
                    {p.desc}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-border/40">
                    <div className="flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <span key={t} className="rounded-md bg-white border border-border/60 px-2.5 py-0.5 text-[11px] font-medium text-foreground/75 shadow-2xs">
                          {t}
                        </span>
                      ))}
                    </div>
                    <Link to={p.to} className="inline-flex items-center gap-1 text-[12px] font-bold text-[#1E3A34] hover:underline">
                      View Project <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Card>
      </section>

      {/* 6. ENGINEERING PHILOSOPHY */}
      <section className="mx-auto mt-6 max-w-[1440px] px-6">
        <Card className="bg-white">
          <SectionHeader icon={Lightbulb} title="Engineering Philosophy" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {engineeringPhilosophy.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex flex-col rounded-2xl border border-border/60 bg-[#FAF7F2] p-5 transition-all hover:border-[#D97706]/40 hover:bg-white"
                >
                  <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#D97706] border border-border/50 shadow-2xs">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-base font-bold text-[#1C2E2A] mb-2">{item.title}</h3>
                  <p className="text-[13px] leading-relaxed text-foreground/75">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </Card>
      </section>

      {/* 7. EXPERIENCE PREVIEW */}
      <section className="mx-auto mt-6 max-w-[1440px] px-6">
        <Card className="bg-white">
          <SectionHeader icon={Briefcase} title="Experience Preview" actionText="View all experience" actionLink="/experience" />
          <div className="grid gap-4 sm:grid-cols-3">
            {experiencePreview.map((exp) => (
              <Link
                key={exp.org}
                to="/experience"
                search={{ company: exp.companyId }}
                className="flex items-center gap-4 rounded-2xl border border-border/60 bg-[#FAF7F2] p-4 transition-all hover:border-[#1E3A34]/40 hover:bg-white hover:shadow-xs group cursor-pointer"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border/70 bg-white p-1 shadow-2xs group-hover:scale-105 transition-transform">
                  {exp.logo ? (
                    <img src={exp.logo} alt={exp.org} className="h-full w-full object-contain" />
                  ) : (
                    <span className="font-display text-lg font-bold text-[#1E3A34]">{exp.letterLogo}</span>
                  )}
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold text-[#1C2E2A] leading-tight group-hover:text-primary transition-colors">{exp.org}</h3>
                  <p className="text-[12.5px] font-medium text-foreground/75 mt-0.5">{exp.role}</p>
                  <div className="mt-1 flex flex-wrap gap-x-2 text-[11px] text-foreground/60">
                    <span>{exp.when}</span>
                    <span>•</span>
                    <span>{exp.where}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Card>
      </section>

      {/* 8. TECHNICAL SKILLS PREVIEW + ENGINEERING NOTES */}
      <section className="mx-auto mt-6 max-w-[1440px] px-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Left 2/3: Technical Skills Preview */}
          <Card className="lg:col-span-2 bg-white">
            <SectionHeader icon={Cpu} title="Technical Skills Preview" actionText="View all skills" actionLink="/experience" />
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
              {skillCategories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <div
                    key={cat.title}
                    className="flex flex-col items-center justify-center rounded-2xl border border-border/60 bg-[#FAF7F2] p-4 text-center transition-all hover:border-[#D97706]/40 hover:bg-white"
                  >
                    <span className="mb-2.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#1E3A34] shadow-2xs">
                      <Icon className="h-4.5 w-4.5" />
                    </span>
                    <span className="text-[12px] font-semibold text-[#1C2E2A] leading-tight">{cat.title}</span>
                  </div>
                );
              })}
            </div>
          </Card>

          {/* Right 1/3: Engineering Notes */}
          <Card className="bg-[#FAF7F2] flex flex-col justify-between border-[#D97706]/20">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-4 w-4 text-[#D97706]" />
                <h2 className="font-display text-lg font-bold text-[#1C2E2A]">Engineering Notes</h2>
              </div>
              
              <img
                src={engineeringNotesImg}
                alt="Engineering Notes Illustration"
                className="mx-auto h-36 w-auto object-contain my-3 drop-shadow-xs"
              />

              <h3 className="text-center font-display text-lg font-bold text-[#1C2E2A]">Coming Soon</h3>
              <p className="mt-2 text-center text-[13px] leading-relaxed text-foreground/75">
                I'm documenting my engineering journey, system architectures, research insights, and lessons learned from real-world AI and embedded systems projects.
              </p>
            </div>

            <div className="mt-5 flex justify-center">
              <button
                disabled
                className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-white px-5 py-2 text-xs font-semibold text-foreground/70 shadow-2xs cursor-not-allowed opacity-90"
              >
                <Clock className="h-3.5 w-3.5 text-[#D97706]" /> Coming Soon
              </button>
            </div>
          </Card>
        </div>
      </section>

      {/* 9. 4-COLUMN SHOWCASE GRID */}
      <section className="mx-auto mt-6 max-w-[1440px] px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Research Interests */}
          <Card className="bg-white">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display text-base font-bold text-[#1C2E2A]">Research Interests</h3>
              <Link to="/research" className="text-xs font-semibold text-[#D97706] hover:underline">View all →</Link>
            </div>
            <ul className="space-y-2 text-[13px] text-foreground/80">
              {bottomResearchList.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D97706]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Column 2: Certifications */}
          <Card className="bg-white">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display text-base font-bold text-[#1C2E2A]">Certifications</h3>
              <Link to="/certifications" className="text-xs font-semibold text-[#D97706] hover:underline">View all →</Link>
            </div>
            <ul className="space-y-3 text-[12.5px]">
              {bottomCertsList.map((c) => (
                <li key={c.title} className="flex items-start justify-between gap-2">
                  <span className="font-medium text-[#1C2E2A] leading-snug">{c.title}</span>
                  <span className="shrink-0 text-[11px] text-foreground/60">{c.date}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Column 3: Achievements */}
          <Card className="bg-white">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display text-base font-bold text-[#1C2E2A]">Achievements</h3>
              <Link to="/achievements" className="text-xs font-semibold text-[#D97706] hover:underline">View all →</Link>
            </div>
            <ul className="space-y-3 text-[12.5px]">
              {bottomAchievementsList.map((a) => (
                <li key={a.title} className="flex items-start justify-between gap-2">
                  <span className="font-medium text-[#1C2E2A] leading-snug">{a.title}</span>
                  <span className="shrink-0 text-[11px] text-foreground/60">{a.year}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Column 4: Open Source */}
          <Card className="bg-white flex flex-col justify-between">
            <div>
              <h3 className="font-display text-base font-bold text-[#1C2E2A] mb-3">Open Source</h3>
              <div className="flex items-start gap-3">
                <Github className="h-5 w-5 shrink-0 text-[#1E3A34] mt-0.5" />
                <p className="text-[13px] leading-relaxed text-foreground/75">
                  Actively building reusable AI components, engineering tools, and production-ready systems.
                </p>
              </div>
            </div>
            <a
              href="https://github.com/Hafiza-Laiba-Faisal"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#1E3A34] hover:underline"
            >
              View on GitHub <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </Card>
        </div>
      </section>

      {/* 10. BANNER CTA */}
      <section className="mx-auto mt-8 max-w-[1440px] px-6">
        <div className="relative overflow-hidden rounded-3xl bg-[#1E3A34] p-8 text-white shadow-md md:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-4">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-white backdrop-blur-xs">
                <Mail className="h-6 w-6 text-[#F59E0B]" />
              </span>
              <div>
                <h2 className="font-display text-2xl font-bold md:text-3xl text-white">
                  Let's Build Something Meaningful Together
                </h2>
                <p className="mt-1 text-sm text-white/80">
                  Open to collaborations, research opportunities, and innovative ideas.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="mailto:hafizalaibafaisal@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F59E0B] px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#1E3A34] shadow-xs transition-transform hover:scale-[1.02] hover:bg-[#D97706]"
              >
                Get in Touch <ArrowRight className="h-4 w-4" />
              </a>

              <div className="flex items-center gap-2 border-t border-white/10 pt-3 sm:border-t-0 sm:pt-0">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                  <Linkedin className="h-4 w-4 text-white" />
                </a>
                <a href="https://github.com/Hafiza-Laiba-Faisal" target="_blank" rel="noopener noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                  <Github className="h-4 w-4 text-white" />
                </a>
                <a href="mailto:hafizalaibafaisal@gmail.com" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                  <Mail className="h-4 w-4 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FOOTER */}
      <footer className="mx-auto mt-12 max-w-[1440px] px-6 pb-8">
        <div className="grid gap-8 rounded-3xl border border-border/60 bg-white p-8 md:grid-cols-4">
          {/* Logo & Bio */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#1E3A34] font-display text-xs font-extrabold text-[#1E3A34]">
                HLF
              </span>
              <span className="font-display text-sm font-bold text-[#1E3A34]">Hafiza Laiba Faisal</span>
            </div>
            <p className="text-[12.5px] leading-relaxed text-foreground/70">
              Building intelligent engineering systems that combine hardware, software, and human-centered design.
            </p>
            <p className="mt-4 text-[11.5px] text-foreground/50">
              © 2025 Hafiza Laiba Faisal. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-[#1C2E2A] mb-3">Quick Links</h4>
            <ul className="space-y-1.5 text-[12.5px] text-foreground/75">
              <li><Link to="/" className="hover:text-[#1E3A34]">About</Link></li>
              <li><Link to="/projects" className="hover:text-[#1E3A34]">Projects</Link></li>
              <li><Link to="/research" className="hover:text-[#1E3A34]">Research</Link></li>
              <li><Link to="/experience" className="hover:text-[#1E3A34]">Experience</Link></li>
              <li><Link to="/experience" className="hover:text-[#1E3A34]">Skills</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-[#1C2E2A] mb-3">Resources</h4>
            <ul className="space-y-1.5 text-[12.5px] text-foreground/75">
              <li><a href="#" className="hover:text-[#1E3A34]">Research CV (PDF)</a></li>
              <li><a href="#" className="hover:text-[#1E3A34]">Industry Resume (PDF)</a></li>
              <li><a href="#" className="hover:text-[#1E3A34]">Portfolio (PDF)</a></li>
            </ul>
          </div>

          {/* Connect & Callout */}
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="font-display text-xs font-bold uppercase tracking-wider text-[#1C2E2A] mb-3">Connect</h4>
              <ul className="space-y-1.5 text-[12.5px] text-foreground/75">
                <li><a href="https://github.com/Hafiza-Laiba-Faisal" target="_blank" rel="noopener noreferrer" className="hover:text-[#1E3A34]">GitHub</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#1E3A34]">LinkedIn</a></li>
                <li><a href="mailto:hafizalaibafaisal@gmail.com" className="hover:text-[#1E3A34]">Email</a></li>
              </ul>
            </div>

            <div className="mt-4 rounded-xl bg-[#FAF7F2] p-3 text-[12px] font-medium text-[#1E3A34] border border-border/60 flex items-center justify-between">
              <span>Let's build something meaningful together! 🚀</span>
              <Send className="h-3.5 w-3.5 text-[#D97706]" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
