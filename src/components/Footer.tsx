import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Sprout } from
'lucide-react';
export function Footer() {
  return (
    <footer className="bg-dark-green text-white pt-16 pb-8 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-forest-green via-sunny-yellow to-forest-green" />
      <div className="absolute -bottom-20 -right-20 opacity-5">
        <Sprout size={300} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* School Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-white p-1.5 rounded-full">
                <Sprout className="h-6 w-6 text-dark-green" />
              </div>
              <span className="font-bold text-xl">OLM Souissi</span>
            </div>
            <p className="text-sage/80 text-sm leading-relaxed">
              Un environnement éducatif bienveillant où chaque enfant cultive
              ses talents et grandit en confiance.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                className="text-sage hover:text-sunny-yellow transition-colors">

                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-sage hover:text-sunny-yellow transition-colors">

                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-sage hover:text-sunny-yellow transition-colors">

                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sunny-yellow font-bold text-lg mb-4">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-sage hover:text-white transition-colors">

                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  to="/a-propos"
                  className="text-sage hover:text-white transition-colors">

                  À propos
                </Link>
              </li>
              <li>
                <Link
                  to="/nos-cycles"
                  className="text-sage hover:text-white transition-colors">

                  Nos Cycles
                </Link>
              </li>
              <li>
                <Link
                  to="/vie-scolaire"
                  className="text-sage hover:text-white transition-colors">

                  Vie Scolaire
                </Link>
              </li>
              <li>
                <Link
                  to="/galerie"
                  className="text-sage hover:text-white transition-colors">

                  Galerie
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sunny-yellow font-bold text-lg mb-4">
              Contact
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-sunny-yellow flex-shrink-0 mt-0.5" />
                <span className="text-sage">
                  Quartier Souissi, Rabat, Maroc
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-sunny-yellow flex-shrink-0" />
                <span className="text-sage">+212 5 37 XX XX XX</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-sunny-yellow flex-shrink-0" />
                <span className="text-sage">contact@olmsouissi.ma</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-sunny-yellow font-bold text-lg mb-4">
              Horaires
            </h3>
            <ul className="space-y-2 text-sm text-sage">
              <li className="flex justify-between">
                <span>Lundi - Vendredi:</span>
                <span className="text-white">08:00 - 16:30</span>
              </li>
              <li className="flex justify-between">
                <span>Mercredi:</span>
                <span className="text-white">08:00 - 12:30</span>
              </li>
              <li className="flex justify-between">
                <span>Samedi - Dimanche:</span>
                <span className="text-white">Fermé</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-sage/60">
          <p>
            © {new Date().getFullYear()} Groupe Scolaire OLM Souissi. Tous
            droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">
              Mentions Légales
            </a>
            <a href="#" className="hover:text-white">
              Politique de Confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>);

}