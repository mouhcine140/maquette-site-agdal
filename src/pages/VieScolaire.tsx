import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/ui/Card';
export function VieScolaire() {
  const activities = [
  {
    title: 'Activités Sportives',
    desc: 'Football, Basketball, Gymnastique',
    color: 'from-green-400 to-blue-500'
  },
  {
    title: 'Arts & Créativité',
    desc: 'Peinture, Musique, Théâtre',
    color: 'from-pink-400 to-purple-500'
  },
  {
    title: 'Sorties Pédagogiques',
    desc: 'Musées, Nature, Culture',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    title: 'Clubs & Ateliers',
    desc: 'Robotique, Échecs, Lecture',
    color: 'from-blue-400 to-indigo-500'
  },
  {
    title: 'Événements',
    desc: 'Fêtes, Spectacles, Compétitions',
    color: 'from-red-400 to-pink-500'
  },
  {
    title: 'Cantine',
    desc: 'Repas équilibrés et bio',
    color: 'from-green-500 to-emerald-600'
  }];

  return (
    <div className="min-h-screen bg-sage/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-dark-green mb-4">
            La Vie à OLM Souissi
          </h1>
          <p className="text-xl text-gray-600">
            Au-delà des cours, un lieu de vie riche et dynamique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              scale: 0.9
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              delay: index * 0.1
            }}>

              <Card className="h-full group cursor-pointer">
                <div
                className={`h-48 bg-gradient-to-br ${activity.color} relative overflow-hidden`}>

                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                  {/* Placeholder for real image */}
                  <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl opacity-30 rotate-12 transform scale-150">
                    {activity.title.split(' ')[0]}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark-green mb-2 group-hover:text-forest-green transition-colors">
                    {activity.title}
                  </h3>
                  <p className="text-gray-600">{activity.desc}</p>
                </div>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
    </div>);

}