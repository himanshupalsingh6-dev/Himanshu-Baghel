import { useRef } from 'react';
import { motion, useMotionValue, useTransform, useInView } from 'framer-motion';
import { ExternalLink, Zap, Rocket, Globe, Bot, Layout } from 'lucide-react';

const projects = [
  {
    title: "QuickPress",
    subtitle: "Smart Laundry & On-Demand Service Platform",
    description: "An all-in-one laundry and home service platform enabling customers to book pickup & delivery, track orders in real time, and enjoy a seamless digital experience. Includes dedicated apps for Customers, Partners, Riders, and Admin.",
    highlights: ["Real-time Order Tracking", "Multi-Role Dashboard", "Live Notifications", "Secure Authentication", "Mobile-Friendly Design"],
    tags: ["React", "Next.js", "Firebase", "MongoDB", "Node.js", "Express", "Tailwind CSS"],
    icon: <Zap className="w-6 h-6" />,
    color: "from-blue-500/25 to-cyan-500/15",
    glow: "rgba(59,130,246,0.18)",
    border: "group-hover:border-blue-500/50",
    iconBg: "bg-blue-500/15 text-blue-400",
    tagColor: "bg-blue-500/10 border-blue-500/20 text-blue-300",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    accentFrom: "from-blue-500/40",
  },
  {
    title: "Zenovix Technologies",
    subtitle: "Digital Agency & Technology Solutions",
    description: "A digital agency focused on building premium websites, web applications, AI-powered solutions, and automation tools for startups and businesses — helping brands establish a strong online presence with modern technology.",
    highlights: ["Business Websites", "Web Applications", "Android Applications", "AI Automation", "WhatsApp Automation"],
    tags: ["React", "Next.js", "TypeScript", "Firebase", "MongoDB", "Tailwind CSS"],
    icon: <Rocket className="w-6 h-6" />,
    color: "from-purple-500/25 to-violet-500/15",
    glow: "rgba(139,92,246,0.18)",
    border: "group-hover:border-purple-500/50",
    iconBg: "bg-purple-500/15 text-purple-400",
    tagColor: "bg-purple-500/10 border-purple-500/20 text-purple-300",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    accentFrom: "from-purple-500/40",
  },
  {
    title: "Business Website Collection",
    subtitle: "Professional Websites for Modern Businesses",
    description: "A collection of responsive and SEO-friendly websites for diverse industries — schools, restaurants, hospitals, coaching institutes, and local businesses — built with premium UI/UX and high-performance architecture.",
    highlights: ["Premium UI/UX", "Mobile Responsive", "Fast Performance", "SEO Optimized", "Contact & Inquiry Forms"],
    tags: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    icon: <Globe className="w-6 h-6" />,
    color: "from-emerald-500/25 to-teal-500/15",
    glow: "rgba(16,185,129,0.18)",
    border: "group-hover:border-emerald-500/50",
    iconBg: "bg-emerald-500/15 text-emerald-400",
    tagColor: "bg-emerald-500/10 border-emerald-500/20 text-emerald-300",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    accentFrom: "from-emerald-500/40",
  },
  {
    title: "AI Automation Solutions",
    subtitle: "Smart Business Automation",
    description: "Custom AI-powered automation systems that simplify repetitive business tasks — from customer support and lead management to WhatsApp communication and workflow automation.",
    highlights: ["AI Chatbots", "WhatsApp Automation", "Lead Management", "Business Workflows", "Productivity Tools"],
    tags: ["AI APIs", "Node.js", "Firebase", "JavaScript"],
    icon: <Bot className="w-6 h-6" />,
    color: "from-orange-500/25 to-amber-500/15",
    glow: "rgba(249,115,22,0.18)",
    border: "group-hover:border-orange-500/50",
    iconBg: "bg-orange-500/15 text-orange-400",
    tagColor: "bg-orange-500/10 border-orange-500/20 text-orange-300",
    badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    accentFrom: "from-orange-500/40",
  },
  {
    title: "Portfolio & Landing Pages",
    subtitle: "Modern Personal & Business Branding",
    description: "A collection of premium portfolios and landing pages built with clean design, smooth animations, and high-performance architecture — helping individuals and businesses create a powerful digital presence.",
    highlights: ["Modern Design", "Interactive Animations", "Fast Loading", "Responsive Layout", "SEO Ready"],
    tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    icon: <Layout className="w-6 h-6" />,
    color: "from-fuchsia-500/25 to-pink-500/15",
    glow: "rgba(217,70,239,0.18)",
    border: "group-hover:border-fuchsia-500/50",
    iconBg: "bg-fuchsia-500/15 text-fuchsia-400",
    tagColor: "bg-fuchsia-500/10 border-fuchsia-500/20 text-fuchsia-300",
    badgeColor: "bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/20",
    accentFrom: "from-fuchsia-500/40",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-120, 120], [8, -8]);
  const rotateY = useTransform(x, [-120, 120], [-8, 8]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set(e.clientX - (rect.left + rect.width / 2));
    y.set(e.clientY - (rect.top + rect.height / 2));
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  /* Column index for alternating entry direction */
  const col = index % 3;
  const entryX = col === 0 ? -30 : col === 2 ? 30 : 0;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 70, x: entryX, scale: 0.9, rotateX: 12, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1, rotateX: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.75,
        delay: index * 0.09,
        ease: [0.21, 1.02, 0.73, 1],
      }}
      style={{ perspective: 1200 }}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className={`glass-card h-full flex flex-col group cursor-default transition-all duration-500 ${project.border} overflow-hidden`}
      >
        {/* Hover glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at 50% 0%, ${project.glow} 0%, transparent 70%)` }}
        />

        {/* Top accent strip */}
        <div className={`absolute top-0 inset-x-0 h-px bg-gradient-to-r ${project.color} opacity-60`} />
        {/* Bottom shimmer on hover */}
        <div className={`absolute bottom-0 inset-x-0 h-px bg-gradient-to-r ${project.accentFrom} to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />

        <div className="relative z-10 flex flex-col h-full p-6 md:p-7" style={{ transform: 'translateZ(20px)' }}>

          {/* Header */}
          <div className="flex items-start gap-4 mb-5">
            <div className="flex items-center gap-3">
              <div className={`p-2.5 rounded-xl ${project.iconBg} shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                {project.icon}
              </div>
              <div>
                <h3 className="text-lg font-display font-bold text-white leading-tight">{project.title}</h3>
                <p className="text-xs text-slate-500 mt-0.5 leading-snug">{project.subtitle}</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-slate-400 leading-relaxed mb-5 flex-grow">
            {project.description}
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.highlights.map((h, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.09 + i * 0.04 + 0.3 }}
                className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-lg border ${project.badgeColor}`}
              >
                <span className="w-1 h-1 rounded-full bg-current opacity-70 inline-block" />
                {h}
              </motion.span>
            ))}
          </div>

          {/* Tech tags */}
          <div className="pt-4 border-t border-white/5 flex flex-wrap gap-1.5 mt-auto">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${project.tagColor} bg-white/5`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' });

  return (
    <section id="projects" className="py-24 relative z-10 bg-[#050505]">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* ── Header ── */}
        <div ref={headerRef} className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-slate-400 uppercase tracking-widest mb-6"
            >
              <Rocket className="w-3 h-3 text-purple-400" />
              Featured Work
            </motion.div>

            <motion.h2
              initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0 }}
              animate={headerInView ? { clipPath: 'inset(0 0% 0 0)', opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold text-white mb-4"
            >
              Selected Projects
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
              className="text-lg text-slate-400 max-w-xl"
            >
              Real products built to solve real problems — focused on clean code, exceptional UX, and lasting impact.
            </motion.p>
          </div>

          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            animate={headerInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
            className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center gap-2 group transition-colors shrink-0"
          >
            View GitHub Profile
            <ExternalLink size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
        </div>

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
