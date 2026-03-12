import React from 'react';

interface SvgTextLogoProps {
  text: string;
  className?: string;
  fontSize?: number;
  fontWeight?: number | string;
  letterSpacing?: number;
  textAnchor?: 'start' | 'middle' | 'end';
  dominantBaseline?: 'auto' | 'middle' | 'hanging';
}

export const SvgTextLogo: React.FC<SvgTextLogoProps> = ({
  text,
  className = '',
  fontSize = 48,
  fontWeight = 700,
  letterSpacing = 2,
  textAnchor = 'middle',
  dominantBaseline = 'middle',
}) => {
  return (
    <svg
      viewBox="0 0 1000 200"
      className={`w-full h-auto ${className}`}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      <text
        x="500"
        y="100"
        fontSize={fontSize}
        fontWeight={fontWeight}
        letterSpacing={letterSpacing}
        textAnchor={textAnchor}
        dominantBaseline={dominantBaseline}
        fill="url(#textGradient)"
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        {text}
      </text>
    </svg>
  );
};

export default SvgTextLogo;
