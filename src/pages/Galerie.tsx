import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../components/ui/Button';
export function Galerie() {
  const [filter, setFilter] = useState('Tous');
  const categories = ['Tous', 'Maternelle', 'Primaire', 'Collège', 'Événements'];
  // Placeholder images generated with gradients
  const photos = [
  {
    id: 1,
    category: 'Maternelle',
    color: 'bg-red-200'
  },
  {
    id: 2,
    category: 'Primaire',
    color: 'bg-blue-200'
  },
  {
    id: 3,
    category: 'Collège',
    color: 'bg-green-200'
  },
  {
    id: 4,
    category: 'Événements',
    color: 'bg-yellow-200'
  },
  {
    id: 5,
    category: 'Maternelle',
    color: 'bg-purple-200'
  },
  {
    id: 6,
    category: 'Primaire',
    color: 'bg-indigo-200'
  },
  {
    id: 7,
    category: 'Événements',
    color: 'bg-pink-200'
  },
  {
    id: 8,
    category: 'Collège',
    color: 'bg-orange-200'
  }];

  const filteredPhotos =
  filter === 'Tous' ? photos : photos.filter((p) => p.category === filter);
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-dark-green mb-4">
            Notre Galerie
          </h1>
          <p className="text-gray-600">
            Retour en images sur les moments forts de l'année.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) =>
          <Button
            key={cat}
            variant={filter === cat ? 'primary' : 'ghost'}
            size="sm"
            onClick={() => setFilter(cat)}
            className="rounded-full">

              {cat}
            </Button>
          )}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <AnimatePresence>
            {filteredPhotos.map((photo) =>
            <motion.div
              key={photo.id}
              layout
              initial={{
                opacity: 0,
                scale: 0.8
              }}
              animate={{
                opacity: 1,
                scale: 1
              }}
              exit={{
                opacity: 0,
                scale: 0.8
              }}
              transition={{
                duration: 0.3
              }}
              className="aspect-square rounded-2xl overflow-hidden shadow-md cursor-pointer group relative">

                <div
                className={`w-full h-full ${photo.color} transition-transform duration-500 group-hover:scale-110`} />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="text-white font-bold bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
                    {photo.category}
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>);

}