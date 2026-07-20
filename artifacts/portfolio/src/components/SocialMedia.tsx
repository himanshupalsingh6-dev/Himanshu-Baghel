import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Share2, Globe, Github, Linkedin, Mail, ExternalLink, Download, Users } from 'lucide-react';
import { businessSocials, type SocialLink } from '../data/socialLinks';

// ─── Custom SVG brand icons ───────────────────────────────────────────────────
function IconInstagram({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function IconFacebook({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function IconX({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function IconYouTube({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function IconWhatsApp({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

// ─── Map link id → icon component ────────────────────────────────────────────
function SocialIcon({ id, className }: { id: string; className?: string }) {
  switch (id) {
    case "instagram": return <IconInstagram className={className} />;
    case "facebook":  return <IconFacebook  className={className} />;
    case "x":         return <IconX         className={className} />;
    case "youtube":   return <IconYouTube   className={className} />;
    case "whatsapp":  return <IconWhatsApp  className={className} />;
    case "github":    return <Github        className={className} />;
    case "linkedin":  return <Linkedin      className={className} />;
    case "email":     return <Mail          className={className} />;
    case "website":   return <Globe         className={className} />;
    default:          return <Globe         className={className} />;
  }
}

// ─── Logo badge ───────────────────────────────────────────────────────────────
function LogoBadge({ business }: { business: typeof businessSocials[0] }) {
  const isZenovix = business.id === "zenovix";
  return (
    <motion.div
      whileHover={{ scale: 1.08, rotate: isZenovix ? 3 : -3 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative w-20 h-20 shrink-0"
    >
      {/* Outer glow ring */}
      <div
        className="absolute inset-0 rounded-2xl blur-lg opacity-40"
        style={{ background: `radial-gradient(circle, rgba(${business.accent.glowRgb},0.8), transparent 70%)` }}
      />
      <div
        className="relative w-full h-full rounded-2xl flex items-center justify-center border border-white/10 text-3xl font-display font-black text-white"
        style={{
          background: `linear-gradient(135deg, rgba(${business.accent.glowRgb},0.25), rgba(${business.accent.glowRgb},0.05))`,
          boxShadow: `0 0 24px rgba(${business.accent.glowRgb},0.25), inset 0 1px 0 rgba(255,255,255,0.1)`,
        }}
      >
        {business.shortName}
      </div>
    </motion.div>
  );
}

// ─── Single social icon pill ──────────────────────────────────────────────────
function SocialPill({ link, index }: { link: SocialLink; index: number }) {
  if (!link.href) return null;
  return (
    <motion.a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: 0.05 * index, ease: "backOut" }}
      whileHover={{ y: -4, scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      title={link.label}
      className={`
        group/pill relative flex flex-col items-center gap-2 p-3.5 rounded-2xl
        border border-white/8 bg-white/4 backdrop-blur-sm
        transition-all duration-300 cursor-pointer
        ${link.color.hoverBg} ${link.color.hoverBorder}
        hover:shadow-lg ${link.color.glow}
      `}
    >
      {/* Animated shimmer on hover */}
      <span className="absolute inset-0 rounded-2xl opacity-0 group-hover/pill:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 60%)" }}
      />
      <SocialIcon id={link.id} className={`w-5 h-5 transition-colors duration-300 ${link.color.icon}`} />
      <span className="text-[10px] font-medium text-slate-500 group-hover/pill:text-slate-300 transition-colors duration-300 leading-none text-center">
        {link.label}
      </span>
    </motion.a>
  );
}

// ─── Full business social card ────────────────────────────────────────────────
function BusinessCard({ business, index }: { business: typeof businessSocials[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="relative group"
    >
      {/* Ambient background glow */}
      <div
        className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 50% 0%, rgba(${business.accent.glowRgb},0.18), transparent 70%)` }}
      />

      <div
        className="relative glass-card rounded-3xl overflow-hidden border border-white/10 group-hover:border-white/20 transition-all duration-500"
        style={{
          background: `linear-gradient(160deg, rgba(${business.accent.glowRgb},0.07) 0%, rgba(255,255,255,0.02) 40%, rgba(${business.accent.glowRgb},0.04) 100%)`,
          boxShadow: `0 0 0 1px rgba(${business.accent.glowRgb},0.08), 0 32px 64px rgba(0,0,0,0.4)`,
        }}
      >
        {/* Top gradient strip */}
        <div className={`absolute top-0 inset-x-0 h-px bg-gradient-to-r ${business.accent.strip} opacity-80`} />

        {/* Noise texture layer */}
        <div className="absolute inset-0 opacity-30 pointer-events-none"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")" }}
        />

        <div className="p-7 md:p-10">
          {/* ── Header ─────────────────────────────────────────────────────── */}
          <div className="flex flex-col sm:flex-row sm:items-start gap-6 mb-8">
            <LogoBadge business={business} />

            <div className="flex-1 min-w-0">
              <span className={`inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full border mb-3 ${business.accent.badge}`}>
                <Share2 className="w-3 h-3" />
                Social Media
              </span>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-1">
                {business.name}
              </h3>
              <p className={`text-sm font-medium bg-gradient-to-r ${business.accent.from} ${business.accent.via} ${business.accent.to} bg-clip-text text-transparent mb-3`}>
                {business.tagline}
              </p>
              <p className="text-sm text-slate-400 leading-relaxed max-w-xl">
                {business.description}
              </p>
            </div>
          </div>

          {/* ── CTA Buttons ─────────────────────────────────────────────── */}
          <div className="flex flex-wrap gap-3 mb-8">
            {/* Primary CTA */}
            <motion.a
              href={business.primaryCta.comingSoon ? undefined : business.primaryCta.href}
              target={business.primaryCta.comingSoon ? undefined : "_blank"}
              rel="noopener noreferrer"
              whileHover={business.primaryCta.comingSoon ? {} : { scale: 1.04 }}
              whileTap={business.primaryCta.comingSoon ? {} : { scale: 0.97 }}
              className={`
                inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white border transition-all duration-300
                ${business.accent.btnPrimary}
                ${business.primaryCta.comingSoon
                  ? "opacity-60 cursor-not-allowed"
                  : `hover:shadow-lg hover:${business.accent.btnPrimaryHover}`
                }
              `}
            >
              {business.primaryCta.label === "Download App"
                ? <Download className="w-4 h-4" />
                : <ExternalLink className="w-4 h-4" />
              }
              {business.primaryCta.label}
              {business.primaryCta.comingSoon && (
                <span className="text-[10px] font-bold uppercase tracking-wider bg-white/15 px-1.5 py-0.5 rounded-full">
                  Soon
                </span>
              )}
            </motion.a>

            {/* Secondary CTA */}
            <motion.a
              href={business.secondaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className={`
                inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-300
                ${business.accent.btnOutline} ${business.accent.btnOutlineHover}
              `}
            >
              <Users className="w-4 h-4" />
              {business.secondaryCta.label}
            </motion.a>
          </div>

          {/* ── Divider ─────────────────────────────────────────────────── */}
          <div
            className="h-px mb-8 opacity-30"
            style={{ background: `linear-gradient(to right, rgba(${business.accent.glowRgb},0.6), rgba(255,255,255,0.08), transparent)` }}
          />

          {/* ── Social Icon Grid ─────────────────────────────────────────── */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
              Connect with us
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-2.5">
              {business.links.filter(l => l.href).map((link, i) => (
                <SocialPill key={link.id} link={link} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Section ─────────────────────────────────────────────────────────────────
export function SocialMedia() {
  return (
    <section id="social" className="py-24 relative z-10 bg-[#050505]">
      {/* Subtle background radial */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(ellipse, rgba(139,92,246,1), rgba(59,130,246,1), transparent 70%)" }}
        />
      </div>

      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-slate-400 uppercase tracking-widest mb-6">
            <Share2 className="w-3 h-3 text-pink-400" />
            Stay Connected
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Follow Our Ventures
          </h2>
          <p className="text-lg text-slate-400">
            Stay up to date with the latest from Zenovix Technologies and QuickPress — follow us across platforms.
          </p>
        </motion.div>

        {/* Business cards */}
        <div className="flex flex-col gap-8">
          {businessSocials.map((business, i) => (
            <BusinessCard key={business.id} business={business} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
