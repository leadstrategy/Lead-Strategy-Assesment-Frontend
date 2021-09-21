import React from 'react';

// styles
import { Section } from './styles';

interface PageWrapperProps {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
}

export default function PageWrapper({ children, className }: PageWrapperProps) {
  return <Section className={`container flex flex-col px-6 mx-auto md:px-0 ${className}`}>{children}</Section>;
}
