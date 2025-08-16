import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-8 w-auto',
    md: 'h-10 w-auto',
    lg: 'h-12 w-auto',
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        className={sizeClasses[size]}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* V lettermark with modern geometric design */}
        <path
          d="M8 8L20 32L32 8H26L20 22L14 8H8Z"
          fill="url(#logoGradient)"
          stroke="none"
        />
        <defs>
          <linearGradient
            id="logoGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="hsl(6 100% 67%)" />
            <stop offset="100%" stopColor="hsl(6 100% 60%)" />
          </linearGradient>
        </defs>
      </svg>
      <span className={`font-bold tracking-tight ${
        size === 'lg' ? 'text-2xl' : size === 'md' ? 'text-xl' : 'text-lg'
      }`}>
        Vermixor
      </span>
    </div>
  );
};

export default Logo;