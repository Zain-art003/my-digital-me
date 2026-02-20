import { GraduationCap, FlaskConical, Award, Trophy } from "lucide-react";

const achievements = [
  { label: "73.33%", desc: "KNN Model Accuracy" },
  { label: "SUS 85", desc: "Usability Score — Excellent" },
  { label: "F1: 0.86", desc: "Best Class (Project Manager)" },
  { label: "3.65 GPA", desc: "Gunadarma University" },
];

const softSkills = [
  "Analytical Thinking",
  "Problem-Solving",
  "Teamwork & Collaboration",
  "Effective Communication",
];

const hardSkills = [
  "Fundamental Web Programming",
  "Go Programming",
  "J2EE / Servlet",
  ".NET Framework & C#",
];

const webinars = [
  { year: "2023", title: "Threat and Trends on Cyber" },
  { year: "2024", title: "Outlook APBN 2024-2025 dan Update Reform DJP" },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-body text-xs text-primary uppercase tracking-widest font-medium">
            Background
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2">
            Education & <span className="text-gradient-cyan">Research</span>
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education Card */}
          <div className="rounded-2xl bg-card border border-border p-7 card-glow hover:border-primary/40 transition-all duration-300">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <GraduationCap size={22} className="text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-foreground">Universitas Gunadarma</h3>
                <p className="font-body text-xs text-muted-foreground">Depok, West Java · S1 Informatika</p>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-5">
              <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-display font-bold text-lg">
                3.65
              </span>
              <span className="font-body text-sm text-muted-foreground">GPA / 4.00</span>
            </div>

            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
              Completed intensive training covering Web Programming fundamentals, including Go Programming, control structures, and J2EE/Servlet technology. Gained knowledge in enterprise-level frameworks — .NET Framework and C#.
            </p>

            <div>
              <p className="font-body text-xs text-primary font-semibold uppercase tracking-wider mb-3">Training Completed</p>
              <div className="flex flex-wrap gap-2">
                {hardSkills.map((s) => (
                  <span key={s} className="px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-body border border-border">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Research Project */}
          <div className="rounded-2xl bg-card border border-border p-7 card-glow hover:border-accent/40 transition-all duration-300">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                <FlaskConical size={22} className="text-accent" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-foreground">Research Project</h3>
                <p className="font-body text-xs text-muted-foreground">Gunadarma University · 2025</p>
              </div>
            </div>

            <p className="font-body text-sm font-semibold text-foreground mb-2">
              IT Career Trend Prediction Using KNN Algorithm
            </p>
            <p className="font-body text-xs text-muted-foreground italic mb-4">
              Sistem Prediksi Tren Karier di Bidang IT Menggunakan Algoritma K-Nearest Neighbor (KNN)
            </p>

            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5">
              Developed a machine learning Career Assessment Platform to predict optimal IT career paths for Informatics graduates using multi-dimensional competency profiles. Built with CRISP-DM methodology and deployed via Streamlit.
            </p>

            {/* Key metrics */}
            <div className="grid grid-cols-2 gap-3">
              {achievements.map((a) => (
                <div key={a.label} className="rounded-xl bg-accent/5 border border-accent/20 p-3 text-center">
                  <p className="font-display text-lg font-bold text-gradient-accent">{a.label}</p>
                  <p className="font-body text-xs text-muted-foreground mt-0.5">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills & Webinars */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {/* Soft Skills */}
          <div className="rounded-2xl bg-card border border-border p-6 card-glow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Award size={18} className="text-primary" />
              </div>
              <h3 className="font-display text-base font-bold text-foreground">Soft Skills</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((s) => (
                <span key={s} className="px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-body font-medium">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Webinars */}
          <div className="rounded-2xl bg-card border border-border p-6 card-glow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                <Trophy size={18} className="text-accent" />
              </div>
              <h3 className="font-display text-base font-bold text-foreground">Webinars Attended</h3>
            </div>
            <div className="flex flex-col gap-3">
              {webinars.map((w) => (
                <div key={w.year} className="flex items-start gap-3">
                  <span className="px-2 py-0.5 rounded bg-accent/10 border border-accent/20 text-accent text-xs font-body font-semibold shrink-0">
                    {w.year}
                  </span>
                  <p className="font-body text-sm text-foreground/80">{w.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
