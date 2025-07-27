import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className="container py-12 md:py-16">
      <div className="space-y-12">
        {/* Hero Section Skeleton */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <Skeleton className="h-12 w-3/4" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-5/6" />
            <div className="flex gap-4 pt-4">
              <Skeleton className="h-11 w-40" />
              <Skeleton className="h-11 w-32" />
            </div>
          </div>
          <div>
            <Skeleton className="h-[400px] w-full rounded-lg" />
          </div>
        </div>

        {/* 3-Card Section Skeleton */}
        <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-3">
                <Skeleton className="h-10 w-1/2 mx-auto" />
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-3/4 mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
                <Card key={i}>
                <CardHeader className="items-center space-y-4">
                    <Skeleton className="h-16 w-16 rounded-full" />
                    <Skeleton className="h-8 w-4/5" />
                </CardHeader>
                <CardContent className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                </CardContent>
                </Card>
            ))}
            </div>
        </div>
      </div>
    </div>
  );
}
