'use client';

const variants = {
  default: 'bg-gray-100 text-gray-700',
  primary: 'bg-[#0052cc] text-white',
  secondary: 'bg-[#00d4a4] text-white',
  success: 'bg-green-100 text-green-700',
  warning: 'bg-yellow-100 text-yellow-700',
  error: 'bg-red-100 text-red-700',
  info: 'bg-blue-100 text-blue-700',
  outline: 'bg-transparent border border-current',
  new: 'bg-[#00d4a4] text-white',
  updated: 'bg-blue-500 text-white',
};

const sizes = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-2.5 py-1 text-sm',
  lg: 'px-3 py-1.5 text-base',
};

const Badge = ({
  children,
  variant = 'default',
  size = 'sm',
  className = '',
  dot = false,
  ...props
}) => {
  return (
    <span
      className={`
        inline-flex items-center gap-1.5
        font-medium rounded-full
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {dot && (
        <span className="w-1.5 h-1.5 rounded-full bg-current" />
      )}
      {children}
    </span>
  );
};

export default Badge;
