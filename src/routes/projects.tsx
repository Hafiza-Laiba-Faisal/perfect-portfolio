import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, ArrowUpRight, Github, Star, Trophy, Cpu, Battery, Radio, Box, Target, Rocket,
  FileText, Lightbulb, Network, Layers, CheckCircle2, ShieldCheck, ExternalLink, Code2, Server,
  Sparkles
} from "lucide-react";
import { projects, Project, SiteHeader, SiteFooter, PageHeader, Card } from "@/lib/portfolio-data";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      { title: "Selected Projects — Hafiza Laiba Faisal" },
      { name: "description", content: "A collection of engineering and AI-powered projects by Hafiza Laiba Faisal with architectural diagrams and tech stacks." },
      { property: "og:title", content: "Selected Projects — Hafiza Laiba Faisal" },
      { property: "og:description", content: "Engineering solutions and AI-powered innovations." },
    ],
  }),
});

const categories = [
  "All Projects",
  "AI & Multi-Agent Systems",
  "Embedded & IoT",
  "Power Systems & IoT",
  "Healthcare & EdTech",
  "Aerospace & Embedded",
] as const;

const specIcon = { chip: Cpu, battery: Battery, sensor: Target, structure: Box, comm: Radio, mission: Rocket } as const;

function ProjectCard({ project }: { project: Project }) {
  const [activeTab, setActiveTab] = useState<"overview" | "solution" | "architecture" | "techstack">("overview");

  return (
    <Card className="!p-6 md:!p-8 transition-all hover:border-[#1E3A34]/40 shadow-xs bg-white">
      <div className="flex flex-col gap-6">
        {/* Header Bar with Image, Title, & 4 Detail Tabs */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-col sm:flex-row gap-5 flex-1">
            <div className="relative h-44 sm:h-36 sm:w-52 shrink-0 overflow-hidden rounded-2xl bg-muted border border-border/60">
              <img src={project.img} alt={project.title} className="h-full w-full object-cover" />
              {project.featured && (
                <span className="absolute left-2.5 top-2.5 inline-flex items-center gap-1 rounded-md bg-[#1E3A34] px-2.5 py-1 text-[10.5px] font-bold text-white shadow-2xs uppercase tracking-wider">
                  <Star className="h-3 w-3 text-[#D97706]" fill="currentColor" /> Featured
                </span>
              )}
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-[#FAF7F2] border border-border/70 px-3 py-0.5 text-xs font-semibold text-[#D97706]">
                  {project.category}
                </span>
                {project.details?.role && (
                  <span className="text-xs font-medium text-foreground/60">
                    · {project.details.role}
                  </span>
                )}
              </div>

              <h2 className="mt-2 font-display text-2xl font-extrabold text-[#1C2E2A] md:text-3xl leading-snug">
                {project.title}
              </h2>
              
              <p className="mt-2 text-[13.5px] leading-relaxed text-foreground/75">
                {project.desc}
              </p>

              {/* Tag Pills */}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.tags.map((t) => (
                  <span key={t} className="rounded-md bg-[#FAF7F2] border border-border/50 px-2.5 py-0.5 text-[11px] font-semibold text-foreground/80">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* GitHub / External Links */}
          {project.github && (
            <div className="shrink-0 flex items-center gap-2">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-[#FAF7F2] px-4 py-2 text-xs font-bold text-[#1E3A34] hover:bg-[#1E3A34] hover:text-white transition-all shadow-2xs"
              >
                <Github className="h-4 w-4" /> View Code
              </a>
            </div>
          )}
        </div>

        {/* 4 Detail Tabs Navigation Header */}
        <div className="border-t border-border/60 pt-4">
          <div className="flex flex-wrap items-center gap-2 rounded-2xl bg-[#FAF7F2] p-1.5 border border-border/60">
            <button
              onClick={() => setActiveTab("overview")}
              className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition-all ${
                activeTab === "overview"
                  ? "bg-[#1E3A34] text-white shadow-xs"
                  : "text-foreground/75 hover:bg-white hover:text-foreground"
              }`}
            >
              <FileText className="h-3.5 w-3.5 text-[#D97706]" /> 1. Problem &amp; Overview
            </button>

            <button
              onClick={() => setActiveTab("solution")}
              className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition-all ${
                activeTab === "solution"
                  ? "bg-[#1E3A34] text-white shadow-xs"
                  : "text-foreground/75 hover:bg-white hover:text-foreground"
              }`}
            >
              <Lightbulb className="h-3.5 w-3.5 text-[#D97706]" /> 2. Solution &amp; Key Features
            </button>

            <button
              onClick={() => setActiveTab("architecture")}
              className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition-all ${
                activeTab === "architecture"
                  ? "bg-[#1E3A34] text-white shadow-xs"
                  : "text-foreground/75 hover:bg-white hover:text-foreground"
              }`}
            >
              <Network className="h-3.5 w-3.5 text-[#D97706]" /> 3. Architecture Diagram
            </button>

            <button
              onClick={() => setActiveTab("techstack")}
              className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition-all ${
                activeTab === "techstack"
                  ? "bg-[#1E3A34] text-white shadow-xs"
                  : "text-foreground/75 hover:bg-white hover:text-foreground"
              }`}
            >
              <Code2 className="h-3.5 w-3.5 text-[#D97706]" /> 4. Tech Stack &amp; Implementation
            </button>
          </div>
        </div>

        {/* TAB 1: PROBLEM STATEMENT & OVERVIEW */}
        {activeTab === "overview" && (
          <div className="grid gap-6 rounded-2xl bg-[#FAF7F2]/80 p-5 border border-border/50 md:grid-cols-2">
            <div>
              <h4 className="flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-[#1C2E2A]">
                <FileText className="h-4 w-4 text-[#D97706]" /> Problem Statement
              </h4>
              <p className="mt-2 text-[13.5px] leading-relaxed text-foreground/80 font-normal">
                {project.details?.problemStatement ?? project.desc}
              </p>

              {project.details?.achievement && (
                <div className="mt-4 rounded-xl bg-white p-3.5 border border-[#D97706]/30 shadow-2xs">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D97706]">
                    <Trophy className="h-4 w-4" /> Award &amp; Recognition
                  </div>
                  <p className="mt-1 font-display text-base font-bold text-[#1C2E2A]">{project.details.achievement.label}</p>
                  <p className="text-xs text-foreground/70">{project.details.achievement.by}</p>
                </div>
              )}
            </div>

            <div>
              <h4 className="flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-[#1C2E2A]">
                <Target className="h-4 w-4 text-[#D97706]" /> Key Contributions &amp; Role
              </h4>
              {project.details?.bullets ? (
                <ul className="mt-2 space-y-2 text-[13px] leading-relaxed text-foreground/80">
                  {project.details.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1E3A34]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-2 text-[13.5px] text-foreground/80">{project.desc}</p>
              )}
            </div>
          </div>
        )}

        {/* TAB 2: SOLUTION & KEY FEATURES */}
        {activeTab === "solution" && (
          <div className="grid gap-6 rounded-2xl bg-[#FAF7F2]/80 p-5 border border-border/50 md:grid-cols-2">
            <div>
              <h4 className="flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-[#1C2E2A]">
                <Lightbulb className="h-4 w-4 text-[#D97706]" /> Solution Overview
              </h4>
              <p className="mt-2 text-[13.5px] leading-relaxed text-foreground/80">
                {project.details?.solutionOverview ?? project.desc}
              </p>

              {project.details?.features && (
                <div className="mt-4">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-foreground/70 mb-2">Capabilities &amp; Features</h5>
                  <div className="grid grid-cols-2 gap-2">
                    {project.details.features.map((f) => (
                      <div key={f} className="flex items-center gap-2 rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-[#1C2E2A] border border-border/50 shadow-2xs">
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#1E3A34]" />
                        <span className="truncate">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div>
              <h4 className="flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-[#1C2E2A]">
                <Layers className="h-4 w-4 text-[#D97706]" /> Key Specifications
              </h4>
              {project.details?.specs ? (
                <div className="mt-3 space-y-2.5">
                  {project.details.specs.map((s) => {
                    const IconComp = specIcon[s.icon] || Cpu;
                    return (
                      <div key={s.label} className="flex items-center gap-3 rounded-xl bg-white p-3 border border-border/50 shadow-2xs">
                        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FAF7F2] text-[#D97706]">
                          <IconComp className="h-4 w-4" />
                        </span>
                        <div>
                          <div className="text-xs font-bold text-[#1C2E2A]">{s.label}</div>
                          <div className="text-[12px] font-medium text-foreground/70">{s.value}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p className="mt-2 text-xs text-foreground/70">Full hardware and software engineering specifications available in code repository.</p>
              )}
            </div>
          </div>
        )}

        {/* TAB 3: SYSTEM ARCHITECTURE DIAGRAM */}
        {activeTab === "architecture" && (
          <div className="rounded-2xl bg-[#FAF7F2]/80 p-5 border border-border/50">
            <div className="flex items-center justify-between mb-4">
              <h4 className="flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-[#1C2E2A]">
                <Network className="h-4 w-4 text-[#D97706]" />
                {project.details?.architectureDiagram?.title ?? "System Architecture Diagram & Pipeline"}
              </h4>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#1E3A34] bg-white px-2.5 py-1 rounded-md border border-border/60">
                Visual Workflow
              </span>
            </div>

            {/* Interactive Step-by-Step Architecture Pipeline */}
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {(project.details?.architectureDiagram?.steps ?? [
                { step: "01", label: "Data Input & Ingestion", desc: "Ingests raw sensors, audio, images, or text queries." },
                { step: "02", label: "Core Processing Engine", desc: "Executes ML models, MNA physics solver, or custom MCP servers." },
                { step: "03", label: "AI Swarm & Logic", desc: "Multi-agent tool calling, validation, & cross-agent context handoff." },
                { step: "04", label: "Real-time Dashboard UI", desc: "Displays live telemetry, 3D trajectories, & human-in-the-loop actions." },
              ]).map((st, idx) => (
                <div key={st.step} className="relative flex flex-col justify-between rounded-xl bg-white p-4 border border-border/60 shadow-2xs">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-[#1E3A34] font-mono text-xs font-bold text-white">
                        {st.step}
                      </span>
                      {idx < 3 && (
                        <ArrowRight className="hidden lg:block h-4 w-4 text-[#D97706]" />
                      )}
                    </div>
                    <h5 className="font-display text-xs font-bold text-[#1C2E2A] mb-1">{st.label}</h5>
                    <p className="text-[11.5px] leading-relaxed text-foreground/75">{st.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* System Flow Sequence */}
            {project.details?.systemFlow && (
              <div className="mt-5 border-t border-border/50 pt-4">
                <h5 className="text-xs font-bold uppercase tracking-wider text-foreground/70 mb-2">Step-by-Step Execution Sequence</h5>
                <ol className="grid gap-2 sm:grid-cols-2">
                  {project.details.systemFlow.map((sf, i) => (
                    <li key={sf} className="flex items-start gap-2 rounded-lg bg-white p-2.5 text-xs text-foreground/80 border border-border/40">
                      <span className="font-bold text-[#D97706]">{i + 1}.</span>
                      <span>{sf}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        )}

        {/* TAB 4: TECH STACK & IMPLEMENTATION */}
        {activeTab === "techstack" && (
          <div className="rounded-2xl bg-[#FAF7F2]/80 p-5 border border-border/50">
            <div className="flex items-center justify-between mb-4">
              <h4 className="flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-[#1C2E2A]">
                <Code2 className="h-4 w-4 text-[#D97706]" /> Tech Stack Breakdown &amp; Tooling
              </h4>
            </div>

            {project.details?.techStackCategories ? (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {project.details.techStackCategories.map((tsc) => (
                  <div key={tsc.category} className="rounded-xl bg-white p-4 border border-border/60 shadow-2xs">
                    <h5 className="font-display text-xs font-bold text-[#1E3A34] uppercase tracking-wider mb-2.5">
                      {tsc.category}
                    </h5>
                    <div className="flex flex-wrap gap-1.5">
                      {tsc.items.map((it) => (
                        <span key={it} className="rounded-md bg-[#FAF7F2] border border-border/60 px-2 py-1 text-[11px] font-semibold text-foreground/80">
                          {it}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <span key={t} className="rounded-lg bg-white border border-border/60 px-3 py-1.5 text-xs font-semibold text-[#1C2E2A] shadow-2xs">
                    {t}
                  </span>
                ))}
              </div>
            )}

            {project.github && (
              <div className="mt-5 flex items-center justify-between border-t border-border/50 pt-4">
                <span className="text-xs font-medium text-foreground/70">Source code available on GitHub:</span>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1E3A34] hover:underline"
                >
                  <Github className="h-4 w-4" /> Open Repository <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </Card>
  );
}

function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<typeof categories[number]>("All Projects");

  const filteredProjects = selectedCategory === "All Projects"
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#FBF9F4] text-[#2C3E3A]">
      <SiteHeader active="Projects" />

      <PageHeader
        eyebrow="My Portfolio"
        title="Selected Engineering Projects"
        description="Explore my engineering solutions, AI-powered multi-agent systems, and embedded IoT architectures. Click tabs inside any project card for problem statements, key features, architecture diagrams, and tech stacks."
        action={
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#1C2E2A] hover:bg-[#FAF7F2] shadow-2xs"
          >
            Back to Home <ArrowRight className="h-4 w-4 text-[#D97706]" />
          </Link>
        }
      />

      {/* CATEGORY FILTER TABS */}
      <section className="mx-auto mt-8 max-w-[1440px] px-6">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => {
            const count = cat === "All Projects"
              ? projects.length
              : projects.filter((p) => p.category === cat).length;
            const isSelected = selectedCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold transition-all shadow-2xs ${
                  isSelected
                    ? "border-[#1E3A34] bg-[#1E3A34] text-white shadow-xs"
                    : "border-border/70 bg-white text-foreground/75 hover:border-[#1E3A34]/40 hover:text-foreground"
                }`}
              >
                <span>{cat}</span>
                <span className={`rounded-full px-2 py-0.5 text-[10px] font-extrabold ${
                  isSelected ? "bg-white/20 text-white" : "bg-[#FAF7F2] text-[#D97706]"
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* PROJECT CARDS LIST */}
      <section className="mx-auto mt-6 max-w-[1440px] px-6">
        <div className="space-y-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      {/* CTA FOOTER CARD */}
      <section className="mx-auto mt-12 max-w-[1440px] px-6">
        <Card className="!p-6 bg-[#1E3A34] text-white border-0">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-[#D97706]">
                <Rocket className="h-5 w-5" />
              </span>
              <div>
                <div className="font-display text-lg font-bold text-white">Have a project idea or research collaboration?</div>
                <div className="text-xs text-white/80">Let's build scalable AI systems, embedded hardware, or production software together.</div>
              </div>
            </div>
            <Link
              to="/"
              hash="contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#D97706] px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#1E3A34] hover:bg-[#B45309] hover:text-white transition-all shadow-xs"
            >
              Let's Collaborate <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Card>
      </section>

      <SiteFooter />
    </div>
  );
}
