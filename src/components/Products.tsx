import React from 'react';
import { motion } from 'motion/react';
import { Download, Palette, Layers, Brush, Droplet, Sparkles } from 'lucide-react';

const categories = [
  { name: 'Emulsion Paints', icon: Palette, desc: 'Premium interior & exterior wall finishes.' },
  { name: 'Gloss Paints', icon: Sparkles, desc: 'High-shine, durable protection for metal and wood.' },
  { name: 'Undercoats', icon: Layers, desc: 'Perfect foundation for a long-lasting topcoat.' },
  { name: 'Primers', icon: Droplet, desc: 'Sealants and bases for unpainted surfaces.' },
  { name: 'Wood Finishes', icon: Brush, desc: 'Varnishes and stains to enhance natural grain.' },
];

export function Products() {
  return (
    <section id="products" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Section */}
        <div className="bg-sky-900 rounded-xl p-8 md:p-12 text-center relative overflow-hidden mb-20 shadow-2xl">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
              Over <span className="text-sky-gold italic">4,000 Colors</span> Validated.
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              From the deepest regal blues to the warmest earthy neutrals, our sophisticated tinting system ensures precise color-matching and infinite possibilities for any architectural specification.
            </p>
            <button className="inline-flex items-center gap-2 bg-sky-gold text-sky-900 px-6 py-3 font-semibold hover:bg-sky-gold-light transition-colors rounded-sm">
              <Download className="w-5 h-5" /> Download Full Color Chart & Brochure
            </button>
          </div>
        </div>

        <div className="mb-12 text-center max-w-2xl mx-auto">
           <h3 className="text-3xl font-serif text-sky-900 font-semibold mb-4">Product Highlights</h3>
           <p className="text-slate-600">Explore our core manufacturing lines engineered for specific surfaces and extreme residential & commercial durability.</p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-24">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white border border-slate-200 p-6 flex flex-col items-center text-center hover:border-sky-gold hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className="w-12 h-12 bg-slate-50 text-sky-900 rounded-full flex items-center justify-center mb-4 group-hover:bg-sky-900 group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">{cat.name}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{cat.desc}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Architectural Price List Layout */}
        <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm">
          <div className="bg-slate-100 px-8 py-5 flex items-center justify-between border-b border-slate-200">
            <div>
              <h3 className="font-serif text-xl font-semibold text-sky-900">Architectural Price List</h3>
              <p className="text-sm text-slate-500">Effective directly for B2B procurement & large scale orders.</p>
            </div>
            <button className="hidden sm:flex items-center gap-2 text-sky-900 font-medium text-sm hover:text-sky-gold transition-colors block">
               Download PDF <Download className="w-4 h-4" />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="bg-slate-50 text-slate-500 uppercase text-xs font-semibold border-b border-slate-200">
                <tr>
                  <th className="px-8 py-4">Product Category</th>
                  <th className="px-8 py-4">Finish Spec</th>
                  <th className="px-8 py-4">Pack Size</th>
                  <th className="px-8 py-4">Coverage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-8 py-5 font-medium text-sky-900">Sky Elite Matt Emulsion</td>
                  <td className="px-8 py-5">Ultra Matt, Washable</td>
                  <td className="px-8 py-5">4L / 20L</td>
                  <td className="px-8 py-5">14-16 m²/L</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-8 py-5 font-medium text-sky-900">Sky Weather-Guard</td>
                  <td className="px-8 py-5">Satin, UV-Resistant</td>
                  <td className="px-8 py-5">4L / 20L</td>
                  <td className="px-8 py-5">12-14 m²/L</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-8 py-5 font-medium text-sky-900">Premium Wood Varnish</td>
                  <td className="px-8 py-5">High Gloss / Satin</td>
                  <td className="px-8 py-5">1L / 4L</td>
                  <td className="px-8 py-5">10-12 m²/L</td>
                </tr>
                 <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-8 py-5 font-medium text-sky-900">Eco-Prime Sealer</td>
                  <td className="px-8 py-5">Zero VOC, Flat</td>
                  <td className="px-8 py-5">4L / 20L</td>
                  <td className="px-8 py-5">12-15 m²/L</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
