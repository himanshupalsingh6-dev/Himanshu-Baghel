import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Layout, Server, Database, Smartphone,
  Brain, Cloud, Wrench, Heart, Globe, BookOpen, Sparkles
} from 'lucide-react';

const skillCategories = [
  {
    category: "Frontend Development",
    icon: <Layout className="w-5 h-5" />,
    color: "blue",
    gradient: "from-blue-500/20 to-blue-600/5",
    border: "border-blue-500/20",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
    tagColor: "bg-blue-500/10 text-blue-300 border-blue-500/20",
    items: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React.js", "Next.js", "Tailwind CSS", "Responsive Web Design", "UI/UX Development"]
  },
  {
    category: "Backend Development",
    icon: <Server className="w-5 h-5" />,
    color: "purple",
    gradient: "from-purple-500/20 to-purple-600/5",
    border: "border-purple-500/20",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-400",
    tagColor: "bg-purple-500/10 text-purple-300 border-purple-500/20",
    items: ["Node.js", "Express.js", "REST API Development", "Authentication & Authorization", "Firebase Authentication"]
  },
  {
    category: "Database",
    icon: <Database className="w-5 h-5" />,
    color: "green",
    gradient: "from-green-500/20 to-green-600/5",
    border: "border-green-500/20",
    iconBg: "bg-green-500/10",
    iconColor: "text-green-400",
    tagColor: "bg-green-500/10 text-green-300 border-green-500/20",
    items: ["MongoDB", "Firebase Firestore", "MySQL (Basics)"]
  },
  {
    category: "Mobile App Development",
    icon: <Smartphone className="w-5 h-5" />,
    color: "cyan",
    gradient: "from-cyan-500/20 to-cyan-600/5",
    border: "border-cyan-500/20",
    iconBg: "bg-cyan-500/10",
    iconColor: "text-cyan-400",
    tagColor: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
    items: ["Flutter", "React Native (Learning)", "Android App Development"]
  },
  {
    category: "AI & Automation",
    icon: <Brain className="w-5 h-5" />,
    color: "violet",
    gradient: "from-violet-500/20 to-violet-600/5",
    border: "border-violet-500/20",
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-400",
    tagColor: "bg-violet-500/10 text-violet-300 border-violet-500/20",
    items: ["AI Chatbots", "WhatsApp Automation", "Prompt Engineering", "AI Workflow Design", "Business Process Automation"]
  },
  {
    category: "Cloud & Deployment",
    icon: <Cloud className="w-5 h-5" />,
    color: "sky",
    gradient: "from-sky-500/20 to-sky-600/5",
    border: "border-sky-500/20",
    iconBg: "bg-sky-500/10",
    iconColor: "text-sky-400",
    tagColor: "bg-sky-500/10 text-sky-300 border-sky-500/20",
    items: ["Firebase", "Vercel", "Netlify", "GitHub Pages"]
  },
  {
    category: "Tools & Technologies",
    icon: <Wrench className="w-5 h-5" />,
    color: "orange",
    gradient: "from-orange-500/20 to-orange-600/5",
    border: "border-orange-500/20",
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-400",
    tagColor: "bg-orange-500/10 text-orange-300 border-orange-500/20",
    items: ["Git & GitHub", "VS Code", "Figma", "Postman", "npm", "Canva"]
  },
  {
    category: "Soft Skills",
    icon: <Heart className="w-5 h-5" />,
    color: "rose",
    gradient: "from-rose-500/20 to-rose-600/5",
    border: "border-rose-500/20",
    iconBg: "bg-rose-500/10",
    iconColor: "text-rose-400",
    tagColor: "bg-rose-500/10 text-rose-300 border-rose-500/20",
    items: ["Problem Solving", "Leadership", "Team Collaboration", "Communication", "Project Planning", "Time Management", "Creative Thinking", "Continuous Learning"]
  },
  {
    category: "Languages",
    icon: <Globe className="w-5 h-5" />,
    color: "teal",
    gradient: "from-teal-500/20 to-teal-600/5",
    border: "border-teal-500/20",
    iconBg: "bg-teal-500/10",
    iconColor: "text-teal-400",
    tagColor: "bg-teal-500/10 text-teal-300 border-teal-500/20",
    items: ["Hindi (Native)", "English (Professional)"]
  },
];

const currentlyLearning = [
  "Advanced Next.js", "AI Agents", "Three.js", "GSAP Animations",
  "Docker", "System Design", "Cloud Computing", "Scalable Software Architecture"
];

/* ── Upgraded animation variants ── */
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.05 }
  }
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.92,
    filter: 'blur(8px)',
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.65,
      ease: [0.21, 1.02, 0.73, 1],
    },
  },
};

/* Clip-path wipe for section header text */
const wipeVariants = {
  hidden: { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
  show: {
    clipPath: 'inset(0 0% 0 0)',
    opacity: 1,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] }
  }
};

export function Skills() {
  const headerRef = useRef(null);
  const ref = useRef(null);
  const learningRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' });
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const learningInView = useInView(learningRef, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="py-24 relative z-10 bg-[#050505]">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* ── Header with clip-path wipe ── */}
        <div ref={headerRef} className="mb-16 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-slate-400 uppercase tracking-widest mb-6"
          >
            <Sparkles className="w-3 h-3 text-blue-400" />
            Capabilities
          </motion.div>

          <motion.h2
            variants={wipeVariants}
            initial="hidden"
            animate={headerInView ? 'show' : 'hidden'}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-4"
          >
            Skills & Expertise
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
            className="text-lg text-slate-400 max-w-xl"
          >
            A growing toolkit built through real-world projects, continuous learning, and a relentless drive to ship.
          </motion.p>
        </div>

        {/* ── Skill Cards Grid ── */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {skillCategories.map((group, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{
                y: -6,
                scale: 1.02,
                transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] }
              }}
              className={`glass-card p-6 group border ${group.border} hover:border-opacity-60 transition-colors duration-300 bg-gradient-to-br ${group.gradient} relative overflow-hidden`}
            >
              {/* Subtle corner glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-white/5 to-transparent" />

              <div className="flex items-center gap-3 mb-5 relative z-10">
                <div className={`p-2.5 rounded-xl ${group.iconBg} ${group.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                  {group.icon}
                </div>
                <h3 className="text-base font-semibold text-white">{group.category}</h3>
              </div>

              <div className="flex flex-wrap gap-2 relative z-10">
                {group.items.map((skill, sIdx) => (
                  <motion.span
                    key={sIdx}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.35,
                      delay: 0.3 + idx * 0.04 + sIdx * 0.03,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium border ${group.tagColor} backdrop-blur-sm`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Currently Learning ── */}
        <motion.div
          ref={learningRef}
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={learningInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="mt-10 glass-card p-8 border border-white/10 bg-gradient-to-br from-white/5 to-transparent"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Currently Learning</h3>
              <p className="text-xs text-slate-500 mt-0.5">Exploring and deepening expertise in</p>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
              </span>
              <span className="text-xs text-amber-400 font-medium">Active</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            {currentlyLearning.map((item, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, y: 16, scale: 0.88 }}
                animate={learningInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.45, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border border-amber-500/20 bg-amber-500/10 text-amber-300"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block" />
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
