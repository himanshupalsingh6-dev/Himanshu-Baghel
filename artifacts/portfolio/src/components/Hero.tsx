import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import gsap from 'gsap';
import { ArrowDown } from 'lucide-react';

const ROLES = ["Founder", "Developer", "Entrepreneur", "Innovator"];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);

  /* ── Parallax scroll ────────────────────────── */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const rawY1 = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const rawY2 = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const rawOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const rawScale = useTransform(scrollYProgress, [0, 0.55], [1, 0.92]);
  const y1 = useSpring(rawY1, { stiffness: 60, damping: 20 });
  const y2 = useSpring(rawY2, { stiffness: 60, damping: 20 });
  const contentOpacity = useSpring(rawOpacity, { stiffness: 80, damping: 25 });
  const contentScale  = useSpring(rawScale,   { stiffness: 80, damping: 25 });

  /* ── GSAP char reveal ───────────────────────── */
  useEffect(() => {
    if (nameRef.current) {
      const chars = nameRef.current.querySelectorAll('.char');
      gsap.fromTo(chars,
        { opacity: 0, y: 60, rotateX: -90, filter: 'blur(6px)' },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          filter: 'blur(0px)',
          duration: 1.1,
          stagger: 0.045,
          ease: 'back.out(1.7)',
          delay: 0.3,
        }
      );
    }
  }, []);

  /* ── Role cycler ────────────────────────────── */
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const name = "Himanshu Baghel";

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'smooth' });
  };

  /* ── Floating card config ───────────────────── */
  const floatCards = [
    { label: '3+', sub: 'Years Experience', color: 'text-white',       pos: 'top-1/4 left-[12%]',   deg: -6, delay: 1.5, floatDur: 4.2 },
    { label: '10+', sub: 'Projects Built',   color: 'text-blue-400',   pos: 'top-1/3 right-[12%]',  deg:  4, delay: 1.7, floatDur: 5.1 },
    { label: '2',   sub: 'Businesses',       color: 'text-purple-400', pos: 'bottom-1/4 left-[18%]', deg:  8, delay: 1.9, floatDur: 3.8 },
    { label: '50+', sub: 'Happy Clients',    color: 'text-green-400',  pos: 'bottom-1/3 right-[18%]',deg: -4, delay: 2.1, floatDur: 4.6 },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden bg-noise"
    >
      {/* ── Parallax background orbs ─────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          style={{ y: y1 }}
          animate={{ scale: [1, 1.25, 1], opacity: [0.28, 0.48, 0.28], rotate: [0, 90, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-1/4 -left-1/4 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[130px]"
        />
        <motion.div
          style={{ y: y2 }}
          animate={{ scale: [1, 1.5, 1], opacity: [0.18, 0.36, 0.18], rotate: [0, -90, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[110px]"
        />
        {/* extra subtle violet ring */}
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -40]) }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.22, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-violet-700/15 rounded-full blur-[120px]"
        />
      </div>

      {/* ── Main content — fades & scales out on scroll ── */}
      <motion.div
        style={{ opacity: contentOpacity, scale: contentScale }}
        className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col items-center text-center"
      >
        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)] animate-pulse" />
          <span className="text-xs font-medium text-slate-300 uppercase tracking-wider">Available for Projects</span>
        </motion.div>

        {/* Name — GSAP char reveal */}
        <h1
          ref={nameRef}
          className="font-display text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight text-white mb-4"
          style={{ perspective: '1000px' }}
        >
          {name.split('').map((char, i) => (
            <span key={i} className="char inline-block whitespace-pre" style={{ transformStyle: 'preserve-3d' }}>
              {char}
            </span>
          ))}
        </h1>

        {/* Role cycler */}
        <div className="h-12 md:h-16 mb-6 overflow-hidden flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={roleIndex}
              initial={{ y: 50, opacity: 0, filter: 'blur(4px)' }}
              animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
              exit={{ y: -50, opacity: 0, filter: 'blur(4px)' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-2xl md:text-4xl font-display font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
            >
              {ROLES[roleIndex]}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12"
        >
          Building the future, one product at a time.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <a
            href="#projects"
            onClick={(e) => handleScroll(e, '#projects')}
            className="relative overflow-hidden px-8 py-4 rounded-full bg-white text-black font-semibold shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all duration-300 hover:scale-105 group"
          >
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-black/10 to-transparent skew-x-12" />
            View My Work
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, '#contact')}
            className="px-8 py-4 rounded-full bg-transparent border border-white/20 text-white font-semibold hover:bg-white/8 hover:border-white/40 hover:scale-105 transition-all duration-300"
          >
            Get in Touch
          </a>
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        style={{ opacity: contentOpacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-xs text-slate-500 uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="text-slate-500 w-4 h-4" />
        </motion.div>
      </motion.div>

      {/* ── Floating stat cards (desktop) ───────── */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none z-10">
        {floatCards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.75, filter: 'blur(6px)' }}
            animate={[
              { opacity: 1, scale: 1, filter: 'blur(0px)', transition: { delay: card.delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
              { y: [0, -12, 0], transition: { delay: card.delay + 0.8, duration: card.floatDur, repeat: Infinity, ease: 'easeInOut' } },
            ]}
            style={{ rotate: card.deg }}
            className={`absolute ${card.pos} glass-card p-4 rounded-xl`}
          >
            <div className={`text-2xl font-display font-bold ${card.color}`}>{card.label}</div>
            <div className="text-xs text-slate-400">{card.sub}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
