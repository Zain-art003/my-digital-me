import { useState } from "react";
import { Award, X, ZoomIn } from "lucide-react";
import certMagang from "@/assets/cert-magang.jpg";
import certWeb from "@/assets/cert-web.jpg";
import certCyber from "@/assets/cert-cyber.jpg";
import certPon from "@/assets/cert-pon.jpg";
import certTax from "@/assets/cert-tax.jpg";

const certificates = [
  {
    id: 1,
    title: "Internship Certificate",
    issuer: "Rumah Sakit Setia Mitra",
    date: "31 Desember 2024",
    description: "Praktek Kerja Lapangan (PKL) di Sub Bagian IT — Front-End Development & Data Integrity",
    category: "Internship",
    categoryColor: "bg-primary/15 text-primary border-primary/30",
    image: certMagang,
  },
  {
    id: 2,
    title: "Fundamental Web Programming",
    issuer: "Universitas Gunadarma",
    date: "20 Februari 2023",
    description: "Pelatihan Dasar Pemrograman Berbasis Web — mencakup Go Programming, J2EE/Servlet, .NET Framework & C#",
    category: "Training",
    categoryColor: "bg-accent/15 text-accent border-accent/30",
    image: certWeb,
  },
  {
    id: 3,
    title: "Threat and Trends on Cyber",
    issuer: "PT Datacomm Diangraha × HMTI Gunadarma",
    date: "2023",
    description: "Company Visit — peserta dalam kegiatan seminar bertema Threat and Trends on Cyber",
    category: "Seminar",
    categoryColor: "bg-secondary text-secondary-foreground border-border",
    image: certCyber,
  },
  {
    id: 4,
    title: "PON XXI Aceh-North Sumatra",
    issuer: "PT. Aktifitas Atmosfir",
    date: "9 – 20 September 2024",
    description: "Certificate of Recognition — Administration, supporting catering service team at PON Aceh-North Sumatra XXI",
    category: "Event",
    categoryColor: "bg-primary/15 text-primary border-primary/30",
    image: certPon,
  },
  {
    id: 5,
    title: "Seminar Nasional Perpajakan",
    issuer: "Tax Center Universitas Gunadarma",
    date: "22 Juli 2024",
    description: "TAX DAY CELEBRATION 2024 — Outlook APBN 2024-2025 dan Update Reform DJP",
    category: "Seminar",
    categoryColor: "bg-secondary text-secondary-foreground border-border",
    image: certTax,
  },
];

const CertificatesSection = () => {
  const [selected, setSelected] = useState<(typeof certificates)[0] | null>(null);

  return (
    <section id="certificates" className="py-24 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-body text-xs text-primary uppercase tracking-widest font-medium">
            Credentials
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2">
            Certificates & <span className="text-gradient-cyan">Awards</span>
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-4" />
          <p className="font-body text-muted-foreground mt-4 text-sm">
            Klik sertifikat untuk melihat lebih detail
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <button
              key={cert.id}
              onClick={() => setSelected(cert)}
              className="group text-left rounded-2xl bg-card border border-border overflow-hidden card-glow hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Certificate preview image */}
              <div className="relative h-44 overflow-hidden bg-secondary">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                {/* Zoom icon on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center">
                    <ZoomIn size={18} className="text-primary-foreground" />
                  </div>
                </div>
                <span className={`absolute top-3 right-3 px-2 py-0.5 rounded-full text-xs font-body font-semibold border ${cert.categoryColor}`}>
                  {cert.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start gap-2 mb-2">
                  <Award size={16} className="text-primary mt-0.5 shrink-0" />
                  <h3 className="font-display text-base font-bold text-foreground leading-tight">
                    {cert.title}
                  </h3>
                </div>
                <p className="font-body text-xs text-primary font-medium mb-1">{cert.issuer}</p>
                <p className="font-body text-xs text-muted-foreground mb-2">{cert.date}</p>
                <p className="font-body text-xs text-muted-foreground leading-relaxed line-clamp-2">
                  {cert.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-w-3xl w-full rounded-2xl bg-card border border-border card-glow overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-card/90 border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
            >
              <X size={16} />
            </button>

            {/* Full image */}
            <div className="relative max-h-[70vh] overflow-auto">
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full object-contain"
              />
            </div>

            {/* Info */}
            <div className="p-5 border-t border-border">
              <div className="flex items-start justify-between gap-3 flex-wrap">
                <div>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-body font-semibold border ${selected.categoryColor} mb-2 inline-block`}>
                    {selected.category}
                  </span>
                  <h3 className="font-display text-xl font-bold text-foreground">{selected.title}</h3>
                  <p className="font-body text-sm text-primary font-medium mt-0.5">{selected.issuer}</p>
                  <p className="font-body text-xs text-muted-foreground mt-0.5">{selected.date}</p>
                </div>
              </div>
              <p className="font-body text-sm text-muted-foreground mt-3 leading-relaxed">
                {selected.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CertificatesSection;
