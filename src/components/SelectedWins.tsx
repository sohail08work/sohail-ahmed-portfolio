import { CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export default function SelectedWins() {
  const seoWins = [
    "10+ keywords on page 1",
    "30+ more keywords moved to pages 2 and 3",
    "5K+ monthly traffic growth on a software project",
    "DA improved from 9 to 34 in 3 months",
    "#1 ranking achieved for a commercial software term",
    "50+ high-authority backlinks acquired in 3 months",
    "LCP reduced from 13s to 1.9s",
    "Bounce rate improved from 72% to 38%",
  ];

  const performanceWins = [
    "19,200+ call-only impressions in 30 days",
    "535 high-intent tap-to-call clicks",
    "2,233 impressions and 75 phone-number clicks from a focused call campaign",
    "150K+ display impressions",
    "6,081 display clicks",
    "3.83% CTR on display",
    "₹0.84 CPV on YouTube",
    "4.56% interaction rate on video",
    "Up to 12.32% interaction on high-intent search",
    "54K+ reach at around ₹31 CPM",
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
    <section id="wins" className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#ccff00] font-semibold tracking-wider uppercase text-sm mb-4 block">
            Selected Wins
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Selected outcomes across SEO and paid media.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* SEO Column */}
          <motion.div 
            className="bg-[#141414] rounded-3xl p-8 md:p-10 border border-white/5 hover:border-white/10 transition-colors"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-2 h-8 bg-[#ccff00] rounded-full inline-block" />
              SEO
            </h3>
            <motion.ul 
              className="space-y-5"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {seoWins.map((win, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-4 text-zinc-300"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#ccff00] shrink-0 mt-0.5" />
                  <span className="text-lg leading-relaxed">{win}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Performance Column */}
          <motion.div 
            className="bg-[#141414] rounded-3xl p-8 md:p-10 border border-white/5 hover:border-white/10 transition-colors"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-2 h-8 bg-[#ccff00] rounded-full inline-block" />
              Paid Media
            </h3>
            <motion.ul 
              className="space-y-5"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {performanceWins.map((win, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-4 text-zinc-300"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#ccff00] shrink-0 mt-0.5" />
                  <span className="text-lg leading-relaxed">{win}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
