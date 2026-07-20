import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Smartphone, Layers, CloudCog, Lightbulb, Rocket } from 'lucide-react';

const services = [
  {
    title: "Full-Stack Web Dev",
    description: "End-to-end web applications built with modern frameworks for scale and speed.",
    icon: <Code2 className="w-8 h-8 text-blue-400" />
  },
  {
    title: "Mobile App Dev",
    description: "Cross-platform mobile applications that deliver native-like experiences.",
    icon: <Smartphone className="w-8 h-8 text-purple-400" />
  },
  {
    title: "UI/UX Design",
    description: "Intuitive, pixel-perfect interfaces designed to engage and convert users.",
    icon: <Layers className="w-8 h-8 text-pink-400" />
  },
  {
    title: "Cloud Architecture",
    description: "Scalable, secure, and cost-effective cloud infrastructure design and deployment.",
    icon: <CloudCog className="w-8 h-8 text-sky-400" />
  },
  {
    title: "Technical Consulting",
    description: "Strategic advice on tech stacks, architecture, and team scaling for startups.",
    icon: <Lightbulb className="w-8 h-8 text-yellow-400" />
  },
  {
    title: "SaaS Product Dev",
    description: "From MVP to production-ready SaaS platforms with billing and multi-tenancy.",
    icon: <Rocket className="w-8 h-8 text-emerald-400" />
  }
];

export function Services() {
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
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="services" className="py-24 relative z-10 bg-[#050505]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">What I Do</h2>
          <p className="text-lg text-slate-400">
            Comprehensive technical services to transform your ideas into reality.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="glass-card p-8 group hover:bg-white/[0.08] transition-colors duration-500"
            >
              <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-display font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
