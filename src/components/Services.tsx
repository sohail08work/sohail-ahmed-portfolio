import { Search, Zap, FileText, Link2, Target, BarChart3 } from "lucide-react";
import { motion } from "motion/react";

export default function Services() {
  const services = [
    {
      title: "SEO Strategy & Audits",
      text: "Technical audits, opportunity mapping, competitor analysis, keyword planning, and execution roadmaps.",
      icon: <Search className="w-6 h-6 text-[#ccff00]" />,
    },
    {
      title: "Technical SEO & Site Performance",
      text: "Indexing fixes, crawlability, schema, internal linking, page speed, Core Web Vitals, and structure improvements.",
      icon: <Zap className="w-6 h-6 text-[#ccff00]" />,
    },
    {
      title: "On-Page SEO & Content Optimization",
      text: "Page targeting, content refreshes, metadata, search-intent alignment, and commercial landing page optimization.",
      icon: <FileText className="w-6 h-6 text-[#ccff00]" />,
    },
    {
      title: "Authority Building",
      text: "Link acquisition, guest post outreach, PR-style placements, and off-page support built around relevance and trust.",
      icon: <Link2 className="w-6 h-6 text-[#ccff00]" />,
    },
    {
      title: "Google Ads & Meta Campaigns",
      text: "Search, display, call campaigns, video, awareness, lead generation, and audience-led paid media execution.",
      icon: <Target className="w-6 h-6 text-[#ccff00]" />,
    },
    {
      title: "Performance Analytics & Tracking",
      text: "GA4, GSC, GTM, conversion tracking, reporting, and performance measurement.",
      icon: <BarChart3 className="w-6 h-6 text-[#ccff00]" />,
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
    <section id="capabilities" className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          className="mb-16 md:text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#ccff00] font-semibold tracking-wider uppercase text-sm mb-4 block">
            Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Support across SEO, paid media, and measurement.
          </h2>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-[#141414] rounded-2xl p-8 border border-white/5 hover:border-[#ccff00]/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#1a1a1a] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                {service.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed">{service.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
