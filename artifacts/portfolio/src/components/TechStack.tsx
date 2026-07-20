import { 
  SiReact, SiNextdotjs, SiNodedotjs, SiTypescript, 
  SiPython, SiPostgresql, SiMongodb,
  SiDocker, SiVercel, SiGit, SiGraphql, 
  SiRedis, SiTailwindcss, SiFigma
} from 'react-icons/si';
import { Cloud } from 'lucide-react';

const icons = [
  { Icon: SiReact, name: 'React' },
  { Icon: SiNextdotjs, name: 'Next.js' },
  { Icon: SiNodedotjs, name: 'Node.js' },
  { Icon: SiTypescript, name: 'TypeScript' },
  { Icon: SiPython, name: 'Python' },
  { Icon: SiPostgresql, name: 'PostgreSQL' },
  { Icon: SiMongodb, name: 'MongoDB' },
  { Icon: Cloud, name: 'AWS' },
  { Icon: SiDocker, name: 'Docker' },
  { Icon: SiVercel, name: 'Vercel' },
  { Icon: SiGit, name: 'Git' },
  { Icon: SiGraphql, name: 'GraphQL' },
  { Icon: SiRedis, name: 'Redis' },
  { Icon: SiTailwindcss, name: 'Tailwind' },
  { Icon: SiFigma, name: 'Figma' }
];

export function TechStack() {
  // Duplicate array to create smooth infinite loop
  const duplicatedIconsRow1 = [...icons, ...icons];
  const duplicatedIconsRow2 = [...icons.slice().reverse(), ...icons.slice().reverse()];

  return (
    <section id="tech" className="py-24 relative z-10 bg-[#050505] overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] z-10 pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl mb-12 text-center relative z-20">
        <p className="text-sm font-medium uppercase tracking-widest text-slate-500 mb-2">Powered By</p>
        <h2 className="text-2xl font-display font-semibold text-white">Modern Technology Stack</h2>
      </div>

      <div className="flex flex-col gap-8 relative z-20">
        {/* Row 1: Forward */}
        <div className="marquee-container">
          <div className="marquee-content">
            {duplicatedIconsRow1.map((item, idx) => (
              <div 
                key={idx} 
                className="flex flex-col items-center gap-3 opacity-40 hover:opacity-100 transition-opacity duration-300 group"
              >
                <item.Icon className="w-12 h-12 text-slate-400 group-hover:text-white transition-colors" />
                <span className="text-xs font-medium text-slate-500 group-hover:text-white">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Reverse */}
        <div className="marquee-container" dir="rtl">
          <div className="marquee-content marquee-content-reverse">
            {duplicatedIconsRow2.map((item, idx) => (
              <div 
                key={idx} 
                className="flex flex-col items-center gap-3 opacity-40 hover:opacity-100 transition-opacity duration-300 group"
                dir="ltr"
              >
                <item.Icon className="w-12 h-12 text-slate-400 group-hover:text-white transition-colors" />
                <span className="text-xs font-medium text-slate-500 group-hover:text-white">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
