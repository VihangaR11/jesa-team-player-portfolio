import { AlertCircleIcon, CheckCircle2Icon, ExternalLinkIcon, ShieldCheckIcon } from 'lucide-react';

const evidenceRows = [
  { weight: '20%', criterion: 'Active participation', claim: 'Sustained work across Flair Club, ACS, G17, NCPA, Sasnaka Sansada, teaching and event logistics.', proof: 'LinkedIn role history, appointment letters, activity photographs and programme records.', status: 'available' },
  { weight: '15%', criterion: 'Commitment to the team', claim: 'Continuous community involvement from 2022 and responsibility maintained through delivery and follow-up.', proof: 'Dated role records, appreciation letters and a referee statement confirming reliability.', status: 'mixed' },
  { weight: '15%', criterion: 'Flexibility', claim: 'Served as secretary, panel lead, ambassador, educator, facilitator, logistics support and project contributor.', proof: 'Role descriptions plus one captioned example showing why a role change was required.', status: 'mixed' },
  { weight: '20%', criterion: 'Co-operation & presentation', claim: 'Coordinated handoffs and communicated with students, organisers, volunteers, partners and community participants.', proof: 'EduACS programme record, facilitation/public-speaking photographs and teammate verification.', status: 'mixed' },
  { weight: '10%', criterion: 'Respecting team members', claim: 'Listens before deciding, protects dignity, makes room for different views and shares credit.', proof: 'Add 2-3 permission-approved teammate statements describing a specific observed behaviour.', status: 'needed' },
  { weight: '20%', criterion: 'Overall assessment', claim: 'Consistent team-first narrative supported by service history, outcomes, recognition and honest reflection.', proof: 'Portfolio, CV, LinkedIn, recognition records and named referees available to judges.', status: 'available' },
];

export function EvidenceSection() {
  return <section id="evidence" className="py-20 md:py-28 relative" aria-labelledby="evidence-heading">
    <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
      <header className="text-center max-w-3xl mx-auto mb-12"><p className="text-blue-400 font-mono text-xs tracking-[0.32em] uppercase mb-4">05 - Criterion-by-criterion evidence</p><h2 id="evidence-heading" className="text-3xl sm:text-5xl font-extrabold text-white">Proof, gaps and <span className="text-blue-400">next actions.</span></h2><p className="text-gray-400 text-lg mt-5">A strong submission distinguishes evidence already available from evidence that still needs a named witness or supporting document.</p></header>
      <div className="rounded-3xl border border-white/12 bg-[#0b1526]/90 overflow-hidden">
        {evidenceRows.map((row, index) => <article key={row.criterion} className={`grid lg:grid-cols-[0.16fr_0.45fr_0.95fr_1.15fr] gap-4 p-5 sm:p-6 items-start ${index ? 'border-t border-white/10' : ''}`}>
          <div className="text-2xl font-extrabold text-amber-300">{row.weight}</div><div><h3 className="text-white font-bold">{row.criterion}</h3><Status status={row.status} /></div><p className="text-gray-300 leading-relaxed">{row.claim}</p><div><p className="text-xs uppercase tracking-[0.14em] text-blue-400 font-semibold">Evidence / action</p><p className="text-gray-400 text-sm leading-relaxed mt-2">{row.proof}</p></div>
        </article>)}
      </div>
      <div className="mt-8 grid md:grid-cols-[1.25fr_0.75fr] gap-5"><div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.06] p-6 flex gap-4"><ShieldCheckIcon className="w-7 h-7 text-emerald-400 shrink-0" /><div><h3 className="font-bold text-white">Evidence integrity rule</h3><p className="text-gray-300 mt-1">No anonymous praise or unsupported impact figure is presented as proof. Named comments are added only with permission, role context and a specific observed example.</p></div></div><a href="https://www.linkedin.com/in/vihanga-rathnayake-a6a652321/" target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-blue-400/20 bg-blue-400/[0.06] p-6 flex items-center justify-between text-white font-semibold">Review public role record <ExternalLinkIcon className="w-5 h-5 text-blue-300" /></a></div>
    </div>
  </section>;
}

function Status({ status }: { status: string }) {
  const ready = status === 'available'; const needed = status === 'needed';
  return <span className={`inline-flex items-center gap-1.5 mt-2 text-xs ${ready ? 'text-emerald-300' : needed ? 'text-rose-300' : 'text-amber-300'}`}>{ready ? <CheckCircle2Icon className="w-3.5 h-3.5" /> : <AlertCircleIcon className="w-3.5 h-3.5" />}{ready ? 'Available' : needed ? 'Must add' : 'Strengthen'}</span>;
}
