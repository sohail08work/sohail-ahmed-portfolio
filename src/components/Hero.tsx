import { ArrowRight, Download } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  const chips = [
    "5K+ Monthly Organic Growth",
    "DA 9 to 34 in 3 Months",
    "LCP 13s to 1.9s",
    "535 Tap-to-Call Clicks",
    "6,081 Display Clicks",
    "54K+ Reach at ₹31 CPM",
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background glow with parallax */}
      <motion.div 
        style={{ y }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#ccff00]/5 blur-[120px] rounded-full pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-zinc-300 mb-6">
                SEO • Paid Media • Growth Execution
              </span>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance leading-[1.1]">
                SEO and performance marketing that drive{" "}
                <span className="text-[#ccff00]">measurable business outcomes.</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed"
            >
              I work across technical SEO, content optimization, Google Ads, Meta Ads, and analytics to improve rankings, site performance, and paid acquisition efficiency. The focus is clear: stronger search presence, better traffic quality, and more qualified enquiries.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <MagneticButton>
                <a
                  href="#case-studies"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#ccff00] text-black font-semibold hover:bg-[#b3e600] transition-colors"
                >
                  See My Work
                  <ArrowRight size={18} />
                </a>
              </MagneticButton>
              <MagneticButton>
                <a
                  href="/resume-sohail-ahmed.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/10 bg-white/5 text-white font-medium hover:bg-white/10 transition-colors"
                >
                  <Download size={18} />
                  Download Resume
                </a>
              </MagneticButton>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl border border-white/10 bg-[#141414] p-8 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
              <h3 className="text-xl font-semibold mb-6 text-white">
                Proof Points
              </h3>
              <div className="flex flex-col gap-3">
                {chips.map((chip, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 text-sm md:text-base text-zinc-300"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ccff00] shrink-0" />
                    {chip}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
