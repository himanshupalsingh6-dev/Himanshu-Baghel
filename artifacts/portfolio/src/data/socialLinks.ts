// ============================================================
// SOCIAL LINKS CONFIGURATION
// Edit links here — changes are reflected site-wide instantly.
// Set href to "" to hide a link.
// ============================================================

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  /** Tailwind colour classes: text, hover bg, hover border, glow shadow */
  color: {
    icon: string;
    hoverBg: string;
    hoverBorder: string;
    glow: string;
  };
}

export interface BusinessSocial {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  /** Accent palette for the card */
  accent: {
    from: string;
    via: string;
    to: string;
    glowRgb: string;
    strip: string;
    badge: string;
    btnPrimary: string;
    btnPrimaryHover: string;
    btnOutline: string;
    btnOutlineHover: string;
  };
  primaryCta: { label: string; href: string; comingSoon?: boolean };
  secondaryCta: { label: string; href: string };
  links: SocialLink[];
}

export const businessSocials: BusinessSocial[] = [
  // ──────────────────────────────────────────
  //  ZENOVIX TECHNOLOGIES
  // ──────────────────────────────────────────
  {
    id: "zenovix",
    name: "Zenovix Technologies",
    shortName: "Z",
    tagline: "Engineering Tomorrow",
    description:
      "A technology-driven digital agency building premium websites, web apps, mobile applications, and AI automation solutions. Follow us to stay ahead of the curve.",
    accent: {
      from: "from-blue-500",
      via: "via-cyan-400",
      to: "to-blue-600",
      glowRgb: "59,130,246",
      strip: "from-blue-500 via-cyan-400 to-blue-600",
      badge: "text-blue-400 border-blue-500/30 bg-blue-500/10",
      btnPrimary: "bg-blue-600 hover:bg-blue-500 border-blue-500",
      btnPrimaryHover: "shadow-blue-500/40",
      btnOutline: "border-blue-500/40 text-blue-300",
      btnOutlineHover: "hover:bg-blue-500/15 hover:border-blue-400/60",
    },
    primaryCta: {
      label: "Visit Website",
      href: "https://zenovixtech.online",
    },
    secondaryCta: {
      label: "Follow Us",
      href: "https://instagram.com/zenovix",
    },
    links: [
      {
        id: "website",
        label: "Website",
        href: "https://zenovixtech.online",
        color: { icon: "text-sky-400", hoverBg: "hover:bg-sky-500/15", hoverBorder: "hover:border-sky-400/60", glow: "hover:shadow-sky-500/30" },
      },
      {
        id: "instagram",
        label: "Instagram",
        href: "https://www.instagram.com/who_rishab_/",
        color: { icon: "text-pink-400", hoverBg: "hover:bg-pink-500/15", hoverBorder: "hover:border-pink-400/60", glow: "hover:shadow-pink-500/30" },
      },
      {
        id: "facebook",
        label: "Facebook",
        href: "https://www.facebook.com/share/1DGP84mESQ/",
        color: { icon: "text-blue-500", hoverBg: "hover:bg-blue-600/15", hoverBorder: "hover:border-blue-500/60", glow: "hover:shadow-blue-600/30" },
      },
      {
        id: "x",
        label: "X (Twitter)",
        href: "https://x.com/BeatGam04205970",
        color: { icon: "text-slate-300", hoverBg: "hover:bg-white/10", hoverBorder: "hover:border-white/30", glow: "hover:shadow-white/20" },
      },
      {
        id: "whatsapp",
        label: "WhatsApp",
        href: "https://wa.me/919997874502",
        color: { icon: "text-emerald-400", hoverBg: "hover:bg-emerald-500/15", hoverBorder: "hover:border-emerald-400/60", glow: "hover:shadow-emerald-500/30" },
      },
      {
        id: "email",
        label: "Email",
        href: "mailto:support.zenovix@gmail.com",
        color: { icon: "text-violet-400", hoverBg: "hover:bg-violet-500/15", hoverBorder: "hover:border-violet-400/60", glow: "hover:shadow-violet-500/30" },
      },
    ],
  },

  // ──────────────────────────────────────────
  //  QUICKPRESS
  // ──────────────────────────────────────────
  {
    id: "quickpress",
    name: "QuickPress",
    shortName: "QP",
    tagline: "Simplify. Track. Deliver.",
    description:
      "A next-gen on-demand laundry & services platform connecting customers, partners, and riders in one seamless ecosystem. The app is coming soon — follow us for launch updates.",
    accent: {
      from: "from-purple-500",
      via: "via-violet-400",
      to: "to-fuchsia-500",
      glowRgb: "139,92,246",
      strip: "from-purple-500 via-violet-400 to-fuchsia-500",
      badge: "text-purple-400 border-purple-500/30 bg-purple-500/10",
      btnPrimary: "bg-purple-600 hover:bg-purple-500 border-purple-500",
      btnPrimaryHover: "shadow-purple-500/40",
      btnOutline: "border-purple-500/40 text-purple-300",
      btnOutlineHover: "hover:bg-purple-500/15 hover:border-purple-400/60",
    },
    primaryCta: {
      label: "Download App",
      href: "#",
      comingSoon: true,
    },
    secondaryCta: {
      label: "Follow Us",
      href: "https://instagram.com/quickpress",
    },
    links: [
      {
        id: "website",
        label: "Website",
        href: "https://quickpress.online",
        color: { icon: "text-sky-400", hoverBg: "hover:bg-sky-500/15", hoverBorder: "hover:border-sky-400/60", glow: "hover:shadow-sky-500/30" },
      },
      {
        id: "instagram",
        label: "Instagram",
        href: "https://www.instagram.com/who_rishab_/",
        color: { icon: "text-pink-400", hoverBg: "hover:bg-pink-500/15", hoverBorder: "hover:border-pink-400/60", glow: "hover:shadow-pink-500/30" },
      },
      {
        id: "facebook",
        label: "Facebook",
        href: "https://www.facebook.com/share/1DGP84mESQ/",
        color: { icon: "text-blue-500", hoverBg: "hover:bg-blue-600/15", hoverBorder: "hover:border-blue-500/60", glow: "hover:shadow-blue-600/30" },
      },
      {
        id: "x",
        label: "X (Twitter)",
        href: "https://x.com/BeatGam04205970",
        color: { icon: "text-slate-300", hoverBg: "hover:bg-white/10", hoverBorder: "hover:border-white/30", glow: "hover:shadow-white/20" },
      },
      {
        id: "whatsapp",
        label: "WhatsApp",
        href: "https://wa.me/919997874502",
        color: { icon: "text-emerald-400", hoverBg: "hover:bg-emerald-500/15", hoverBorder: "hover:border-emerald-400/60", glow: "hover:shadow-emerald-500/30" },
      },
      {
        id: "email",
        label: "Email",
        href: "mailto:quickpressfounder@gmail.com",
        color: { icon: "text-violet-400", hoverBg: "hover:bg-violet-500/15", hoverBorder: "hover:border-violet-400/60", glow: "hover:shadow-violet-500/30" },
      },
    ],
  },
];
