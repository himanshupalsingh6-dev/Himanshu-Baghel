import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useCounter } from '../hooks/useCounter';

const milestones = [
  { year: '2021', title: 'Started the Journey', desc: 'Curiosity led the way — began learning web development, programming, and UI/UX design through continuous practice and real-world projects.' },
  { year: '2022', title: 'First Freelance Clients', desc: 'Delivered web solutions for local businesses while studying, turning every challenge into a learning opportunity.' },
  { year: '2023', title: 'Founded QuickPress', desc: 'Created an innovative laundry and on-demand service platform with real-time tracking and seamless customer experience.' },
  { year: '2024', title: 'Founded Zenovix Technologies', desc: 'Launched a digital solutions agency helping businesses with premium websites, web apps, AI automation, and custom software.' },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const yearsCount = useCounter(3, 2, isInView);
  const projectsCount = useCounter(10, 2.5, isInView);
  const companiesCount = useCounter(2, 1.5, isInView);
  const clientsCount = useCounter(50, 3, isInView);

  return (
    <section id="about" className="py-24 relative z-10 bg-[#050505]">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left: Visual representation */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
              <div className="absolute inset-0 glass-card rounded-3xl overflow-hidden border border-white/10 flex items-center justify-center p-8">
                {/* Abstract geometric shapes inside */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-48 h-48 border border-white/20 rounded-full absolute"
                />
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="w-64 h-64 border border-white/10 rounded-full absolute"
                />
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl rotate-45 shadow-[0_0_40px_rgba(59,130,246,0.5)] relative z-10" />
              </div>
            </div>
            
            <div className="absolute -bottom-8 -right-8 glass-card p-6 rounded-2xl hidden md:block border-l-4 border-l-blue-500">
              <p className="text-sm text-slate-400 font-medium uppercase tracking-wider mb-1">Philosophy</p>
              <p className="text-white font-display text-xl">Ship fast. Build with purpose.</p>
            </div>
          </div>

          {/* Right: Bio and Timeline */}
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">About Me</h2>
            <p className="text-lg text-slate-400 mb-4 leading-relaxed">
              Hi, I'm <span className="text-white font-medium">Himanshu Pal</span> — though most people know me as <span className="text-blue-400 font-medium">Himanshu Baghel</span>. I'm a passionate Founder, Developer, Entrepreneur, and Innovator dedicated to building modern digital solutions that solve real-world problems.
            </p>
            <p className="text-base text-slate-500 mb-4 leading-relaxed">
              My journey began with curiosity about technology. While continuing my studies, I started learning web development, programming, and UI/UX design through continuous practice and real-world projects. Every new challenge became an opportunity to learn, improve, and create something meaningful.
            </p>
            <p className="text-base text-slate-500 mb-8 leading-relaxed">
              I believe technology should do more than just look good — it should solve problems, improve efficiency, and create real value. Every project I build focuses on performance, user experience, scalability, and clean design.
            </p>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="glass-card p-5 rounded-xl border border-blue-500/20">
                <div className="text-xs uppercase tracking-widest text-blue-400 font-medium mb-2">Mission</div>
                <p className="text-sm text-slate-300 leading-relaxed">To empower businesses with modern technology and create digital products that are fast, beautiful, and truly useful.</p>
              </div>
              <div className="glass-card p-5 rounded-xl border border-purple-500/20">
                <div className="text-xs uppercase tracking-widest text-purple-400 font-medium mb-2">Vision</div>
                <p className="text-sm text-slate-300 leading-relaxed">To build innovative technology companies that transform everyday ideas into powerful digital experiences used worldwide.</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
              <div>
                <div className="text-3xl font-display font-bold text-white mb-1">{yearsCount}+</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">Years</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-blue-400 mb-1">{projectsCount}+</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-purple-400 mb-1">{companiesCount}</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">Companies</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-green-400 mb-1">{clientsCount}+</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">Clients</div>
              </div>
            </div>

            <div className="relative pl-6 border-l border-white/10 space-y-8">
              {milestones.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                  className="relative"
                >
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-blue-500 ring-4 ring-[#050505]" />
                  <div className="text-sm text-blue-400 font-mono mb-1">{item.year}</div>
                  <h4 className="text-lg font-medium text-white mb-1">{item.title}</h4>
                  <p className="text-sm text-slate-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
