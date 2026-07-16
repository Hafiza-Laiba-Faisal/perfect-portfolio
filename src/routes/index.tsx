import { createFileRoute } from "@tanstack/react-router";
import {
  Zap, Linkedin, Github, Mail, ArrowRight, Download,
  User, Settings, FolderKanban, GraduationCap, Trophy, BookOpen, Send,
  Radio, Cpu, Activity, Waypoints, Infinity as InfinityIcon, Code2,
  CircuitBoard, Wifi, GitBranch, CheckCircle2,
} from "lucide-react";
import heroImg from "@/assets/hero-energy.jpg";
import projEnergy from "@/assets/project-energy.jpg";
import projCansat from "@/assets/project-cansat.jpg";

export const Route = createFileRoute("/")({
  component: Portfolio,
  head: () => ({
    meta: [
      { title: "Hafiza Laiba Faisal — Electrical Engineering Portfolio" },
      {
        name: "description",
        content:
          "Electrical engineering student portfolio: power systems, embedded systems, control, IoT and smart technologies.",
      },
      { property: "og:title", content: "Hafiza Laiba Faisal — Electrical Engineering Portfolio" },
      { property: "og:description", content: "Engineering the future with purpose and innovation." },
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

const nav = ["Home", "About", "Education", "Projects", "Skills", "Achievements", "Research", "Contact"];

const skills = [
  { icon: Radio, label: "Power Systems" },
  { icon: Waypoints, label: "Electronics & Circuits" },
  { icon: Cpu, label: "Embedded Systems" },
  { icon: GitBranch, label: "Control Systems" },
  { icon: Activity, label: "Signal Processing" },
  { icon: CircuitBoard, label: "MATLAB / Simulink" },
  { icon: InfinityIcon, label: "Arduino / ESP32" },
  { icon: CircuitBoard, label: "PCB Design" },
  { icon: Code2, label: "Python / C / C++" },
  { icon: Wifi, label: "IoT & Smart Systems" },
];

function SectionIcon({ Icon }: { Icon: typeof User }) {
  return (
    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground shrink-0">
      <Icon className="h-5 w-5" />
    </span>
  );
}

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="mx-auto max-w-[1440px] px-6 pt-6">
        <nav className="flex items-center gap-6">
          <a href="#" className="flex items-center gap-3">
            <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-primary bg-background">
              <Zap className="h-5 w-5 text-primary" fill="currentColor" />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-[15px] font-bold tracking-wide text-primary">
                ELECTRICAL<br />ENGINEERING
              </span>
              <span className="block text-[10px] tracking-[0.35em] text-ember">PORTFOLIO</span>
            </span>
          </a>

          <ul className="mx-auto hidden items-center gap-8 lg:flex">
            {nav.map((n, i) => (
              <li key={n} className="relative">
                <a
                  href={`#${n.toLowerCase()}`}
                  className={`text-[15px] font-medium transition-colors ${
                    i === 0 ? "text-primary" : "text-foreground/70 hover:text-primary"
                  }`}
                >
                  {n}
                </a>
                {i === 0 && (
                  <span className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-ember" />
                )}
              </li>
            ))}
          </ul>

          <div className="ml-auto flex items-center gap-2">
            {[Linkedin, Github, Mail].map((I, i) => (
              <a
                key={i}
                href="#contact"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground/70 transition-colors hover:text-primary"
              >
                <I className="h-4 w-4" />
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              Let's Connect <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section className="mx-auto mt-6 max-w-[1440px] px-6">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-[oklch(0.96_0.02_85)] shadow-sm">
          <div className="grid gap-6 p-8 md:grid-cols-2 md:p-10">
            <div className="relative z-10 flex flex-col justify-center">
              <p className="mb-3 font-script text-2xl text-ember">Hello, I'm</p>
              <h1 className="font-display text-5xl font-bold leading-[1.05] text-primary md:text-6xl lg:text-7xl">
                Hafiza Laiba Faisal
              </h1>
              <p className="mt-4 text-sm font-medium tracking-[0.28em] text-primary/80">
                ELECTRICAL ENGINEERING STUDENT
                <span className="ml-3 inline-block align-middle text-ember">〜</span>
              </p>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-foreground/75">
                Passionate about Power Systems, Embedded Systems, Control, Electronics
                and Smart Technologies. I love turning ideas into intelligent, efficient
                and sustainable solutions <span className="font-semibold text-foreground">through innovation</span> and research.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
                >
                  <BookOpen className="h-4 w-4" /> View My Work <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground hover:border-primary/40"
                >
                  <Download className="h-4 w-4" /> Download CV
                </a>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
                {[
                  { icon: FolderKanban, n: "15+", l: "Projects" },
                  { icon: Settings, n: "12+", l: "Certifications" },
                  { icon: Trophy, n: "8+", l: "Achievements" },
                  { icon: GraduationCap, n: "3.22", l: "CGPA", sub: "/ 4.00" },
                ].map(({ icon: I, n, l, sub }) => (
                  <div key={l} className="flex items-start gap-3">
                    <I className="mt-0.5 h-5 w-5 text-ember" />
                    <div>
                      <div className="text-[11px] uppercase tracking-wider text-foreground/60">{l}</div>
                      <div className="font-display text-xl font-semibold text-primary">
                        {n}
                        {sub && <span className="ml-1 text-xs text-foreground/50">{sub}</span>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero image with curved mask */}
            <div className="relative min-h-[320px] overflow-hidden rounded-2xl md:min-h-[440px]">
              <img
                src={heroImg}
                alt="Transmission towers, wind turbines and solar panels at sunset"
                width={1280}
                height={900}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="font-script text-2xl leading-tight text-white drop-shadow-md">
                  <span className="text-ember">"</span> Engineering the future<br />
                  with purpose and innovation.<span className="text-ember">"</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENTO GRID */}
      <section className="mx-auto mt-6 grid max-w-[1440px] gap-6 px-6 md:grid-cols-3">
        {/* About Me */}
        <article id="about" className="rounded-3xl border border-border bg-card p-7 shadow-sm">
          <header className="flex items-center gap-4">
            <SectionIcon Icon={User} />
            <div>
              <h2 className="font-display text-2xl font-semibold text-primary">About Me</h2>
              <div className="mt-1 h-0.5 w-14 rounded bg-ember" />
            </div>
          </header>
          <p className="mt-5 text-[14.5px] leading-relaxed text-foreground/75">
            I am an Electrical Engineering student with a strong foundation in
            Power Systems, Embedded Systems, Control, Electronics and AI-driven
            solutions. I enjoy solving real-world problems through technology,
            teamwork and continuous learning.
          </p>
          <a
            href="#about"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground hover:border-primary/40"
          >
            Know More <ArrowRight className="h-4 w-4" />
          </a>
        </article>

        {/* Core Skills */}
        <article id="skills" className="rounded-3xl border border-border bg-card p-7 shadow-sm">
          <header className="flex items-center gap-4">
            <SectionIcon Icon={Settings} />
            <h2 className="font-display text-2xl font-semibold text-primary">Core Skills</h2>
          </header>
          <ul className="mt-5 grid grid-cols-2 gap-3">
            {skills.map(({ icon: I, label }) => (
              <li
                key={label}
                className="flex items-center gap-3 rounded-full bg-secondary px-4 py-2.5 text-[13px] font-medium text-foreground/80"
              >
                <I className="h-4 w-4 text-ember" />
                {label}
              </li>
            ))}
          </ul>
        </article>

        {/* Featured Projects */}
        <article id="projects" className="rounded-3xl border border-border bg-card p-7 shadow-sm">
          <header className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <SectionIcon Icon={FolderKanban} />
              <h2 className="font-display text-2xl font-semibold text-primary">Featured Projects</h2>
            </div>
            <a href="#" className="inline-flex items-center gap-1 text-sm font-medium text-ember hover:underline">
              View all <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </header>
          <div className="mt-5 space-y-5">
            {[
              {
                img: projEnergy,
                title: "Smart Energy Audit System",
                desc: "Real-time energy monitoring using ESP32 + PZEM-004T with cloud dashboard.",
                tags: ["ESP32", "IoT", "Power Systems"],
              },
              {
                img: projCansat,
                title: "CanSat Competition (SUPARCO)",
                desc: "Team Lead – 1st Position in Pakistan's 1st National CanSat Competition 2025.",
                tags: ["Telemetry", "RF / GPS", "Embedded"],
              },
            ].map((p) => (
              <div key={p.title} className="flex gap-4">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="h-24 w-32 shrink-0 rounded-xl object-cover"
                />
                <div>
                  <h3 className="font-display text-lg font-semibold text-primary">{p.title}</h3>
                  <p className="mt-1 text-[13px] leading-snug text-foreground/70">{p.desc}</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-[color:var(--ember-soft)] px-2.5 py-0.5 text-[11px] font-medium text-ember"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </article>

        {/* Education */}
        <article id="education" className="rounded-3xl border border-border bg-card p-7 shadow-sm">
          <header className="flex items-center gap-4">
            <SectionIcon Icon={GraduationCap} />
            <h2 className="font-display text-2xl font-semibold text-primary">Education</h2>
          </header>
          <div className="mt-5 space-y-1.5 text-[14px] text-foreground/80">
            <p className="font-display text-lg font-semibold text-primary">B.E. Electrical Engineering</p>
            <p>Lahore College for Women University</p>
            <p>CGPA: 3.22 / 4.00</p>
            <p>Graduation: 2027</p>
          </div>
        </article>

        {/* Achievements */}
        <article id="achievements" className="rounded-3xl border border-border bg-card p-7 shadow-sm">
          <header className="flex items-center gap-4">
            <SectionIcon Icon={Trophy} />
            <h2 className="font-display text-2xl font-semibold text-primary">Achievements</h2>
          </header>
          <ul className="mt-5 space-y-2.5 text-[14px] text-foreground/80">
            {[
              "1st Position – CanSat (SUPARCO)",
              "Innovista AI Hackathon – Award",
              "Pakathon 2025 – 3rd Position",
              "Multiple Technical Certifications",
            ].map((a) => (
              <li key={a} className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </article>

        {/* Research Interests */}
        <article id="research" className="rounded-3xl border border-border bg-card p-7 shadow-sm">
          <header className="flex items-center gap-4">
            <SectionIcon Icon={BookOpen} />
            <h2 className="font-display text-2xl font-semibold text-primary">Research Interests</h2>
          </header>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-[14px] text-foreground/80 marker:text-ember">
            <li>Smart Grids & Renewable Energy</li>
            <li>Embedded & IoT Systems</li>
            <li>Signal Processing & AI for EE</li>
            <li>Control Systems & Automation</li>
          </ul>
        </article>

        {/* Let's Connect */}
        <article
          id="contact"
          className="rounded-3xl border border-border bg-card p-7 shadow-sm md:col-span-3 lg:col-span-3"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <header className="flex items-center gap-4">
                <SectionIcon Icon={Send} />
                <h2 className="font-display text-2xl font-semibold text-primary">Let's Connect</h2>
              </header>
              <p className="mt-4 max-w-md text-[14.5px] text-foreground/75">
                Open to collaborations, research opportunities and innovative ideas.
              </p>
              <div className="mt-4 flex items-center gap-2">
                {[Linkedin, Github, Mail].map((I, i) => (
                  <a
                    key={i}
                    href="mailto:hello@example.com"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--ember-soft)] text-ember transition-colors hover:bg-ember hover:text-primary-foreground"
                  >
                    <I className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
            <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-2xl border-2 border-primary/20 bg-background p-2">
              <div
                className="h-full w-full rounded-lg"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, var(--primary) 1.5px, transparent 1.5px)",
                  backgroundSize: "6px 6px",
                }}
                aria-label="QR code placeholder"
              />
            </div>
          </div>
        </article>
      </section>

      {/* Footer quote */}
      <footer className="mx-auto mt-8 max-w-[1440px] px-6 pb-10">
        <p className="text-center text-[14px] italic text-foreground/70">
          <span className="mr-2 font-display text-2xl text-ember">"</span>
          The future of energy is intelligent, sustainable and human-centric — and I'm building it, one circuit at a time.
          <span className="ml-2 font-display text-2xl text-ember">"</span>
        </p>
      </footer>
    </div>
  );
}
