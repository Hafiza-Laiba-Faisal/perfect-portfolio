import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Send, Mail, User, MessageSquare, AlertCircle, Github, Linkedin } from "lucide-react";
import { SiteHeader, SiteFooter, PageHeader, Card } from "@/lib/portfolio-data";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Hafiza Laiba Faisal" },
      { name: "description", content: "Get in touch with Hafiza Laiba Faisal for collaborations, research opportunities, or just a chat." },
      { property: "og:title", content: "Contact — Hafiza Laiba Faisal" },
      { property: "og:description", content: "Get in touch with Hafiza Laiba Faisal for collaborations, research opportunities, or just a chat." },
    ],
  }),
});

function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(false);
    try {
      const data = new FormData();
      data.append("access_key", "c85f5276-2f82-4d16-98a7-defbcfd4ebc0");
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("subject", formData.subject || "New Inquiry from Portfolio");
      data.append("message", formData.message);
      data.append("from_name", "Portfolio Admin");
      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        throw new Error(result.message || "Transmission Interrupted");
      }
    } catch (err) {
      console.error("Transmission Error:", err);
      setError(true);
      setTimeout(() => setError(false), 6000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader active="Contact" />
      <PageHeader
        eyebrow="Get in Touch"
        title="Initiate Connection"
        description="Have a project, collaboration, or just want to chat? Drop a message."
      />

      <section className="mx-auto mt-6 max-w-[1440px] px-6">
        <div className="grid gap-6 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <h3 className="font-display text-sm font-bold text-primary mb-4">Direct Line</h3>
              <a
                href="mailto:hafizalaibafaisal@gmail.com"
                className="flex items-center gap-3 text-sm text-foreground/70 hover:text-primary transition-colors mb-4"
              >
                <Mail className="h-4 w-4 text-ember shrink-0" />
                hafizalaibafaisal@gmail.com
              </a>
              <div className="flex gap-3">
                <a
                  href="https://github.com/Hafiza-Laiba-Faisal"
                  target="_blank"
                  className="flex items-center gap-2 rounded-xl border border-border/60 bg-[#FAF7F2] px-4 py-2.5 text-xs font-semibold text-foreground/70 hover:border-[#D97706]/40 hover:text-primary transition-all"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a
                  href="https://linkedin.com/in/hafiza-laiba-faisal"
                  target="_blank"
                  className="flex items-center gap-2 rounded-xl border border-border/60 bg-[#FAF7F2] px-4 py-2.5 text-xs font-semibold text-foreground/70 hover:border-[#D97706]/40 hover:text-primary transition-all"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </div>
            </Card>
            <Card>
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                <span className="text-xs font-bold uppercase tracking-wider text-foreground/60">Available for collaborations</span>
              </div>
            </Card>
          </div>

          <div className="lg:col-span-3">
            <Card>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-foreground/60">Name</label>
                    <div className="relative">
                      <User className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/30" />
                      <input
                        type="text" name="name" required placeholder="Your Name"
                        value={formData.name} onChange={handleChange}
                        className="w-full rounded-xl border border-border/60 bg-[#FAF7F2] px-4 py-3 text-sm outline-none focus:border-[#D97706] focus:ring-1 focus:ring-[#D97706]/30"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-foreground/60">Email</label>
                    <div className="relative">
                      <Mail className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/30" />
                      <input
                        type="email" name="email" required placeholder="your@email.com"
                        value={formData.email} onChange={handleChange}
                        className="w-full rounded-xl border border-border/60 bg-[#FAF7F2] px-4 py-3 text-sm outline-none focus:border-[#D97706] focus:ring-1 focus:ring-[#D97706]/30"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-foreground/60">Subject</label>
                  <input
                    type="text" name="subject" placeholder="What's this about?"
                    value={formData.subject} onChange={handleChange}
                    className="w-full rounded-xl border border-border/60 bg-[#FAF7F2] px-4 py-3 text-sm outline-none focus:border-[#D97706] focus:ring-1 focus:ring-[#D97706]/30"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-foreground/60">Message</label>
                  <div className="relative">
                    <MessageSquare className="absolute right-3 top-3 h-4 w-4 text-foreground/30" />
                    <textarea
                      name="message" required rows={4} placeholder="Tell me about your idea..."
                      value={formData.message} onChange={handleChange}
                      className="w-full rounded-xl border border-border/60 bg-[#FAF7F2] px-4 py-3 text-sm outline-none focus:border-[#D97706] focus:ring-1 focus:ring-[#D97706]/30 resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || submitted}
                  className="w-full rounded-xl bg-[#1E3A34] py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-[#2A4F48] disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                  ) : submitted ? (
                    "Message Sent!"
                  ) : (
                    <>Send Message <Send className="h-4 w-4" /></>
                  )}
                </button>

                {error && (
                  <div className="rounded-xl bg-red-50 border border-red-200 p-4 text-xs font-bold uppercase tracking-wider text-red-600 flex items-center justify-center gap-2">
                    <AlertCircle className="h-4 w-4" /> Failed to send. Please try again or email directly.
                  </div>
                )}
              </form>
            </Card>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
