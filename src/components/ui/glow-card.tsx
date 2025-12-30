import { cn } from '@/lib/utils';
import { Card, type CardProps } from '@/components/ui/card';

export function GlowCard({ className, children, ...props }: CardProps) {
  return (
    <Card
      className={cn(
        'group relative overflow-hidden border-border/20 bg-card transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/5',
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-50 neural-glow" />
      <div className="relative z-10 h-full">{children}</div>
    </Card>
  );
}
