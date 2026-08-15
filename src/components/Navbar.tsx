import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';

const navLinks = [
  { label: 'Story', href: '#home' }, { label: 'Identity', href: '#identity' },
  { label: 'Impact', href: '#impact' }, { label: 'Criteria', href: '#behaviours' },
  { label: 'Team Evidence', href: '#stories' }, { label: 'Growth', href: '#growth' },
  { label: 'Evidence', href: '#evidence' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const goTo = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault(); setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };
  return <>
    <nav className={`site-nav fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? 'bg-[#060d1a]/95 backdrop-blur-xl border-b border-blue-500/10' : ''}`} aria-label="Presentation navigation">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 md:h-20 flex items-center justify-between">
        <a href="#home" onClick={(event) => goTo(event, '#home')} className="font-bold tracking-wide text-white">VR <span className="text-blue-400">/ TEAM</span></a>
        <div className="hidden lg:flex items-center gap-5">{navLinks.map((link) => <a key={link.href} href={link.href} onClick={(event) => goTo(event, link.href)} className="text-xs font-medium text-gray-400 hover:text-blue-300 transition-colors">{link.label}</a>)}</div>
        <button className="lg:hidden p-2 text-white" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label="Toggle navigation">{open ? <XIcon /> : <MenuIcon />}</button>
      </div>
    </nav>
    <AnimatePresence>{open && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 bg-[#060d1a]/98 pt-24 px-6 lg:hidden">{navLinks.map((link) => <a key={link.href} href={link.href} onClick={(event) => goTo(event, link.href)} className="block py-4 border-b border-white/10 text-lg text-gray-200">{link.label}</a>)}</motion.div>}</AnimatePresence>
  </>;
}
