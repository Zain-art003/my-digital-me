import { Mail, Phone, Linkedin, Send } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "zainfahri003@gmail.com",
    href: "mailto:zainfahri003@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: "081232623438",
    href: "tel:081232623438",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/zain-fahri-269388388",
    href: "https://www.linkedin.com/in/zain-fahri-269388388",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-background relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="font-body text-xs text-primary uppercase tracking-widest font-medium">
            Let's Connect
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2">
            Get in <span className="text-gradient-cyan">Touch</span>
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-4" />
          <p className="font-body text-muted-foreground mt-6 max-w-md mx-auto">
            I'm open to new opportunities, collaborations, and interesting projects. Feel free to reach out anytime!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {contacts.map((contact) => {
            const Icon = contact.icon;
            return (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex flex-col items-center gap-3 p-6 rounded-xl bg-card border border-border hover:border-primary/40 hover:glow-primary transition-all duration-300 card-glow text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-body text-xs text-muted-foreground">{contact.label}</p>
                  <p className="font-body text-sm font-medium text-foreground mt-0.5 break-all">
                    {contact.value}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center rounded-2xl bg-card border border-primary/20 p-10 card-glow relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
          <div className="relative z-10">
            <Send size={32} className="text-primary mx-auto mb-4" />
            <h3 className="font-display text-2xl font-bold text-foreground mb-2">
              Ready to Collaborate?
            </h3>
            <p className="font-body text-muted-foreground text-sm mb-6">
              Let's build something amazing together.
            </p>
            <a
              href="mailto:zainfahri003@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-sm hover:shadow-lg transition-all duration-300 glow-primary hover:scale-105"
            >
              <Mail size={16} />
              Send an Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
