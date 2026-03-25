import React from 'react';
import { motion } from 'framer-motion';
interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}
export function Card({
  children,
  className = '',
  hoverEffect = true
}: CardProps) {
  return (
    <motion.div
      whileHover={
      hoverEffect ?
      {
        y: -5,
        boxShadow:
        '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
      } :
      {}
      }
      className={`bg-white rounded-2xl shadow-md overflow-hidden border border-sage/30 ${className}`}>

      {children}
    </motion.div>);

}