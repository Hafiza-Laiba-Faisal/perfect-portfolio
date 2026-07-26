import { createFileRoute } from "@tanstack/react-router";
import { Trophy } from "lucide-react";
import { achievements, SiteHeader, SiteFooter, PageHeader, Card } from "@/lib/portfolio-data";

export const Route = createFileRoute("/achievements")({
  component: AchievementsPage,
  head: () => ({
    meta: [
      { title: "Hafiza Laiba Faisal" },
      { name: "description", content: "Awards, honors and recognitions across engineering and AI." },
      { property: "og:title", content: "Achievements — Hafiza Laiba Faisal" },
      { property: "og:description", content: "Awards, honors and recognitions across engineering and AI." },
    ],
  }),
});

function AchievementsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader active="Achievements" />
      <PageHeader
        eyebrow="My Milestones"
        title="Achievements"
        description="Awards, honors, and recognitions earned throughout my engineering and AI journey."
      />

      <section className="mx-auto mt-6 max-w-[1440px] px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a, i) => (
            <Card key={i}>
              {a.img ? (
                <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl bg-secondary/20">
                  <img src={a.img} alt={a.title} className="h-full w-full object-contain" />
                </div>
              ) : (
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--ember-soft)] text-ember">
                  <Trophy className="h-5 w-5" />
                </span>
              )}
              <h3 className={`font-display text-[16px] font-semibold text-primary ${a.img ? 'mt-3' : 'mt-4'}`}>{a.title}</h3>
              <p className="mt-1 text-[12.5px] font-medium text-ember">{a.by}</p>
              <p className="mt-2 text-[13px] leading-relaxed text-foreground/70">{a.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
