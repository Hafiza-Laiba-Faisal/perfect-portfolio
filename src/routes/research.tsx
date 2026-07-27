import { createFileRoute } from "@tanstack/react-router";
import { Download, Microscope, Target, Cpu, Settings, Lightbulb, FlaskConical, CheckCircle2, ArrowRight } from "lucide-react";
import { research, researchInterests, SiteHeader, SiteFooter, PageHeader, Card } from "@/lib/portfolio-data";

export const Route = createFileRoute("/research")({
  component: ResearchPage,
  head: () => ({
    meta: [
      { title: "Hafiza Laiba Faisal" },
      { name: "description", content: "Research projects and interests." },
      { property: "og:title", content: "Research — Hafiza Laiba Faisal" },
      { property: "og:description", content: "Exploring ML, molecular communication, and intelligent systems." },
    ],
  }),
});

function ResearchPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader active="Research" />

      <PageHeader
        eyebrow="Research"
        title="Research Projects"
        description="Exploring machine learning, molecular communication, and intelligent systems."
      />

      {research.map((r) => (
        <section key={r.title} className="mx-auto mt-8 max-w-[1440px] px-6">
          <Card className="!p-6">
            <h2 className="font-display text-xl font-semibold text-primary">{r.title}</h2>
            <p className="mt-2 text-[14px] leading-relaxed text-foreground/70">{r.desc}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {r.tags.map((t) => (
                <span key={t} className="rounded-md bg-secondary px-2.5 py-0.5 text-[12px] font-medium text-foreground/75">{t}</span>
              ))}
            </div>

            {r.overview && (
              <>
                <h3 className="mt-6 mb-2 font-display text-lg font-semibold text-primary">Overview</h3>
                <p className="text-[14px] leading-relaxed text-foreground/75">{r.overview}</p>
              </>
            )}

            {r.contributions && r.contributions.length > 0 && (
              <>
                <h3 className="mt-6 mb-2 flex items-center gap-2 font-display text-lg font-semibold text-primary">
                  <CheckCircle2 className="h-5 w-5 text-ember" /> Key Contributions
                </h3>
                <ul className="space-y-2">
                  {r.contributions.map((c, i) => (
                    <li key={i} className="flex gap-3 text-[14px] leading-relaxed text-foreground/75">
                      <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-ember" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {r.techs && r.techs.length > 0 && (
              <>
                <h3 className="mt-6 mb-2 flex items-center gap-2 font-display text-lg font-semibold text-primary">
                  <Cpu className="h-5 w-5 text-ember" /> Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {r.techs.map((t) => (
                    <span key={t} className="rounded-full bg-secondary px-3 py-1 text-[13px] font-medium text-foreground/75">{t}</span>
                  ))}
                </div>
              </>
            )}

            {r.areas && r.areas.length > 0 && (
              <>
                <h3 className="mt-6 mb-2 flex items-center gap-2 font-display text-lg font-semibold text-primary">
                  <Target className="h-5 w-5 text-ember" /> Research Areas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {r.areas.map((a) => (
                    <span key={a} className="rounded-full border border-ember/30 bg-ember/5 px-3 py-1 text-[13px] font-medium text-ember">{a}</span>
                  ))}
                </div>
              </>
            )}
          </Card>
        </section>
      ))}

      <section className="mx-auto mt-6 max-w-[1440px] px-6">
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
      </section>

      <SiteFooter />
    </div>
  );
}
