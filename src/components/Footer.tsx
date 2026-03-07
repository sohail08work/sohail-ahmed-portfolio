export default function Footer() {
  return (
    <footer className="py-12 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-white mb-1">
            Sohail Ahmed<span className="text-[#ccff00]">.</span>
          </h2>
          <p className="text-sm text-zinc-500">SEO + Performance Marketing</p>
        </div>

        <nav className="flex flex-wrap justify-center items-center gap-6 text-sm font-medium text-zinc-400">
          <a href="#about" className="hover:text-white transition-colors">
            About
          </a>
          <a href="#wins" className="hover:text-white transition-colors">
            Wins
          </a>
          <a href="#capabilities" className="hover:text-white transition-colors">
            Capabilities
          </a>
          <a
            href="#case-studies"
            className="hover:text-white transition-colors"
          >
            Case Studies
          </a>
        </nav>

        <div className="text-center md:text-right text-sm text-zinc-500 max-w-[250px]">
          SEO, paid media, and analytics with a focus on measurable outcomes.
        </div>
      </div>
    </footer>
  );
}
