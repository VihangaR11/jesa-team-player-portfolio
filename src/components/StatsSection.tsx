import { motion } from 'framer-motion';
import { AwardIcon, GraduationCapIcon, UsersIcon, WaypointsIcon } from 'lucide-react';

const stats = [
  { value: '1,000+', label: 'schoolchildren reached through EduACS', icon: GraduationCapIcon },
  { value: '6+', label: 'team and community contexts served', icon: UsersIcon },
  { value: '3+', label: 'years of sustained community service', icon: WaypointsIcon },
  { value: '3', label: 'recognitions connected to service', icon: AwardIcon },
];

export function StatsSection() {
  return <section id="impact" className="py-10 md:py-16" aria-label="Collective impact">
    <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">{stats.map((stat, index) => { const Icon = stat.icon; return <motion.article key={stat.label} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="rounded-2xl border border-white/15 bg-[#0b1526]/85 p-6 min-h-[190px] flex flex-col justify-between">
        <Icon className="w-8 h-8 text-blue-400" /><div><p className="text-4xl font-extrabold text-white">{stat.value}</p><p className="text-gray-400 mt-2 leading-snug">{stat.label}</p></div>
      </motion.article>; })}</div>
      <p className="text-gray-500 text-xs mt-4 text-right">Figures are based on public role history and programme records; supporting evidence is listed below.</p>
    </div>
  </section>;
}
