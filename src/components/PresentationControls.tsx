import { useEffect, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, PresentationIcon, XIcon } from 'lucide-react';

const stops = ['home', 'identity', 'impact', 'behaviours', 'stories', 'growth', 'evidence', 'contact'];

export function PresentationControls() {
  const [active, setActive] = useState(false);
  const [index, setIndex] = useState(0);
  const [seconds, setSeconds] = useState(600);
  const start = () => { setActive(true); setIndex(0); setSeconds(600); document.documentElement.classList.add('presentation-mode'); document.getElementById('home')?.scrollIntoView(); };
  const stop = () => { setActive(false); document.documentElement.classList.remove('presentation-mode'); };
  useEffect(() => { window.addEventListener('start-presentation', start); return () => window.removeEventListener('start-presentation', start); }, []);
  useEffect(() => { if (!active || seconds <= 0) return; const timer = window.setInterval(() => setSeconds((value) => value - 1), 1000); return () => window.clearInterval(timer); }, [active, seconds]);
  const move = (next: number) => { const safe = Math.max(0, Math.min(stops.length - 1, next)); setIndex(safe); document.getElementById(stops[safe])?.scrollIntoView({ behavior: 'smooth' }); };
  if (!active) return <button onClick={start} className="presentation-launch fixed bottom-5 right-5 z-50 px-4 py-3 rounded-xl bg-blue-600 text-white shadow-xl flex items-center gap-2 text-sm font-semibold"><PresentationIcon className="w-4 h-4" /> Present</button>;
  const clock = `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;
  return <div className="fixed inset-x-0 bottom-0 z-[80] bg-[#07111f]/95 backdrop-blur-xl border-t border-blue-400/20"><div className="h-1 bg-white/10"><div className="h-full bg-gradient-to-r from-blue-400 to-amber-400 transition-all" style={{ width: `${((index + 1) / stops.length) * 100}%` }} /></div><div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between"><span className={`font-mono text-sm ${seconds < 120 ? 'text-amber-300' : 'text-blue-300'}`}>{clock}</span><div className="flex items-center gap-2"><button onClick={() => move(index - 1)} disabled={index === 0} className="p-2 rounded-lg bg-white/10 disabled:opacity-30" aria-label="Previous section"><ChevronLeftIcon className="w-4 h-4" /></button><span className="text-xs text-gray-400 min-w-[74px] text-center">{index + 1} / {stops.length}</span><button onClick={() => move(index + 1)} disabled={index === stops.length - 1} className="p-2 rounded-lg bg-white/10 disabled:opacity-30" aria-label="Next section"><ChevronRightIcon className="w-4 h-4" /></button></div><button onClick={stop} className="p-2 rounded-lg bg-white/10" aria-label="Exit presentation mode"><XIcon className="w-4 h-4" /></button></div></div>;
}
