import React from 'react';
import { PaintBucket, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="bg-sky-900 text-slate-300 pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA */}
        <div className="bg-sky-800 rounded-lg p-8 md:p-12 mb-16 flex flex-col md:flex-row items-center justify-between gap-8 border border-sky-700/50">
          <div>
            <h3 className="text-2xl font-serif text-white font-semibold mb-2">Ready to transform your project?</h3>
            <p className="text-slate-400">Schedule an expert site assessment and get accurate color sampling.</p>
          </div>
          <button className="whitespace-nowrap px-8 py-4 bg-sky-gold text-sky-900 font-bold hover:bg-sky-gold-light transition-colors rounded-sm shadow-lg">
            Book Site Assessment
          </button>
        </div>

        {/* Footer Links & Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center gap-2 mb-6">
                {/* INSTRUCTIONS: Upload your logo file to /public/images/logo.png and uncomment the img tag below */ }
                {/* <img src="/images/logo.png" alt="Sky Quality Paints" className="h-8 w-auto object-contain" /> */}
                <PaintBucket className="h-6 w-6 text-sky-gold" />
                <div className="flex flex-col">
                  <span className="font-serif text-lg font-bold text-white leading-tight">SKY QUALITY</span>
                  <span className="text-[9px] tracking-widest text-sky-gold uppercase font-semibold">Paints Ltd</span>
                </div>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                Setting the industry standard for durability, aesthetics, and eco-friendly manufacturing.
              </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#portfolio" className="hover:text-sky-gold transition-colors">Our Portfolio</a></li>
              <li><a href="#products" className="hover:text-sky-gold transition-colors">Product Categories</a></li>
              <li><a href="#services" className="hover:text-sky-gold transition-colors">Total Service Package</a></li>
              <li><a href="#quality" className="hover:text-sky-gold transition-colors">Quality Assurance</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Documentation</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/docs/price-list.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Architectural Price List PDF</a></li>
              <li><a href="/docs/brochure.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Product Brochure</a></li>
              <li><a href="/docs/kebs-cert.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">KEBS Certifications</a></li>
              <li><a href="/docs/strategic-plan.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Strategic Plan - Phase 3</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                 <MapPin className="w-5 h-5 text-sky-gold shrink-0" />
                 <span>P.O. Box 79622-00200,<br/>Nairobi, Kenya</span>
              </li>
              <li className="flex items-center gap-3">
                 <Phone className="w-5 h-5 text-sky-gold shrink-0" />
                 <span>020 26 199 26 / 0722 55 99 55</span>
              </li>
              <li className="flex items-center gap-3">
                 <Mail className="w-5 h-5 text-sky-gold shrink-0" />
                 <span>info@wayfami.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-xs text-slate-500 font-light">
           &copy; {new Date().getFullYear()} Sky Quality Paints Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
