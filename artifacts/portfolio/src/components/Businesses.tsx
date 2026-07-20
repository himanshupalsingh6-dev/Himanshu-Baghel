import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const businesses = [
  {
    name: "Zenovix Technologies",
    shortName: "Z",
    glow: "rgba(59,130,246,0.15)",
    borderGlow: "group-hover:border-blue-500/40",
    textGlow: "text-blue-400",
    tagline: "Engineering Tomorrow",
    description: "A software development and IT consulting firm delivering cutting-edge digital solutions. From web and mobile applications to cloud architecture, Zenovix helps startups and enterprises build scalable, future-ready technology.",
    services: ["Custom Software Dev", "Mobile Apps", "Cloud Solutions", "IT Consulting"]
  },
  {
    name: "QuickPress",
    shortName: "QP",
    glow: "rgba(168,85,247,0.15)",
    borderGlow: "group-hover:border-purple-500/40",
    textGlow: "text-purple-400",
    tagline: "Publish. Grow. Succeed.",
    description: "A modern content publishing platform empowering creators, bloggers, and businesses to launch beautiful, fast, SEO-optimized websites and blogs — without the technical complexity.",
    services: ["Content Publishing", "SEO Optimization", "Fast Hosting", "Creator Tools"]
  }
];

export function Businesses() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="businesses" className="py-24 relative z-10 bg-[#050505]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Ventures</h2>
          <p className="text-lg text-slate-400">
            Beyond writing code, I build companies. These are the ventures I've founded to scale my impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" ref={ref}>
          {businesses.map((biz, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              className={`glass-card p-8 md:p-10 group transition-all duration-500 ${biz.borderGlow} hover:-translate-y-2`}
              style={{
                background: `linear-gradient(to bottom, rgba(255,255,255,0.03), rgba(255,255,255,0.01)), radial-gradient(circle at top right, ${biz.glow}, transparent 50%)`
              }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 shadow-inner group-hover:scale-110 transition-transform duration-500">
                  <span className={`font-display font-bold text-2xl ${biz.textGlow}`}>{biz.shortName}</span>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">{biz.name}</h3>
                  <p className={`text-sm font-medium uppercase tracking-wider ${biz.textGlow}`}>{biz.tagline}</p>
                </div>
              </div>

              <p className="text-slate-400 mb-8 leading-relaxed h-auto md:h-24">
                {biz.description}
              </p>

              <div className="space-y-3 mb-10">
                {biz.services.map((service, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-slate-600 group-hover:text-white/50 transition-colors" />
                    <span className="text-slate-300 font-medium">{service}</span>
                  </div>
                ))}
              </div>

              <a 
                href="#" 
                className="inline-flex items-center gap-2 text-sm font-semibold text-white uppercase tracking-wider group/btn"
              >
                Visit Website
                <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
