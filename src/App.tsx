import React, { useState } from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Industries from './components/sections/Industries';
import Testimonials from './components/sections/Testimonials';
import About from './components/sections/About';
import Methodology from './components/sections/Methodology';
import CTA from './components/sections/CTA';
import Footer from './components/layout/Footer';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';

function App() {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

  if (showPrivacyPolicy) {
    return <PrivacyPolicyPage onClose={() => setShowPrivacyPolicy(false)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950 text-white selection:bg-primary-500/30 selection:text-white">
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div className="fixed inset-0 bg-gradient-to-t from-dark-950 via-dark-900/50 to-transparent" />
      <Header />
      <main className="relative">
        <Hero />
        <Services />
        <Industries />
        <Testimonials />
        <About />
        <Methodology />
        <CTA />
      </main>
      <Footer onPrivacyPolicyClick={() => setShowPrivacyPolicy(true)} />
    </div>
  );
}

export default App;