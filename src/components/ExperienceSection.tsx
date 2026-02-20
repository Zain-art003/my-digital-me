import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";

const experiences = [
  {
    company: "Setia Mitra Hospital",
    location: "South Jakarta, Indonesia",
    period: "Oct 2024 – Dec 2024",
    role: "Front-End Development & Data Integrity Intern",
    description:
      "A leading general hospital focused on patient care and the digitalization of medical administration systems.",
    points: [
      "Engineered and deployed critical internal web pages using HTML, CSS, and vanilla JavaScript, supporting digitalization of hospital administrative functions.",
      "Managed high-volume data entry for patient records, medical inventory, and administrative information, ensuring 99% accuracy rate.",
      "Implemented rigorous validation processes on all input data to uphold database integrity.",
    ],
    color: "border-primary/40",
    badge: "Internship",
    badgeColor: "bg-primary/15 text-primary border-primary/30",
  },
  {
    company: "PT. Aktifitas Atmosfir",
    location: "South Jakarta, Indonesia",
    period: "Sep 2024",
    role: "Administrative Support (Catering Team)",
    description:
      "A premier professional catering and food logistics company — official caterer for PON XXI.",
    points: [
      "Coordinated crucial logistics data with a field operational team of 15+ staff for smooth food distribution to event venues.",
      "Managed comprehensive documentation for the catering team during the large-scale PON XXI event.",
      "Tracked high-volume food distribution data for hundreds of individuals — athletes, officials, and committees.",
    ],
    color: "border-accent/40",
    badge: "Event",
    badgeColor: "bg-accent/15 text-accent border-accent/30",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-body text-xs text-primary uppercase tracking-widest font-medium">
            Career
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2">
            Work <span className="text-gradient-cyan">Experience</span>
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-4" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary/30 to-transparent" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`relative flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 items-center`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-2 border-background z-10 pulse-glow-animation" />

                {/* Card */}
                <div className="w-full md:w-[calc(50%-2rem)]">
                  <div
                    className={`rounded-2xl bg-card border-l-4 ${exp.color} border border-border p-6 card-glow hover:border-primary/30 transition-all duration-300`}
                  >
                    <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                      <div>
                        <span
                          className={`px-2 py-0.5 rounded-full text-xs font-body font-semibold border ${exp.badgeColor} mb-2 inline-block`}
                        >
                          {exp.badge}
                        </span>
                        <h3 className="font-display text-xl font-bold text-foreground">
                          {exp.company}
                        </h3>
                        <p className="font-body text-sm font-semibold text-primary">
                          {exp.role}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 mb-3 text-xs text-muted-foreground font-body">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} /> {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={12} /> {exp.location}
                      </span>
                    </div>

                    <p className="font-body text-xs text-muted-foreground italic mb-4">
                      {exp.description}
                    </p>

                    <ul className="flex flex-col gap-2">
                      {exp.points.map((point, i) => (
                        <li key={i} className="flex gap-2 font-body text-sm text-foreground/80">
                          <span className="text-primary mt-0.5 shrink-0">▸</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Empty spacer for alignment */}
                <div className="hidden md:block w-[calc(50%-2rem)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
