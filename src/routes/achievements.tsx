import { createFileRoute } from "@tanstack/react-router";
import { Trophy, Award, Star, Medal } from "lucide-react";
import { achievements, SiteHeader, SiteFooter, PageHeader, Card } from "@/lib/portfolio-data";

export const Route = createFileRoute("/achievements")({
  component: AchievementsPage,
  head: () => ({
    meta: [
      { title: "Achievements — Hafiza Laiba Faisal" },
      { name: "description", content: "Awards, honors and recognitions across engineering and AI." },
      { property: "og:title", content: "Achievements — Hafiza Laiba Faisal" },
      { property: "og:description", content: "Awards, honors and recognitions across engineering and AI." },
    ],
  }),
});

const topStats = [
  { icon: Trophy, n: "8+", l: "Awards & Honors" },
  { icon: Medal, n: "3", l: "1st Positions" },
  { icon: Star, n: "5+", l: "Competitions" },
  { icon: Award, n: "6+", l: "Recognitions" },
];

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
        <Card className="!p-6">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {topStats.map(({ icon: I, n, l }) => (
              <div key={l} className="flex items-center gap-4">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[color:var(--ember-soft)] text-ember">
                  <I className="h-6 w-6" />
                </span>
                <div>
                  <div className="font-display text-3xl font-bold text-primary">{n}</div>
                  <div className="text-[12.5px] font-semibold text-foreground/70">{l}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <section className="mx-auto mt-6 max-w-[1440px] px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a, i) => (
            <Card key={i}>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--ember-soft)] text-ember">
                <Trophy className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-[16px] font-semibold text-primary">{a.title}</h3>
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
