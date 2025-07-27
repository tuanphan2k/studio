import { Loader2 } from 'lucide-react';

export default function Loading() {
  return (
    <div className="flex-grow flex items-center justify-center">
      <Loader2 className="h-16 w-16 animate-spin text-primary" />
    </div>
  );
}
