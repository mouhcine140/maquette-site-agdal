import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sprout } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/Button';
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const links = [
  {
    name: 'Accueil',
    path: '/'
  },
  {
    name: 'À propos',
    path: '/a-propos'
  },
  {
    name: 'Nos Cycles',
    path: '/nos-cycles'
  },
  {
    name: 'Vie Scolaire',
    path: '/vie-scolaire'
  },
  {
    name: 'Galerie',
    path: '/galerie'
  },
  {
    name: 'Contact',
    path: '/contact'
  }];

  const isActive = (path: string) => location.pathname === path;
  return (
    <nav className="sticky top-0 z-50 bg-forest-green text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-white p-2 rounded-full group-hover:scale-110 transition-transform duration-300">
              <Sprout className="h-8 w-8 text-forest-green" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl leading-none">
                OLM Souissi
              </span>
              <span className="text-xs text-sage/80 font-normal">
                Groupe Scolaire
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {links.map((link) =>
            <Link
              key={link.name}
              to={link.path}
              className={`relative px-2 py-1 font-semibold transition-colors duration-200 hover:text-sunny-yellow ${isActive(link.path) ? 'text-sunny-yellow' : 'text-white'}`}>

                {link.name}
                {isActive(link.path) &&
              <motion.div
                layoutId="underline"
                className="absolute left-0 right-0 bottom-0 h-1 bg-sunny-yellow rounded-full" />

              }
              </Link>
            )}
            <Link to="/inscriptions">
              <Button variant="secondary" size="sm">
                Inscriptions
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-sunny-yellow transition-colors focus:outline-none"
              aria-label="Toggle menu">

              {isOpen ?
              <X className="h-8 w-8" /> :

              <Menu className="h-8 w-8" />
              }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen &&
        <motion.div
          initial={{
            opacity: 0,
            height: 0
          }}
          animate={{
            opacity: 1,
            height: 'auto'
          }}
          exit={{
            opacity: 0,
            height: 0
          }}
          className="md:hidden bg-forest-green border-t border-white/10 overflow-hidden">

            <div className="px-4 pt-2 pb-6 space-y-2">
              {links.map((link, index) =>
            <motion.div
              key={link.name}
              initial={{
                x: -20,
                opacity: 0
              }}
              animate={{
                x: 0,
                opacity: 1
              }}
              transition={{
                delay: index * 0.05
              }}>

                  <Link
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 rounded-lg text-lg font-medium ${isActive(link.path) ? 'bg-white/10 text-sunny-yellow' : 'text-white hover:bg-white/5 hover:text-sunny-yellow'}`}>

                    {link.name}
                  </Link>
                </motion.div>
            )}
              <motion.div
              initial={{
                x: -20,
                opacity: 0
              }}
              animate={{
                x: 0,
                opacity: 1
              }}
              transition={{
                delay: links.length * 0.05
              }}
              className="pt-2">

                <Link to="/inscriptions" onClick={() => setIsOpen(false)}>
                  <Button variant="secondary" className="w-full justify-center">
                    Inscriptions
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </nav>);

}