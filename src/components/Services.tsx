import React from 'react';
import { motion } from 'motion/react';
import { HardHat, Pipette, GraduationCap } from 'lucide-react';

const services = [
  {
    icon: Pipette,
    title: 'Precision Color Matching',
    description: "Our state-of-the-art laboratory utilizes digital spectral imaging to perfectly replicate any color swatch, textile, or existing surface you bring us."
  },
  {
    icon: HardHat,
    title: 'On-site Project Consultation',
    description: "Our specialized sales and technical team visits your site to assess conditions, measure moisture levels, and recommend the exact material systems required."
  },
  {
    icon: GraduationCap,
    title: 'Paint Application Training',
    description: "Empowering contractors. We offer comprehensive training modules on specialized applications, surface prep, and maximizing coverage with our premium lines."
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-sky-900 text-slate-300 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-slate-800/20 skew-x-12 transform translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
           <h2 className="text-sky-gold font-semibold tracking-wider text-sm uppercase mb-3">Our Core Offering</h2>
           <h3 className="text-4xl font-serif text-white font-semibold mb-6">The Total Service Package.</h3>
           <p className="text-lg text-slate-400">
             Beyond manufacturing superior coatings, we partner with developers, contractors, and owners from conceptualization through to final handover.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {services.map((svc, idx) => {
             const Icon = svc.icon;
             return (
               <motion.div 
                 key={idx}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.15 }}
                 className="bg-white/5 border border-white/10 p-8 backdrop-blur-sm hover:border-sky-gold/50 transition-all group"
               >
                 <div className="w-14 h-14 bg-sky-gold/10 text-sky-gold flex items-center justify-center rounded-sm mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7" />
                 </div>
                 <h4 className="text-xl font-serif text-white font-medium mb-3">{svc.title}</h4>
                 <p className="leading-relaxed text-sm text-slate-400">
                   {svc.description}
                 </p>
               </motion.div>
             )
           })}
        </div>
      </div>
    </section>
  );
}
