import React from 'react';
import './textfield.css';

export interface textFieldProps {
  className?: string;
  label?: string;
  message?: string;
  disabled?: boolean;
  placeholder?: string;
  type?: 'text' | 'password' | 'email' | 'number';
  error?: string;
  required?: boolean;
}

export const TextField = ({ 
  className,
  label,
  message,
  error,
  required,
  ...props
}: textFieldProps) => {

  const borderColor = error ? { borderColor: '#dc2626' } : { borderColor: '#ccc' };

  return (
    <div className={['wrapper', className].join(' ')}>
      {label && <label>{label} {required && <span style={{ color: '#dc2626' }}>*</span>}</label>}
      <input type="text" className='input-textfield' style={borderColor} {...props}/>
      {error && <span className='text-sm'>{error}</span>}
      {message && <span className='text-sm'>{message}</span>}
    </div>
  );
};
