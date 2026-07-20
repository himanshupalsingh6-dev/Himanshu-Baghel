import { useEffect } from 'react';
import { Switch, Route } from 'wouter';
import Lenis from 'lenis';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Businesses } from './components/Businesses';
import { Services } from './components/Services';
import { TechStack } from './components/TechStack';
import { Contact } from './components/Contact';
import { SocialMedia } from './components/SocialMedia';
import { Footer } from './components/Footer';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsAndConditions } from './pages/TermsAndConditions';

function Home() {
  useEffect(() => {
    document.title = "Himanshu Baghel | Founder · Developer · Entrepreneur";
    document.documentElement.classList.add('dark');

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', 'Portfolio of Himanshu Baghel - Founder, Developer, Entrepreneur, Innovator.');

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-[#050505] min-h-screen text-slate-200 font-sans selection:bg-blue-500/30 overflow-hidden">
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Businesses />
        <Services />
        <TechStack />
        <SocialMedia />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-and-conditions" component={TermsAndConditions} />
      <Route component={Home} />
    </Switch>
  );
}

export default App;
