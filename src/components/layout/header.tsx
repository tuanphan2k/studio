'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const navLinks = [
  { href: '/', label: 'Trang Chủ' },
  { href: '/courses', label: 'Khóa Học' },
  { href: '/consulting', label: 'Tư Vấn' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'Về Chúng Tôi' },
  { href: '/contact', label: 'Liên Hệ' },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Nhân Tâm Phát Logo" width={40} height={40} />
          <span className="text-2xl font-bold font-headline text-foreground">
            Nhân Tâm Phát
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-base font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'transition-colors hover:text-primary relative',
                pathname.startsWith(link.href) && link.href !== '/' || pathname === link.href ? 'text-primary' : 'text-muted-foreground'
              )}
            >
              {link.label}
              {(pathname.startsWith(link.href) && link.href !== '/' || pathname === link.href) && (
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-0.5 w-6 bg-primary rounded-full" />
              )}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Mở menu điều hướng</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="grid gap-6 p-6">
                  <Link href="/" className="flex items-center gap-2 mb-4">
                     <Image src="/logo.png" alt="Nhân Tâm Phát Logo" width={36} height={36} />
                    <span className="text-xl font-bold font-headline text-foreground">
                      Nhân Tâm Phát
                    </span>
                  </Link>
                  <nav className="grid gap-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                          'text-lg font-medium transition-colors hover:text-primary',
                          pathname.startsWith(link.href) && link.href !== '/' || pathname === link.href ? 'text-primary' : 'text-muted-foreground'
                        )}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
