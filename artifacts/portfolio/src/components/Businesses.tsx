import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, CheckCircle2, Building2, Rocket, ShoppingBag, Globe } from 'lucide-react';

const businesses = [
  {
    name: "Zenovix Technologies",
    shortName: "Z",
    icon: <Rocket className="w-7 h-7" />,
    category: "Digital Solutions & Software Development",
    tagline: "Engineering Tomorrow",
    description:
      "A technology-driven digital agency specializing in premium websites, web applications, mobile apps, AI automation, business software, and custom digital solutions. Our mission is to help startups, entrepreneurs, and businesses establish a powerful online presence through modern technology and exceptional design.",
    services: [
      "Premium Website Development",
      "Web Application Development",
      "Android App Development",
      "AI & WhatsApp Automation",
      "UI/UX Design",
      "Custom Business Software",
    ],
    glow: "rgba(59,130,246,0.18)",
    gradientTop: "from-blue-500/20 via-transparent to-transparent",
    borderGlow: "group-hover:border-blue-500/40",
    iconBg: "bg-blue-500/15 border-blue-500/20",
    iconColor: "text-blue-400",
    categoryColor: "text-blue-400",
    checkColor: "text-blue-500/60 group-hover:text-blue-400/80",
    ctaColor: "hover:text-blue-300",
    topStrip: "from-blue-500 via-blue-400 to-cyan-400",
  },
  {
    name: "QuickPress",
    shortName: "QP",
    icon: <ShoppingBag className="w-7 h-7" />,
    category: "Smart Laundry & On-Demand Services Platform",
    tagline: "Simplify. Track. Deliver.",
    description:
      "A next-generation technology platform designed to simplify laundry and everyday services through digital innovation. It connects customers, partners, riders, and administrators in one seamless ecosystem — offering real-time order tracking, secure management, and a premium user experience.",
    services: [
      "Pickup & Delivery",
      "Real-Time Order Tracking",
      "Multi-Role Platform",
      "Partner & Rider Management",
      "Smart Notifications",
      "Secure Digital Experience",
    ],
    glow: "rgba(139,92,246,0.18)",
    gradientTop: "from-purple-500/20 via-transparent to-transparent",
    borderGlow: "group-hover:border-purple-500/40",
    iconBg: "bg-purple-500/15 border-purple-500/20",
    iconColor: "text-purple-400",
    categoryColor: "text-purple-400",
    checkColor: "text-purple-500/60 group-hover:text-purple-400/80",
    ctaColor: "hover:text-purple-300",
    topStrip: "from-purple-500 via-violet-400 to-fuchsia-400",
  },
];

export function Businesses() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const parentRef = useRef(null);
  const parentInView = useInView(parentRef, { once: true, margin: "-60px" });

  return (
    <section id="businesses" className="py-24 relative z-10 bg-[#050505]">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-slate-400 uppercase tracking-widest mb-6">
            <Building2 className="w-3 h-3 text-amber-400" />
            My Ventures
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">My Businesses</h2>
          <p className="text-lg text-slate-400">
            Beyond writing code, I build companies. These are the ventures shaping the future of digital technology in India and beyond.
          </p>
        </motion.div>

        {/* PAL GROUP Parent Banner */}
        <motion.div
          ref={parentRef}
          initial={{ opacity: 0, y: 24 }}
          animate={parentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.7 }}
          className="mb-8 glass-card p-6 md:p-8 border border-amber-500/20 bg-gradient-to-r from-amber-500/8 via-transparent to-transparent relative overflow-hidden"
        >
          {/* Top accent strip */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 opacity-60" />

          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="flex items-center gap-4 shrink-0">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/15 border border-amber-500/25 flex items-center justify-center">
                <Building2 className="w-7 h-7 text-amber-400" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-amber-400 font-medium mb-0.5">Parent Organization</div>
                <h3 className="text-xl md:text-2xl font-display font-bold text-white">PAL GROUP PRIVATE LIMITED</h3>
              </div>
            </div>

            <div className="sm:border-l sm:border-white/10 sm:pl-6 flex-1">
              <p className="text-sm text-slate-400 leading-relaxed">
                The parent organization behind all digital ventures — focused on building innovative technology solutions and modern businesses that solve real-world problems. Developing brands that improve everyday life and empower businesses across India and beyond.
              </p>
            </div>

            <div className="shrink-0 flex flex-col gap-2 text-sm">
              {["Zenovix Technologies", "QuickPress"].map((brand, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-400">
                  <div className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-blue-400' : 'bg-purple-400'}`} />
                  {brand}
                </div>
              ))}
            </div>
          </div>

          {/* Vision note */}
          <div className="mt-5 pt-5 border-t border-white/5 flex items-start gap-3">
            <Globe className="w-4 h-4 text-amber-400/70 mt-0.5 shrink-0" />
            <p className="text-xs text-slate-500 leading-relaxed italic">
              "To build technology-driven brands that improve everyday life, empower businesses, and create innovative digital experiences for people across India and beyond."
            </p>
          </div>
        </motion.div>

        {/* Business Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" ref={ref}>
          {businesses.map((biz, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className={`glass-card group transition-all duration-500 ${biz.borderGlow} overflow-hidden`}
              style={{
                background: `linear-gradient(to bottom right, rgba(255,255,255,0.03), rgba(255,255,255,0.01)), radial-gradient(circle at top right, ${biz.glow}, transparent 55%)`
              }}
            >
              {/* Top gradient strip */}
              <div className={`absolute top-0 inset-x-0 h-px bg-gradient-to-r ${biz.topStrip} opacity-70`} />

              <div className="p-7 md:p-9 flex flex-col h-full">
                {/* Header */}
                <div className="flex items-start gap-5 mb-6">
                  <div className={`w-14 h-14 rounded-2xl ${biz.iconBg} border flex items-center justify-center ${biz.iconColor} shrink-0 group-hover:scale-110 transition-transform duration-400`}>
                    {biz.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-2xl font-display font-bold text-white mb-1">{biz.name}</h3>
                    <p className={`text-xs font-semibold uppercase tracking-widest ${biz.categoryColor}`}>{biz.tagline}</p>
                    <p className="text-xs text-slate-500 mt-1">{biz.category}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed mb-7 flex-grow">
                  {biz.description}
                </p>

                {/* Services */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-7">
                  {biz.services.map((service, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2.5">
                      <CheckCircle2 size={15} className={`shrink-0 transition-colors ${biz.checkColor}`} />
                      <span className="text-sm text-slate-300">{service}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="pt-6 border-t border-white/8">
                  <a
                    href="#contact"
                    className={`inline-flex items-center gap-2 text-sm font-semibold text-slate-300 uppercase tracking-wider group/cta transition-colors ${biz.ctaColor}`}
                    data-testid={`link-business-${idx}`}
                  >
                    Get in Touch
                    <ArrowRight size={15} className="group-hover/cta:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
