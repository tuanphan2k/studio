import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { Course } from '@/lib/data';
import { Clock, BarChart, ArrowRight } from 'lucide-react';

type CourseCardProps = {
  course: Course;
};

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <CardHeader className="p-0">
        <Image
          src={course.thumbnail}
          alt={course.title}
          width={600}
          height={400}
          className="aspect-video w-full object-cover"
          data-ai-hint="course concepts"
        />
        <div className="p-6">
          <CardTitle className="font-headline text-2xl mb-2">{course.title}</CardTitle>
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <BarChart className="h-4 w-4" />
              <span>{course.level}</span>
            </div>
          </div>
          <CardDescription>{course.shortDescription}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex-grow flex items-end p-6 pt-0">
         <Button asChild className="w-full" variant="outline">
          <Link href={`/courses/${course.id}`}>
            View Details <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
