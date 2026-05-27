import React from 'react';
import { Menu, X, PaintBucket } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);

  const links = [
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Products', href: '#products' },
    { name: 'Services', href: '#services' },
    { name: 'Quality Hub', href: '#quality' },
  ];

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            {/* INSTRUCTIONS: Upload your logo file to /public/images/logo.png and uncomment the img tag below */ }
            {/* <img src="/images/logo.png" alt="Sky Quality Paints" className="h-10 w-auto object-contain" /> */}
            <PaintBucket className="h-8 w-8 text-sky-900" />
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold text-sky-900 leading-tight">SKY QUALITY</span>
              <span className="text-[10px] tracking-widest text-sky-gold uppercase font-semibold">Paints Ltd</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-sky-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 py-2.5 bg-sky-900 text-white text-sm font-medium hover:bg-sky-800 transition-all shadow-sm flex items-center"
            >
              Book Site Assessment
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-sky-900"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-slate-600 hover:text-sky-900 hover:bg-slate-50"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block mt-4 text-center px-3 py-3 bg-sky-900 text-white font-medium hover:bg-sky-800"
              >
                Book Site Assessment
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
