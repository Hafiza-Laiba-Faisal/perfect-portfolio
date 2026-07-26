import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, PageHeader, Card } from "@/lib/portfolio-data";
import { BookOpen, FileText, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/notes")({
  component: NotesPage,
  head: () => ({
    meta: [
      { title: "Notes — Hafiza Laiba Faisal" },
      { name: "description", content: "Engineering notes, research logs, and technical writings by Hafiza Laiba Faisal." },
      { property: "og:title", content: "Notes — Hafiza Laiba Faisal" },
      { property: "og:description", content: "Engineering notes, research logs, and technical writings by Hafiza Laiba Faisal." },
    ],
  }),
});

const notes = [
  { title: "Multi-Agent Systems Architecture", desc: "Design patterns and implementation strategies for building robust multi-agent AI systems.", date: "2025", tags: ["AI", "Architecture"] },
  { title: "MCP Server Development Guide", desc: "How to build and deploy custom Model Context Protocol servers for agentic workflows.", date: "2025", tags: ["MCP", "Backend"] },
  { title: "EEG Signal Processing Pipeline", desc: "End-to-end pipeline for cleaning, filtering, and feature extraction from EEG data.", date: "2024", tags: ["Signal Processing", "Python"] },
  { title: "Embedded Systems Best Practices", desc: "Firmware design patterns, power management, and real-time constraints for microcontrollers.", date: "2024", tags: ["Embedded", "C++"] },
  { title: "Power Systems Analysis with PSS&E", desc: "Load flow analysis, fault analysis, and stability studies using industry-standard tools.", date: "2024", tags: ["Power Systems", "Simulation"] },
  { title: "Computer Vision for Satellite Imagery", desc: "Techniques for flood detection, land classification, and damage assessment using CNNs.", date: "2025", tags: ["CV", "Deep Learning"] },
];

function NotesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader active="Notes" />
      <PageHeader
        eyebrow="Knowledge Base"
        title="Engineering Notes"
        description="Technical notes, research logs, and writings on AI, embedded systems, and engineering."
      />

      <section className="mx-auto mt-6 max-w-[1440px] px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {notes.map((note) => (
            <Card key={note.title}>
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--ember-soft)] text-ember">
                  <FileText className="h-5 w-5" />
                </span>
                <h3 className="font-display text-sm font-bold text-primary">{note.title}</h3>
              </div>
              <p className="text-[12.5px] leading-relaxed text-foreground/70 mb-3">{note.desc}</p>
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-foreground/50 font-medium">{note.date}</span>
                <div className="flex gap-1.5">
                  {note.tags.map((t) => (
                    <span key={t} className="rounded-full bg-secondary/80 px-2.5 py-0.5 text-[10px] font-semibold text-foreground/60">{t}</span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-6 max-w-[1440px] px-6">
        <Card>
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <BookOpen className="h-8 w-8 text-ember mb-3" />
            <h3 className="font-display text-base font-bold text-primary">More coming soon</h3>
            <p className="text-sm text-foreground/60 mt-1 max-w-md">
              I'm working on detailed write-ups for each project and research area. Check back for deep dives into architectures, algorithms, and lessons learned.
            </p>
          </div>
        </Card>
      </section>

      <SiteFooter />
    </div>
  );
}
