import { createFileRoute } from "@tanstack/react-router";
import { Download, Microscope, Target, Cpu, Settings, Lightbulb, FlaskConical, CheckCircle2, ArrowRight } from "lucide-react";
import { research, researchInterests, SiteHeader, SiteFooter, PageHeader, Card } from "@/lib/portfolio-data";

export const Route = createFileRoute("/research")({
  component: ResearchPage,
  head: () => ({
    meta: [
      { title: "Hafiza Laiba Faisal" },
      { name: "description", content: "Machine Learning-Based Symbol Detection in Drift-Enhanced Wireless Molecular Communication Systems." },
      { property: "og:title", content: "Research — Hafiza Laiba Faisal" },
      { property: "og:description", content: "ML-driven symbol detection in molecular communication systems." },
    ],
  }),
});

const contributions = [
  "Developed a physics-based diffusion-drift molecular communication simulator using On-Off Keying (OOK) modulation.",
  "Generated a synthetic dataset of 3,000 communication samples with varying transmission distances and noise levels.",
  "Implemented and evaluated Logistic Regression, Support Vector Machine (SVM), Random Forest, Gradient Boosting, and Neural Networks for symbol synchronization and detection.",
  "Performed comprehensive performance evaluation using confusion matrices, ROC curves, precision-recall analysis, BER analysis, PCA, feature importance, learning curves, and robustness analysis.",
  "Achieved 99.2% classification accuracy with Logistic Regression while maintaining low computational complexity suitable for resource-constrained nanonetwork applications.",
];

const technologies = ["Python", "NumPy", "Scikit-learn", "Matplotlib", "Plotly", "Machine Learning", "Signal Processing", "Wireless Molecular Communication"];

const researchAreas = ["Machine Learning", "Molecular Communication", "Internet of Nano Things (IoNT)", "Wireless Communication", "Computational Modeling"];

function ResearchPage() {
  const r = research[0];
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader active="Research" />

      <PageHeader
        eyebrow="Research Project"
        title={r.title}
        description={r.desc}
      />

      <section className="mx-auto mt-6 max-w-[1440px] px-6">
        <Card className="!p-6 space-y-8">
          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 md:grid-cols-5">
            {[
              { icon: Microscope, n: "1", l: "Research Project" },
              { icon: Target, n: "3+", l: "ML Models Evaluated" },
              { icon: Cpu, n: "5+", l: "Algorithms Compared" },
              { icon: Settings, n: "3,000", l: "Dataset Samples" },
              { icon: Lightbulb, n: "99.2%", l: "Best Accuracy" },
            ].map(({ icon: I, n, l }) => (
              <div key={l} className="flex flex-col items-center text-center">
                <span className="mb-2 inline-flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-ember">
                  <I className="h-6 w-6" />
                </span>
                <div className="font-display text-2xl font-bold text-primary">{n}</div>
                <div className="text-[11.5px] text-foreground/60">{l}</div>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <section className="mx-auto mt-6 grid max-w-[1440px] gap-6 px-6 lg:grid-cols-[1fr_360px]">
        {/* Main Content */}
        <Card>
          <div className="mb-4 flex items-center gap-2">
            <FlaskConical className="h-5 w-5 text-ember" />
            <h2 className="font-display text-xl font-semibold text-primary">Overview</h2>
          </div>
          <p className="text-[14px] leading-relaxed text-foreground/75">
            Designed and implemented a simulation-based wireless molecular communication system to investigate machine learning-driven symbol synchronization and detection in diffusion-drift channels. The project models nanoscale communication under varying transmission distances and noise conditions and evaluates multiple supervised learning algorithms for reliable symbol detection.
          </p>

          <div className="mt-6 mb-4 flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-ember" />
            <h2 className="font-display text-xl font-semibold text-primary">Key Contributions</h2>
          </div>
          <ul className="space-y-3">
            {contributions.map((c, i) => (
              <li key={i} className="flex gap-3 text-[14px] leading-relaxed text-foreground/75">
                <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-ember" />
                <span>{c}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 mb-4 flex items-center gap-2">
            <Cpu className="h-5 w-5 text-ember" />
            <h2 className="font-display text-xl font-semibold text-primary">Technologies</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {technologies.map((t) => (
              <span key={t} className="rounded-full bg-secondary px-3 py-1 text-[13px] font-medium text-foreground/75">{t}</span>
            ))}
          </div>

          <div className="mt-6 mb-4 flex items-center gap-2">
            <Target className="h-5 w-5 text-ember" />
            <h2 className="font-display text-xl font-semibold text-primary">Research Areas</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {researchAreas.map((a) => (
              <span key={a} className="rounded-full border border-ember/30 bg-ember/5 px-3 py-1 text-[13px] font-medium text-ember">{a}</span>
            ))}
          </div>
        </Card>

        {/* Sidebar */}
        <div className="space-y-6">
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

          <Card>
            <div className="mb-3 flex items-center gap-2">
              <Microscope className="h-5 w-5 text-ember" />
              <h3 className="font-display text-lg font-semibold text-primary">Project Status</h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-[13px] font-semibold text-emerald-600">{r.status}</span>
              <span className="text-[13px] text-foreground/55">{r.when}</span>
            </div>
          </Card>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
