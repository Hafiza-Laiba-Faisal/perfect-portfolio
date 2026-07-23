import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Github, Star, Trophy, Cpu, Battery, Radio, Box, Target, Rocket } from "lucide-react";
import { projects, SiteHeader, SiteFooter, PageHeader, Card } from "@/lib/portfolio-data";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      { title: "Selected Projects — Hafiza Laiba Faisal" },
      { name: "description", content: "A collection of engineering and AI-powered projects by Hafiza Laiba Faisal." },
      { property: "og:title", content: "Selected Projects — Hafiza Laiba Faisal" },
      { property: "og:description", content: "Engineering solutions and AI-powered innovations." },
    ],
  }),
});

const specIcon = { chip: Cpu, battery: Battery, sensor: Target, structure: Box, comm: Radio, mission: Rocket } as const;

function ProjectsPage() {
  const withDetails = projects.filter(p => p.details);
  const withoutDetails = projects.filter(p => !p.details);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader active="Projects" />
      <PageHeader
        eyebrow="My Work"
        title="Selected Projects"
        description="A collection of my engineering solutions and AI-powered innovations."
        action={
          <Link to="/" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground hover:border-primary/40">
            View All Projects <ArrowRight className="h-4 w-4" />
          </Link>
        }
      />

      {/* DETAILED PROJECTS */}
      {withDetails.map((p) => (
        <section key={p.title} className="mx-auto mt-6 max-w-[1440px] px-6">
          <Card className="!p-6 md:!p-8">
            <div className="grid gap-6 lg:grid-cols-[380px_1fr_260px]">
              <div className="overflow-hidden rounded-2xl bg-secondary">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover" />
              </div>
              <div>
                {p.featured && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-[11px] font-semibold text-primary-foreground">
                    <Star className="h-3 w-3" fill="currentColor" /> Featured Project
                  </span>
                )}
                <h2 className="mt-3 font-display text-3xl font-bold text-primary">{p.title}</h2>
                <p className="mt-1 text-[13px] font-medium text-foreground/75">{p.details!.role}</p>
                <p className="mt-4 text-[13.5px] leading-relaxed text-foreground/70">{p.desc}</p>

                {p.details!.bullets && (
                  <ul className="mt-4 space-y-2 text-[13px] leading-relaxed text-foreground/70">
                    {p.details!.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ember" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {p.details!.specs?.map((s) => {
                    const I = specIcon[s.icon];
                    return (
                      <div key={s.label} className="flex gap-3">
                        <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary text-ember">
                          <I className="h-4 w-4" />
                        </span>
                        <div>
                          <div className="text-[12.5px] font-semibold text-primary">{s.label}</div>
                          <div className="text-[12px] text-foreground/65">{s.value}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="rounded-2xl bg-secondary p-5">
                {p.details!.achievement && (
                  <>
                    <div className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-wider text-foreground/70">
                      <Trophy className="h-4 w-4 text-ember" /> Achievement
                    </div>
                    <p className="mt-2 font-display text-lg font-semibold text-primary">{p.details!.achievement.label}</p>
                    <p className="text-[12.5px] text-foreground/70">{p.details!.achievement.by}</p>
                  </>
                )}

                {p.details!.features && (
                  <>
                    <div className="mt-5 flex items-center gap-2 text-[12px] font-semibold uppercase tracking-wider text-foreground/70">
                      <Star className="h-4 w-4 text-ember" /> Key Features
                    </div>
                    <ul className="mt-2 space-y-1.5 text-[12.5px] text-foreground/75">
                      {p.details!.features?.map((f) => (
                        <li key={f} className="flex gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ember" />{f}</li>
                      ))}
                    </ul>
                  </>
                )}
                {p.details!.systemFlow && (
                  <>
                    <div className="mt-5 flex items-center gap-2 text-[12px] font-semibold uppercase tracking-wider text-foreground/70">
                      <ArrowRight className="h-4 w-4 text-ember" /> System Flow
                    </div>
                    <ol className="mt-2 space-y-2 text-[12.5px] text-foreground/75">
                      {p.details!.systemFlow.map((s) => (
                        <li key={s} className="flex gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ember" />{s}</li>
                      ))}
                    </ol>
                  </>
                )}
                {p.github && (
                  <div className="mt-5">
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-1.5 text-[12px] font-medium text-foreground transition-colors hover:bg-secondary">
                      <Github className="h-4 w-4" /> View on GitHub
                    </a>
                  </div>
                )}
              </div>
            </div>
          </Card>
        </section>
      ))}

      {/* GRID */}
      <section className="mx-auto mt-6 max-w-[1440px] px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {withoutDetails.map((p) => (
            <article key={p.title} className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-md">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="flex flex-1 flex-col p-4">
                <h3 className="font-display text-lg font-semibold leading-tight text-primary">{p.title}</h3>
                <p className="mt-2 text-[13px] leading-snug text-foreground/70">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-md bg-secondary px-2 py-0.5 text-[11px] font-medium text-foreground/75">{t}</span>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
                  <a href="#" className="inline-flex items-center gap-1 text-[12.5px] font-medium text-ember hover:underline">
                    View Project <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                  <a href="#" className="text-foreground hover:text-foreground/80"><Github className="h-4 w-4" /></a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto mt-6 max-w-[1440px] px-6">
        <Card className="!p-5">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-ember">
                <Rocket className="h-4 w-4" />
              </span>
              <div>
                <div className="font-display text-[15px] font-semibold text-primary">Have an idea or want to collaborate?</div>
                <div className="text-[12.5px] text-foreground/65">I'm always open to discussing new opportunities and innovative ideas.</div>
              </div>
            </div>
            <Link to="/" hash="contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground">
              Let's Work Together <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Card>
      </section>

      <SiteFooter />
    </div>
  );
}
