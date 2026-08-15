import { motion } from 'framer-motion';
import { ArrowRightIcon, BookOpenIcon, CalendarCheckIcon, Globe2Icon } from 'lucide-react';

const stories = [
  { number: '01', icon: CalendarCheckIcon, context: 'Flair Club / Dhaara ’24', role: 'Secretary and behind-the-scenes contributor', goal: 'Help the event team deliver a dependable participant experience.', contribution: 'Supported venue, equipment, coordination and on-ground operations—taking responsibility for the practical details others depended on.', enabled: 'Clearer handoffs and dependable support allowed programme-facing members to focus on their roles.', result: 'Recognised with a Logistics & Facilitation Excellence Award.', lesson: 'Team trust is often built through small promises kept repeatedly.' },
  { number: '02', icon: BookOpenIcon, context: 'ACS / EduACS', role: 'Co-founder and Secretary', goal: 'Bring useful computing education to school students through a repeatable team effort.', contribution: 'Helped coordinate delivery, communication, quality checks and continuity across the programme.', enabled: 'A shared operating rhythm helped contributors combine their strengths instead of working in isolation.', result: 'Public programme records report 1,000+ schoolchildren reached.', lesson: 'A good coordinator creates clarity without controlling every decision.' },
  { number: '03', icon: Globe2Icon, context: 'G17 LearnLift', role: 'University Ambassador and project contributor', goal: 'Support learning and child-focused awareness in Monaragala under SDG 10.', contribution: 'Contributed to awareness, child-protection and mathematics-focused activities with the wider team.', enabled: 'Adapted communication to the community context and supported the shared programme rather than a personal spotlight.', result: 'The contribution formed part of my G17 Ambassador of the Month recognition.', lesson: 'Empathy begins with understanding context before offering help.' },
];

export function ProjectsSection() {
  return <section id="stories" className="py-20 md:py-28 relative" aria-labelledby="stories-heading">
    <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
      <header className="max-w-3xl mb-12"><p className="text-blue-400 font-mono text-xs tracking-[0.32em] uppercase mb-4">03 — Evidence through stories</p><h2 id="stories-heading" className="text-3xl sm:text-5xl font-extrabold text-white">Three teams. One <span className="text-blue-400">consistent pattern.</span></h2><p className="text-gray-400 text-lg mt-5">Each story separates the shared goal, my contribution, the team benefit and the outcome.</p></header>
      <div className="space-y-6">{stories.map((story, index) => { const Icon = story.icon; return <motion.article key={story.context} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-3xl border border-white/12 bg-[#0b1526]/90 overflow-hidden">
        <div className="grid lg:grid-cols-[0.45fr_1.55fr]">
          <div className="p-7 sm:p-9 bg-gradient-to-br from-blue-500/15 to-transparent border-b lg:border-b-0 lg:border-r border-white/10"><span className="text-blue-400 font-mono text-sm">STORY {story.number}</span><Icon className="w-10 h-10 text-amber-400 mt-8" /><h3 className="text-2xl font-bold text-white mt-5">{story.context}</h3><p className="text-gray-400 mt-2">{story.role}</p></div>
          <div className="p-7 sm:p-9"><div className="grid sm:grid-cols-2 gap-x-8 gap-y-6"><StoryPoint label="Shared goal" text={story.goal} /><StoryPoint label="My contribution" text={story.contribution} /><StoryPoint label="How it enabled others" text={story.enabled} /><StoryPoint label="Collective result" text={story.result} /></div><div className="mt-7 pt-5 border-t border-white/10 flex gap-3 text-amber-200"><ArrowRightIcon className="w-5 h-5 shrink-0 mt-0.5" /><p><strong>Lesson:</strong> {story.lesson}</p></div></div>
        </div>
      </motion.article>; })}</div>
    </div>
  </section>;
}

function StoryPoint({ label, text }: { label: string; text: string }) { return <div><p className="text-xs uppercase tracking-[0.16em] text-blue-400 font-semibold">{label}</p><p className="text-gray-300 leading-relaxed mt-2">{text}</p></div>; }
