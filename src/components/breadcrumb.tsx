
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type BreadcrumbItem = {
  label: string;
  href: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
  className?: string;
};

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn('text-sm text-muted-foreground', className)}>
      <ol className="flex items-center gap-2 flex-wrap">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-2">
            {index < items.length - 1 ? (
              <>
                <Link href={item.href} className="hover:text-primary transition-colors">
                  {item.label}
                </Link>
                <ChevronRight className="h-4 w-4" />
              </>
            ) : (
              <span className="font-medium text-foreground">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
