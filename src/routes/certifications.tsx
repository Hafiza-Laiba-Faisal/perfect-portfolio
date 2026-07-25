import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Award, Download, Calendar, Building2, ExternalLink, GraduationCap, BookOpen, TrendingUp } from "lucide-react";
import { certs, SiteHeader, SiteFooter, PageHeader, Card } from "@/lib/portfolio-data";

export const Route = createFileRoute("/certifications")({
  component: CertificationsPage,
  head: () => ({
    meta: [
      { title: "Certifications — Hafiza Laiba Faisal" },
      { name: "description", content: "Professional certifications reflecting continuous learning and growth." },
      { property: "og:title", content: "Certifications — Hafiza Laiba Faisal" },
      { property: "og:description", content: "Certifications across AI, Cloud, Programming, and Professional domains." },
    ],
  }),
});

const categories = ["All Certificates", "AI & Machine Learning", "Cloud & DevOps", "Programming", "Professional"] as const;

const bottomStats = [
  { icon: Award, n: "7", l: "Certifications", s: "Across multiple domains" },
  { icon: GraduationCap, n: "6+", l: "Platforms", s: "Global learning platforms" },
  { icon: BookOpen, n: "300+", l: "Learning Hours", s: "Invested in skill development" },
  { icon: TrendingUp, n: "100%", l: "Commitment", s: "To continuous learning" },
];

function CertificationsPage() {
  const [tab, setTab] = useState<string>("All Certificates");
  const filtered = tab === "All Certificates" ? certs : certs.filter((c) => c.category === tab);

  const countBy = (name: string) =>
    name === "All Certificates" ? certs.length : certs.filter((c) => c.category === name).length;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader active="Certifications" />
      <PageHeader
        eyebrow="My Credentials"
        title="Certifications"
        description="Professional certifications and achievements that reflect my commitment to continuous learning and growth."
        action={
          <button className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground hover:border-primary/40">
            <Download className="h-4 w-4" /> Download All Certificates
          </button>
        }
      />

      <section className="mx-auto mt-6 max-w-[1440px] px-6">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => {
            const active = tab === c;
            return (
              <button
                key={c}
                onClick={() => setTab(c)}
                className={`rounded-full px-4 py-2 text-[13px] font-medium transition-colors ${active ? "bg-primary text-primary-foreground" : "border border-border bg-card text-foreground/75 hover:border-primary/40"}`}
              >
                {c} ({countBy(c)})
              </button>
            );
          })}
        </div>
      </section>

      <section className="mx-auto mt-6 max-w-[1440px] px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((c) => (
            <Card key={c.title} className="!p-4">
              <div className={`flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl${c.img ? '' : ' bg-secondary/50 p-4'}`}>
                {c.img ? (
                  <img src={c.img} alt={c.title} className="h-full w-full object-cover" />
                ) : (
                  <div className="text-center">
                    <div className="mx-auto mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Award className="h-5 w-5" />
                    </div>
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-foreground/60">Certificate of Completion</div>
                    <div className="mt-2 font-display text-[14px] font-bold text-primary">Hafiza Laiba Faisal</div>
                    <div className="mt-1 text-[10px] text-foreground/50">{c.by}</div>
                  </div>
                )}
              </div>
              <div className="mt-3">
                <h3 className="font-display text-[14px] font-semibold leading-snug text-primary">{c.title}</h3>
                <div className="mt-2 flex items-center justify-between text-[11.5px] text-foreground/60">
                  <span className="inline-flex items-center gap-1"><Building2 className="h-3 w-3" /> {c.by}</span>
                  <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" /> {c.when}</span>
                </div>
                {c.link ? (
                  <a href={c.link} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1 text-[12px] font-medium text-ember hover:underline">
                    View <ExternalLink className="h-3 w-3" />
                  </a>
                ) : (
                  <span className="mt-3 inline-flex items-center gap-1 text-[12px] font-medium text-foreground/40">
                    Link <ExternalLink className="h-3 w-3" />
                  </span>
                )}
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-6 max-w-[1440px] px-6">
        <div className="rounded-3xl bg-primary p-6 text-primary-foreground">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {bottomStats.map(({ icon: I, n, l, s }) => (
              <div key={l} className="flex items-center gap-4">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-foreground/10 text-primary-foreground">
                  <I className="h-6 w-6" />
                </span>
                <div>
                  <div className="font-display text-3xl font-bold">{n}</div>
                  <div className="text-[12.5px] font-semibold">{l}</div>
                  <div className="text-[11px] opacity-75">{s}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
