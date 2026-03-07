import { Layers, Settings, TrendingUp } from "lucide-react";

export default function WhyMe() {
  const cards = [
    {
      title: "Organic and paid in one skill set",
      text: "Most teams treat SEO and paid media separately. I connect both to improve traffic quality, search presence, and lead efficiency.",
      icon: <Layers className="w-8 h-8 text-[#ccff00]" />,
    },
    {
      title: "Strong on the technical side",
      text: "I’m comfortable working in the technical layer, from crawl issues and Core Web Vitals to landing page relevance and tracking setup. That helps me improve the parts of marketing that directly affect results.",
      icon: <Settings className="w-8 h-8 text-[#ccff00]" />,
    },
    {
      title: "Commercially focused",
      text: "The goal is not just rankings or clicks. It is to create a cleaner path from search demand and media spend to qualified enquiries.",
      icon: <TrendingUp className="w-8 h-8 text-[#ccff00]" />,
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#141414] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <span className="text-[#ccff00] font-semibold tracking-wider uppercase text-sm mb-4 block">
            Why Companies Hire Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Cross-channel execution with a technical foundation.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#0a0a0a] rounded-3xl p-8 md:p-10 border border-white/5 hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#1a1a1a] flex items-center justify-center mb-8 group-hover:bg-[#ccff00]/10 transition-colors">
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 leading-snug">
                {card.title}
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
