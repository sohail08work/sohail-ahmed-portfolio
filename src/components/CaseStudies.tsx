import { motion } from "motion/react";

export default function CaseStudies() {
  const cases = [
    {
      title: "Software SEO Growth in a Competitive B2B Category",
      copy: "For a software company operating in a competitive space, the focus was to improve authority, fix technical gaps, and build intent-led landing pages that could rank for commercial keywords. The work covered content revamps, internal linking, schema, backlink acquisition, and technical cleanup. Within three months, domain authority moved from 9 to 34, a major target keyword reached the #1 position, and multiple commercial terms entered page 1.",
      image: "/proof-seo-ranking-growth.png",
      assets: "Domain authority growth, backlink profile, and referring website proof",
      caption: "Domain authority and backlink growth",
      imageFit: "contain",
    },
    {
      title: "Website Speed Optimization That Improved UX and SEO Readiness",
      copy: "This project focused on reducing load time and improving the site’s technical foundation. The work included image compression, lazy loading, script cleanup, browser caching, CDN setup, server-side improvements, and shifting critical tracking into GTM. The result was a major improvement in Core Web Vitals, with LCP dropping from 13 seconds to 1.9 seconds, mobile PageSpeed moving from 67 to 99, desktop from 61 to 97, and bounce rate falling from 72% to 38%.",
      image: "/proof-pagespeed-before-after.png",
      assets: "Core Web Vitals, PageSpeed scores, and performance improvements",
      caption: "Core Web Vitals and PageSpeed improvement",
      imageFit: "contain"
    },
    {
      title: "SEO Execution for a Software Platform",
      copy: "For a software project focused on organic growth, I handled audits, on-page improvements, keyword research, link building, competitor review, and reporting. The outcome included page 1 rankings for more than 10 keywords, 30+ additional keywords reaching pages 2 and 3, and traffic growth of over 5K per month.",
      image: "/proof-seo-traffic-data.png",
      assets: "Organic traffic growth and keyword ranking progress",
      caption: "Organic traffic and ranking progress",
      imageFit: "contain"
    },
    {
      title: "Google Search Call Campaigns for a High-Intent Lead Funnel",
      copy: "These campaigns were built to capture users ready to call, not just browse. The setup focused on high-intent search behavior, call-led ad formats, and stronger direct response. One campaign delivered 2,233 impressions and 75 phone-number clicks. Another produced 19,274 impressions and 535 clicks in 30 days, creating a clear path to inbound enquiries.",
      image: "/proof-search-call-campaign-1.png",
      assets: "Call campaign impressions, clicks, and phone enquiry proof",
      caption: "Search call campaign performance snapshot",
      imageFit: "contain"
    },
    {
      title: "Display Campaigns Built for Visibility and Qualified Clicks",
      copy: "This campaign was designed to keep the brand visible across relevant placements while still driving meaningful traffic back to the site. Over the last 30 days, it generated 158,627 impressions, 6,081 clicks, and a 3.83% CTR, supported by multiple banner variations and display placements.",
      image: "/proof-display-campaign.png",
      assets: "Display campaign impressions, clicks, and CTR proof",
      caption: "Display campaign impressions, clicks, and CTR",
      imageFit: "contain"
    },
    {
      title: "YouTube and Search Working Together for Interior Enquiries",
      copy: "This campaign used video to build attention and search to capture stronger intent. The paid mix delivered 11,573 engagements or views at ₹0.84 average cost, a 4.56% interaction rate, 375 search clicks at ₹12.65 average cost, and another search campaign reached a 12.32% interaction rate. The strength of the setup came from using different channels for different stages of intent.",
      image: "/proof-youtube-search-interior.png",
      assets: "Video engagement, interaction rate, and search campaign proof",
      caption: "YouTube and Search campaign efficiency",
      imageFit: "contain"
    },
    {
      title: "Meta Awareness Plus Search Support for a Luxury Homes Brand",
      copy: "For this campaign, the objective was to scale visibility efficiently while still supporting lead capture through search. The awareness campaign reached 54,662 people with 55,582 impressions at roughly ₹31 CPM, while supporting search placements maintained presence for high-intent prospects.",
      image: "/proof-meta-luxury-homes.png",
      assets: "Meta campaign reach, impressions, and search support proof",
      caption: "Meta awareness reach and impressions",
    },
    {
      title: "Brand Visibility Inside Google AI Overview",
      copy: "This proof point shows search visibility extending beyond traditional blue links. The brand appeared inside Google’s AI Overview for a commercial LED-related query, which strengthened perceived authority and increased visibility in a newer search surface.",
      image: "/proof-ai-overview.png",
      assets: "AI Overview visibility and branded search presence proof",
      caption: "Visibility inside Google AI Overview",
      imageFit: "contain"
    },
  ];

  return (
    <section
      id="case-studies"
      className="py-24 md:py-32 bg-[#141414] border-y border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-20 md:text-center max-w-3xl mx-auto">
          <span className="text-[#ccff00] font-semibold tracking-wider uppercase text-sm mb-4 block">
            Case Studies
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Selected work and outcomes.
          </h2>
        </div>

        <div className="space-y-24 md:space-y-32">
          {cases.map((study, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`flex flex-col gap-12 lg:gap-20 items-center ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-1/2 relative group">
                  <div className="absolute inset-0 bg-[#ccff00]/20 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#0a0a0a] aspect-[4/3]">
                    <img
                      src={study.image}
                      alt={study.title}
                      referrerPolicy="no-referrer"
                      className={`w-full h-full ${(study as any).imageFit === 'contain' ? 'object-contain p-8' : 'object-cover'} opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700`}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-6 left-6 right-6 flex flex-col items-start gap-2">
                      <div className="px-4 py-2 rounded-xl bg-black/50 backdrop-blur-md border border-white/10 text-sm text-zinc-300 inline-block">
                        Proof: {study.assets}
                      </div>
                      {(study as any).caption && (
                        <div className="px-4 py-2 rounded-xl bg-[#ccff00]/10 backdrop-blur-md border border-[#ccff00]/20 text-sm text-[#ccff00] font-medium inline-block">
                          {(study as any).caption}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Text Side */}
                <div className="w-full lg:w-1/2 space-y-8">
                  <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                    {study.title}
                  </h3>
                  <p className="text-lg text-zinc-400 leading-relaxed">
                    {study.copy}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
