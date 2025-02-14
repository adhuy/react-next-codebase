import React from 'react';
import './badge.css';

export interface BadgeProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'sm' | 'md' | 'lg';
  label: string;
}

export const Badge = ({
  primary = false,
  size = 'md',
  backgroundColor,
  label,
  ...props
}: BadgeProps) => {
  const mode = primary ? 'storybook-badge--primary' : 'storybook-badge--secondary';
  return (
    <div
      className={['storybook-badge', `storybook-badge--${size}`, mode].join(' ')}
      {...props}
    >
      {label}
      <style jsx>{`
        badge {
          background-color: ${backgroundColor};
        }
      `}</style>
    </div>
  );
};
