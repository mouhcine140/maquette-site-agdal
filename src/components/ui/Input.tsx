import React from 'react';
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}
export function Input({ label, error, className = '', ...props }: InputProps) {
  return (
    <div className="w-full">
      {label &&
      <label className="block text-sm font-bold text-dark-green mb-1 ml-1">
          {label}
        </label>
      }
      <input
        className={`w-full px-4 py-3 rounded-xl border-2 border-sage bg-white focus:border-forest-green focus:ring-2 focus:ring-forest-green/20 outline-none transition-all duration-200 ${error ? 'border-red-500' : ''} ${className}`}
        {...props} />

      {error && <p className="mt-1 text-sm text-red-500 ml-1">{error}</p>}
    </div>);

}