import { ArrowDown } from "lucide-react";

const CV = () => {
  const pdfPath = "/Zain_Fahri_CV.pdf"; // Place your PDF in public/ with this filename

  return (
    <div className="min-h-screen flex items-start justify-center py-20 px-6">
      <div className="max-w-4xl w-full bg-card border border-border rounded-lg overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-border bg-muted">
          <h2 className="font-semibold">Curriculum Vitae — Zain Fahri</h2>
          <a
            href={pdfPath}
            download
            className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-primary text-primary-foreground font-medium text-sm"
          >
            <ArrowDown size={14} /> Download PDF
          </a>
        </div>

        <div className="w-full h-[80vh]">
          <iframe
            title="Zain Fahri CV"
            src={pdfPath}
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default CV;
