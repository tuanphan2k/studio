import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { ConsultingService } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

type ConsultingServiceCardProps = {
  service: ConsultingService;
};

export function ConsultingServiceCard({ service }: ConsultingServiceCardProps) {
  const Icon = service.icon;
  return (
    <Card className="flex flex-col text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <CardHeader className="items-center pb-4">
        <div className="p-4 bg-accent/10 rounded-full text-accent mb-4">
          <Icon className="h-10 w-10" />
        </div>
        <CardTitle asChild>
          <h2 className="font-headline text-2xl">{service.title}</h2>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between">
        <CardDescription className="mb-6">{service.shortDescription}</CardDescription>
        <Button asChild variant="ghost" className="w-full mt-auto text-primary hover:text-primary">
          <Link href="/contact">
            Tìm Hiểu Thêm <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}