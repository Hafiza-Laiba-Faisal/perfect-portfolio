import { createFileRoute } from "@tanstack/react-router";
import { Calendar, MapPin, Download, Briefcase } from "lucide-react";
import { experience, SiteHeader, SiteFooter, PageHeader, Card } from "@/lib/portfolio-data";

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

function ExperiencePage() {
  const colorMap: Record<string, { ring: string; dot: string; iconBg: string; title: string; tagHeader: string; tagBg: string; tagText: string; bulletDot: string }> = {
    emerald: {
      ring: "border-emerald-700/80",
      dot: "bg-emerald-700",
      iconBg: "bg-emerald-950 text-emerald-100",
      title: "text-emerald-900",
      tagHeader: "text-emerald-900",
      tagBg: "bg-emerald-900/5",
      tagText: "text-emerald-900",
      bulletDot: "bg-emerald-800",
    },
    amber: {
      ring: "border-amber-500/80",
      dot: "bg-amber-500",
      iconBg: "bg-amber-100 text-amber-900",
      title: "text-amber-900",
      tagHeader: "text-amber-900",
      tagBg: "bg-amber-900/5",
      tagText: "text-amber-900",
      bulletDot: "bg-amber-700",
    },
    sky: {
      ring: "border-sky-400/80",
      dot: "bg-sky-400",
      iconBg: "bg-sky-100 text-sky-900",
      title: "text-sky-900",
      tagHeader: "text-sky-900",
      tagBg: "bg-sky-900/5",
      tagText: "text-sky-900",
      bulletDot: "bg-sky-700",
    },
    purple: {
      ring: "border-purple-400/80",
      dot: "bg-purple-400",
      iconBg: "bg-purple-100 text-purple-900",
      title: "text-purple-900",
      tagHeader: "text-purple-900",
      tagBg: "bg-purple-900/5",
      tagText: "text-purple-900",
      bulletDot: "bg-purple-700",
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader active="Experience" />
      <PageHeader
        eyebrow="My Journey"
        title="Work Experience"
        description="A timeline of my professional journey and the impact I've created."
        action={
          <button className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-primary/40">
            <Download className="h-4 w-4" /> Download Resume
          </button>
        }
      />

      <section className="mx-auto mt-10 max-w-[1440px] px-6">
        <div className="relative">
          {/* Vertical timeline bar */}
          <span className="absolute left-[23px] top-6 bottom-6 w-[2px] bg-border/70" />
          
          <div className="space-y-8">
            {experience.map((e) => {
              const Icon = e.icon;
              const theme = colorMap[e.color] || colorMap.emerald;

              return (
                <div key={e.role} className="relative flex items-start">
                  {/* Circle Icon Node */}
                  <span className={`relative z-10 inline-flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 ${theme.ring} ${theme.iconBg} shadow-sm bg-white p-1`}>
                    {e.logo ? (
                      <img src={e.logo} alt={e.org} className="h-full w-full object-contain" />
                    ) : (
                      <Icon className="h-5 w-5" />
                    )}
                  </span>

                  {/* Dot on timeline line */}
                  <span className={`absolute left-[20px] top-[21px] z-0 h-2.5 w-2.5 rounded-full ${theme.dot}`} />

                  {/* Main Experience Card */}
                  <Card className="ml-6 flex-1 border-border/60 bg-card/90 p-6 md:p-7 shadow-xs">
                    <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr_210px]">
                      {/* Left Column: Role & Overview */}
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className={`font-display text-xl font-bold md:text-2xl ${theme.title}`}>
                            {e.role}
                          </h3>
                        </div>

                        <div className="mt-1 flex flex-wrap items-center gap-2">
                          <span className="font-semibold text-foreground/90 text-[15px]">
                            {e.org}
                          </span>
                          {e.subtitle && (
                            <span className="text-sm font-medium text-foreground/60">
                              · {e.subtitle}
                            </span>
                          )}
                          {e.current && (
                            <span className="ml-1 rounded-full bg-emerald-950/10 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-800">
                              Current
                            </span>
                          )}
                        </div>

                        <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] text-foreground/60">
                          <span className="inline-flex items-center gap-1.5">
                            <Calendar className="h-3.5 w-3.5 text-foreground/50" /> {e.when}
                          </span>
                          <span className="text-foreground/30">|</span>
                          <span className="inline-flex items-center gap-1.5">
                            <MapPin className="h-3.5 w-3.5 text-foreground/50" /> {e.where}
                          </span>
                        </div>

                        <p className="mt-4 text-[13.5px] leading-relaxed text-foreground/75">
                          {e.detailedDesc}
                        </p>
                      </div>

                      {/* Middle Column: Key Highlights / Contributions / Responsibilities */}
                      <div>
                        <h4 className={`text-[13px] font-bold tracking-wide uppercase ${theme.tagHeader} mb-2.5`}>
                          Key Highlights
                        </h4>
                        <ul className="space-y-2 text-[13px] leading-snug text-foreground/80">
                          {e.detailedBullets.map((b) => (
                            <li key={b} className="flex items-start gap-2.5">
                              <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${theme.bulletDot}`} />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Right Column: Stack Card */}
                      <div className={`flex flex-col justify-start rounded-2xl ${theme.tagBg} p-4 border border-black/5`}>
                        <div className={`mb-3 flex items-center gap-2 font-bold text-[13px] ${theme.tagText}`}>
                          <Briefcase className="h-4 w-4" />
                          <span>{e.detailedTag}</span>
                        </div>
                        <div className="space-y-2 text-[12.5px] font-medium text-foreground/75 leading-relaxed">
                          {e.detailedStack.map((s) => (
                            <div key={s}>{s}</div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
