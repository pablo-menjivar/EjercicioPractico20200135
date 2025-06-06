import React from 'react';

const Textarea = ({ 
  label, 
  name, 
  register, 
  validation, 
  error,
  placeholder = '',
  icon: Icon,
  className = '',
  required = false
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <div className="absolute left-3 top-3 text-gray-400">
            <Icon size={18} />
          </div>
        )}
        <textarea
          {...register(name, validation)}
          placeholder={placeholder}
          rows={4}
          className={`w-full px-4 py-2 border ${
            error ? 'border-red-500' : 'border-gray-300'
          } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${Icon ? 'pl-10' : ''}`}
        />
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-500">{error.message}</p>
      )}
    </div>
  );
};

export default Textarea;