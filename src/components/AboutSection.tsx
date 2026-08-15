import { motion } from 'framer-motion';
import { EarIcon, HeartHandshakeIcon, NetworkIcon, RefreshCcwIcon, ShieldCheckIcon, UsersRoundIcon } from 'lucide-react';

const principles = [
  { icon: EarIcon, title: 'Listen before deciding', text: 'I seek the people closest to the work and make space for quieter voices.' },
  { icon: NetworkIcon, title: 'Connect the handoffs', text: 'I translate between organisers, volunteers, students and partners so responsibilities remain clear.' },
  { icon: ShieldCheckIcon, title: 'Stay reliable under pressure', text: 'I communicate changes early, take ownership of practical gaps and remain available through delivery.' },
  { icon: HeartHandshakeIcon, title: 'Protect the shared goal', text: 'I measure success by what the team completes and the people it serves, not by who receives the credit.' },
  { icon: RefreshCcwIcon, title: 'Adapt to what is needed', text: 'I move between coordinator, facilitator, listener and quiet executor when the situation changes.' },
  { icon: UsersRoundIcon, title: 'Support the person', text: 'I separate people from pressure and help them recover clarity before asking for output.' },
];

export function AboutSection() {
  return <section id="identity" className="py-20 md:py-28 relative" aria-labelledby="identity-heading">
    <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
      <header className="max-w-3xl mb-12"><p className="text-blue-400 font-mono text-xs tracking-[0.32em] uppercase mb-4">01 - My team-player identity</p><h2 id="identity-heading" className="text-3xl sm:text-5xl font-extrabold text-white">Contribution over <span className="text-blue-400">recognition.</span></h2><p className="mt-5 text-gray-400 text-lg leading-relaxed">Across student organisations, community programmes and event teams, my most consistent role has been making collaboration easier: understanding people, closing gaps and helping others do their best work.</p></header>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">{principles.map((item, index) => { const Icon = item.icon; return <motion.article key={item.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="group rounded-2xl border border-white/12 bg-white/[0.035] p-6 flex gap-4 hover:border-blue-400/30 transition-colors"><div className="w-11 h-11 shrink-0 rounded-xl border border-blue-400/20 bg-blue-400/10 flex items-center justify-center group-hover:bg-blue-400/20"><Icon className="w-5 h-5 text-blue-300" /></div><div><h3 className="text-white text-lg font-bold">{item.title}</h3><p className="text-gray-400 leading-relaxed mt-2 text-sm">{item.text}</p></div></motion.article>; })}</div>
      <div className="mt-8 grid lg:grid-cols-[1.25fr_0.75fr] gap-5">
        <blockquote className="p-6 sm:p-8 border-l-4 border-amber-400 rounded-r-2xl bg-amber-400/[0.06] text-xl sm:text-2xl text-gray-200 font-medium leading-relaxed">“I was not the loudest voice in the room. I was the person making sure the quietest voice still had a clear task and felt safe enough to deliver it.”</blockquote>
        <div className="rounded-2xl border border-blue-400/15 bg-[#0b1526]/90 p-6"><p className="text-xs uppercase tracking-[0.16em] text-blue-400 font-semibold">Trust bank</p><h3 className="text-white font-bold text-xl mt-2">Six deposits. No shortcuts.</h3><div className="grid grid-cols-6 gap-1.5 mt-6">{principles.map((item, index) => <div key={item.title} title={item.title} className="h-16 rounded-md bg-gradient-to-t from-blue-600 to-blue-300 opacity-70 hover:opacity-100 transition-opacity" style={{ height: `${40 + index * 7}px` }} />)}</div><p className="text-gray-500 text-xs mt-4">Trust grows through repeated behaviour, not a single title.</p></div>
      </div>
    </div>
  </section>;
}
