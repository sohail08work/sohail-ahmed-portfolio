import { motion } from "motion/react";

export default function LogoStrip() {
  const logos = [
    "Software Company",
    "B2B Software Brand",
    "LED Brand",
    "Interior Brand",
    "Luxury Homes Brand",
    "Local Service Business",
    "Influencer Platform",
  ];

  return (
    <section className="py-24 bg-[#141414] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 text-center">
        <span className="text-[#ccff00] font-semibold tracking-wider uppercase text-sm mb-4 block">
          Selected Brands
        </span>
        <p className="text-zinc-400 text-lg">
          Brands and teams I’ve supported across SEO and paid media.
        </p>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap flex items-center gap-16 md:gap-32 px-8">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-16 px-8 rounded-xl bg-white/5 border border-white/10 text-zinc-500 font-semibold text-lg hover:text-[#ccff00] hover:border-[#ccff00]/50 hover:bg-[#ccff00]/5 hover:shadow-[0_0_20px_rgba(204,255,0,0.1)] transition-all duration-300 cursor-default"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
