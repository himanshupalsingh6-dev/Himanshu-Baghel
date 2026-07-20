import { useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "NeuraBoard",
    description: "AI-powered project management dashboard with predictive task scheduling.",
    tags: ["React", "OpenAI", "Node.js"],
    color: "from-blue-500/20 to-cyan-500/20",
    border: "group-hover:border-blue-500/50"
  },
  {
    title: "CryptoPulse",
    description: "Real-time crypto tracking & portfolio tool with WebSocket integrations.",
    tags: ["Next.js", "WebSocket", "Chart.js"],
    color: "from-purple-500/20 to-pink-500/20",
    border: "group-hover:border-purple-500/50"
  },
  {
    title: "ShipFast CLI",
    description: "Developer CLI tool to scaffold full-stack applications in seconds.",
    tags: ["Node.js", "TypeScript", "CLI"],
    color: "from-emerald-500/20 to-teal-500/20",
    border: "group-hover:border-emerald-500/50"
  },
  {
    title: "MindMap Pro",
    description: "Collaborative mind-mapping web application with real-time multiplayer.",
    tags: ["React", "Firebase", "Canvas API"],
    color: "from-orange-500/20 to-red-500/20",
    border: "group-hover:border-orange-500/50"
  },
  {
    title: "StoreKit",
    description: "Headless e-commerce engine designed for modern indie brands.",
    tags: ["Next.js", "Stripe", "Sanity"],
    color: "from-indigo-500/20 to-blue-500/20",
    border: "group-hover:border-indigo-500/50"
  },
  {
    title: "DevLink",
    description: "Developer portfolio builder with premium customizable templates.",
    tags: ["React", "Tailwind", "Framer Motion"],
    color: "from-fuchsia-500/20 to-purple-500/20",
    border: "group-hover:border-fuchsia-500/50"
  }
];

function ProjectCard({ project, index }: { project: any, index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={`glass-card p-6 md:p-8 h-full flex flex-col group cursor-pointer transition-colors duration-500 ${project.border}`}
      >
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ transform: "translateZ(-10px)" }}
        >
          <div className={`w-full h-full bg-gradient-to-br ${project.color} blur-2xl`} />
        </div>

        <div className="relative z-10 flex flex-col h-full" style={{ transform: "translateZ(30px)" }}>
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-2xl font-display font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all">
              {project.title}
            </h3>
            <div className="flex gap-2">
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors">
                <Github size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors">
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
          
          <p className="text-slate-400 mb-8 flex-grow">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tags.map((tag: string, i: number) => (
              <span 
                key={i} 
                className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300"
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
  return (
    <section id="projects" className="py-24 relative z-10 bg-[#050505]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Selected Work</h2>
            <p className="text-lg text-slate-400 max-w-xl">
              A collection of products I've built, focusing on clean code, exceptional user experiences, and solving real problems.
            </p>
          </div>
          <a href="#" className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center gap-2 group transition-colors">
            View Github Profile
            <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
