import { motion } from 'framer-motion';
import { CheckCircle2Icon } from 'lucide-react';

const behaviours = [
  { title: 'Motivate', evidence: 'Keep the purpose visible and recognise progress when energy drops.', example: 'Education and youth programmes' },
  { title: 'Encourage', evidence: 'Invite ideas, create room for quieter contributors and share confidence.', example: 'Student teams and volunteer groups' },
  { title: 'Support', evidence: 'Step into practical gaps—logistics, coordination, documentation or facilitation.', example: 'Flair Club and event operations' },
  { title: 'Accomplish', evidence: 'Turn shared plans into clear owners, handoffs and follow-through.', example: 'ACS / EduACS programme delivery' },
  { title: 'Empathise', evidence: 'Understand different pressures before proposing a solution.', example: 'LearnLift community engagement' },
  { title: 'Respect', evidence: 'Communicate directly, protect dignity and credit every contribution.', example: 'Across every team context' },
];

export function SkillsSection() {
  return <section id="behaviours" className="py-20 md:py-28 relative" aria-labelledby="behaviours-heading">
    <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
      <header className="text-center max-w-3xl mx-auto mb-12"><p className="text-blue-400 font-mono text-xs tracking-[0.32em] uppercase mb-4">02 — How I contribute</p><h2 id="behaviours-heading" className="text-3xl sm:text-5xl font-extrabold text-white">Teamwork made <span className="text-blue-400">observable.</span></h2><p className="text-gray-400 text-lg mt-5">The official award language becomes six behaviours I can demonstrate—not six adjectives I simply claim.</p></header>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">{behaviours.map((item, index) => <motion.article key={item.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="rounded-2xl border border-white/12 bg-white/[0.035] p-6 hover:border-blue-400/30 transition-colors">
        <div className="flex items-center gap-3"><CheckCircle2Icon className="w-6 h-6 text-emerald-400" /><h3 className="text-xl font-bold text-white">{item.title}</h3></div><p className="text-gray-300 leading-relaxed mt-4">{item.evidence}</p><p className="text-xs text-blue-300 mt-5 pt-4 border-t border-white/10">Seen in: {item.example}</p>
      </motion.article>)}</div>
    </div>
  </section>;
}
