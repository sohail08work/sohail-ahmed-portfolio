import { Download } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function ResumeCTA() {
  return (
    <section
      id="resume"
      className="py-32 md:py-48 bg-[#0a0a0a] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#ccff00]/5 blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
        <span className="text-[#ccff00] font-semibold tracking-wider uppercase text-sm mb-6 block">
          Resume
        </span>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-8 leading-tight">
          View my full experience.
        </h2>
        <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          A detailed breakdown of roles, projects, and the technical skills I bring to a team.
        </p>
        <MagneticButton>
          <a
            href="/resume-sohail-ahmed.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#ccff00] text-black text-lg font-bold hover:bg-[#b3e600] transition-colors shadow-[0_0_40px_rgba(204,255,0,0.3)] hover:shadow-[0_0_60px_rgba(204,255,0,0.5)]"
          >
            <Download size={24} />
            Download Resume
          </a>
        </MagneticButton>
      </div>
    </section>
  );
}
