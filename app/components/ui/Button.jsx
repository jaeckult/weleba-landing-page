'use client';

import { forwardRef } from 'react';

const variants = {
  primary: 'bg-[#00d4a4] hover:bg-[#00b890] text-white',
  secondary: 'bg-white hover:bg-gray-50 text-[#0a1628] border border-gray-200',
  outline: 'bg-transparent border-2 border-[#00d4a4] text-[#00d4a4] hover:bg-[#00d4a4] hover:text-white',
  ghost: 'bg-transparent hover:bg-gray-100 text-[#0a1628]',
  dark: 'bg-[#0a1628] hover:bg-[#1a2638] text-white',
  link: 'bg-transparent text-[#00d4a4] hover:underline p-0',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
  xl: 'px-10 py-5 text-xl',
};

const Button = forwardRef(({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  ...props
}, ref) => {
  return (
    <button
      ref={ref}
      className={`
        inline-flex items-center justify-center gap-2
        font-semibold rounded-lg
        transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-[#00d4a4] focus:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      disabled={disabled}
      {...props}
    >
      {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
