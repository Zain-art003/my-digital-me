const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: decorative */}
          <div className="relative">
            <div className="relative rounded-2xl bg-card border border-border p-8 card-glow">
              {/* Inner glow */}
              <div className="absolute top-0 left-0 w-1/2 h-1 rounded-tl-2xl bg-gradient-to-r from-primary to-transparent" />
              
              <p className="font-display text-6xl font-bold text-gradient-cyan leading-none mb-4">"</p>
              <p className="font-body text-lg text-foreground leading-relaxed italic">
                Technology is a way to transform ideas into real solutions that create a positive impact for many people.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-8 h-0.5 bg-primary" />
                <span className="font-body text-sm text-muted-foreground font-medium">Zain Fahri</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-5">
              {[
                { value: "4+", label: "Projects Completed" },
                { value: "73%", label: "ML Model Accuracy" },
                { value: "3", label: "Tech Stacks Mastered" },
                { value: "2024", label: "Graduated" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl bg-card border border-border p-4 text-center hover:border-primary/40 transition-colors card-glow"
                >
                  <p className="font-display text-2xl font-bold text-gradient-cyan">{stat.value}</p>
                  <p className="font-body text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: text */}
          <div>
            <span className="font-body text-xs text-primary uppercase tracking-widest font-medium">
              About Me
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
              Turning Ideas into{" "}
              <span className="text-gradient-cyan">Digital Solutions</span>
            </h2>

            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              I'm <strong className="text-foreground">Zain Fahri</strong>, a fresh graduate in Informatics from Gunadarma University with a strong passion for Web Development and UI/UX Design. I enjoy creating digital products that are visually appealing, functional, and user-friendly.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              I have worked on several projects using <strong className="text-foreground">React.js, Node.js, and PostgreSQL</strong>, including a Restaurant Information System and a Career Prediction Platform based on the K-Nearest Neighbor (KNN) algorithm.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              These experiences have strengthened my skills in full-stack development, data management, and problem solving through design.
            </p>

            <div className="flex flex-col gap-3">
              {[
                { label: "Education", value: "Gunadarma University — Informatics" },
                { label: "Location", value: "Pancoran, Jakarta Selatan" },
                { label: "Birthday", value: "27 Juli 2003, Sulit Air" },
                { label: "Email", value: "zainfahri003@gmail.com" },
              ].map((info) => (
                <div key={info.label} className="flex items-center gap-4 py-2 border-b border-border">
                  <span className="font-body text-xs text-primary font-semibold uppercase tracking-wider w-24 shrink-0">
                    {info.label}
                  </span>
                  <span className="font-body text-sm text-foreground">{info.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
