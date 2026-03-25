import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Accueil } from './pages/Accueil';
import { APropos } from './pages/APropos';
import { NosCycles } from './pages/NosCycles';
import { Inscriptions } from './pages/Inscriptions';
import { VieScolaire } from './pages/VieScolaire';
import { Galerie } from './pages/Galerie';
import { Contact } from './pages/Contact';
// Scroll to top on route change
function ScrollToTop() {
  const {
    pathname
  } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
export function App() {
  return <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans text-gray-800 bg-warm-cream">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/a-propos" element={<APropos />} />
            <Route path="/nos-cycles" element={<NosCycles />} />
            <Route path="/inscriptions" element={<Inscriptions />} />
            <Route path="/vie-scolaire" element={<VieScolaire />} />
            <Route path="/galerie" element={<Galerie />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>;
}