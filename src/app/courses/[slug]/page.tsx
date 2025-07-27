import { notFound } from 'next/navigation';
import { courses } from '@/lib/data';
import Image from 'next/image';
import { Clock, BarChart, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Summarizer } from './summarizer';
import { Separator } from '@/components/ui/separator';

type CourseDetailPageProps = {
  params: {
    slug: string;
  };
};

export default function CourseDetailPage({ params }: CourseDetailPageProps) {
  const course = courses.find((c) => c.slug === params.slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="container py-12 md:py-16">
      <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
        <div className="lg:col-span-2">
          <article className="prose prose-lg max-w-none dark:prose-invert">
            <div className="mb-8">
              <h1 className="font-headline text-4xl md:text-5xl mb-4 text-primary">
                {course.title}
              </h1>
              <div className="flex items-center gap-6 text-base text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BarChart className="h-5 w-5" />
                  <span>{course.level}</span>
                </div>
              </div>
            </div>

            <Image
              src={course.thumbnail}
              alt={course.title}
              width={800}
              height={450}
              className="aspect-video w-full rounded-lg object-cover mb-8 shadow-lg"
              data-ai-hint="team collaboration"
            />
            
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="font-headline text-2xl mb-4 flex items-center gap-3">
                  <BookOpen className="text-accent" />
                  Nội Dung Khóa Học
                </h2>
                <Separator className='mb-4'/>
                <p className="text-foreground/90 whitespace-pre-line leading-relaxed">
                  {course.longDescription}
                </p>
              </CardContent>
            </Card>
          </article>
        </div>
        <aside className="lg:col-span-1">
          <div className="sticky top-24">
            <Summarizer content={course.longDescription} />
          </div>
        </aside>
      </div>
    </div>
  );
}
