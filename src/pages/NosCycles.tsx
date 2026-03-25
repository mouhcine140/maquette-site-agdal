import React from 'react';
import { motion } from 'framer-motion';
import { Baby, BookOpen, GraduationCap, Check } from 'lucide-react';
import { Card } from '../components/ui/Card';
import {
  WaveDividerTop,
  WaveDivider } from
'../components/illustrations/GardenSVGs';
export function NosCycles() {
  const cycles = [
  {
    id: 'maternelle',
    title: 'Maternelle',
    age: '3 - 5 ans',
    icon: Baby,
    color: 'bg-sunny-yellow',
    textColor: 'text-sunny-yellow',
    description:
    "L'école maternelle est une étape essentielle du parcours des élèves pour garantir leur réussite scolaire. Sa mission principale est de donner envie aux enfants d'aller à l'école pour apprendre, affirmer et épanouir leur personnalité.",
    features: [
    'Motricité fine et globale',
    'Socialisation et vivre-ensemble',
    'Découverte du monde',
    'Initiation aux langues'],

    image: 'linear-gradient(135deg, #FFF3D0 0%, #FFE4A0 100%)' // Placeholder gradient
  },
  {
    id: 'primaire',
    title: 'Primaire',
    age: '6 - 11 ans',
    icon: BookOpen,
    color: 'bg-forest-green',
    textColor: 'text-forest-green',
    description:
    'Au cycle primaire, nous consolidons les apprentissages fondamentaux tout en éveillant la curiosité. Nos élèves acquièrent des méthodes de travail solides et développent leur autonomie.',
    features: [
    'Maîtrise de la langue française',
    'Mathématiques et logique',
    'Projets artistiques et culturels',
    'Éducation physique et sportive'],

    image: 'linear-gradient(135deg, #E8F0E4 0%, #C6E2C3 100%)'
  },
  {
    id: 'college',
    title: 'Collège',
    age: '12 - 14 ans',
    icon: GraduationCap,
    color: 'bg-dark-green',
    textColor: 'text-dark-green',
    description:
    "Le collège marque l'entrée dans l'adolescence et la préparation aux études supérieures. Nous visons l'excellence académique tout en accompagnant le développement personnel de chaque jeune.",
    features: [
    'Approfondissement disciplinaire',
    'Langues vivantes renforcées',
    'Orientation et projet personnel',
    'Sciences et technologies'],

    image: 'linear-gradient(135deg, #D1E7DD 0%, #A3C4BC 100%)'
  }];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-sage py-20 text-center relative">
        <h1 className="text-5xl font-bold text-dark-green mb-4 relative z-10">
          Nos Cycles d'Enseignement
        </h1>
        <p className="text-xl text-gray-700 relative z-10">
          Un accompagnement adapté à chaque étape de la vie.
        </p>
        <div className="absolute bottom-0 left-0 w-full text-white">
          <WaveDivider fill="currentColor" />
        </div>
      </div>

      <div className="space-y-0">
        {cycles.map((cycle, index) =>
        <section
          key={cycle.id}
          className={`py-24 ${index % 2 === 1 ? 'bg-warm-cream' : 'bg-white'}`}>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div
              className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>

                {/* Image/Illustration Side */}
                <motion.div
                className="w-full md:w-1/2"
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -50 : 50
                }}
                whileInView={{
                  opacity: 1,
                  x: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  duration: 0.6
                }}>

                  <div
                  className="rounded-3xl h-[300px] md:h-[400px] w-full shadow-lg flex items-center justify-center relative overflow-hidden"
                  style={{
                    background: cycle.image
                  }}>

                    <cycle.icon size={120} className="text-white opacity-20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      {/* In a real app, this would be a photo */}
                      <span className="bg-white/30 backdrop-blur-sm px-6 py-2 rounded-full text-dark-green font-bold">
                        Illustration {cycle.title}
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Content Side */}
                <motion.div
                className="w-full md:w-1/2"
                initial={{
                  opacity: 0,
                  y: 30
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.2
                }}>

                  <div
                  className={`inline-flex items-center px-4 py-2 rounded-full ${cycle.color} bg-opacity-10 text-sm font-bold mb-4 ${cycle.textColor}`}>

                    <cycle.icon size={16} className="mr-2" />
                    {cycle.age}
                  </div>
                  <h2 className="text-4xl font-bold text-dark-green mb-6">
                    {cycle.title}
                  </h2>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    {cycle.description}
                  </p>

                  <ul className="space-y-4">
                    {cycle.features.map((feature, i) =>
                  <li key={i} className="flex items-start">
                        <div
                      className={`mt-1 mr-3 p-1 rounded-full ${cycle.color} text-white`}>

                          <Check size={12} />
                        </div>
                        <span className="text-gray-700 font-medium">
                          {feature}
                        </span>
                      </li>
                  )}
                  </ul>
                </motion.div>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>);

}