import { motion } from "motion/react";

export default function HowIWork() {
  const steps = [
    {
      num: "01",
      title: "Discovery & Audit",
      text: "Audit the site, search presence, landing pages, tracking, and campaign setup.",
    },
    {
      num: "02",
      title: "Strategy & Roadmap",
      text: "Identify where the biggest lift can come from, whether that is technical SEO, content, paid media, or conversion friction.",
    },
    {
      num: "03",
      title: "Technical & Tracking Setup",
      text: "Execute improvements across pages, campaigns, tracking, and reporting.",
    },
    {
      num: "04",
      title: "Execution & Optimization",
      text: "Measure what changes in rankings, traffic quality, engagement, and lead flow.",
    },
    {
      num: "05",
      title: "Measurement & Reporting",
      text: "Refine continuously based on what is actually moving performance.",
    },
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
    <section className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          className="mb-20 md:text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#ccff00] font-semibold tracking-wider uppercase text-sm mb-4 block">
            How I Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            A structured approach to growth.
          </h2>
        </motion.div>

        <div className="relative">
          {/* Horizontal line for desktop */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-white/10" />

          <motion.div 
            className="grid lg:grid-cols-5 gap-12 lg:gap-6 relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {steps.map((step, index) => (
              <motion.div key={index} variants={itemVariants} className="relative group">
                {/* Vertical line for mobile */}
                {index !== steps.length - 1 && (
                  <div className="lg:hidden absolute top-24 left-12 bottom-[-48px] w-px bg-white/10" />
                )}

                <div className="flex lg:flex-col items-start gap-6 lg:gap-8">
                  <div className="w-24 h-24 lg:w-24 lg:h-24 rounded-full bg-[#141414] border border-white/10 flex items-center justify-center shrink-0 text-2xl font-bold text-[#ccff00] group-hover:bg-[#ccff00] group-hover:text-black transition-colors z-10">
                    {step.num}
                  </div>
                  <div className="pt-4 lg:pt-0">
                    <h3 className="text-xl font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed">{step.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
