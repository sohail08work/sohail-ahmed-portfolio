import { motion } from "motion/react";

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-24 bg-[#141414] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#ccff00] font-semibold tracking-wider uppercase text-sm mb-4 block">
            Stack
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-12">
            Tools I use regularly.
          </h2>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {tools.map((tool, index) => (
            <motion.span
              key={index}
              variants={itemVariants}
              className="px-6 py-3 rounded-full bg-[#0a0a0a] border border-white/10 text-zinc-300 font-medium hover:border-[#ccff00]/50 hover:text-white transition-colors cursor-default"
            >
              {tool}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
