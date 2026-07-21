import { useEffect, useRef, useState, useCallback } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
  useInView,
} from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Download, Mail, ArrowRight, User } from 'lucide-react';
import { useCounter } from '../hooks/useCounter';
import profileImg from '@assets/ChatGPT_Image_Jul_21,_2026,_06_53_36_PM_1784640397833.png';

gsap.registerPlugin(ScrollTrigger);

// ─── Floating particles behind the photo ─────────────────────────────────────
const PARTICLES = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  size: Math.random() * 4 + 2,
  x: Math.random() * 100,
  y: Math.random() * 100,
  dur: Math.random() * 6 + 5,
  delay: Math.random() * 4,
  opacity: Math.random() * 0.35 + 0.1,
}));

const milestones = [
  { year: '2021', title: 'Started the Journey', desc: 'Curiosity led the way — began learning web development, programming, and UI/UX design through continuous practice and real-world projects.' },
  { year: '2022', title: 'First Freelance Clients', desc: 'Delivered web solutions for local businesses while studying, turning every challenge into a learning opportunity.' },
  { year: '2023', title: 'Founded QuickPress', desc: 'Created an innovative laundry and on-demand service platform with real-time tracking and seamless customer experience.' },
  { year: '2024', title: 'Founded Zenovix Technologies', desc: 'Launched a digital solutions agency helping businesses with premium websites, web apps, AI automation, and custom software.' },
];

const ROLES = ['Student', 'Founder', 'Developer', 'Entrepreneur'];

// ─── 3D Photo card ────────────────────────────────────────────────────────────
function PhotoCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Mouse-driven 3D tilt
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springConfig = { stiffness: 180, damping: 28, mass: 0.6 };
  const smoothX = useSpring(rawX, springConfig);
  const smoothY = useSpring(rawY, springConfig);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], ['-14deg', '14deg']);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], ['10deg', '-10deg']);
  const glareX = useTransform(smoothX, [-0.5, 0.5], ['0%', '100%']);
  const glareY = useTransform(smoothY, [-0.5, 0.5], ['0%', '100%']);

  // Spotlight state
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, visible: false });

  // Scroll parallax — card drifts upward as user scrolls into view
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], ['40px', '-60px']);
  const photoScale = useTransform(scrollYProgress, [0, 0.4, 1], [0.94, 1, 1.02]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    rawX.set(nx);
    rawY.set(ny);
    setSpotlight({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
      visible: true,
    });
  }, [rawX, rawY]);

  const handleMouseLeave = useCallback(() => {
    rawX.set(0);
    rawY.set(0);
    setSpotlight(s => ({ ...s, visible: false }));
  }, [rawX, rawY]);

  return (
    <div ref={sectionRef} className="flex items-center justify-center">
      <motion.div
        style={{ y: photoY, scale: photoScale }}
        className="relative w-full max-w-[420px]"
      >
        {/* ── Ambient glow behind card ── */}
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.55, 0.35] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -inset-8 rounded-[40px] blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(59,130,246,0.35) 0%, rgba(139,92,246,0.18) 55%, transparent 75%)' }}
        />

        {/* ── Floating particles ── */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none -z-10">
          {PARTICLES.map(p => (
            <motion.div
              key={p.id}
              className="absolute rounded-full bg-blue-400"
              style={{
                width: p.size,
                height: p.size,
                left: `${p.x}%`,
                top: `${p.y}%`,
                opacity: p.opacity,
              }}
              animate={{ y: [0, -18, 0], opacity: [p.opacity, p.opacity * 2.2, p.opacity] }}
              transition={{
                duration: p.dur,
                delay: p.delay,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>

        {/* ── 3D tilt wrapper ── */}
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
            perspective: '900px',
          }}
          className="relative cursor-none"
        >
          {/* Outer glow ring that pulses */}
          <motion.div
            animate={{ opacity: [0.5, 0.85, 0.5] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -inset-[3px] rounded-[28px] pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, rgba(59,130,246,0.7) 0%, rgba(139,92,246,0.5) 50%, rgba(59,130,246,0.7) 100%)',
              filter: 'blur(6px)',
            }}
          />

          {/* Glass border frame */}
          <div className="absolute -inset-[1px] rounded-[26px] border border-blue-400/30 pointer-events-none z-20" />

          {/* Photo container */}
          <div className="relative rounded-[24px] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.06)]">
            {/* Mouse-follow spotlight */}
            <motion.div
              className="absolute inset-0 z-10 pointer-events-none rounded-[24px] transition-opacity duration-300"
              style={{
                opacity: spotlight.visible ? 1 : 0,
                background: `radial-gradient(circle 200px at ${spotlight.x}% ${spotlight.y}%, rgba(255,255,255,0.10), transparent 70%)`,
              }}
            />

            {/* Glare shimmer on tilt */}
            <motion.div
              className="absolute inset-0 z-10 pointer-events-none rounded-[24px]"
              style={{
                background: `radial-gradient(circle 160px at ${glareX} ${glareY}, rgba(255,255,255,0.08), transparent 65%)`,
              }}
            />

            {/* Profile image */}
            <img
              src={profileImg}
              alt="Himanshu Baghel"
              draggable={false}
              className="w-full h-full object-cover object-top select-none"
              style={{ aspectRatio: '3/4', display: 'block' }}
            />

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 inset-x-0 h-1/4 bg-gradient-to-t from-[#050505]/60 to-transparent z-10" />
          </div>

          {/* Reflection beneath */}
          <div
            className="absolute -bottom-8 left-4 right-4 h-16 rounded-b-[24px] pointer-events-none blur-md opacity-30"
            style={{
              background: 'linear-gradient(to bottom, rgba(59,130,246,0.3), transparent)',
              transform: 'scaleY(-0.4) translateY(100%)',
            }}
          />
        </motion.div>

        {/* ── Floating badge ── */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.6, ease: 'backOut' }}
          className="absolute -right-6 top-10 z-30 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            className="glass-card px-4 py-3 rounded-2xl border border-blue-500/25 shadow-xl backdrop-blur-xl"
            style={{ background: 'rgba(59,130,246,0.08)' }}
          >
            <div className="text-xs text-blue-400 font-medium uppercase tracking-widest mb-0.5">Open to</div>
            <div className="text-sm font-semibold text-white">New Projects</div>
            <div className="mt-1 flex gap-0.5">
              {[0, 1, 2].map(i => (
                <motion.span
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-blue-400"
                  animate={{ scale: [1, 1.6, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.2, delay: i * 0.25, repeat: Infinity }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* ── Philosophy chip ── */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.1, duration: 0.6, ease: 'backOut' }}
          className="absolute -left-6 bottom-12 z-30 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="glass-card px-4 py-3 rounded-2xl border border-purple-500/25 backdrop-blur-xl"
            style={{ background: 'rgba(139,92,246,0.08)' }}
          >
            <div className="text-xs text-purple-400 font-medium mb-0.5">Philosophy</div>
            <div className="text-sm font-semibold text-white">Ship fast.</div>
            <div className="text-sm font-semibold text-white">Build with purpose.</div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

// ─── Right-side content ───────────────────────────────────────────────────────
function AboutContent({ isInView }: { isInView: boolean }) {
  const contentRef = useRef<HTMLDivElement>(null);

  // GSAP scroll-triggered stagger reveal on paragraphs
  useEffect(() => {
    if (!contentRef.current) return;
    const lines = contentRef.current.querySelectorAll('.gsap-line');
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lines,
        { opacity: 0, y: 28, skewY: 1.5 },
        {
          opacity: 1,
          y: 0,
          skewY: 0,
          stagger: 0.1,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
            once: true,
          },
        },
      );
    }, contentRef);
    return () => ctx.revert();
  }, []);

  const yearsCount = useCounter(3, 2, isInView);
  const projectsCount = useCounter(10, 2.5, isInView);
  const companiesCount = useCounter(2, 1.5, isInView);
  const clientsCount = useCounter(50, 3, isInView);

  return (
    <div ref={contentRef} className="flex flex-col gap-6">

      {/* Badge */}
      <div className="gsap-line inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-slate-400 uppercase tracking-widest">
        <User className="w-3 h-3 text-blue-400" />
        About Me
      </div>

      {/* Title */}
      <h2 className="gsap-line text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.05]">
        The Story{' '}
        <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-purple-500 bg-clip-text text-transparent">
          Behind
        </span>{' '}
        the Code
      </h2>

      {/* Bio */}
      <p className="gsap-line text-lg text-slate-300 leading-relaxed">
        Hi, I'm{' '}
        <span className="text-white font-semibold">Himanshu Pal</span> — known as{' '}
        <span className="text-blue-400 font-semibold">Himanshu Baghel</span>. A passionate
        Founder, Developer, Entrepreneur, and Innovator dedicated to building modern digital
        solutions that solve real-world problems.
      </p>
      <p className="gsap-line text-base text-slate-400 leading-relaxed">
        My journey began with curiosity about technology. While continuing my studies, I
        started learning web development, programming, and UI/UX design through continuous
        practice and real-world projects. Every challenge became an opportunity to learn,
        improve, and create something meaningful.
      </p>

      {/* Role pills */}
      <div className="gsap-line flex flex-wrap gap-2.5">
        {ROLES.map((role, i) => (
          <motion.span
            key={role}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3 + i * 0.08, duration: 0.4, ease: 'backOut' }}
            whileHover={{ scale: 1.06, y: -2 }}
            className="px-4 py-1.5 rounded-full border text-sm font-medium transition-all duration-300"
            style={{
              background: `rgba(${i % 2 === 0 ? '59,130,246' : '139,92,246'},0.1)`,
              borderColor: `rgba(${i % 2 === 0 ? '59,130,246' : '139,92,246'},0.35)`,
              color: i % 2 === 0 ? 'rgb(147,197,253)' : 'rgb(196,181,253)',
            }}
          >
            {role}
          </motion.span>
        ))}
      </div>

      {/* Mission & Vision */}
      <div className="gsap-line grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          {
            label: 'Mission',
            text: 'Empower businesses with modern technology — building digital products that are fast, beautiful, and truly useful.',
            accent: 'blue',
          },
          {
            label: 'Vision',
            text: 'Build innovative technology companies that transform everyday ideas into powerful digital experiences used worldwide.',
            accent: 'purple',
          },
        ].map(({ label, text, accent }) => (
          <motion.div
            key={label}
            whileHover={{ y: -3, scale: 1.01 }}
            transition={{ duration: 0.25 }}
            className="glass-card p-5 rounded-2xl relative overflow-hidden group"
            style={{
              borderColor: `rgba(${accent === 'blue' ? '59,130,246' : '139,92,246'},0.22)`,
              background: `rgba(${accent === 'blue' ? '59,130,246' : '139,92,246'},0.05)`,
            }}
          >
            <div className="absolute inset-x-0 top-0 h-px"
              style={{ background: `linear-gradient(to right, transparent, rgba(${accent === 'blue' ? '59,130,246' : '139,92,246'},0.6), transparent)` }}
            />
            <div
              className="text-xs uppercase tracking-widest font-semibold mb-2"
              style={{ color: accent === 'blue' ? 'rgb(96,165,250)' : 'rgb(167,139,250)' }}
            >
              {label}
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">{text}</p>
          </motion.div>
        ))}
      </div>

      {/* Stats */}
      <div className="gsap-line grid grid-cols-4 gap-4 py-4 border-y border-white/5">
        {[
          { count: yearsCount, suffix: '+', label: 'Years', color: 'text-white' },
          { count: projectsCount, suffix: '+', label: 'Projects', color: 'text-blue-400' },
          { count: companiesCount, suffix: '', label: 'Companies', color: 'text-purple-400' },
          { count: clientsCount, suffix: '+', label: 'Clients', color: 'text-emerald-400' },
        ].map(({ count, suffix, label, color }) => (
          <div key={label} className="text-center">
            <div className={`text-2xl md:text-3xl font-display font-bold ${color} mb-0.5`}>
              {count}{suffix}
            </div>
            <div className="text-xs text-slate-500 uppercase tracking-wider">{label}</div>
          </div>
        ))}
      </div>

      {/* CTA buttons */}
      <div className="gsap-line flex flex-wrap gap-3">
        <motion.a
          href="/resume.pdf"
          download
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 border border-blue-500 text-white text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-500/40"
        >
          <Download className="w-4 h-4" />
          Download Resume
        </motion.a>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.97 }}
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/15 text-slate-200 hover:bg-white/8 hover:border-blue-400/40 text-sm font-semibold transition-all duration-300 group/cta"
        >
          <Mail className="w-4 h-4" />
          Contact Me
          <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
        </motion.a>
      </div>

      {/* Timeline */}
      <div className="gsap-line relative pl-5 border-l border-white/8 space-y-6 mt-2">
        {milestones.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -16 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 + i * 0.12 }}
            className="relative"
          >
            <div className="absolute -left-[27px] top-1.5 w-3 h-3 rounded-full bg-blue-500 ring-4 ring-[#050505] shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
            <div className="text-xs text-blue-400 font-mono mb-1">{item.year}</div>
            <h4 className="text-base font-semibold text-white mb-0.5">{item.title}</h4>
            <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ─── Section ─────────────────────────────────────────────────────────────────
export function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 relative z-10 bg-[#050505] overflow-hidden"
    >
      {/* Subtle background radial */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 -left-40 w-[600px] h-[600px] rounded-full opacity-[0.06] blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,1), transparent 70%)' }}
        />
        <div
          className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] rounded-full opacity-[0.05] blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(139,92,246,1), transparent 70%)' }}
        />
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
          {/* Left: 3D photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <PhotoCard />
          </motion.div>

          {/* Right: content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <AboutContent isInView={isInView} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
