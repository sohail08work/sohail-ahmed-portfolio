export default function ToolsStack() {
  const tools = [
    "GA4",
    "GTM",
    "Search Console",
    "Ahrefs",
    "Semrush",
    "Screaming Frog",
    "Looker Studio",
    "Google Ads",
    "Meta Ads Manager",
  ];

  return (
    <section className="py-24 bg-[#141414] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <span className="text-[#ccff00] font-semibold tracking-wider uppercase text-sm mb-4 block">
          Stack
        </span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-12">
          Tools I use regularly.
        </h2>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {tools.map((tool, index) => (
            <span
              key={index}
              className="px-6 py-3 rounded-full bg-[#0a0a0a] border border-white/10 text-zinc-300 font-medium hover:border-[#ccff00]/50 hover:text-white transition-colors cursor-default"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
