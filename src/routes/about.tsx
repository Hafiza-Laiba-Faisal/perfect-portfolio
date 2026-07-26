import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, PageHeader, Card } from "@/lib/portfolio-data";
import { Sparkles, Target, Heart, Quote } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Hafiza Laiba Faisal" },
      { name: "description", content: "About Hafiza Laiba Faisal — engineer, researcher, and builder of intelligent systems." },
      { property: "og:title", content: "About — Hafiza Laiba Faisal" },
      { property: "og:description", content: "About Hafiza Laiba Faisal — engineer, researcher, and builder of intelligent systems." },
    ],
  }),
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader active="About" />
      <PageHeader
        eyebrow="Who I Am"
        title="About Me"
        description="Engineer, researcher, and builder of intelligent systems that bridge hardware, software, and human-centered design."
      />

      <section className="mx-auto mt-6 max-w-[1440px] px-6">
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="md:col-span-2">
            <div className="space-y-4">
              <h3 className="font-display text-lg font-bold text-primary">Journey & Philosophy</h3>
              <p className="text-sm leading-relaxed text-foreground/75">
                I am an Electrical Engineering student at COMSATS University Islamabad, Lahore Campus, with a deep passion for building intelligent systems that solve real-world problems. My work spans AI/ML engineering, embedded systems, power systems, and full-stack development — always with a focus on human-centered design and measurable impact.
              </p>
              <p className="text-sm leading-relaxed text-foreground/75">
                From winning Pakistan's National CanSat Competition to building multi-agent AI platforms for flood response, healthcare, and electronics education, I believe in engineering that serves communities and pushes technological boundaries.
              </p>
            </div>
          </Card>

          <Card>
            <div className="space-y-4">
              <h3 className="font-display text-lg font-bold text-primary">Quick Facts</h3>
              <ul className="space-y-3 text-sm text-foreground/75">
                <li className="flex items-center gap-3">
                  <Sparkles className="h-4 w-4 text-ember shrink-0" />
                  <span>8+ Hackathons Won</span>
                </li>
                <li className="flex items-center gap-3">
                  <Target className="h-4 w-4 text-ember shrink-0" />
                  <span>3 Research Domains</span>
                </li>
                <li className="flex items-center gap-3">
                  <Heart className="h-4 w-4 text-ember shrink-0" />
                  <span>AI for Social Impact</span>
                </li>
                <li className="flex items-center gap-3">
                  <Quote className="h-4 w-4 text-ember shrink-0" />
                  <span>STEM Education Advocate</span>
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
