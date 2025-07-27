import { Phone } from 'lucide-react';
import Link from 'next/link';

export function FloatingPhone() {
  return (
    <Link 
      href="tel:+1234567890" 
      className="fixed bottom-6 right-6 z-50 bg-primary text-primary-foreground p-4 rounded-full shadow-lg hover:bg-primary/90 transition-colors duration-300"
      aria-label="Call us"
    >
      <Phone className="h-6 w-6" />
    </Link>
  );
}
