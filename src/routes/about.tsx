import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, PageHeader, Card } from "@/lib/portfolio-data";
import { Sparkles, Target, Heart, Quote } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "Hafiza Laiba Faisal" },
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
                I am an Electrical Engineer focused on designing intelligent systems at the intersection of artificial intelligence, embedded systems, and real-world engineering. My work combines software engineering, mathematical reasoning, and engineering principles to develop practical, reliable, and research-driven solutions.
              </p>
              <p className="text-sm leading-relaxed text-foreground/75">
                My journey began with an Artificial Intelligence program at UET Lahore, where I was first introduced to machine learning and intelligent systems. As I explored AI further, I realized that building truly intelligent technologies requires more than software alone—it demands a deep understanding of the hardware, electronics, and physical systems that power them. This realization shaped my engineering path and strengthened my commitment to integrating intelligent software with embedded hardware to create reliable, efficient, and impactful solutions.
              </p>
              <p className="text-sm leading-relaxed text-foreground/75">
                Today, my work spans AI applications in healthcare, education, power systems, computer vision, and industrial automation. My long-term goal is to bridge advanced hardware, intelligent software, and scientific research to develop engineering systems that solve complex real-world challenges across energy, robotics, healthcare, and future computing technologies.
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
