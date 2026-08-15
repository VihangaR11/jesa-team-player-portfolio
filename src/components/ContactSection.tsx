import { ExternalLinkIcon, LinkIcon, MailIcon, UsersRoundIcon } from 'lucide-react';

export function ContactSection() {
  return <section id="contact" className="py-20 md:py-28 relative" aria-labelledby="contact-heading">
    <div className="max-w-5xl mx-auto px-5 sm:px-8 relative z-10 text-center">
      <p className="text-blue-400 font-mono text-xs tracking-[0.32em] uppercase mb-4">06 — References & closing</p>
      <h2 id="contact-heading" className="text-4xl sm:text-6xl font-extrabold text-white">A team player is best described by <span className="text-blue-400">the team.</span></h2>
      <p className="text-gray-300 text-xl sm:text-2xl mt-6 max-w-4xl mx-auto leading-relaxed">“My best work is measured by how many people around me still felt capable, respected and part of something bigger when the pressure was highest.”</p>
      <p className="text-gray-500 mt-5 max-w-3xl mx-auto">Referee contact details and supporting documents are available privately to the JESA judging panel. I welcome questions about what I did, what the team did and what I would improve.</p>
      <div className="flex flex-col sm:flex-row justify-center gap-3 mt-9">
        <a href="mailto:vihangasan221@gmail.com?subject=JESA%20Best%20Team%20Player" className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold inline-flex items-center justify-center gap-2"><MailIcon className="w-5 h-5" /> Request references</a>
        <a href="https://www.linkedin.com/in/vihanga-rathnayake-a6a652321/" target="_blank" rel="noopener noreferrer" className="px-6 py-3.5 rounded-xl border border-white/15 bg-white/5 text-white font-semibold inline-flex items-center justify-center gap-2"><LinkIcon className="w-5 h-5" /> Review public record <ExternalLinkIcon className="w-4 h-4" /></a>
      </div>
      <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500"><p>Vihanga Rathnayake · University of Sri Jayewardenepura</p><p className="flex items-center gap-2"><UsersRoundIcon className="w-4 h-4" /> Built to credit the people behind the outcomes.</p></div>
    </div>
  </section>;
}
