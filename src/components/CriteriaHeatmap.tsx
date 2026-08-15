const criteria = [
  { id: 'participation', label: 'Active participation', weight: 20, color: '#4da6ff' },
  { id: 'commitment', label: 'Commitment', weight: 15, color: '#e8b84d' },
  { id: 'flexibility', label: 'Flexibility', weight: 15, color: '#60a5fa' },
  { id: 'cooperation', label: 'Co-operation & presentation', weight: 20, color: '#fbbf24' },
  { id: 'respect', label: 'Respect', weight: 10, color: '#34d399' },
  { id: 'overall', label: 'Overall assessment', weight: 20, color: '#818cf8' },
];

export type CriterionId = (typeof criteria)[number]['id'];

export function CriteriaHeatmap({ active, compact = false }: { active: CriterionId[]; compact?: boolean }) {
  return <div aria-label={`Criteria demonstrated: ${criteria.filter((item) => active.includes(item.id)).map((item) => item.label).join(', ')}`}>
    <div className="flex h-2.5 rounded-full overflow-hidden bg-white/5 gap-px">
      {criteria.map((item) => {
        const on = active.includes(item.id);
        return <span key={item.id} title={`${item.label} - ${item.weight}%`} className="transition-all duration-500" style={{ flexBasis: `${item.weight}%`, backgroundColor: item.color, opacity: on ? 1 : 0.12, boxShadow: on ? `0 0 12px ${item.color}66` : 'none' }} />;
      })}
    </div>
    {!compact && <div className="flex flex-wrap gap-x-4 gap-y-2 mt-3">{criteria.map((item) => <span key={item.id} className={`inline-flex items-center gap-1.5 text-[10px] ${active.includes(item.id) ? 'text-gray-200' : 'text-gray-600'}`}><span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color, opacity: active.includes(item.id) ? 1 : 0.25 }} />{item.label} {item.weight}%</span>)}</div>}
  </div>;
}
