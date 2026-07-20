import { useEffect } from 'react';
import { Link } from 'wouter';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ArrowLeft } from 'lucide-react';

export function TermsAndConditions() {
  useEffect(() => {
    document.title = 'Terms & Conditions | Himanshu Baghel';
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: `By accessing and using this website (himanshubaghel.com), you accept and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use this website. These terms apply to all visitors and users of the site.`,
    },
    {
      title: '2. Use of This Website',
      content: `This website is provided for informational and portfolio purposes only. You agree to use it only for lawful purposes and in a manner that does not infringe the rights of others. You must not misuse or attempt to gain unauthorised access to any part of this website or its associated systems.`,
    },
    {
      title: '3. Intellectual Property',
      content: `All content on this website — including but not limited to text, design, graphics, logos, and code — is the intellectual property of Himanshu Baghel unless otherwise noted. You may not reproduce, distribute, or create derivative works from any content on this site without prior written permission. Project showcases may include third-party assets subject to their own licences.`,
    },
    {
      title: '4. No Professional Advice',
      content: `The content on this site is for general informational purposes only. Nothing on this website constitutes legal, financial, technical, or any other professional advice. You should always seek independent professional advice before making decisions based on information found here.`,
    },
    {
      title: '5. Third-Party Links',
      content: `This website may contain links to third-party websites including GitHub repositories, business pages, social media profiles, and external tools. These links are provided for convenience only. I have no control over the content of those sites and accept no responsibility or liability for them or for any loss or damage that may arise from your use of them.`,
    },
    {
      title: '6. Disclaimers & Limitation of Liability',
      content: `This website is provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied. I do not warrant that the site will be error-free, uninterrupted, or free of viruses or other harmful components. To the fullest extent permitted by law, I shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of, or inability to use, this website.`,
    },
    {
      title: '7. Contact Form & Communications',
      content: `By submitting a message through the contact form, you agree that the information you provide may be used to respond to your enquiry. Submitting a message does not create any contractual obligation on either party. I will make reasonable efforts to respond, but cannot guarantee a response to every enquiry.`,
    },
    {
      title: '8. Privacy',
      content: `Your use of this website is also governed by the Privacy Policy, which is incorporated into these Terms by reference. Please review the Privacy Policy to understand my practices.`,
    },
    {
      title: '9. Modifications to These Terms',
      content: `I reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to this page with an updated effective date. Your continued use of the website after any changes constitutes your acceptance of the new terms. Please check this page periodically for updates.`,
    },
    {
      title: '10. Governing Law',
      content: `These Terms and Conditions are governed by and construed in accordance with applicable law. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the relevant courts.`,
    },
    {
      title: '11. Contact',
      content: `If you have any questions about these Terms and Conditions, please reach out using the contact form on the main page or connect with me on LinkedIn.`,
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
              Terms &amp; Conditions
            </h1>
            <p className="text-slate-500 text-sm">
              Effective date: <span className="text-slate-400">1 January 2025</span>
            </p>
            <div className="mt-6 h-px bg-gradient-to-r from-blue-500/30 via-purple-500/20 to-transparent" />
          </div>

          {/* Intro */}
          <p className="text-slate-400 leading-relaxed mb-10">
            Please read these Terms and Conditions carefully before using{' '}
            <span className="text-white font-medium">himanshubaghel.com</span>. By browsing or
            interacting with this site, you agree to these terms in full. This is a personal portfolio
            website operated by Himanshu Baghel.
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
