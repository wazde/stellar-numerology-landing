import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const MoonIcon = ({ className = "", ...props }: IconProps) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
    <path d="M70 50c0-16.569-13.431-30-30-30 2.761 0 5.439.373 8 1.069C59.193 24.563 67 36.15 67 50s-7.807 25.437-19 28.931A29.94 29.94 0 0 0 70 50Z" />
    <circle cx="30" cy="25" r="1" fill="currentColor" />
    <circle cx="45" cy="15" r="1.5" fill="currentColor" />
    <circle cx="55" cy="35" r="1" fill="currentColor" />
    <path d="M25 20l2 4 4 2-4 2-2 4-2-4-4-2 4-2z" fill="currentColor" />
  </svg>
);

export const SunIcon = ({ className = "", ...props }: IconProps) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
    <circle cx="50" cy="50" r="15" />
    <circle cx="50" cy="50" r="8" fill="currentColor" />
    {[...Array(12)].map((_, i) => {
      const angle = (i * 30 * Math.PI) / 180;
      const x1 = 50 + 22 * Math.cos(angle);
      const y1 = 50 + 22 * Math.sin(angle);
      const x2 = 50 + 35 * Math.cos(angle);
      const y2 = 50 + 35 * Math.sin(angle);
      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
    })}
  </svg>
);

export const EyeIcon = ({ className = "", ...props }: IconProps) => (
  <svg viewBox="0 0 100 60" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M5 30s20-25 45-25 45 25 45 25-20 25-45 25S5 30 5 30Z" />
    <circle cx="50" cy="30" r="12" />
    <circle cx="50" cy="30" r="5" fill="currentColor" />
    {[...Array(16)].map((_, i) => {
      const angle = (i * 22.5 * Math.PI) / 180;
      const x1 = 50 + 15 * Math.cos(angle);
      const y1 = 30 + 15 * Math.sin(angle);
      const x2 = 50 + 22 * Math.cos(angle);
      const y2 = 30 + 22 * Math.sin(angle);
      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} opacity="0.5" />;
    })}
  </svg>
);

export const CrystalIcon = ({ className = "", ...props }: IconProps) => (
  <svg viewBox="0 0 80 100" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M40 5L65 35L55 95H25L15 35L40 5Z" />
    <path d="M40 5L40 95" opacity="0.5" />
    <path d="M15 35L65 35" opacity="0.5" />
    <path d="M25 95L40 35L55 95" opacity="0.3" />
    <circle cx="40" cy="20" r="2" fill="currentColor" opacity="0.5" />
  </svg>
);

export const HandIcon = ({ className = "", ...props }: IconProps) => (
  <svg viewBox="0 0 80 100" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M20 95V55C20 45 25 40 35 40H45C55 40 60 45 60 55V95" />
    <path d="M25 40V25C25 20 28 15 35 15" />
    <path d="M55 40V25C55 20 52 15 45 15" />
    <path d="M40 40V10" />
    <circle cx="40" cy="60" r="8" />
    <circle cx="40" cy="60" r="3" fill="currentColor" />
    <path d="M32 75l16 0" opacity="0.5" />
    <path d="M30 82l20 0" opacity="0.5" />
  </svg>
);

export const StarburstIcon = ({ className = "", ...props }: IconProps) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="1">
    {[...Array(24)].map((_, i) => {
      const angle = (i * 15 * Math.PI) / 180;
      const length = i % 2 === 0 ? 45 : 30;
      const x2 = 50 + length * Math.cos(angle);
      const y2 = 50 + length * Math.sin(angle);
      return <line key={i} x1="50" y1="50" x2={x2} y2={y2} opacity={i % 2 === 0 ? 1 : 0.5} />;
    })}
    <circle cx="50" cy="50" r="5" fill="currentColor" />
  </svg>
);

export const ConstellationDivider = ({ className = "", ...props }: IconProps) => (
  <svg viewBox="0 0 400 40" className={className} fill="none" stroke="currentColor" strokeWidth="1">
    <line x1="0" y1="20" x2="150" y2="20" opacity="0.3" />
    <line x1="250" y1="20" x2="400" y2="20" opacity="0.3" />
    <circle cx="160" cy="20" r="2" fill="currentColor" />
    <circle cx="180" cy="12" r="1.5" fill="currentColor" />
    <circle cx="200" cy="20" r="3" fill="currentColor" />
    <circle cx="220" cy="12" r="1.5" fill="currentColor" />
    <circle cx="240" cy="20" r="2" fill="currentColor" />
    <line x1="160" y1="20" x2="180" y2="12" opacity="0.5" />
    <line x1="180" y1="12" x2="200" y2="20" opacity="0.5" />
    <line x1="200" y1="20" x2="220" y2="12" opacity="0.5" />
    <line x1="220" y1="12" x2="240" y2="20" opacity="0.5" />
  </svg>
);
