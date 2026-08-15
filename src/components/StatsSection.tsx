import { motion } from 'framer-motion';
import { AwardIcon, GraduationCapIcon, UsersIcon, WaypointsIcon } from 'lucide-react';

const stats = [
  { value: '1,000+', label: 'schoolchildren reached through EduACS', icon: GraduationCapIcon },
  { value: '6+', label: 'team and community contexts served', icon: UsersIcon },
  { value: '3+', label: 'years of sustained community service', icon: WaypointsIcon },
  { value: '3', label: 'recognitions connected to service', icon: AwardIcon },
];
const pulse = [22, 46, 32, 72, 40, 88, 34, 64, 28, 52, 24];

export function StatsSection() {
  return <section id="impact" className="py-10 md:py-16" aria-label="Collective impact"><div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">{stats.map((stat, index) => { const Icon = stat.icon; return <motion.article key={stat.label} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="group rounded-2xl border border-white/15 bg-[#0b1526]/85 p-6 min-h-[190px] flex flex-col justify-between hover:border-blue-400/30"><Icon className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform" /><div><p className="text-4xl font-extrabold text-white">{stat.value}</p><p className="text-gray-400 mt-2 leading-snug">{stat.label}</p></div></motion.article>; })}</div>
    <div className="team-pulse group mt-5 rounded-2xl border border-white/10 bg-white/[0.025] px-6 py-5 flex flex-col md:flex-row items-center gap-6"><div className="h-16 flex-1 flex items-center gap-1 w-full" aria-hidden="true">{pulse.map((height, index) => <span key={index} className="team-pulse-bar flex-1 rounded-full bg-gradient-to-t from-blue-600 to-amber-300" style={{ height: `${height}%`, animationDelay: `${index * 80}ms` }} />)}</div><div className="md:max-w-sm"><p className="text-white font-semibold">The team pulse</p><p className="text-gray-400 text-sm mt-1">The stronger the pulse, the more the team moved because someone was willing to fill the gap.</p></div></div>
    <div className="mt-5 flex flex-col sm:flex-row justify-between gap-2 text-xs text-gray-500"><p>Continuity signal: EduACS was designed for shared ownership beyond any single person.</p><p>All figures require public records or judge-reviewable evidence.</p></div>
  </div></section>;
}
