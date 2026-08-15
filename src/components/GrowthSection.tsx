import { ArrowRightIcon, RefreshCcwIcon } from 'lucide-react';
import { CriteriaHeatmap } from './CriteriaHeatmap';

const loop = [
  { title: 'Pressure point', text: 'A plan shifts, ownership becomes unclear or a teammate’s capacity changes.' },
  { title: 'Pause & listen', text: 'Separate the person from the pressure and understand who is affected.' },
  { title: 'Support action', text: 'Reset the shared priority, owner, deadline and communication channel.' },
  { title: 'Team outcome', text: 'People regain clarity and can contribute without blame or confusion.' },
  { title: 'Reflection', text: 'Improve the system and document the handover before the next pressure point.' },
];

const snapshots = [
  { moment: 'When I noticed pressure before performance', context: "During the changed handovers around Dhaara '24, operational clarity mattered, but so did recognising that people were carrying pressure differently.", learning: 'That is when I learned that reliability begins by understanding capacity, not simply repeating a deadline.' },
  { moment: 'When I stepped back so others could own the work', context: 'As EduACS matured, shared handoffs and meaningful responsibility for newer volunteers mattered more than keeping decisions around a founder or secretary.', learning: 'That is when I learned that continuity is a stronger result than personal indispensability.' },
  { moment: 'When the goal mattered more than my preferred role', context: 'Across event and community work, I moved between secretary, facilitator, logistics support and contributor according to what the team needed.', learning: 'That is when I learned that flexibility is not doing everything; it is doing the right next thing without protecting a title.' },
];

export function GrowthSection() {
  return <section id="growth" className="py-20 md:py-28 relative" aria-labelledby="growth-heading"><div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
    <header className="max-w-4xl"><p className="text-blue-400 font-mono text-xs tracking-[0.32em] uppercase mb-4">04 - Pressure, empathy & growth</p><h2 id="growth-heading" className="text-3xl sm:text-5xl font-extrabold text-white">Pressure reveals the <span className="text-blue-400">quality of support.</span></h2><p className="text-gray-400 text-lg mt-5 leading-relaxed">Last year’s result reminded me that titles and certificates do not automatically prove listening, adapting or supporting people under pressure. This version makes the pressure points and learning visible.</p><div className="mt-6"><CriteriaHeatmap active={['commitment', 'flexibility', 'cooperation', 'respect', 'overall']} /></div></header>
    <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-6 mt-10">
      <div className="space-y-4">{snapshots.map((item, index) => <article key={item.moment} className="rounded-2xl border border-white/12 bg-white/[0.035] p-6"><div className="flex gap-4"><span className="w-9 h-9 rounded-full bg-blue-400/10 text-blue-300 flex items-center justify-center font-bold shrink-0">{index + 1}</span><div><h3 className="text-white font-bold text-lg">{item.moment}</h3><p className="text-gray-400 mt-2 leading-relaxed">{item.context}</p><p className="text-amber-200 mt-4 text-sm leading-relaxed">“{item.learning}”</p></div></div></article>)}</div>
      <div className="rounded-3xl border border-blue-400/15 bg-[#0b1526]/90 p-7 sm:p-9 h-fit"><div className="flex items-center gap-3 mb-7"><RefreshCcwIcon className="w-6 h-6 text-blue-400" /><h3 className="text-xl font-bold text-white">Pressure-to-support loop</h3></div><ol className="space-y-4">{loop.map((item, index) => <li key={item.title} className="flex gap-4 items-start"><div className="w-9 h-9 rounded-full border border-blue-400/30 bg-blue-400/10 text-blue-300 flex items-center justify-center font-bold shrink-0">{index + 1}</div><div className="flex-1"><h4 className="text-white font-semibold">{item.title}</h4><p className="text-gray-400 mt-1 text-sm leading-relaxed">{item.text}</p></div>{index < loop.length - 1 && <ArrowRightIcon className="hidden sm:block w-4 h-4 text-gray-600 mt-2" />}</li>)}</ol><div className="mt-8 pt-6 border-t border-white/10"><p className="text-xs uppercase tracking-[0.14em] text-emerald-400 font-semibold">Closing belief</p><p className="text-gray-200 text-lg leading-relaxed mt-3">My strongest achievement is the trust teams placed in me—to listen, connect people, support them under pressure and help transform individual strengths into shared results.</p></div></div>
    </div>
  </div></section>;
}
