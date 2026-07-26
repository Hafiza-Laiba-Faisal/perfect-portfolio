import { createFileRoute } from "@tanstack/react-router";
import { Code2, Cpu, Building2, Globe, Link2, Target, FlaskConical, Trophy } from "lucide-react";
import { SiteHeader, SiteFooter, PageHeader, Card, skillGroups } from "@/lib/portfolio-data";

export const Route = createFileRoute("/skills")({
  component: SkillsPage,
  head: () => ({
    meta: [
      { title: "Hafiza Laiba Faisal" },
      { name: "description", content: "Technical skills of Hafiza Laiba Faisal across AI, engineering, and development." },
      { property: "og:title", content: "Skills — Hafiza Laiba Faisal" },
      { property: "og:description", content: "Technical skills of Hafiza Laiba Faisal across AI, engineering, and development." },
    ],
  }),
});

function SkillsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader active="Skills" />
      <PageHeader
        eyebrow="Technical Arsenal"
        title="Skills & Expertise"
        description="A comprehensive overview of the technologies, tools, and methodologies I work with."
      />

      <section className="mx-auto mt-6 max-w-[1440px] px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <Card key={group.title}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--ember-soft)] text-ember">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-sm font-bold text-primary">{group.title}</h3>
                </div>
                <ul className="space-y-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="text-[12.5px] text-foreground/70 flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-ember/50 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
