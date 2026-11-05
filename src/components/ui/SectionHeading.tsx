import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = 'left',
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-8 sm:mb-12 md:mb-16 ${isCenter ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl'} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[11px] sm:text-xs font-mono font-medium tracking-wide mb-2.5 sm:mb-3 border border-accent-cyan/30 bg-accent-cyan/10 text-accent-cyan`}>
          <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse"></span>
          <span>{badge}</span>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-light-text dark:text-dark-text leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2.5 sm:mt-3.5 text-xs sm:text-base text-light-muted dark:text-dark-muted leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
