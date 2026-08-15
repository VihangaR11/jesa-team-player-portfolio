import { ArrowRightIcon, RefreshCcwIcon } from 'lucide-react';

const process = [
  { title: 'Pause and listen', text: 'Separate the person from the pressure. Ask what changed and who is affected.' },
  { title: 'Clarify the shared priority', text: 'Return the discussion to the outcome the whole team agreed to deliver.' },
  { title: 'Reset the handoffs', text: 'Make the next owner, deadline and communication channel explicit.' },
  { title: 'Reflect without blame', text: 'After delivery, identify what the system—not only the individual—should improve.' },
];

export function GrowthSection() {
  return <section id="growth" className="py-20 md:py-28 relative" aria-labelledby="growth-heading">
    <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
      <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-start">
        <header><p className="text-blue-400 font-mono text-xs tracking-[0.32em] uppercase mb-4">04 — Pressure, failure & growth</p><h2 id="growth-heading" className="text-3xl sm:text-5xl font-extrabold text-white">When teamwork becomes <span className="text-blue-400">difficult.</span></h2><p className="text-gray-400 text-lg mt-5 leading-relaxed">Last year’s result reminded me that holding roles is not the same as proving team-player impact. This portfolio now makes the people, behaviours and evidence visible—not just the titles.</p><div className="mt-7 p-5 rounded-2xl border border-amber-400/20 bg-amber-400/[0.06]"><p className="text-amber-200 font-semibold">My growth commitment</p><p className="text-gray-300 mt-2">Seek feedback earlier, document outcomes more consistently, and let teammates describe the difference my contribution made.</p></div></header>
        <div className="rounded-3xl border border-white/12 bg-[#0b1526]/90 p-7 sm:p-9"><div className="flex items-center gap-3 mb-7"><RefreshCcwIcon className="w-6 h-6 text-blue-400" /><h3 className="text-xl font-bold text-white">My method when plans or people disagree</h3></div><ol className="space-y-5">{process.map((item, index) => <li key={item.title} className="flex gap-4"><div className="w-9 h-9 rounded-full border border-blue-400/30 bg-blue-400/10 text-blue-300 flex items-center justify-center font-bold shrink-0">{index + 1}</div><div><h4 className="text-white font-semibold">{item.title}</h4><p className="text-gray-400 mt-1 leading-relaxed">{item.text}</p></div>{index < process.length - 1 && <ArrowRightIcon className="hidden sm:block w-4 h-4 text-gray-600 ml-auto" />}</li>)}</ol></div>
      </div>
    </div>
  </section>;
}
