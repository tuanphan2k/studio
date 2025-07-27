import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Zap, Target, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { CourseCard } from '@/components/course-card';
import { courses } from '@/lib/data';

const benefits = [
  {
    icon: <Zap className="h-8 w-8 text-accent" />,
    title: 'Cutting-Edge Curriculum',
    description: 'Stay ahead with courses on the latest HR trends and technologies.',
  },
  {
    icon: <Target className="h-8 w-8 text-accent" />,
    title: 'Expert-Led Instruction',
    description: 'Learn from seasoned industry professionals with real-world experience.',
  },
  {
    icon: <Users className="h-8 w-8 text-accent" />,
    title: 'Career Advancement',
    description: 'Gain the skills and credentials needed to advance your HR career.',
  },
];

export default function Home() {
  const featuredCourses = courses.slice(0, 3);
  
  return (
    <>
      {/* Hero Section */}
      <section className="container py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-headline font-extrabold tracking-tight text-primary">
              Elevate Your HR Expertise
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0">
              Unlock your potential with expert-led courses designed for the modern HR professional. Master new skills, drive organizational success, and advance your career.
            </p>
            <div className="mt-8 flex gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/courses">
                  Explore Courses <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
          <div>
            <Image
              src="https://placehold.co/600x500"
              alt="HR professionals in a meeting"
              width={600}
              height={500}
              className="rounded-lg shadow-2xl"
              priority
              data-ai-hint="team meeting"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-card py-20 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Why Choose ElevateHR?</h2>
            <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide a comprehensive learning experience tailored for success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="text-center border-t-4 border-accent pt-6">
                <CardHeader className="items-center">
                  <div className="p-4 bg-accent/10 rounded-full">{benefit.icon}</div>
                  <CardTitle className="font-headline text-2xl mt-4">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Courses Section */}
       <section className="container py-20 md:py-24">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Featured Courses</h2>
            <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
              Get started with some of our most popular and impactful courses.
            </p>
          </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
         <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
                <Link href="/courses">
                  View All Courses <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
          </div>
      </section>
    </>
  );
}
