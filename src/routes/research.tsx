import { createFileRoute } from "@tanstack/react-router";
import { Download, ArrowRight, Microscope, Target, Cpu, Settings, Lightbulb, BookOpen, Search, Database, FlaskConical, ClipboardCheck, Rocket, CircleCheck, Circle, FileText } from "lucide-react";
import { research, researchInterests, SiteHeader, SiteFooter, PageHeader, Card } from "@/lib/portfolio-data";

export const Route = createFileRoute("/research")({
  component: ResearchPage,
  head: () => ({
    meta: [
      { title: "Hafiza Laiba Faisal" },
      { name: "description", content: "Research in intelligent systems, signal processing and AI-driven solutions." },
      { property: "og:title", content: "Research Experience — Hafiza Laiba Faisal" },
      { property: "og:description", content: "Exploring intelligent systems and AI-driven solutions to solve real-world challenges." },
    ],
  }),
});

const topStats = [
  { icon: Microscope, n: "6+", l: "Research Projects" },
  { icon: Target, n: "4+", l: "Research Domains" },
  { icon: Cpu, n: "5+", l: "AI / ML Frameworks" },
  { icon: Settings, n: "3+", l: "Prototype Systems" },
  { icon: Lightbulb, n: "Ongoing", l: "Continuous Learning & Exploration" },
];

const approach = [
  { icon: Search, title: "Problem Identification", desc: "Identifying real-world problems and gaps." },
  { icon: Database, title: "Data Collection", desc: "Gathering data from sensors, datasets and simulations." },
  { icon: FlaskConical, title: "Model Development", desc: "Building and training intelligent models and algorithms." },
  { icon: ClipboardCheck, title: "Evaluation", desc: "Testing, validating and analyzing performance." },
  { icon: Rocket, title: "Prototype & Impact", desc: "Building prototypes aimed for real-world impact." },
];

const status = [
  { label: "Literature Review", sub: "Completed", done: true },
  { label: "Dataset Collection", sub: "Completed", done: true },
  { label: "Model Development", sub: "In Progress", done: true },
  { label: "Evaluation & Validation", sub: "Upcoming", done: false },
  { label: "Paper Writing", sub: "Upcoming", done: false },
  { label: "Conference / Journal Submission", sub: "Upcoming", done: false },
];

function ResearchPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader active="Research" />
      <PageHeader
        eyebrow="My Research"
        title="Research Experience"
        description="Exploring intelligent systems, signal processing and AI-driven solutions to solve real-world challenges."
        action={
          <button className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground hover:border-primary/40">
            <Download className="h-4 w-4" /> Download Research Summary
          </button>
        }
      />

      <section className="mx-auto mt-6 max-w-[1440px] px-6">
        <Card className="!p-6">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-5">
            {topStats.map(({ icon: I, n, l }) => (
              <div key={l} className="flex flex-col items-center text-center">
                <span className="mb-2 inline-flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-ember">
                  <I className="h-6 w-6" />
                </span>
                <div className="font-display text-2xl font-bold text-primary">{n}</div>
                <div className="text-[11.5px] text-foreground/60">{l}</div>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <section className="mx-auto mt-6 grid max-w-[1440px] gap-6 px-6 lg:grid-cols-[1fr_360px]">
        <Card>
          <div className="mb-4 flex items-center gap-2">
            <FlaskConical className="h-5 w-5 text-ember" />
            <h2 className="font-display text-xl font-semibold text-primary">Featured Research Projects</h2>
          </div>
          <div className="space-y-4">
            {research.map((r) => (
              <div key={r.title} className="flex gap-4 rounded-2xl border border-border p-4 transition-shadow hover:shadow-sm">
                <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-secondary text-ember">
                  <FileText className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <h3 className="font-display text-[15px] font-semibold text-primary">{r.title}</h3>
                  <p className="mt-1 text-[12.5px] leading-snug text-foreground/70">{r.desc}</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {r.tags.map((t) => (
                      <span key={t} className="rounded-md bg-secondary px-2 py-0.5 text-[11px] font-medium text-foreground/75">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="shrink-0 text-right">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-foreground/50">Status</div>
                  <div className="text-[12.5px] font-semibold text-ember">{r.status}</div>
                  <div className="mt-2 text-[11.5px] text-foreground/55">{r.when}</div>
                  <ArrowRight className="mt-3 inline h-4 w-4 text-ember" />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <div className="space-y-6">
          <Card>
            <div className="mb-3 flex items-center gap-2">
              <Target className="h-5 w-5 text-ember" />
              <h3 className="font-display text-lg font-semibold text-primary">Research Interests</h3>
            </div>
            <ul className="space-y-2 text-[13px] text-foreground/75">
              {researchInterests.map((r) => (
                <li key={r} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-ember" /> {r}
                </li>
              ))}
            </ul>
          </Card>

          <Card>
            <div className="mb-3 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-ember" />
              <h3 className="font-display text-lg font-semibold text-primary">Current Research Status</h3>
            </div>
            <ol className="space-y-3">
              {status.map((s) => (
                <li key={s.label} className="flex items-start gap-3">
                  {s.done ? <CircleCheck className="mt-0.5 h-5 w-5 text-ember" /> : <Circle className="mt-0.5 h-5 w-5 text-foreground/30" />}
                  <div>
                    <div className="text-[13px] font-semibold text-primary">{s.label}</div>
                    <div className="text-[11.5px] text-foreground/55">{s.sub}</div>
                  </div>
                </li>
              ))}
            </ol>
          </Card>
        </div>
      </section>

      <section className="mx-auto mt-6 max-w-[1440px] px-6">
        <Card>
          <div className="mb-4 flex items-center gap-2">
            <FlaskConical className="h-5 w-5 text-ember" />
            <h2 className="font-display text-xl font-semibold text-primary">My Research Approach</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-5">
            {approach.map(({ icon: I, title, desc }, idx) => (
              <div key={title} className="relative flex flex-col items-center text-center">
                <span className="mb-3 inline-flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-ember">
                  <I className="h-6 w-6" />
                </span>
                <div className="font-display text-[14px] font-semibold text-primary">{title}</div>
                <div className="mt-1 text-[12px] text-foreground/60">{desc}</div>
                {idx < approach.length - 1 && (
                  <ArrowRight className="absolute -right-3 top-6 hidden h-4 w-4 text-foreground/30 md:block" />
                )}
              </div>
            ))}
          </div>
        </Card>
      </section>

      <SiteFooter />
    </div>
  );
}
