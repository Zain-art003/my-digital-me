const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border bg-background">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display text-xl font-bold text-gradient-cyan">ZF.</span>
        <p className="font-body text-xs text-muted-foreground text-center">
          © 2024 Zain Fahri · Informatics Graduate · Gunadarma University
        </p>
        <p className="font-body text-xs text-muted-foreground">
          Jakarta, Indonesia 🇮🇩
        </p>
      </div>
    </footer>
  );
};

export default Footer;
