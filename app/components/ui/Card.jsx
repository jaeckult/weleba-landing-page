'use client';

const variants = {
  default: 'bg-white border border-gray-100',
  elevated: 'bg-white shadow-lg',
  outlined: 'bg-white border-2 border-gray-200',
  filled: 'bg-gray-50',
  dark: 'bg-[#0a1628] text-white',
  gradient: 'bg-gradient-to-br from-[#0a1628] to-[#1a2638] text-white',
};

const Card = ({
  children,
  variant = 'default',
  className = '',
  hover = false,
  padding = 'md',
  ...props
}) => {
  const paddingSizes = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10',
  };

  return (
    <div
      className={`
        rounded-xl
        ${variants[variant]}
        ${paddingSizes[padding]}
        ${hover ? 'card-hover cursor-pointer' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

const CardHeader = ({ children, className = '' }) => (
  <div className={`mb-4 ${className}`}>
    {children}
  </div>
);

const CardTitle = ({ children, className = '' }) => (
  <h3 className={`text-xl font-semibold text-inherit ${className}`}>
    {children}
  </h3>
);

const CardDescription = ({ children, className = '' }) => (
  <p className={`text-gray-500 mt-1 ${className}`}>
    {children}
  </p>
);

const CardContent = ({ children, className = '' }) => (
  <div className={className}>
    {children}
  </div>
);

const CardFooter = ({ children, className = '' }) => (
  <div className={`mt-4 pt-4 border-t border-gray-100 ${className}`}>
    {children}
  </div>
);

Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Description = CardDescription;
Card.Content = CardContent;
Card.Footer = CardFooter;

export default Card;
