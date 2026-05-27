import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "Sky Quality Paints transformed our commercial complex. The color precision and durability of their exterior emulsion exceeded our expectations.",
    author: "David M.",
    role: "Property Manager, Nairobi",
  },
  {
    id: 2,
    content: "We use their eco-friendly primers for all our agricultural interior projects. Zero toxic emissions and perfect coverage every time.",
    author: "Sarah K.",
    role: "Lead Architect, Urban Greens",
  },
  {
    id: 3,
    content: "Their specialized training modules helped our contractor team improve application efficiency by 30%. The support is phenomenal.",
    author: "James W.",
    role: "General Contractor",
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sky-gold font-semibold tracking-wider text-sm uppercase mb-3">Client Success</h2>
          <h3 className="text-3xl font-serif text-sky-900 font-semibold mb-4">Trusted by Industry Leaders.</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-white p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-1 mb-6 text-sky-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-slate-600 mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </p>
              <div>
                <p className="font-semibold text-sky-900">{testimonial.author}</p>
                <p className="text-sm text-slate-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
