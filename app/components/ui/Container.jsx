/**
 * Container Component
 * 
 * A reusable container that provides consistent max-width and centering
 * across all sections of the application.
 * 
 * Features:
 * - Fixed max-width of 1320px
 * - Horizontally centered with mx-auto
 * - Consistent horizontal padding (24px mobile, 32px desktop)
 * - Content never touches viewport edges
 */

const Container = ({ children, className = '' }) => {
  return (
    <div className={`max-w-[1320px] mx-auto px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
