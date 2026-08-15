import { motion } from 'framer-motion';
import { EarIcon, HeartHandshakeIcon, NetworkIcon, ShieldCheckIcon } from 'lucide-react';

const principles = [
  { icon: EarIcon, title: 'Listen before deciding', text: 'I seek the people closest to the work, clarify what they need and make space for quieter voices.' },
  { icon: NetworkIcon, title: 'Connect the handoffs', text: 'I translate between organisers, volunteers, students and partners so responsibilities remain clear.' },
  { icon: ShieldCheckIcon, title: 'Stay reliable under pressure', text: 'I take ownership of practical work, communicate changes early and remain available through delivery.' },
  { icon: HeartHandshakeIcon, title: 'Protect the shared goal', text: 'I measure success by what the team completes and the people it serves—not by who receives the credit.' },
];

export function AboutSection() {
  return <section id="identity" className="py-20 md:py-28 relative" aria-labelledby="identity-heading">
    <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
      <header className="max-w-3xl mb-12">
        <p className="text-blue-400 font-mono text-xs tracking-[0.32em] uppercase mb-4">01 — My team-player identity</p>
        <h2 id="identity-heading" className="text-3xl sm:text-5xl font-extrabold text-white">Contribution over <span className="text-blue-400">recognition.</span></h2>
        <p className="mt-5 text-gray-400 text-lg leading-relaxed">Across student organisations, community programmes and event teams, my most consistent role has been making collaboration easier: understanding people, closing gaps and helping others do their best work.</p>
      </header>
      <div className="grid md:grid-cols-2 gap-5">
        {principles.map((item, index) => { const Icon = item.icon; return <motion.article key={item.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="rounded-2xl border border-white/12 bg-white/[0.035] p-6 sm:p-7 flex gap-5">
          <div className="w-12 h-12 shrink-0 rounded-xl border border-blue-400/20 bg-blue-400/10 flex items-center justify-center"><Icon className="w-5 h-5 text-blue-300" /></div>
          <div><h3 className="text-white text-xl font-bold">{item.title}</h3><p className="text-gray-400 leading-relaxed mt-2">{item.text}</p></div>
        </motion.article>; })}
      </div>
      <blockquote className="mt-8 p-6 sm:p-8 border-l-4 border-amber-400 rounded-r-2xl bg-amber-400/[0.06] text-xl sm:text-2xl text-gray-200 font-medium leading-relaxed">“My role may change from secretary to logistics support to facilitator. My standard does not: leave the team stronger than I found it.”</blockquote>
    </div>
  </section>;
}
