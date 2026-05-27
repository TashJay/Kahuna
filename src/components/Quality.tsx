import React from 'react';
import { Award, Leaf, FileText, CheckCircle2 } from 'lucide-react';

export function Quality() {
  return (
    <section id="quality" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-sky-gold font-semibold tracking-wider text-sm uppercase mb-3">Strategic Documentation</h2>
            <h3 className="text-3xl md:text-4xl font-serif text-sky-900 font-semibold mb-6">Our Commitment to Absolute Quality & Safety.</h3>
            <p className="text-slate-600 leading-relaxed mb-8">
              At Sky Quality Paints, excellence isn't just a marketing term—it's engineered into our chemistry and codified in our operating principles. We adhere to rigorous local and international standards to ensure the safety of our environments and the longevity of our finishes.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                 <div className="flex-shrink-0 mt-1">
                   <Award className="w-6 h-6 text-sky-900" />
                 </div>
                 <div>
                   <h4 className="font-semibold text-slate-800 mb-1">KEBS Certification Compliance</h4>
                   <p className="text-sm text-slate-600">Every batch produced is tested against the rigorous standards set by the Kenya Bureau of Standards (KEBS), ensuring washability, opacity, and hazardous substance limitations.</p>
                 </div>
              </div>

              <div className="flex gap-4">
                 <div className="flex-shrink-0 mt-1">
                   <Leaf className="w-6 h-6 text-sky-900" />
                 </div>
                 <div>
                   <h4 className="font-semibold text-slate-800 mb-1">Environmental Strategic Plan Phase 3</h4>
                   <p className="text-sm text-slate-600">Committed to low-VOC and lead-free manufacturing. Our latest strategic directive aggressively minimizes our carbon footprint and wastewater output across manufacturing cycles.</p>
                 </div>
              </div>
            </div>

            <button className="mt-8 flex items-center gap-2 text-sm font-semibold text-sky-900 border border-slate-200 px-5 py-3 hover:bg-slate-50 transition-colors rounded-sm">
              <FileText className="w-4 h-4" /> Download Strategic Plan - Sky Quality Paints 3.docx
            </button>
          </div>

          {/* Certificate visual representation */}
          <div className="relative">
             <div className="absolute inset-0 bg-sky-900 transform translate-x-4 translate-y-4 rounded-sm"></div>
             <div className="relative bg-slate-50 border border-slate-200 p-10 md:p-14 shadow-lg rounded-sm text-center flex flex-col items-center">
               <div className="w-20 h-20 rounded-full border-4 border-sky-gold text-sky-gold flex items-center justify-center mb-6">
                 <CheckCircle2 className="w-10 h-10" />
               </div>
               <h4 className="font-serif text-2xl text-sky-900 font-semibold mb-2">Quality Assured</h4>
               <p className="text-slate-500 text-sm max-w-xs mb-8">ISO Aligned & KEBS Standardized Production Facilities</p>
               
               <div className="w-full h-[1px] bg-slate-200 mb-8"></div>
               
               <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                 <span>VERIFIED BATCH TESTING</span>
                 <span>•</span>
                 <span>ZERO-LEAD INITIATIVE</span>
               </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
