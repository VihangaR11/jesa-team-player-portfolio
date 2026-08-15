import { motion } from 'framer-motion';
import { BadgeCheckIcon, HandshakeIcon, MessageSquareTextIcon, RefreshCcwIcon, ShieldCheckIcon, UsersRoundIcon } from 'lucide-react';

const criteria = [
  { weight: 20, title: 'Active participation', detail: 'Tasks performed, responsibilities held and continuous participation.', proof: 'Secretary, coordinator, ambassador, panel lead, teacher and logistics contributor across sustained roles.', icon: UsersRoundIcon, tone: 'blue' },
  { weight: 15, title: 'Commitment to the team', detail: 'Loyalty to the team and continuous hard work.', proof: 'Multi-year community service since 2022 and continued responsibility through planning, delivery and follow-up.', icon: ShieldCheckIcon, tone: 'amber' },
  { weight: 15, title: 'Flexibility', detail: 'Ability to play several roles according to team requirements.', proof: 'Moved between secretary, facilitator, logistics support, educator and project contributor as the situation required.', icon: RefreshCcwIcon, tone: 'blue' },
  { weight: 20, title: 'Co-operation & presentation', detail: 'Clear communication with team members.', proof: 'Coordinated handoffs, facilitated programmes and communicated with students, volunteers, organisers and partners.', icon: MessageSquareTextIcon, tone: 'amber' },
  { weight: 10, title: 'Respecting team members', detail: 'Respect shown through everyday team conduct.', proof: 'Listen before deciding, protect dignity, make room for different perspectives and credit collective effort.', icon: HandshakeIcon, tone: 'blue' },
  { weight: 20, title: 'Overall assessment', detail: 'The credibility, consistency and presentation of the whole candidate.', proof: 'A consistent service record, three recognitions, honest reflection and evidence available for verification.', icon: BadgeCheckIcon, tone: 'amber' },
];

export function SkillsSection() {
  return <section id="behaviours" className="py-20 md:py-28 relative" aria-labelledby="criteria-heading">
    <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
      <header className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-blue-400 font-mono text-xs tracking-[0.32em] uppercase mb-4">02 — Official evaluation map</p>
        <h2 id="criteria-heading" className="text-3xl sm:text-5xl font-extrabold text-white">Every percentage has <span className="text-blue-400">evidence.</span></h2>
        <p className="text-gray-400 text-lg mt-5">The 2025 Best Team Player interview criteria total 100%. This portfolio follows the same weighting so judges can find relevant proof quickly.</p>
      </header>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {criteria.map((item, index) => { const Icon = item.icon; return <motion.article key={item.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="rounded-2xl border border-white/12 bg-white/[0.035] p-6 hover:border-blue-400/30 transition-colors">
          <div className="flex items-start justify-between gap-4"><div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.tone === 'blue' ? 'bg-blue-400/10 text-blue-300' : 'bg-amber-400/10 text-amber-300'}`}><Icon className="w-6 h-6" /></div><span className="text-3xl font-extrabold text-white">{item.weight}<span className="text-base text-gray-500">%</span></span></div>
          <h3 className="text-xl font-bold text-white mt-5">{item.title}</h3><p className="text-gray-500 text-sm mt-2 min-h-[2.5rem]">{item.detail}</p><div className="mt-5 pt-4 border-t border-white/10"><p className="text-xs uppercase tracking-[0.14em] text-blue-400 font-semibold">Evidence direction</p><p className="text-gray-300 leading-relaxed mt-2">{item.proof}</p></div>
        </motion.article>; })}
      </div>
    </div>
  </section>;
}
