import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Layout, Server, Cloud, Database } from 'lucide-react';

const skills = [
  {
    category: "Frontend",
    icon: <Layout className="w-6 h-6 text-blue-400" />,
    items: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 80 }
    ]
  },
  {
    category: "Backend",
    icon: <Server className="w-6 h-6 text-purple-400" />,
    items: [
      { name: "Node.js", level: 88 },
      { name: "Express", level: 90 },
      { name: "Python", level: 75 },
      { name: "REST APIs", level: 92 },
      { name: "GraphQL", level: 80 }
    ]
  },
  {
    category: "Cloud & DevOps",
    icon: <Cloud className="w-6 h-6 text-sky-400" />,
    items: [
      { name: "AWS", level: 82 },
      { name: "Docker", level: 78 },
      { name: "Vercel", level: 95 },
      { name: "Nginx", level: 70 },
      { name: "CI/CD", level: 85 }
    ]
  },
  {
    category: "Database",
    icon: <Database className="w-6 h-6 text-green-400" />,
    items: [
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 90 },
      { name: "Redis", level: 75 },
      { name: "Supabase", level: 82 }
    ]
  }
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="skills" className="py-24 relative z-10 bg-[#050505]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Technical Arsenal</h2>
            <p className="text-lg text-slate-400 max-w-xl">
              A comprehensive toolkit for building scalable, high-performance web applications and digital products.
            </p>
          </div>
        </div>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {skills.map((skillGroup, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="glass-card p-6 md:p-8 group hover:border-white/20 transition-colors"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-lg bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                  {skillGroup.icon}
                </div>
                <h3 className="text-2xl font-display font-semibold text-white">{skillGroup.category}</h3>
              </div>

              <div className="space-y-5">
                {skillGroup.items.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                      <span className="text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.2 + (sIdx * 0.1), ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
