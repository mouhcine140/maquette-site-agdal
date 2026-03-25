import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Award, Sun, Zap } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { WaveDivider } from '../components/illustrations/GardenSVGs';
export function APropos() {
  const milestones = [
  {
    year: '2010',
    title: 'Fondation',
    desc: "Création du Groupe Scolaire OLM Souissi avec une vision centrée sur l'enfant."
  },
  {
    year: '2015',
    title: 'Extension Primaire',
    desc: 'Ouverture du cycle primaire et inauguration des nouveaux locaux.'
  },
  {
    year: '2020',
    title: 'Lancement du Collège',
    desc: "Accompagnement des élèves jusqu'au brevet avec des équipements modernes."
  },
  {
    year: '2024',
    title: 'Innovation',
    desc: 'Intégration des nouvelles technologies et du programme bilingue renforcé.'
  }];

  const values = [
  {
    icon: Heart,
    title: 'Bienveillance',
    desc: 'Un regard positif et encourageant sur chaque élève.'
  },
  {
    icon: Award,
    title: 'Excellence',
    desc: 'La rigueur académique au service de la réussite.'
  },
  {
    icon: Sun,
    title: 'Épanouissement',
    desc: 'Favoriser le développement personnel et la confiance en soi.'
  },
  {
    icon: Zap,
    title: 'Innovation',
    desc: 'Des méthodes pédagogiques modernes et adaptées.'
  }];

  return (
    <div className="min-h-screen bg-warm-cream">
      {/* Header */}
      <div className="bg-forest-green text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl font-bold mb-4">Notre Histoire</h1>
          <p className="text-xl text-sage max-w-2xl mx-auto">
            Depuis plus d'une décennie, nous construisons l'école de demain,
            brique par brique, sourire par sourire.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full text-warm-cream">
          <WaveDivider fill="currentColor" />
        </div>
      </div>

      {/* Timeline Section */}
      <section className="py-20 max-w-4xl mx-auto px-4">
        <div className="relative border-l-4 border-forest-green/30 ml-6 md:ml-1/2 space-y-12">
          {milestones.map((item, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              x: -20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            className="relative pl-8 md:pl-0">

              {/* Dot */}
              <div className="absolute -left-[11px] top-0 w-6 h-6 bg-sunny-yellow rounded-full border-4 border-white shadow-sm z-10" />

              <div className="md:flex items-start justify-between group">
                <div className="md:w-[45%] mb-2 md:mb-0 md:text-right md:pr-8">
                  <span className="text-forest-green font-bold text-xl block">
                    {item.year}
                  </span>
                </div>
                <div className="md:w-[45%] md:pl-8">
                  <h3 className="text-xl font-bold text-dark-green mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark-green mb-4">
              Nos Valeurs
            </h2>
            <div className="w-24 h-1 bg-sunny-yellow mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, i) =>
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              transition={{
                delay: i * 0.1
              }}>

                <Card className="p-6 text-center h-full hover:bg-sage/20 transition-colors">
                  <div className="w-16 h-16 bg-forest-green/10 rounded-full flex items-center justify-center mx-auto mb-4 text-forest-green">
                    <val.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-dark-green">
                    {val.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{val.desc}</p>
                </Card>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>);

}