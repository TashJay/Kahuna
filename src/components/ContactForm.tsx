import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send } from 'lucide-react';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitted'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitted');
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <section id="contact-form" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-sky-gold font-semibold tracking-wider text-sm uppercase mb-3">Connect With Us</h2>
          <h3 className="text-3xl font-serif text-sky-900 font-semibold mb-4">Request a Consultation.</h3>
          <p className="text-slate-600">Provide your details and project type, and our technical team will reach out to schedule an assessment.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-50 p-8 md:p-10 border border-slate-200 shadow-xl rounded-sm"
        >
          {status === 'submitted' ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-serif text-sky-900 mb-2">Message Received</h4>
              <p className="text-slate-600">We'll be in touch shortly to discuss your project.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-sm focus:ring-2 focus:ring-sky-900 focus:border-sky-900 outline-none transition-colors"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-sm focus:ring-2 focus:ring-sky-900 focus:border-sky-900 outline-none transition-colors"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="project-type" className="block text-sm font-medium text-slate-700 mb-1">Project Type</label>
                <select
                  id="project-type"
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-sm focus:ring-2 focus:ring-sky-900 focus:border-sky-900 outline-none transition-colors bg-white -webkit-appearance-none"
                >
                  <option value="">Select a project type...</option>
                  <option value="residential">Residential Finishing</option>
                  <option value="commercial">Commercial / High-Rise</option>
                  <option value="industrial">Industrial Coatings</option>
                  <option value="other">Other / General Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Additional Details (Optional)</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-300 rounded-sm focus:ring-2 focus:ring-sky-900 focus:border-sky-900 outline-none transition-colors resize-none"
                  placeholder="Tell us a bit about your timeline or specific requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-sky-900 text-white font-semibold hover:bg-sky-800 transition-colors rounded-sm flex items-center justify-center gap-2 group"
              >
                Submit Request <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
