import { AwardIcon, ExternalLinkIcon, FileCheck2Icon, UsersRoundIcon, ShieldCheckIcon } from 'lucide-react';

const evidence = [
  { icon: UsersRoundIcon, title: 'Public role history', text: 'Appointments, activities and recognitions are cross-checkable through my LinkedIn profile.', action: 'Open LinkedIn', href: 'https://www.linkedin.com/in/vihanga-rathnayake-a6a652321/' },
  { icon: AwardIcon, title: 'Recognition records', text: 'Logistics & Facilitation Excellence, G17 recognition and the Environmental Pioneer Presidential Medal.', action: 'Verify on LinkedIn', href: 'https://www.linkedin.com/in/vihanga-rathnayake-a6a652321/' },
  { icon: FileCheck2Icon, title: 'Programme evidence', text: 'Appointment letters, appreciation records and activity evidence can be presented privately to judges.', action: 'Request evidence', href: 'mailto:vihangasan221@gmail.com?subject=JESA%20portfolio%20evidence' },
];

export function EvidenceSection() {
  return <section id="evidence" className="py-20 md:py-28 relative" aria-labelledby="evidence-heading">
    <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
      <header className="text-center max-w-3xl mx-auto mb-12"><p className="text-blue-400 font-mono text-xs tracking-[0.32em] uppercase mb-4">05 — Evidence & integrity</p><h2 id="evidence-heading" className="text-3xl sm:text-5xl font-extrabold text-white">Every claim should be <span className="text-blue-400">verifiable.</span></h2><p className="text-gray-400 text-lg mt-5">This version uses public records or evidence available for review. It does not publish private referee details or invented testimonials.</p></header>
      <div className="grid md:grid-cols-3 gap-5">{evidence.map((item) => { const Icon = item.icon; return <article key={item.title} className="rounded-2xl border border-white/12 bg-white/[0.035] p-6"><Icon className="w-8 h-8 text-blue-400" /><h3 className="text-xl font-bold text-white mt-5">{item.title}</h3><p className="text-gray-400 leading-relaxed mt-3 min-h-[6rem]">{item.text}</p><a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-300 font-semibold text-sm mt-4">{item.action}<ExternalLinkIcon className="w-4 h-4" /></a></article>; })}</div>
      <div className="mt-8 rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.06] p-6 flex gap-4"><ShieldCheckIcon className="w-7 h-7 text-emerald-400 shrink-0" /><div><h3 className="font-bold text-white">Testimonials policy</h3><p className="text-gray-300 mt-1">Named teammate comments will be added only with permission and with enough context for judges to verify them. Until then, this portfolio intentionally makes no anonymous endorsement claims.</p></div></div>
    </div>
  </section>;
}
