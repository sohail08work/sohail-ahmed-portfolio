import { CheckCircle2 } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

export default function SelectedWins() {
  const seoWins = [
    <><AnimatedCounter value={10} suffix="+" /> keywords on page 1</>,
    <><AnimatedCounter value={30} suffix="+" /> more keywords moved to pages 2 and 3</>,
    <><AnimatedCounter value={5} suffix="K+" /> monthly traffic growth on a software project</>,
    <>DA improved from <AnimatedCounter value={9} /> to <AnimatedCounter value={34} /> in 3 months</>,
    <>#<AnimatedCounter value={1} /> ranking achieved for a commercial software term</>,
    <><AnimatedCounter value={50} suffix="+" /> high-authority backlinks acquired in 3 months</>,
    <>LCP reduced from <AnimatedCounter value={13} suffix="s" /> to <AnimatedCounter value={1.9} suffix="s" decimals={1} /></>,
    <>Bounce rate improved from <AnimatedCounter value={72} suffix="%" /> to <AnimatedCounter value={38} suffix="%" /></>,
  ];

  const performanceWins = [
    <><AnimatedCounter value={19200} suffix="+" /> call-only impressions in 30 days</>,
    <><AnimatedCounter value={535} /> high-intent tap-to-call clicks</>,
    <><AnimatedCounter value={2233} /> impressions and <AnimatedCounter value={75} /> phone-number clicks from a focused call campaign</>,
    <><AnimatedCounter value={150} suffix="K+" /> display impressions</>,
    <><AnimatedCounter value={6081} /> display clicks</>,
    <><AnimatedCounter value={3.83} suffix="%" decimals={2} /> CTR on display</>,
    <>₹<AnimatedCounter value={0.84} decimals={2} /> CPV on YouTube</>,
    <><AnimatedCounter value={4.56} suffix="%" decimals={2} /> interaction rate on video</>,
    <>Up to <AnimatedCounter value={12.32} suffix="%" decimals={2} /> interaction on high-intent search</>,
    <><AnimatedCounter value={54} suffix="K+" /> reach at around ₹<AnimatedCounter value={31} /> CPM</>,
  ];

  return (
    <section id="wins" className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <span className="text-[#ccff00] font-semibold tracking-wider uppercase text-sm mb-4 block">
            Selected Wins
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Selected outcomes across SEO and paid media.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* SEO Column */}
          <div className="bg-[#141414] rounded-3xl p-8 md:p-10 border border-white/5 hover:border-white/10 transition-colors">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-2 h-8 bg-[#ccff00] rounded-full inline-block" />
              SEO
            </h3>
            <ul className="space-y-5">
              {seoWins.map((win, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 text-zinc-300"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#ccff00] shrink-0 mt-0.5" />
                  <span className="text-lg leading-relaxed">{win}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Performance Column */}
          <div className="bg-[#141414] rounded-3xl p-8 md:p-10 border border-white/5 hover:border-white/10 transition-colors">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-2 h-8 bg-[#ccff00] rounded-full inline-block" />
              Paid Media
            </h3>
            <ul className="space-y-5">
              {performanceWins.map((win, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 text-zinc-300"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#ccff00] shrink-0 mt-0.5" />
                  <span className="text-lg leading-relaxed">{win}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
