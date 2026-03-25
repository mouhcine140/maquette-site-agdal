import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Baby,
  Star,
  Quote } from
'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import {
  WaveDivider,
  WaveDividerTop,
  TreeIllustration } from
'../components/illustrations/GardenSVGs';
export function Accueil() {
  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
      <section className="relative bg-sage pt-12 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{
                opacity: 0,
                x: -50
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              transition={{
                duration: 0.8
              }}>

              <div className="inline-block px-4 py-1.5 bg-white rounded-full text-forest-green font-bold text-sm mb-6 shadow-sm">
                🌱 Inscriptions ouvertes 2026-2027
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold text-dark-green mb-6 leading-tight">
                Cultiver les <span className="text-forest-green">Talents</span>{' '}
                de Demain
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Bienvenue au Groupe Scolaire OLM Souissi. Un environnement
                bienveillant et stimulant où chaque enfant s'épanouit à son
                propre rythme, de la maternelle au collège.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/nos-cycles">
                  <Button size="lg" className="w-full sm:w-auto">
                    Découvrir nos cycles
                  </Button>
                </Link>
                <Link to="/inscriptions">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="w-full sm:w-auto">

                    Pré-inscription
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8
              }}
              animate={{
                opacity: 1,
                scale: 1
              }}
              transition={{
                duration: 0.8,
                delay: 0.2
              }}
              className="relative h-[400px] md:h-[500px] flex items-center justify-center">

              {/* Decorative floating elements */}
              <motion.div
                className="absolute top-10 left-10 text-sunny-yellow"
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 10, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity
                }}>

                <BookOpen size={48} />
              </motion.div>
              <motion.div
                className="absolute bottom-20 right-10 text-forest-green"
                animate={{
                  y: [0, 20, 0],
                  rotate: [0, -10, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity
                }}>

                <GraduationCap size={56} />
              </motion.div>

              {/* Main Illustration */}
              <TreeIllustration className="w-full h-full drop-shadow-xl" />
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <WaveDivider fill="#FFFFFF" />
        </div>
      </section>

      {/* JOURNEY PATH SECTION */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark-green mb-4">
              Un Parcours de Croissance
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nous accompagnons votre enfant à chaque étape de son
              développement, en lui offrant les outils pour grandir et réussir.
            </p>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-2 bg-sage -translate-y-1/2 rounded-full z-0" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {/* Maternelle */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 50
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  duration: 0.5
                }}>

                <Card className="h-full p-8 text-center border-t-4 border-t-sunny-yellow">
                  <div className="bg-light-yellow w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-sunny-yellow">
                    <Baby size={40} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Maternelle</h3>
                  <p className="text-sm text-forest-green font-bold mb-4">
                    3 - 5 ans
                  </p>
                  <p className="text-gray-600 mb-6">
                    Éveil, socialisation et découverte dans un cadre ludique et
                    sécurisant.
                  </p>
                  <Link
                    to="/nos-cycles"
                    className="text-forest-green font-bold hover:text-sunny-yellow inline-flex items-center">

                    En savoir plus <ArrowRight size={16} className="ml-2" />
                  </Link>
                </Card>
              </motion.div>

              {/* Primaire */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 50
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.2
                }}>

                <Card className="h-full p-8 text-center border-t-4 border-t-forest-green transform md:-translate-y-8">
                  <div className="bg-sage w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-forest-green">
                    <BookOpen size={40} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Primaire</h3>
                  <p className="text-sm text-forest-green font-bold mb-4">
                    6 - 11 ans
                  </p>
                  <p className="text-gray-600 mb-6">
                    Acquisition des fondamentaux et développement de la
                    curiosité intellectuelle.
                  </p>
                  <Link
                    to="/nos-cycles"
                    className="text-forest-green font-bold hover:text-sunny-yellow inline-flex items-center">

                    En savoir plus <ArrowRight size={16} className="ml-2" />
                  </Link>
                </Card>
              </motion.div>

              {/* Collège */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 50
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.4
                }}>

                <Card className="h-full p-8 text-center border-t-4 border-t-dark-green">
                  <div className="bg-sage w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-dark-green">
                    <GraduationCap size={40} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Collège</h3>
                  <p className="text-sm text-forest-green font-bold mb-4">
                    12 - 14 ans
                  </p>
                  <p className="text-gray-600 mb-6">
                    Consolidation des acquis et préparation vers l'excellence
                    académique.
                  </p>
                  <Link
                    to="/nos-cycles"
                    className="text-forest-green font-bold hover:text-sunny-yellow inline-flex items-center">

                    En savoir plus <ArrowRight size={16} className="ml-2" />
                  </Link>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-20 bg-warm-cream relative">
        <div className="absolute top-0 left-0 w-full rotate-180">
          <WaveDivider fill="#FFFFFF" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark-green mb-4">
              Ce que disent nos familles
            </h2>
            <div className="w-24 h-1 bg-sunny-yellow mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
            {
              text: "Une école formidable où mes enfants se sentent écoutés et valorisés. L'équipe pédagogique est exceptionnelle.",
              author: 'Sarah B.',
              role: "Maman d'élève en CE2"
            },
            {
              text: "L'approche bienveillante d'OLM Souissi a transformé le rapport de mon fils à l'école. Il est épanoui et curieux.",
              author: 'Karim M.',
              role: "Papa d'élève en Maternelle"
            },
            {
              text: "Un cadre verdoyant et apaisant, parfait pour l'apprentissage. Le niveau académique est excellent.",
              author: 'Leila K.',
              role: "Maman d'élève au Collège"
            }].
            map((testimonial, i) =>
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                scale: 0.9
              }}
              whileInView={{
                opacity: 1,
                scale: 1
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: i * 0.2
              }}>

                <Card className="p-8 h-full bg-white relative">
                  <Quote className="absolute top-6 right-6 text-sage w-10 h-10 opacity-50" />
                  <div className="flex text-sunny-yellow mb-4">
                    {[...Array(5)].map((_, j) =>
                  <Star key={j} size={16} fill="currentColor" />
                  )}
                  </div>
                  <p className="text-gray-700 italic mb-6 relative z-10">
                    "{testimonial.text}"
                  </p>
                  <div className="mt-auto">
                    <p className="font-bold text-dark-green">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </Card>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-forest-green text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {/* Abstract pattern could go here */}
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none">

            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
          </svg>
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-6">
            Prêt à rejoindre la famille OLM Souissi ?
          </h2>
          <p className="text-xl text-sage mb-8">
            Les inscriptions pour la prochaine rentrée scolaire sont ouvertes.
            Venez nous rencontrer !
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/inscriptions">
              <Button variant="secondary" size="lg">
                Commencer l'inscription
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-forest-green">

                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>);

}