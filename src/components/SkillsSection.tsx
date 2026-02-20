const skills = [
  {
    number: "01",
    title: "Front-End Developer",
    description: "React.js, HTML, CSS, JavaScript — building responsive and interactive UI",
    tags: ["React.js", "HTML/CSS", "JavaScript", "Tailwind CSS"],
  },
  {
    number: "02",
    title: "Back-End & API Integration",
    description: "Node.js, Express.js — server-side logic and RESTful API development",
    tags: ["Node.js", "Express.js", "REST API"],
  },
  {
    number: "03",
    title: "Database Design & Management",
    description: "PostgreSQL — schema design, data management, and query optimization",
    tags: ["PostgreSQL", "SQL", "Data Modeling"],
  },
  {
    number: "04",
    title: "Web Programming Foundation",
    description: "Strong fundamentals in web technologies and modern development practices",
    tags: ["Git", "Figma", "Responsive Design"],
  },
  {
    number: "05",
    title: "Full-Stack Implementation",
    description: "End-to-end development from architecture to deployment",
    tags: ["Full Stack", "System Design", "Problem Solving"],
  },
  {
    number: "06",
    title: "Machine Learning & Research",
    description: "Python, Streamlit, KNN algorithm — data-driven prediction systems",
    tags: ["Python", "Streamlit", "KNN", "ML"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-body text-xs text-primary uppercase tracking-widest font-medium">
            Expertise
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2">
            Skills & <span className="text-gradient-cyan">Capabilities</span>
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, index) => (
            <div
              key={skill.number}
              className="group relative p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-300 card-glow hover:glow-primary"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Number */}
              <span className="font-display text-5xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors absolute top-4 right-5">
                {skill.number}
              </span>

              <h3 className="font-display text-lg font-bold text-foreground mb-2 relative z-10">
                {skill.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4 relative z-10">
                {skill.description}
              </p>

              <div className="flex flex-wrap gap-2 relative z-10">
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-md bg-primary/10 text-primary text-xs font-body font-medium border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
