const workflow = [
  {
    step: "01",
    title: "Layout Planning",
    description:
      "Defining the structure and layout flow based on user needs and project goals. This includes creating wireframes, identifying key features, and mapping user interactions.",
  },
  {
    step: "02",
    title: "Design Elements",
    description:
      "Translating concepts into visually engaging interfaces using UI/UX principles. Focus on color harmony, typography, component consistency, and intuitive user experience.",
  },
  {
    step: "03",
    title: "Usability Testing",
    description:
      "Conducting design and system testing to ensure ease of use, accessibility, and interaction efficiency. Results drive continuous improvement of the user experience.",
  },
];

const WorkflowSection = () => {
  return (
    <section className="py-24 px-6 bg-card/50 border-y border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-body text-xs text-primary uppercase tracking-widest font-medium">
            Process
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2">
            My <span className="text-gradient-cyan">Workflow</span>
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-4" />
          <p className="font-body text-muted-foreground mt-4 max-w-xl mx-auto text-sm">
            Every project begins with understanding user needs. I apply a structured workflow ensuring the final product is not only visually appealing but also functions optimally.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-8 left-[calc(16.66%+1rem)] right-[calc(16.66%+1rem)] h-0.5 bg-gradient-to-r from-primary/30 via-primary/60 to-primary/30" />

          {workflow.map((item) => (
            <div key={item.step} className="flex flex-col items-center text-center relative">
              {/* Step circle */}
              <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/40 flex items-center justify-center mb-6 relative z-10 pulse-glow-animation">
                <span className="font-display text-xl font-bold text-primary">{item.step}</span>
              </div>

              <h3 className="font-display text-xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
