import { motion } from 'framer-motion';
import { ArrowDownIcon, HeartHandshakeIcon, MapPinIcon, PresentationIcon } from 'lucide-react';
import { ParticleCanvas } from './ParticleCanvas';

const strengths = ['Listen first', 'Support under pressure', 'Connect people', 'Adapt when needed', 'Communicate clearly', 'Share the credit'];

export function HeroSection() {
  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  return (
    <section id="home" className="min-h-screen flex items-center relative pt-20 overflow-hidden" aria-labelledby="hero-heading">
      <ParticleCanvas />
      <div className="absolute inset-0 pointer-events-none z-[1] bg-[radial-gradient(ellipse_at_68%_35%,rgba(30,107,196,0.16),transparent_40%),radial-gradient(ellipse_at_center,transparent_35%,rgba(6,13,26,0.8)_100%)]" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-14 relative z-10 w-full">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] items-center gap-12">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/25 bg-blue-400/10 text-blue-300 text-xs font-semibold tracking-[0.16em] uppercase mb-6">
              <HeartHandshakeIcon className="w-4 h-4" /> JESA Best Team Player Candidate
            </div>
            <p className="text-gray-400 text-sm sm:text-base font-mono tracking-[0.16em] mb-3">Vihanga Rathnayake</p>
            <h1 id="hero-heading" className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.2rem] font-extrabold leading-[1.02] tracking-tight text-white">
              I help people<br /><span className="bg-gradient-to-r from-blue-400 via-blue-300 to-amber-400 bg-clip-text text-transparent">succeed together.</span>
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-2xl mt-7">
              I was not always the loudest voice. I listened, connected the handoffs and stayed dependable when pressure rose—so other people could still do their best work.
            </p>
            <div className="flex flex-wrap gap-2 mt-7">{strengths.map((item) => <span key={item} className="px-3.5 py-2 rounded-full border border-white/15 bg-white/[0.04] text-sm text-gray-300">{item}</span>)}</div>
            <div className="flex flex-col sm:flex-row gap-3 mt-9">
              <button onClick={() => scrollTo('#identity')} className="px-7 py-3.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl font-semibold text-white flex items-center justify-center gap-2 hover:brightness-110">
                Begin my 10-minute story <ArrowDownIcon className="w-4 h-4" />
              </button>
              <button onClick={() => window.dispatchEvent(new Event('start-presentation'))} className="px-7 py-3.5 border border-amber-400/25 bg-amber-400/10 rounded-xl font-semibold text-amber-200 flex items-center justify-center gap-2 hover:bg-amber-400/15">
                <PresentationIcon className="w-4 h-4" /> Presentation mode
              </button>
            </div>
          </motion.div>
          <motion.div className="justify-self-center" initial={{ opacity: 0, scale: 0.88 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15 }}>
            <div className="relative">
              <div className="absolute -inset-5 rounded-full bg-gradient-to-br from-blue-500/30 to-amber-400/20 blur-2xl" />
              <div className="relative p-1.5 rounded-full bg-gradient-to-br from-blue-400 via-blue-600 to-amber-400">
                <img src={`${import.meta.env.BASE_URL}profile.jpeg`} alt="Vihanga Rathnayake" className="w-[285px] h-[285px] sm:w-[360px] sm:h-[360px] lg:w-[390px] lg:h-[390px] rounded-full object-cover object-top" />
              </div>
              <div className="absolute -top-2 -left-4 px-3 py-2 rounded-xl border border-blue-400/30 bg-[#081426]/95 text-blue-300 text-xs flex gap-2 items-center"><MapPinIcon className="w-3 h-3" /> Sri Lanka</div>
              <div className="absolute -bottom-3 -right-3 px-4 py-2 rounded-xl border border-emerald-400/35 bg-[#081426]/95 text-emerald-300 text-xs font-semibold">Team before title</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
