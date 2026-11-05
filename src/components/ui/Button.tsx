import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  target?: string;
  rel?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  target,
  rel,
  icon,
  iconPosition = 'left',
  className = '',
  children,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-6 py-3.5 text-base gap-2.5",
  };

  const variantStyles = {
    primary: "bg-gradient-to-r from-accent-blue to-accent-cyan text-white shadow-md shadow-accent-cyan/15 hover:shadow-lg hover:shadow-accent-cyan/25 hover:brightness-110 focus-visible:ring-accent-cyan focus-visible:ring-offset-dark-bg",
    secondary: "bg-light-card dark:bg-dark-surface text-light-text dark:text-dark-text border border-light-border dark:border-dark-border hover:bg-light-border/40 dark:hover:bg-dark-card hover:border-accent-cyan/40 focus-visible:ring-accent-blue focus-visible:ring-offset-dark-bg",
    outline: "bg-transparent text-light-text dark:text-dark-text border border-light-border dark:border-dark-border hover:border-accent-cyan/60 hover:text-accent-cyan focus-visible:ring-accent-cyan focus-visible:ring-offset-dark-bg",
    ghost: "bg-transparent text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text hover:bg-light-border/30 dark:hover:bg-dark-card/60 focus-visible:ring-accent-cyan focus-visible:ring-offset-dark-bg",
  };

  const classes = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        className={classes}
      >
        {icon && iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === 'right' && <span className="flex-shrink-0">{icon}</span>}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {icon && iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="flex-shrink-0">{icon}</span>}
    </button>
  );
};
