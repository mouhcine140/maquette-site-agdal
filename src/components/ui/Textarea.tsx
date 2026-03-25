import React from 'react';
interface TextareaProps extends
  React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}
export function Textarea({
  label,
  error,
  className = '',
  ...props
}: TextareaProps) {
  return (
    <div className="w-full">
      {label &&
      <label className="block text-sm font-bold text-dark-green mb-1 ml-1">
          {label}
        </label>
      }
      <textarea
        className={`w-full px-4 py-3 rounded-xl border-2 border-sage bg-white focus:border-forest-green focus:ring-2 focus:ring-forest-green/20 outline-none transition-all duration-200 min-h-[120px] resize-y ${error ? 'border-red-500' : ''} ${className}`}
        {...props} />

      {error && <p className="mt-1 text-sm text-red-500 ml-1">{error}</p>}
    </div>);

}