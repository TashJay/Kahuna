import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { Products } from './components/Products';
import { Services } from './components/Services';
import { Quality } from './components/Quality';
import { Testimonials } from './components/Testimonials';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-sky-gold selection:text-sky-900">
      <Navigation />
      <main>
        <Hero />
        <Portfolio />
        <Products />
        <Services />
        <Quality />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
