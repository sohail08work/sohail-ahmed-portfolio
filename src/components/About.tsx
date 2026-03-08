import { motion } from "motion/react";

export default function About() {
  const tags = [
    "Technical SEO",
    "On-Page SEO",
    "Authority Building",
    "Google Ads",
    "Meta Ads",
    "Analytics & Tracking",
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
    <section id="about" className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#ccff00] font-semibold tracking-wider uppercase text-sm mb-4 block">
              About
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              An SEO and performance marketer connecting search visibility with paid acquisition.
            </h2>
          </motion.div>

          <motion.div 
            className="lg:col-span-7 space-y-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-xl text-zinc-400 leading-relaxed">
              I work across technical SEO, on-page optimization, authority building, paid search, Meta campaigns, and analytics. That lets me support both long-term organic growth and short-term demand capture, while keeping decisions grounded in GA4, Search Console, and Tag Manager.
            </p>

            <motion.div 
              className="flex flex-wrap gap-3 pt-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {tags.map((tag) => (
                <motion.span
                  key={tag}
                  variants={itemVariants}
                  className="px-4 py-2 rounded-full border border-white/10 bg-[#141414] text-sm font-medium text-zinc-300 hover:border-[#ccff00]/50 hover:text-white transition-colors cursor-default"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
