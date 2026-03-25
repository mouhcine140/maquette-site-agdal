import React from 'react';
import { motion } from 'framer-motion';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  isLoading,
  ...props
}: ButtonProps) {
  const baseStyles =
  'inline-flex items-center justify-center rounded-full font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  const variants = {
    primary:
    'bg-forest-green text-white hover:bg-dark-green focus:ring-forest-green shadow-md hover:shadow-lg',
    secondary:
    'bg-sunny-yellow text-dark-green hover:bg-yellow-400 focus:ring-sunny-yellow shadow-md hover:shadow-lg',
    outline:
    'border-2 border-forest-green text-forest-green hover:bg-forest-green hover:text-white focus:ring-forest-green',
    ghost: 'text-forest-green hover:bg-sage/50 focus:ring-forest-green'
  };
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  return (
    <motion.button
      whileHover={{
        scale: 1.02
      }}
      whileTap={{
        scale: 0.98
      }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={isLoading || props.disabled}
      {...props}>

      {isLoading ?
      <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" /> :
      null}
      {children}
    </motion.button>);

}