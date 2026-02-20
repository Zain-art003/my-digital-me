import restaurantImg from "@/assets/project-restaurant.jpg";
import careerImg from "@/assets/project-career.jpg";
import beautyImg from "@/assets/project-beauty.jpg";
import octomedImg from "@/assets/project-octomed.jpg";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Dapur Bunda Bahagia",
    subtitle: "Restaurant Management System",
    description:
      "A web-based restaurant information system designed to optimize and digitalize restaurant operations. Integrates menu management, order processing, payment tracking, and sales reporting into one platform.",
    tech: ["React.js", "Node.js", "Express.js", "PostgreSQL"],
    image: restaurantImg,
    type: "Full Stack",
  },
  {
    title: "Career Assessment Platform",
    subtitle: "IT Career Prediction System",
    description:
      "Machine learning-based web app to help users identify the most suitable IT career paths. Uses KNN algorithm with 73.33% accuracy, analyzing technical skills, soft skills, and personality traits.",
    tech: ["Python", "Streamlit", "KNN", "Machine Learning"],
    image: careerImg,
    type: "ML & Research",
  },
  {
    title: "Beauty Verse",
    subtitle: "Beauty Clinic Website",
    description:
      "A modern web-based platform to promote and manage beauty clinic services. The design emphasizes aesthetic appeal, trustworthiness, and user comfort with clean visuals and modern interactions.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: beautyImg,
    type: "Web Development",
  },
  {
    title: "OCTOMED",
    subtitle: "Healthcare App — UI/UX Design",
    description:
      "A Figma-based UI/UX prototype for an online medical appointment and data management system for clinics and patients. Focused on user flow, interface consistency, and accessibility.",
    tech: ["Figma", "UI/UX", "Prototyping"],
    image: octomedImg,
    type: "UI/UX Design",
  },
];

const typeColors: Record<string, string> = {
  "Full Stack": "bg-primary/15 text-primary border-primary/30",
  "ML & Research": "bg-accent/15 text-accent border-accent/30",
  "Web Development": "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  "UI/UX Design": "bg-rose-500/15 text-rose-400 border-rose-500/30",
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-body text-xs text-primary uppercase tracking-widest font-medium">
            Work
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2">
            Featured <span className="text-gradient-cyan">Projects</span>
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-7">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative rounded-2xl bg-card border border-border overflow-hidden card-glow hover:border-primary/40 transition-all duration-500 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                <span
                  className={`absolute top-4 right-4 px-2.5 py-1 rounded-full text-xs font-body font-semibold border ${typeColors[project.type]}`}
                >
                  {project.type}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="font-body text-xs text-muted-foreground mb-1">{project.subtitle}</p>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground text-xs font-body border border-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
