import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Droplet } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative bg-sky-900 min-h-[90vh] flex items-center overflow-hidden pt-20">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-sky-gold/30 to-transparent"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-[800px] h-[800px] rounded-full bg-sky-800 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="h-[1px] w-12 bg-sky-gold"></span>
            <span className="text-sky-gold uppercase tracking-widest text-xs font-semibold">Premium Finishes & Solutions</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-semibold text-white leading-tight mb-6">
            Mastering the Art of <br />
            <span className="text-sky-gold">Professional Quality.</span>
          </h1>
          <p className="text-lg text-slate-300 md:text-xl font-light leading-relaxed mb-10 max-w-xl">
            From striking high-rise apartment exteriors to eco-friendly urban garden primers, we engineer architectural finishes that inspire trust and outlast the elements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#portfolio"
              className="px-8 py-4 bg-sky-gold text-sky-900 font-medium hover:bg-sky-gold-light transition-colors text-center flex items-center justify-center gap-2"
            >
              Explore Our Work <ChevronRight className="w-4 h-4" />
            </a>
            <a
              href="/docs/brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-slate-500 text-white font-medium hover:border-slate-300 hover:bg-white/5 transition-colors text-center"
            >
              View Product Brochure
            </a>
          </div>
        </motion.div>

        {/* Hero Imagery Showcase */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block h-[600px]"
        >
          {/* Main big image slot (conceptual) */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4/5 h-[80%] bg-slate-800 outline outline-1 outline-slate-700 shadow-2xl relative overflow-hidden group">
             <img 
               src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop" 
               alt="Luxury home exterior" 
               className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700" 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-sky-900/80 via-transparent to-transparent"></div>
             <div className="absolute bottom-6 left-6 right-6">
               <p className="text-white font-serif text-2xl mb-1">Highridge Elite</p>
               <p className="text-slate-300 text-sm font-light flex items-center gap-2">
                 <Droplet className="w-3 h-3 text-sky-gold" /> Exterior Emulsion Application
               </p>
             </div>
          </div>
          
          {/* Accent small image slot */}
          <div className="absolute left-0 bottom-[10%] w-[45%] h-[40%] bg-white p-2 shadow-2xl border border-slate-100">
             <img 
               src="https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=800&auto=format&fit=crop" 
               alt="Interior finish" 
               className="w-full h-full object-cover"
             />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
