import { createFileRoute } from "@tanstack/react-router";
import { Calendar, MapPin, Download, Briefcase, Award, Code2, Users } from "lucide-react";
import { experience, stats, SiteHeader, SiteFooter, PageHeader, Card } from "@/lib/portfolio-data";

export const Route = createFileRoute("/experience")({
  component: ExperiencePage,
  head: () => ({
    meta: [
      { title: "Work Experience — Hafiza Laiba Faisal" },
      { name: "description", content: "Professional journey of Hafiza Laiba Faisal across AI, power systems, embedded and web development roles." },
      { property: "og:title", content: "Work Experience — Hafiza Laiba Faisal" },
      { property: "og:description", content: "A timeline of my professional journey and the impact I've created." },
    ],
  }),
});

const bottomStats = [
  { icon: Calendar, n: "1+", l: "Years of Experience", s: "Professional Journey" },
  { icon: Award, n: "4+", l: "Organizations", s: "Worked With" },
  { icon: Code2, n: "10+", l: "Projects Delivered", s: "End-to-End" },
  { icon: Users, n: "100%", l: "Commitment", s: "To Excellence" },
];

function ExperiencePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader active="Experience" />
      <PageHeader
        eyebrow="My Journey"
        title="Work Experience"
        description="A timeline of my professional journey and the impact I've created."
        action={
          <button className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground hover:border-primary/40">
            <Download className="h-4 w-4" /> Download Resume
          </button>
        }
      />

      <section className="mx-auto mt-8 max-w-[1440px] px-6">
        <div className="relative">
          <span className="absolute left-[19px] top-2 bottom-2 w-px bg-border" />
          <div className="space-y-6">
            {experience.map((e) => {
              const Icon = e.icon;
              const isEmber = e.color === "ember";
              return (
                <Card key={e.role} className="ml-14 relative">
                  <span className={`absolute -left-14 top-6 inline-flex h-10 w-10 items-center justify-center rounded-full border-2 ${isEmber ? "border-ember bg-[color:var(--ember-soft)] text-ember" : "border-primary/20 bg-secondary text-primary"}`}>
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="absolute -left-[38px] top-9 h-2 w-2 rounded-full border-2 border-border bg-background" />

                  <div className="grid gap-5 lg:grid-cols-[1fr_1fr_200px]">
                    <div>
                      <h3 className={`font-display text-xl font-bold ${isEmber ? "text-ember" : "text-primary"}`}>{e.role}</h3>
                      <p className="text-[14px] font-semibold text-foreground/80">{e.org}</p>
                      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[12.5px] text-foreground/60">
                        <span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {e.when}</span>
                        <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {e.where}</span>
                        {e.current && (
                          <span className="rounded-full bg-[color:var(--ember-soft)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-ember">Current</span>
                        )}
                      </div>
                      <p className="mt-3 text-[13px] leading-relaxed text-foreground/70">{e.desc}</p>
                    </div>
                    <div>
                      <div className="mb-2 text-[12px] font-semibold uppercase tracking-wider text-ember">Key Highlights</div>
                      <ul className="space-y-1.5 text-[12.5px] text-foreground/75">
                        {e.bullets.map((b) => (
                          <li key={b} className="flex gap-2"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ember" />{b}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-xl bg-secondary p-4 text-[12px] leading-snug text-foreground/75">
                      <div className="mb-2 flex items-center gap-1.5 font-semibold text-primary">
                        <Briefcase className="h-3.5 w-3.5" /> {e.tag}
                      </div>
                      {e.stack.map((s) => <div key={s}>{s}</div>)}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-6 max-w-[1440px] px-6">
        <Card className="!p-6">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {bottomStats.map(({ icon: I, n, l, s }) => (
              <div key={l} className="flex items-center gap-4">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <I className="h-6 w-6" />
                </span>
                <div>
                  <div className="font-display text-3xl font-bold text-primary">{n}</div>
                  <div className="text-[12.5px] font-semibold text-foreground/80">{l}</div>
                  <div className="text-[11px] text-foreground/55">{s}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </section>

      {/* borrow stats */}
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

      <SiteFooter />
    </div>
  );
}
