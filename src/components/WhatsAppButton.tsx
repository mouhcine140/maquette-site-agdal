import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/212600000000" // Placeholder number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20bd5a] transition-colors flex items-center justify-center"
      initial={{
        scale: 0
      }}
      animate={{
        scale: 1
      }}
      whileHover={{
        scale: 1.1
      }}
      whileTap={{
        scale: 0.9
      }}
      aria-label="Contact us on WhatsApp">

      <motion.div
        animate={{
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'loop'
        }}>

        <MessageCircle className="h-8 w-8" />
      </motion.div>
    </motion.a>);

}