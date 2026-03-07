import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-[#141414] border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="space-y-8">
            <span className="text-[#ccff00] font-semibold tracking-wider uppercase text-sm mb-4 block">
              Let's Talk
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Ready to scale your search visibility and marketing efficiency? Let's talk.
            </h2>
            <p className="text-xl text-zinc-400 leading-relaxed max-w-lg">
              I’m open to full-time roles, contract work, and consulting projects where SEO and paid media need to drive real business outcomes.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <MagneticButton>
                <a
                  href="mailto:sohail70237@gmail.com"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#ccff00] text-black font-semibold hover:bg-[#b3e600] transition-colors"
                >
                  Get In Touch
                </a>
              </MagneticButton>
              <MagneticButton>
                <a
                  href="/resume-sohail-ahmed.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/10 bg-white/5 text-white font-medium hover:bg-white/10 transition-colors"
                >
                  View Resume
                </a>
              </MagneticButton>
            </div>
          </div>

          <div className="bg-[#0a0a0a] rounded-3xl p-8 md:p-12 border border-white/5 space-y-8">
            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 rounded-full bg-[#141414] border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#ccff00]/10 transition-colors">
                <Mail className="w-6 h-6 text-[#ccff00]" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-2">
                  Email
                </h3>
                <a
                  href="mailto:sohail70237@gmail.com"
                  className="text-xl md:text-2xl font-medium text-white hover:text-[#ccff00] transition-colors"
                >
                  sohail70237@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 rounded-full bg-[#141414] border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#ccff00]/10 transition-colors">
                <Phone className="w-6 h-6 text-[#ccff00]" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-2">
                  Phone
                </h3>
                <a
                  href="tel:8118800765"
                  className="text-xl md:text-2xl font-medium text-white hover:text-[#ccff00] transition-colors"
                >
                  8118800765
                </a>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 rounded-full bg-[#141414] border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#ccff00]/10 transition-colors">
                <MapPin className="w-6 h-6 text-[#ccff00]" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-2">
                  Location
                </h3>
                <p className="text-xl md:text-2xl font-medium text-white">
                  Rajasthan, India
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 rounded-full bg-[#141414] border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#ccff00]/10 transition-colors">
                <Linkedin className="w-6 h-6 text-[#ccff00]" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-2">
                  LinkedIn
                </h3>
                <a
                  href="https://www.linkedin.com/in/sohail-ahmed-seo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl md:text-2xl font-medium text-white hover:text-[#ccff00] transition-colors"
                >
                  Connect with me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
