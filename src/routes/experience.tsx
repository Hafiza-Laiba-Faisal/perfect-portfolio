import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Calendar, MapPin, Download, Briefcase, Code2, ShieldAlert, TrendingUp, Sparkles, CheckCircle2, Building2 } from "lucide-react";
import { experience, SiteHeader, SiteFooter, PageHeader, Card } from "@/lib/portfolio-data";
import cvPdf from "@/assets/HafizaLaibaFaisal_CVJul26.pdf";

export const Route = createFileRoute("/experience")({
  validateSearch: (search: Record<string, unknown>) => ({
    company: (search.company as string) || "All",
  }),
  component: ExperiencePage,
  head: () => ({
    meta: [
      { title: "Hafiza Laiba Faisal" },
      { name: "description", content: "Engineering experience of Hafiza Laiba Faisal across AI systems, full-stack backends, and power system planning." },
      { property: "og:title", content: "Work Experience — Hafiza Laiba Faisal" },
      { property: "og:description", content: "Evidence-driven engineering experience structured by role overview, key contributions, challenges, tech stack, and real-world impact." },
    ],
  }),
});

function ExperiencePage() {
  const search = Route.useSearch();
  const [activeTab, setActiveTab] = useState<string>(search.company || "All");

  useEffect(() => {
    if (search.company) {
      setActiveTab(search.company);
    }
  }, [search.company]);

  const filterTabs = [
    { id: "All", label: "All Experiences", count: experience.length },
    { id: "TenBit Solutions", label: "TenBit Solutions", count: 1 },
    { id: "PenTutor", label: "PenTutor", count: 1 },
    { id: "NTDC", label: "NTDC (NGC)", count: 1 },
  ];

  const filteredExperience = experience.filter((e) => {
    if (activeTab === "All") return true;
    if (activeTab === "TenBit Solutions") return e.org.includes("TenBit");
    if (activeTab === "PenTutor") return e.org.includes("PenTutor");
    if (activeTab === "NTDC") return e.org.includes("NTDC") || e.org.includes("NGC");
    return true;
  });

  const sidebarLinks = [
    { id: "overview", label: "Overview" },
    { id: "responsibilities", label: "Responsibilities" },
    { id: "technologies", label: "Technologies" },
    { id: "impact", label: "Impact" },
    { id: "challenges", label: "Challenges" },
  ];

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-foreground dark:bg-background">
      <SiteHeader active="Experience" />
      
      <PageHeader
        eyebrow="Engineering Track Record"
        title="Work Experience"
        description="Structured overview of production engineering roles, major contributions, technical challenges, tech stack, and real-world impact."
        action={
          <button
            type="button"
            onClick={() => { const a = document.createElement("a"); a.href = cvPdf; a.download = "HafizaLaibaFaisal_CV.pdf"; a.click(); }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-primary/40 shadow-xs cursor-pointer"
          >
            <Download className="h-4 w-4" /> Download Resume
          </button>
        }
      />

      {/* Top 4 Company Filter Tabs Bar */}
      <section className="mx-auto mt-8 max-w-[1440px] px-4 md:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2.5 rounded-2xl border border-border/60 bg-card/80 p-2 shadow-2xs backdrop-blur-md">
          {filterTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-xs scale-[1.02]"
                    : "text-foreground/70 hover:bg-secondary/80 hover:text-foreground"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[11px] font-bold ${
                    isActive
                      ? "bg-primary-foreground/20 text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Main Experience Layout: Left Sticky Sidebar + Right Content Area */}
      <section className="mx-auto mt-10 max-w-[1440px] px-4 pb-20 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
          
          {/* Left Sticky "On this page" Outline Navigation */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-4 rounded-2xl border border-border/50 bg-card/60 p-5 shadow-2xs">
              <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                On this page
              </h4>
              <nav className="space-y-1.5 text-sm font-medium">
                {sidebarLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="block w-full text-left rounded-lg px-3 py-2 text-foreground/75 transition-colors hover:bg-secondary hover:text-foreground"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Right Content Area: Detailed Experience Cards */}
          <main className="space-y-12">
            {filteredExperience.map((e, index) => {
              const Icon = e.icon;

              return (
                <Card
                  key={e.role + e.org}
                  className="overflow-hidden border border-border/80 bg-card p-6 md:p-10 shadow-xs rounded-3xl"
                >
                  {/* Company Header Block */}
                  <div className="flex flex-col sm:flex-row items-start gap-5 pb-6 border-b border-border/60">
                    {/* Big Rounded Company Logo Node */}
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-border/80 bg-secondary/40 shadow-2xs p-2">
                      {e.logo ? (
                        <img src={e.logo} alt={e.org} className="h-full w-full object-contain" />
                      ) : (
                        <Icon className="h-8 w-8 text-primary" />
                      )}
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                            {e.org}
                          </h2>
                          <h3 className="mt-1 text-base font-semibold text-primary/90">
                            {e.role}
                          </h3>
                        </div>

                        <div className="flex flex-col sm:items-end gap-1">
                          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground/80">
                            <Calendar className="h-4 w-4 text-primary/70" /> {e.when}
                          </span>
                          <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                            <MapPin className="h-3.5 w-3.5 text-muted-foreground/70" /> {e.where}
                          </span>
                        </div>
                      </div>

                      {e.subtitle && (
                        <div className="mt-2 text-xs font-medium text-muted-foreground bg-muted/50 inline-block px-3 py-1 rounded-full border border-border/40">
                          {e.subtitle}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Section 1: Overview */}
                  <div id="overview" className="mt-8 pt-2">
                    <h4 className="font-display text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-primary" /> Overview
                    </h4>
                    <p className="text-sm md:text-base leading-relaxed text-foreground/85">
                      {e.shortDesc}
                    </p>
                    <ul className="mt-3 space-y-2 text-sm leading-relaxed text-foreground/80">
                      {e.roleOverview.map((overview, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <span>{overview}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <hr className="my-8 border-border/50" />

                  {/* Section 2: Key Responsibilities / Contributions */}
                  <div id="responsibilities">
                    <h4 className="font-display text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-emerald-600" /> Key Responsibilities & Contributions
                    </h4>
                    
                    <div className="grid gap-3 md:grid-cols-2">
                      {e.keyContributions.map((kc, idx) => (
                        <div key={idx} className="rounded-xl border border-border/60 bg-secondary/20 p-4 shadow-2xs">
                          {kc.title && (
                            <h5 className="text-xs font-bold text-foreground mb-1.5 flex items-center gap-1.5">
                              <span className="h-2 w-2 rounded-full bg-emerald-600 inline-block" />
                              {kc.title}
                            </h5>
                          )}
                          <p className="text-xs md:text-sm text-foreground/85 leading-relaxed">
                            {kc.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <hr className="my-8 border-border/50" />

                  {/* Section 3: Technologies */}
                  <div id="technologies">
                    <h4 className="font-display text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                      <Code2 className="h-5 w-5 text-sky-600" /> Technologies & Tools
                    </h4>
                    <div className="flex flex-wrap gap-2.5">
                      {e.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-secondary/40 px-3.5 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-secondary"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <hr className="my-8 border-border/50" />

                  {/* Section 4: Impact */}
                  <div id="impact">
                    <h4 className="font-display text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-emerald-600" /> Impact & Deliverables
                    </h4>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {e.impact.map((imp, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 rounded-xl border border-emerald-900/10 bg-emerald-950/5 dark:bg-emerald-950/20 p-3.5 text-xs md:text-sm font-medium text-foreground/90">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{imp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <hr className="my-8 border-border/50" />

                  {/* Section 5: Engineering Challenges */}
                  <div id="challenges">
                    <h4 className="font-display text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                      <ShieldAlert className="h-5 w-5 text-amber-600" /> Engineering Challenges & Solved Problems
                    </h4>
                    <ul className="space-y-2.5 text-sm leading-relaxed text-foreground/80">
                      {e.engineeringChallenges.map((challenge, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="mt-1 font-bold text-amber-600 text-xs">⚡</span>
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </Card>
              );
            })}
          </main>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}


