import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  Github, Linkedin, Twitter, Mail, Phone,
  ArrowRight, CheckCircle2, MessageSquare,
  MapPin, Send, Sparkles, Instagram
} from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  subject: z.string().min(3, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

const contactInfo = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: 'Email',
    value: 'himanshupalsingh6@gmail.com',
    href: 'mailto:himanshupalsingh6@gmail.com',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10 border-blue-500/20',
    hoverBg: 'hover:bg-blue-500/20 hover:border-blue-500/40',
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: 'Phone / WhatsApp',
    value: '+91 92587 30561',
    href: 'https://wa.me/919258730561',
    color: 'text-green-400',
    bg: 'bg-green-500/10 border-green-500/20',
    hoverBg: 'hover:bg-green-500/20 hover:border-green-500/40',
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: 'Alternate Number',
    value: '+91 99978 74502',
    href: 'tel:+919997874502',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10 border-cyan-500/20',
    hoverBg: 'hover:bg-cyan-500/20 hover:border-cyan-500/40',
  },
  {
    icon: <MessageSquare className="w-5 h-5" />,
    label: 'WhatsApp Chat',
    value: 'Message on WhatsApp',
    href: 'https://wa.me/919258730561',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10 border-emerald-500/20',
    hoverBg: 'hover:bg-emerald-500/20 hover:border-emerald-500/40',
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: 'Location',
    value: 'Kasganj, Uttar Pradesh, India',
    href: null,
    color: 'text-purple-400',
    bg: 'bg-purple-500/10 border-purple-500/20',
    hoverBg: '',
  },
];

const socials = [
  {
    icon: <Github className="w-5 h-5" />,
    label: 'GitHub',
    href: 'https://github.com',
    color: 'hover:text-white hover:bg-white/10 hover:border-white/20',
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    color: 'hover:text-blue-400 hover:bg-blue-500/10 hover:border-blue-500/30',
  },
  {
    icon: <Twitter className="w-5 h-5" />,
    label: 'Twitter / X',
    href: 'https://twitter.com',
    color: 'hover:text-sky-400 hover:bg-sky-500/10 hover:border-sky-500/30',
  },
  {
    icon: <Instagram className="w-5 h-5" />,
    label: 'Instagram',
    href: 'https://instagram.com',
    color: 'hover:text-pink-400 hover:bg-pink-500/10 hover:border-pink-500/30',
  },
];

const services = [
  'Website Development',
  'Web App Development',
  'AI Automation',
  'Mobile App Development',
  'UI/UX Design',
  'Business Consulting',
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(formSchema) });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Server error');
      setIsSuccess(true);
      reset();
      setTimeout(() => setIsSuccess(false), 6000);
    } catch {
      alert('Message send nahi ho saka. Seedha email karein: himanshupalsingh6@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10 bg-[#050505] overflow-hidden">

      {/* Background glow orbs */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-blue-600/6 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-purple-600/6 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-slate-400 uppercase tracking-widest mb-6">
            <Sparkles className="w-3 h-3 text-blue-400" />
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-5 leading-tight">
            Let's Build Something{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400">
              Extraordinary
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            Have a project in mind? I'm currently open to new opportunities — freelance, partnerships, or full-time roles.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">

          {/* LEFT COLUMN — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Availability badge */}
            <div className="glass-card p-6 border border-green-500/20 bg-gradient-to-br from-green-500/8 to-transparent">
              <div className="flex items-center gap-3 mb-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                </span>
                <span className="text-green-400 text-sm font-semibold tracking-wide">Available for Projects</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Currently taking on new clients and collaborations. Response time: within 24 hours.
              </p>
            </div>

            {/* Contact Info Cards */}
            {contactInfo.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    data-testid={`contact-${item.label.toLowerCase()}`}
                    className={`glass-card flex items-center gap-4 p-5 border ${item.bg} ${item.hoverBg} transition-all duration-300 group hover:-translate-y-0.5`}
                  >
                    <div className={`p-2.5 rounded-xl ${item.bg} ${item.color} border shrink-0 group-hover:scale-110 transition-transform`}>
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">{item.label}</div>
                      <div className="text-sm text-slate-200 font-medium">{item.value}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-slate-400 ml-auto group-hover:translate-x-1 transition-all" />
                  </a>
                ) : (
                  <div className={`glass-card flex items-center gap-4 p-5 border ${item.bg}`}>
                    <div className={`p-2.5 rounded-xl ${item.bg} ${item.color} border shrink-0`}>
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">{item.label}</div>
                      <div className="text-sm text-slate-200 font-medium">{item.value}</div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="glass-card p-5 border border-white/8"
            >
              <div className="text-xs text-slate-500 uppercase tracking-wider mb-4">Find Me Online</div>
              <div className="flex gap-3 flex-wrap">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`social-${s.label.toLowerCase().replace(/\s.*/, '')}`}
                    title={s.label}
                    className={`flex items-center gap-2 px-3 py-2 rounded-xl border border-white/10 text-slate-400 text-sm transition-all duration-200 ${s.color}`}
                  >
                    {s.icon}
                    <span className="text-xs font-medium">{s.label}</span>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Services I offer quick-chips */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="glass-card p-5 border border-white/8"
            >
              <div className="text-xs text-slate-500 uppercase tracking-wider mb-4">I Can Help With</div>
              <div className="flex flex-wrap gap-2">
                {services.map((s, i) => (
                  <span key={i} className="text-xs px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-slate-400">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="glass-card p-7 md:p-10 border border-white/10 h-full relative overflow-hidden">
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-blue-500/10 via-purple-500/5 to-transparent pointer-events-none rounded-bl-full" />
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center text-center h-full min-h-[420px] gap-5"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
                      className="w-20 h-20 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center"
                    >
                      <CheckCircle2 className="w-10 h-10 text-green-400" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-display font-bold text-white mb-2">Message Sent!</h3>
                      <p className="text-slate-400 max-w-sm">
                        Thank you for reaching out. I'll get back to you within 24 hours.
                      </p>
                    </div>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 6, ease: 'linear' }}
                      className="h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full max-w-xs"
                    />
                    <p className="text-xs text-slate-600">Auto-closing in a few seconds…</p>
                  </motion.div>
                ) : (
                  <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <div className="mb-8">
                      <h3 className="text-2xl font-display font-bold text-white mb-1">Send a Message</h3>
                      <p className="text-sm text-slate-500">Fill in the details and I'll get back to you soon.</p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" data-testid="contact-form">

                      {/* Name + Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="name" className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">
                            Your Name *
                          </label>
                          <input
                            {...register('name')}
                            id="name"
                            type="text"
                            data-testid="input-name"
                            placeholder="Himanshu Baghel"
                            className="w-full bg-white/3 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/40 focus:bg-blue-500/5 transition-all"
                          />
                          {errors.name && (
                            <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                              <span className="w-1 h-1 rounded-full bg-red-400 inline-block" />
                              {errors.name.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">
                            Email Address *
                          </label>
                          <input
                            {...register('email')}
                            id="email"
                            type="email"
                            data-testid="input-email"
                            placeholder="you@example.com"
                            className="w-full bg-white/3 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/40 focus:bg-blue-500/5 transition-all"
                          />
                          {errors.email && (
                            <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                              <span className="w-1 h-1 rounded-full bg-red-400 inline-block" />
                              {errors.email.message}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Subject */}
                      <div>
                        <label htmlFor="subject" className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">
                          Subject *
                        </label>
                        <input
                          {...register('subject')}
                          id="subject"
                          type="text"
                          data-testid="input-subject"
                          placeholder="Website Development / App Project / Collaboration…"
                          className="w-full bg-white/3 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/40 focus:bg-blue-500/5 transition-all"
                        />
                        {errors.subject && (
                          <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                            <span className="w-1 h-1 rounded-full bg-red-400 inline-block" />
                            {errors.subject.message}
                          </p>
                        )}
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="message" className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">
                          Message *
                        </label>
                        <textarea
                          {...register('message')}
                          id="message"
                          rows={5}
                          data-testid="input-message"
                          placeholder="Tell me about your project, goals, timeline, and budget…"
                          className="w-full bg-white/3 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/40 focus:bg-blue-500/5 transition-all resize-none"
                        />
                        {errors.message && (
                          <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                            <span className="w-1 h-1 rounded-full bg-red-400 inline-block" />
                            {errors.message.message}
                          </p>
                        )}
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        data-testid="button-submit"
                        className="relative w-full py-4 rounded-xl font-semibold text-sm overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300"
                      >
                        {/* Gradient bg */}
                        <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 group-hover:from-blue-500 group-hover:to-violet-500 transition-all duration-300" />
                        {/* Shimmer */}
                        <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12" />
                        </span>
                        {/* Content */}
                        <span className="relative flex items-center justify-center gap-2 text-white">
                          {isSubmitting ? (
                            <>
                              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              Sending…
                            </>
                          ) : (
                            <>
                              <Send size={16} />
                              Send Message
                              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </>
                          )}
                        </span>
                      </button>

                      <p className="text-center text-xs text-slate-600">
                        No spam. Your details are safe and will never be shared.
                      </p>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
