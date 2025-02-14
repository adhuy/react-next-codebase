import React from 'react';
import './button.css';

export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'sm' | 'md' | 'lg';
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'info' | 'warning' | 'success' | 'danger';
  className?: string;
}

export const Button = ({
  primary = false,
  size = 'md',
  backgroundColor,
  variant = 'primary',
  label,
  className,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  let buttonColor = '';

  switch (variant) {
    case 'info':
      buttonColor = 'storybook-button-color--info';
      break;
    case 'warning':
      buttonColor = 'storybook-button-color--warning';
      break;
    case 'success':
      buttonColor = 'storybook-button-color--success';
      break;
    case 'danger':
      buttonColor = 'storybook-button-color--danger';
      break;
    default:
      buttonColor = '';
      break;
  }

  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode, buttonColor, className].join(' ')}
      {...props}
    >
      {label}
      <style jsx>{`
        button {
          background-color: ${backgroundColor};
        }
      `}</style>
    </button>
  );
};
