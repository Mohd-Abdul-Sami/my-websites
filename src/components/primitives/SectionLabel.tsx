interface SectionLabelProps {
  index: string;
  total: string;
  label: string;
  className?: string;
}

export function SectionLabel({ index, total, label, className = '' }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <span className="text-xs font-sans text-gold/60 tracking-ultra">{index} / {total}</span>
      <span className="h-px w-8 bg-gold/30" />
      <span className="text-xs uppercase tracking-ultra font-sans text-taupe">{label}</span>
    </div>
  );
}
