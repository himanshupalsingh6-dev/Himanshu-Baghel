import { useEffect } from 'react';
import { Link } from 'wouter';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ArrowLeft } from 'lucide-react';

export function PrivacyPolicy() {
  useEffect(() => {
    document.title = 'Privacy Policy | Himanshu Baghel';
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: '1. Information I Collect',
      content: `When you use the contact form on this website, I collect the information you voluntarily provide — such as your name, email address, and message. I do not use cookies, tracking pixels, or analytics tools that collect personally identifiable information. No account registration is required to use this site.`,
    },
    {
      title: '2. How I Use Your Information',
      content: `Information submitted through the contact form is used solely to respond to your inquiry. I will never sell, rent, or share your personal information with third parties for marketing purposes. Your data is used only for the communication you initiated.`,
    },
    {
      title: '3. Data Storage & Security',
      content: `Messages sent via the contact form are transmitted securely using industry-standard encryption (HTTPS). I take reasonable technical and organisational measures to protect your information from unauthorised access, alteration, disclosure, or destruction. No method of transmission over the internet is 100% secure, but I strive to use commercially acceptable means to protect your data.`,
    },
    {
      title: '4. Third-Party Services',
      content: `This site may use third-party services (such as EmailJS for contact form delivery) that have their own privacy policies. I encourage you to review the privacy policies of any third-party services you interact with. I am not responsible for the privacy practices of these external services.`,
    },
    {
      title: '5. Links to Other Websites',
      content: `This website may contain links to external sites, including project showcases, social profiles, and business pages. These links are provided for your convenience. I have no control over the content or privacy practices of those sites and accept no responsibility for them.`,
    },
    {
      title: '6. Your Rights',
      content: `You have the right to request access to, correction of, or deletion of any personal information you have submitted to me. To exercise these rights, please contact me directly using the information in the Contact section of this site. I will respond to your request within a reasonable timeframe.`,
    },
    {
      title: '7. Children\'s Privacy',
      content: `This website is not directed at children under the age of 13. I do not knowingly collect personal information from children. If you believe a child has submitted personal information through this site, please contact me and I will promptly delete it.`,
    },
    {
      title: '8. Changes to This Policy',
      content: `I may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated effective date. Your continued use of this website after any changes constitutes your acceptance of the revised policy.`,
    },
    {
      title: '9. Contact',
      content: `If you have any questions or concerns about this Privacy Policy, please reach out through the contact form on the main page or connect with me on LinkedIn.`,
    },
  ];

  return (
    <div className="bg-[#050505] min-h-screen text-slate-200 font-sans selection:bg-blue-500/30">
      <Navbar />

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-400 transition-colors mb-10 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to home
          </Link>

          {/* Header */}
          <div className="mb-12">
            <p className="text-xs font-semibold tracking-widest text-blue-500 uppercase mb-3">
              Legal
            </p>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-slate-500 text-sm">
              Effective date: <span className="text-slate-400">1 January 2025</span>
            </p>
            <div className="mt-6 h-px bg-gradient-to-r from-blue-500/30 via-purple-500/20 to-transparent" />
          </div>

          {/* Intro */}
          <p className="text-slate-400 leading-relaxed mb-10">
            Your privacy matters. This policy explains what information is collected when you visit{' '}
            <span className="text-white font-medium">himanshubaghel.com</span>, how it is used, and the
            choices you have. This site is a personal portfolio — there are no user accounts, no
            advertisements, and no hidden tracking.
          </p>

          {/* Sections */}
          <div className="space-y-10">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-lg font-semibold text-white mb-3">{section.title}</h2>
                <p className="text-slate-400 leading-relaxed">{section.content}</p>
              </section>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
