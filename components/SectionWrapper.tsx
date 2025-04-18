import { ReactNode } from 'react';
import { styleConfig } from '@/config/styles';

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function SectionWrapper({ id, children, className = '' }: SectionWrapperProps) {
  const { layout } = styleConfig;
  
  return (
    <section 
      id={id} 
      className={`${layout.section} scroll-mt-navbar ${className}`}
    >
      {children}
    </section>
  );
} 