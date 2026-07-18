import { createFileRoute } from "@tanstack/react-router";
import {
  Zap, Linkedin, Github, Mail, ArrowRight, ArrowUpRight, Download,
  Briefcase, Code2, Cpu, FlaskConical, Trophy, Target,
  MapPin, Link2, Calendar, Star, Award, Users, BookOpen,
  GraduationCap, Building2, Send, Twitter, Globe,
} from "lucide-react";
import heroImg from "@/assets/hero-energy.jpg";
import pCansat from "@/assets/project-cansat.jpg";
import pFlood from "@/assets/project-flood.jpg";
import pEnergy from "@/assets/project-energy.jpg";
import pNexa from "@/assets/project-nexa.jpg";
import pNeuro from "@/assets/project-neuro.jpg";
import pHeal from "@/assets/project-heal.jpg";
import pHealth from "@/assets/project-health.jpg";
import pCircuit from "@/assets/project-circuit.jpg";

export const Route = createFileRoute("/")({
  component: Portfolio,
  head: () => ({
    meta: [
      { title: "Hafiza Laiba Faisal — Electrical Engineer & AI Developer" },
      {
        name: "description",
        content:
          "Portfolio of Hafiza Laiba Faisal — Electrical Engineer & AI Developer working on aerospace, embedded systems, and machine learning.",
      },
      { property: "og:title", content: "Hafiza Laiba Faisal — Electrical Engineer & AI Developer" },
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

const nav = ["Home", "About", "Experience", "Projects", "Skills", "Achievements", "Research", "Certificates", "Contact"];

const stats = [
  { icon: Briefcase, n: "3+", l: "Years of Experience" },
  { icon: Code2, n: "15+", l: "Projects Completed" },
  { icon: Cpu, n: "10+", l: "Technologies" },
  { icon: FlaskConical, n: "6+", l: "Research Projects" },
  { icon: Trophy, n: "8+", l: "Awards & Honors" },
  { icon: Target, n: "100%", l: "Commitment" },
];

const projects = [
  { img: pCansat, featured: true, title: "CanSat Competition (SUPARCO)", desc: "Designed & built a CanSat satellite for real-time data acquisition, telemetry, and safe recovery during descent.", tags: ["ESP32", "Sensors", "LoRa", "Telemetry"] },
  { img: pFlood, title: "FloodGuard AI", desc: "Multi-agent AI system for flood prediction and evacuation planning using satellite & sensor data.", tags: ["AI/ML", "GeoSpatial", "Python", "Simulation"] },
  { img: pEnergy, title: "Smart Energy Audit System", desc: "IoT-based energy monitoring system using ESP32 and PZEM-004T with real-time analytics dashboard.", tags: ["ESP32", "IoT", "Dashboard", "Cloud"] },
  { img: pNexa, title: "NEXA – AI Electronics Agent", desc: "AI assistant for electronics engineers for circuit design, analysis, documentation and troubleshooting.", tags: ["LLM", "RAG", "LangChain", "AI"] },
  { img: pNeuro, title: "NeuroShield", desc: "EEG-based addiction recovery platform combining real-time EEG signal analysis and AI.", tags: ["EEG", "ML", "Python", "Signal Processing"] },
  { img: pHeal, title: "HealTalk", desc: "EEG-powered communication assistant for patients with locked-in syndrome using brain signal classification.", tags: ["EEG", "NLP", "ML", "Python"] },
  { img: pHealth, title: "HealthLink360", desc: "AI-powered healthcare platform for emergency response, pharmacy & patient management.", tags: ["Django", "AI", "Healthcare", "Web"] },
  { img: pCircuit, title: "CircuitSathi", desc: "AI-powered learning assistant for circuit analysis, fault detection and step-by-step guidance.", tags: ["AI", "Circuit Analysis", "Web", "Python"] },
];

const experience = [
  {
    icon: Code2, color: "primary",
    role: "AI Full Stack Software Engineer", org: "Penovatech (Intern → Offer)", current: true,
    when: "Jan 2026 – Present", where: "Remote",
    bullets: [
      "Developed PenTutor LMS using Django, DRF & PostgreSQL.",
      "Integrated real-time video & live classes using Agora SDK.",
      "Built and deployed REST APIs and microservices.",
      "Implemented AI features for personalized learning paths.",
    ],
    tag: "AI / Full Stack",
    stack: ["Django, DRF, Next.js", "PostgreSQL, AWS", "Agora, Redis"],
  },
  {
    icon: Zap, color: "ember",
    role: "Grid Girls Internship Program 2025", org: "NTDC – National Transmission & Dispatch Company",
    when: "Jun 2025 – Aug 2025", where: "Lahore, Pakistan",
    bullets: [
      "Monitored real-time grid operations and system parameters.",
      "Assisted in load management and outage scheduling.",
      "Analyzed generation, transmission and system performance.",
    ],
    tag: "Power Systems",
    stack: ["Grid Operations", "SCADA, EMS", "Load Management"],
  },
  {
    icon: Cpu, color: "primary",
    role: "Electronics Engineering Intern", org: "Ezitech Institute",
    when: "Jul 2024 – Aug 2024", where: "Lahore, Pakistan",
    bullets: [
      "Designed and tested electronic circuits & PCB layouts.",
      "Worked with Arduino, ESP32 and various sensors.",
      "Gained experience in soldering & hardware debugging.",
    ],
    tag: "Electronics",
    stack: ["PCB Design, Arduino", "ESP32, Sensors", "Embedded C"],
  },
  {
    icon: Code2, color: "primary",
    role: "Web Development Intern", org: "TenBit Solutions",
    when: "May 2024 – Jun 2024", where: "Remote",
    bullets: [
      "Developed responsive web interfaces using HTML, CSS, JS.",
      "Built backend features using Django and REST APIs.",
      "Worked on bug fixing and performance improvements.",
    ],
    tag: "Web Development",
    stack: ["Django, JavaScript", "HTML, CSS, Git", "REST APIs"],
  },
];

const skillGroups = [
  { icon: Code2, title: "Programming Languages", items: ["Python", "C / C++", "JavaScript", "Java", "SQL", "Rust"] },
  { icon: Cpu, title: "AI & Machine Learning", items: ["LLMs", "LangGraph", "CrewAI", "AutoGen", "OpenAI API", "RAG", "NLP", "Computer Vision", "Scikit-learn", "PyTorch"] },
  { icon: Building2, title: "Backend Development", items: ["Django", "FastAPI", "Flask", "Node.js", "Express.js", "REST APIs"] },
  { icon: Globe, title: "Frontend Development", items: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"] },
  { icon: Link2, title: "Databases", items: ["PostgreSQL", "MongoDB", "MySQL", "Supabase", "SQLite"] },
  { icon: FlaskConical, title: "Cloud & DevOps", items: ["AWS (EC2, S3, RDS)", "Docker", "GitHub Actions", "CI/CD"] },
  { icon: Target, title: "Tools & Technologies", items: ["Git", "Linux", "VS Code", "Arduino IDE", "KiCad", "Postman", "MATLAB"] },
];

const research = [
  { title: "EEG-Based Addiction Detection Using Hybrid Deep Learning Model", meta: "ICCSAI 2024 – Springer Proceedings" },
  { title: "Smart IoT Energy Monitoring System for Sustainable Buildings", meta: "IEEE ICEE 2025 – Conference Paper" },
  { title: "Multi-Agent AI System for Flood Prediction & Evacuation", meta: "Under Review – Journal Submission" },
];

const certs = [
  { title: "Generative AI with LLMs", by: "Coursera", when: "May 2024" },
  { title: "AWS Cloud Practitioner Essentials", by: "Amazon Web Services", when: "Oct 2023" },
  { title: "Azure AI Fundamentals (AI-900)", by: "Microsoft", when: "Jan 2024" },
  { title: "Huawei Certified ICT Associate – AI", by: "Huawei", when: "Dec 2023" },
];

const achievements = [
  { title: "1st Position – National CanSat Competition", by: "SUPARCO 2025" },
  { title: "Innovative Award – FloodGuard AI", by: "Innovista AI Hackathon 2025" },
  { title: "3rd Position – Pakathon", by: "Vieromind 2025" },
  { title: "1st Position – National CanSat Competition", by: "SUPARCO 2025" },
];

function SectionHead({ Icon, title, action }: { Icon: typeof Star; title: string; action?: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <Icon className="h-5 w-5 text-ember" />
        <h2 className="font-display text-2xl font-semibold text-primary">{title}</h2>
      </div>
      {action && (
        <a href="#" className="inline-flex items-center gap-1 text-sm font-medium text-ember hover:underline">
          {action} <ArrowRight className="h-3.5 w-3.5" />
        </a>
      )}
    </div>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-3xl border border-border bg-card p-6 shadow-sm ${className}`}>{children}</div>
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
                HAFIZA LAIBA FAISAL
              </span>
              <span className="block text-[11px] tracking-wide text-foreground/60">
                Electrical Engineer &amp; AI Developer
              </span>
            </span>
          </a>

          <ul className="mx-auto hidden items-center gap-6 xl:flex">
            {nav.map((n, i) => (
              <li key={n} className="relative">
                <a
                  href={`#${n.toLowerCase()}`}
                  className={`text-[14px] font-medium transition-colors ${
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
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground/70 transition-colors hover:text-primary"
              >
                <I className="h-4 w-4" />
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              Let's Connect
            </a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section id="home" className="mx-auto mt-6 max-w-[1440px] px-6">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-[oklch(0.96_0.02_85)] shadow-sm">
          <div className="grid gap-6 p-8 md:grid-cols-2 md:p-10">
            <div className="relative z-10 flex flex-col justify-center">
              <p className="mb-3 font-script text-2xl text-ember">Hello, I'm 👋</p>
              <h1 className="font-display text-5xl font-bold leading-[1.05] text-primary md:text-6xl lg:text-7xl">
                Hafiza Laiba Faisal
              </h1>
              <p className="mt-4 text-sm font-medium tracking-[0.28em] text-primary/80">
                ELECTRICAL ENGINEER &amp; AI DEVELOPER
                <ArrowRight className="ml-2 inline h-4 w-4 text-ember" />
              </p>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-foreground/75">
                Electrical Engineering undergraduate with 3+ years of experience in aerospace systems, embedded systems, artificial intelligence, and software development. Passionate about building intelligent solutions that make a real-world impact.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]">
                  <BookOpen className="h-4 w-4" /> View My Work
                </a>
                <a href="#" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground hover:border-primary/40">
                  <Download className="h-4 w-4" /> Download CV
                </a>
              </div>

              <div className="mt-7 flex flex-wrap gap-2 text-[13px] text-foreground/70">
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5">
                  <Mail className="h-3.5 w-3.5 text-ember" /> hafizalaibafaisal@gmail.com
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5">
                  <MapPin className="h-3.5 w-3.5 text-ember" /> Lahore, Pakistan
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5">
                  <Github className="h-3.5 w-3.5 text-ember" /> github.com/Hafiza-Laiba-Faisal
                </span>
              </div>
            </div>

            <div className="relative min-h-[320px] overflow-hidden rounded-2xl md:min-h-[440px]">
              <img src={heroImg} alt="Renewable energy landscape at sunset" width={1280} height={900} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="flex items-start gap-2 font-script text-2xl leading-tight text-white drop-shadow-md">
                  <Zap className="mt-1 h-5 w-5 text-ember" fill="currentColor" />
                  Engineering the future<br />with purpose and innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="mx-auto mt-6 max-w-[1440px] px-6">
        <Card className="!p-5">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {stats.map(({ icon: I, n, l }) => (
              <div key={l} className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-ember">
                  <I className="h-4 w-4" />
                </span>
                <div>
                  <div className="font-display text-xl font-bold text-primary">{n}</div>
                  <div className="text-[11px] uppercase tracking-wider text-foreground/60">{l}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mx-auto mt-6 max-w-[1440px] px-6">
        <Card>
          <SectionHead Icon={Star} title="Featured Projects" action="View All Projects" />
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map((p) => (
              <article key={p.title} className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-background transition-shadow hover:shadow-md">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.title} loading="lazy" width={800} height={600} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  {p.featured && (
                    <span className="absolute left-3 top-3 rounded-md bg-primary px-2.5 py-1 text-[11px] font-semibold text-primary-foreground">
                      Featured
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold leading-tight text-primary">{p.title}</h3>
                    <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-ember opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                  <p className="mt-2 text-[13px] leading-snug text-foreground/70">{p.desc}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-md bg-secondary px-2 py-0.5 text-[11px] font-medium text-foreground/75">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Card>
      </section>

      {/* EXPERIENCE + SKILLS */}
      <section className="mx-auto mt-6 grid max-w-[1440px] gap-6 px-6 lg:grid-cols-2">
        <Card id="experience">
          <SectionHead Icon={Briefcase} title="Work Experience" action="View All Experience" />
          <div className="relative mt-6">
            <span className="absolute left-[19px] top-2 bottom-2 w-px bg-border" />
            <div className="space-y-6">
              {experience.map((e) => {
                const Icon = e.icon;
                const isEmber = e.color === "ember";
                return (
                  <div key={e.role} className="relative pl-14">
                    <span className={`absolute left-0 top-0 inline-flex h-10 w-10 items-center justify-center rounded-full border-2 ${isEmber ? "border-ember bg-[color:var(--ember-soft)] text-ember" : "border-primary/20 bg-secondary text-primary"}`}>
                      <Icon className="h-4 w-4" />
                    </span>
                    <div className="flex flex-wrap items-baseline gap-2">
                      <h3 className={`font-display text-lg font-semibold ${isEmber ? "text-ember" : "text-primary"}`}>
                        {e.role}
                      </h3>
                      {e.current && (
                        <span className="rounded-full bg-[color:var(--ember-soft)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-ember">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-[13px] font-medium text-foreground/70">{e.org}</p>
                    <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-[12px] text-foreground/60">
                      <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" /> {e.when}</span>
                      <span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" /> {e.where}</span>
                    </div>
                    <div className="mt-3 grid gap-3 sm:grid-cols-[1fr_auto]">
                      <ul className="space-y-1 text-[12.5px] text-foreground/75">
                        {e.bullets.map((b) => (
                          <li key={b} className="flex gap-2">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ember" />
                            {b}
                          </li>
                        ))}
                      </ul>
                      <div className="rounded-xl bg-secondary p-3 text-[11.5px] leading-snug text-foreground/75 sm:min-w-[150px]">
                        <div className="mb-1 font-semibold text-primary">{e.tag}</div>
                        {e.stack.map((s) => <div key={s}>{s}</div>)}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Card>

        <Card id="skills">
          <SectionHead Icon={Cpu} title="Technical Skills" />
          <div className="mt-6 space-y-5">
            {skillGroups.map(({ icon: I, title, items }) => (
              <div key={title}>
                <div className="mb-2 flex items-center gap-2">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-secondary text-ember">
                    <I className="h-3.5 w-3.5" />
                  </span>
                  <h3 className="font-display text-[15px] font-semibold text-primary">{title}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5 pl-9">
                  {items.map((s) => (
                    <span key={s} className="rounded-md border border-border bg-background px-2.5 py-1 text-[12px] font-medium text-foreground/75">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </section>

      {/* RESEARCH / CERTS / ACHIEVEMENTS */}
      <section className="mx-auto mt-6 grid max-w-[1440px] gap-6 px-6 lg:grid-cols-3">
        <Card id="research">
          <SectionHead Icon={BookOpen} title="Research & Publications" action="View All" />
          <ul className="mt-5 space-y-4">
            {research.map((r) => (
              <li key={r.title} className="flex gap-3">
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-secondary text-ember">
                  <BookOpen className="h-4 w-4" />
                </span>
                <div>
                  <h4 className="text-[13.5px] font-semibold leading-snug text-primary">{r.title}</h4>
                  <p className="text-[12px] text-foreground/60">{r.meta}</p>
                </div>
              </li>
            ))}
          </ul>
        </Card>

        <Card id="certificates">
          <SectionHead Icon={Award} title="Certifications" action="View All" />
          <ul className="mt-5 space-y-3">
            {certs.map((c) => (
              <li key={c.title + c.when} className="flex items-start justify-between gap-3">
                <div className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-secondary text-ember">
                    <Award className="h-4 w-4" />
                  </span>
                  <div>
                    <h4 className="text-[13.5px] font-semibold leading-snug text-primary">{c.title}</h4>
                    <p className="text-[12px] text-foreground/60">{c.by}</p>
                  </div>
                </div>
                <span className="shrink-0 text-[11.5px] text-foreground/60">{c.when}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card id="achievements">
          <SectionHead Icon={Trophy} title="Achievements" action="View All" />
          <ul className="mt-5 space-y-3">
            {achievements.map((a, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[color:var(--ember-soft)] text-ember">
                  <Trophy className="h-4 w-4" />
                </span>
                <div>
                  <h4 className="text-[13.5px] font-semibold leading-snug text-primary">{a.title}</h4>
                  <p className="text-[12px] text-foreground/60">{a.by}</p>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </section>

      {/* BOTTOM ROW */}
      <section className="mx-auto mt-6 grid max-w-[1440px] gap-6 px-6 lg:grid-cols-3">
        <Card>
          <SectionHead Icon={Github} title="Open Source" />
          <p className="mt-4 text-[13px] text-foreground/70">
            Building open-source components and tools for the engineering and AI community.
          </p>
          <a href="#" className="mt-4 inline-flex items-center gap-1 text-[13px] font-medium text-ember hover:underline">
            View on GitHub <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </Card>

        <Card>
          <SectionHead Icon={Users} title="Leadership & Community" />
          <ul className="mt-4 space-y-2 text-[13px] text-foreground/75">
            <li className="flex gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ember" /> Engineering Team Lead – CanSat Competition</li>
            <li className="flex gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ember" /> AI Workshop Facilitator &amp; Student Mentor</li>
            <li className="flex gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ember" /> Active Contributor to Tech Communities</li>
          </ul>
        </Card>

        <Card id="contact">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <SectionHead Icon={Send} title="Let's Connect" />
              <p className="mt-4 text-[13px] text-foreground/70">
                Open to collaborations, research opportunities, and innovative ideas.
              </p>
              <div className="mt-4 flex items-center gap-2">
                {[Linkedin, Github, Mail, Twitter, Globe].map((I, i) => (
                  <a key={i} href="mailto:hafizalaibafaisal@gmail.com" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-ember transition-colors hover:bg-ember hover:text-primary-foreground">
                    <I className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl border-2 border-primary/20 bg-background p-1.5">
              <div className="h-full w-full rounded-md" style={{ backgroundImage: "radial-gradient(circle, var(--primary) 1.2px, transparent 1.2px)", backgroundSize: "5px 5px" }} aria-label="QR code" />
            </div>
          </div>
        </Card>
      </section>

      {/* EDUCATION quick line + footer */}
      <footer className="mx-auto mt-8 max-w-[1440px] px-6 pb-6">
        <div className="rounded-2xl bg-primary px-6 py-4 text-center text-[13px] text-primary-foreground/85">
          © 2025 Hafiza Laiba Faisal. All rights reserved.
          <span className="mx-3 text-ember">♥</span>
          Built with passion and purpose.
        </div>
      </footer>
    </div>
  );
}
