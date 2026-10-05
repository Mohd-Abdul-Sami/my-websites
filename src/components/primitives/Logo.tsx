// SAM'S BUCKS Logo System — Original vector-based logo components
// All built with SVG for crisp rendering at any size

interface LogoProps {
  className?: string;
  variant?: 'full' | 'monogram' | 'badge' | 'stacked';
}

export function Logo({ className = '', variant = 'full' }: LogoProps) {
  if (variant === 'monogram') return <Monogram className={className} />;
  if (variant === 'badge') return <Badge className={className} />;
  if (variant === 'stacked') return <StackedLogo className={className} />;
  return <FullLogo className={className} />;
}

// Monogram — "SB" interlocking
export function Monogram({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Sam's Bucks monogram">
      {/* Outer ring */}
      <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      {/* S curve */}
      <path
        d="M62 32C62 28 57 25 50 25C43 25 38 28 38 33C38 38 43 40 50 42C57 44 62 46 62 51C62 56 57 59 50 59C43 59 38 56 38 52"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* B */}
      <path
        d="M50 62L50 78M50 62L58 62C61 62 63 64 63 67C63 70 61 72 58 72L50 72M50 72L59 72C62 72 64 74 64 77C64 80 62 82 59 82L50 82"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Coffee bean accent */}
      <ellipse cx="50" cy="50" rx="2" ry="3" fill="currentColor" opacity="0.4" />
    </svg>
  );
}

// Full wordmark
export function FullLogo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Monogram className="w-7 h-7 shrink-0" />
      <div className="flex flex-col leading-none">
        <span className="font-serif text-xl tracking-wide font-medium" style={{ letterSpacing: '0.05em' }}>
          SAM'S BUCKS
        </span>
        <span className="text-[8px] uppercase tracking-ultra text-taupe mt-0.5 font-sans">
          Est. 2026
        </span>
      </div>
    </div>
  );
}

// Stacked logo for vertical layouts
export function StackedLogo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center gap-2 ${className}`}>
      <Monogram className="w-12 h-12" />
      <div className="text-center">
        <div className="font-serif text-lg tracking-wide font-medium" style={{ letterSpacing: '0.08em' }}>
          SAM'S BUCKS
        </div>
        <div className="text-[8px] uppercase tracking-ultra text-taupe mt-1 font-sans">
          Crafted for the moments that matter
        </div>
      </div>
    </div>
  );
}

// Circular badge/seal
export function Badge({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Sam's Bucks seal">
      {/* Outer ring */}
      <circle cx="60" cy="60" r="58" stroke="currentColor" strokeWidth="1" />
      <circle cx="60" cy="60" r="54" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
      {/* Top arc text — simulated with paths */}
      <path id="topArc" d="M 18 60 A 42 42 0 0 1 102 60" fill="none" />
      <path id="bottomArc" d="M 102 60 A 42 42 0 0 1 18 60" fill="none" />
      <text fontSize="7" fill="currentColor" letterSpacing="3" fontFamily="Inter, sans-serif" textAnchor="middle">
        <textPath href="#topArc" startOffset="50%">SAM'S BUCKS</textPath>
      </text>
      <text fontSize="5" fill="currentColor" letterSpacing="4" fontFamily="Inter, sans-serif" textAnchor="middle" opacity="0.6">
        <textPath href="#bottomArc" startOffset="50%">CRAFTED WITH INTENTION</textPath>
      </text>
      {/* Center monogram */}
      <g transform="translate(60, 60) scale(0.35)">
        <circle cx="0" cy="0" r="46" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        <path
          d="M12 -18C12 -22 7 -25 0 -25C-7 -25 -12 -22 -12 -17C-12 -12 -7 -10 0 -8C7 -6 12 -4 12 1C12 6 7 9 0 9C-7 9 -12 6 -12 2"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M0 12L0 28M0 12L8 12C11 12 13 14 13 17C13 20 11 22 8 22L0 22M0 22L9 22C12 22 14 24 14 27C14 30 12 32 9 32L0 32"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
      </g>
      {/* Decorative dots */}
      <circle cx="60" cy="6" r="1.5" fill="currentColor" />
      <circle cx="60" cy="114" r="1.5" fill="currentColor" />
    </svg>
  );
}

// Favicon — simplified monogram
export function Favicon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="4" fill="#1A120E" />
      <path
        d="M20 10C20 8 17 7 14 7C11 7 8 8 8 10.5C8 13 11 14 14 15C17 16 20 17 20 19.5C20 22 17 23 14 23C11 23 8 22 8 20"
        stroke="#B58A4A"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M14 24L14 28M14 24L18 24C20 24 21 25 21 26.5C21 28 20 29 18 29L14 29"
        stroke="#B58A4A"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
