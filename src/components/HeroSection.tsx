import { Github, Linkedin, Mail, Phone, ArrowDown } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/3 blur-[120px]" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(180 70% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(180 70% 50%) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-body font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary pulse-glow-animation" />
            Available for opportunities
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
            <span className="text-foreground">Zain</span>{" "}
            <span className="text-gradient-cyan">Fahri</span>
          </h1>

          <div className="flex flex-wrap gap-2 mb-6">
            {["UI/UX Designer", "Full Stack Developer", "IT Support"].map((role) => (
              <span
                key={role}
                className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground font-body text-xs border border-border"
              >
                {role}
              </span>
            ))}
          </div>

          <p className="font-body text-muted-foreground text-base leading-relaxed mb-8 max-w-lg">
            Fresh graduate in Informatics from Gunadarma University. Passionate about creating
            digital products that are visually appealing, functional, and user-friendly.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-sm hover:shadow-lg transition-all duration-300 glow-primary hover:scale-105"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-body font-semibold text-sm hover:border-primary hover:text-primary transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/zain-fahri-269388388"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="mailto:zainfahri003@gmail.com"
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
            >
              <Mail size={16} />
            </a>
            <a
              href="https://wa.me/6281232623438"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
            >
              <Phone size={16} />
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            {/* Decorative ring */}
            <div className="absolute -inset-4 rounded-full border border-primary/20 pulse-glow-animation" />
            <div className="absolute -inset-8 rounded-full border border-primary/10" />

            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary/40 glow-primary float-animation">
              <img
                src={profileImg}
                alt="Zain Fahri"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-xl px-3 py-2 card-glow">
              <p className="font-body text-xs text-muted-foreground">Based in</p>
              <p className="font-body text-sm font-semibold text-foreground">Jakarta, ID 🇮🇩</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-body text-xs text-muted-foreground">Scroll</span>
        <ArrowDown size={16} className="text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
