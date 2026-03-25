import React from 'react';
export function LeafIcon({ className = 'w-6 h-6' }: {className?: string;}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg">

      <path
        d="M21.5 2C21.5 2 22 8.5 16 14.5C10 20.5 3.5 20 3.5 20C3.5 20 3 13.5 9 7.5C15 1.5 21.5 2 21.5 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round" />

      <path
        d="M9 7.5L20.5 19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round" />

    </svg>);

}
export function TreeIllustration({
  className = 'w-full h-auto'


}: {className?: string;}) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      xmlns="http://www.w3.org/2000/svg">

      {/* Trunk */}
      <path d="M95 180L90 120H110L105 180H95Z" fill="#8B4513" />
      {/* Leaves */}
      <circle
        cx="100"
        cy="90"
        r="40"
        fill="#2D6A4F"
        className="animate-float"
        style={{
          animationDelay: '0s'
        }} />

      <circle
        cx="70"
        cy="110"
        r="30"
        fill="#40916C"
        className="animate-float"
        style={{
          animationDelay: '1s'
        }} />

      <circle
        cx="130"
        cy="110"
        r="30"
        fill="#40916C"
        className="animate-float"
        style={{
          animationDelay: '2s'
        }} />

      <circle
        cx="100"
        cy="60"
        r="25"
        fill="#52B788"
        className="animate-float"
        style={{
          animationDelay: '1.5s'
        }} />

      <circle
        cx="70"
        cy="80"
        r="20"
        fill="#74C69D"
        className="animate-float"
        style={{
          animationDelay: '0.5s'
        }} />

      <circle
        cx="130"
        cy="80"
        r="20"
        fill="#74C69D"
        className="animate-float"
        style={{
          animationDelay: '2.5s'
        }} />

    </svg>);

}
export function WaveDivider({
  className = 'w-full',
  fill = '#E8F0E4'



}: {className?: string;fill?: string;}) {
  return (
    <svg
      viewBox="0 0 1440 120"
      className={className}
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg">

      <path
        fill={fill}
        fillOpacity="1"
        d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
      </path>
    </svg>);

}
export function WaveDividerTop({
  className = 'w-full',
  fill = '#E8F0E4'



}: {className?: string;fill?: string;}) {
  return (
    <svg
      viewBox="0 0 1440 120"
      className={className}
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg">

      <path
        fill={fill}
        fillOpacity="1"
        d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
      </path>
    </svg>);

}