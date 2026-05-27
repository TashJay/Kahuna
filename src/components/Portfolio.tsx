import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Leaf, ShieldCheck, Palette } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Highridge Apartments',
    category: 'High-Rise Residential',
    description: "Engineered for intense altitudes and weathering. Our exterior coatings deliver a professional finish that withstands harsh conditions, offering structural defense and long-lasting visual appeal.",
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop',
    icon: ShieldCheck,
    highlight: 'Professional Finish & Maximum Durability'
  },
  {
    id: 2,
    title: 'Urban Mushroom Garden',
    category: 'Sustainable Agriculture Facility',
    description: "Rooted in sustainability. We formulated non-toxic, eco-friendly primers ensuring a zero-VOC emission controlled environment critical for delicate urban farming ecosystems.",
    image: 'https://images.unsplash.com/photo-1582211517578-831fb2d88ebd?q=80&w=1200&auto=format&fit=crop',
    icon: Leaf,
    highlight: 'Eco-Friendly & Non-Toxic'
  },
  {
    id: 3,
    title: 'Premium Residential Makeover',
    category: 'Luxury Interior',
    description: "The complete transformation using 'Sky Elite Matt Emulsion'. Showcasing pristine color-matching precision over custom architectural moldings with an ultra-smooth, flawless finish.",
    image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1200&auto=format&fit=crop',
    icon: Palette,
    highlight: 'Elite Matt Emulsion & Color Precision'
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sky-gold font-semibold tracking-wider text-sm uppercase mb-3">Our Work</h2>
            <h3 className="text-4xl font-serif text-sky-900 font-semibold mb-4">A Showcase of Excellence.</h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              We partner with forward-thinking property managers, architects, and homeowners to deliver results that define industry standards.
            </p>
          </div>
          <button className="flex items-center gap-2 text-sky-900 font-medium hover:text-sky-gold transition-colors pb-1 border-b border-sky-900 hover:border-sky-gold">
            View Complete Gallery <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer flex flex-col h-full bg-slate-50 border border-slate-100 hover:shadow-xl hover:border-slate-200 transition-all duration-300"
              >
                {/* Image Box */}
                <div className="relative h-64 overflow-hidden bg-slate-200">
                  <div className="absolute inset-0 bg-sky-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 text-xs font-semibold tracking-wide text-sky-900 z-20 shadow-sm">
                    {project.category}
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center text-sky-900">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium text-sky-gold">{project.highlight}</span>
                  </div>
                  
                  <h4 className="text-2xl font-serif font-semibold text-sky-900 mb-3 group-hover:text-sky-gold transition-colors">
                    {project.title}
                  </h4>
                  
                  <p className="text-slate-600 leading-relaxed flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="mt-8 pt-4 border-t border-slate-200 flex items-center text-sm font-medium text-sky-900 group-hover:text-sky-gold transition-colors">
                    View Project Details <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
