import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Zap, Target, Users, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { EmployeeCard } from '@/components/employee-card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const benefits = [
  {
    icon: <Zap className="h-8 w-8 text-accent" />,
    title: 'Cutting-Edge Curriculum',
    description: 'Stay ahead with courses on the latest HR trends and technologies.',
  },
  {
    icon: <Target className="h-8 w-8 text-accent" />,
    title: 'Expert-Led Instruction & Advisory',
    description: 'Learn from and partner with seasoned industry professionals with real-world experience.',
  },
  {
    icon: <Users className="h-8 w-8 text-accent" />,
    title: 'Career & Organizational Advancement',
    description: 'Gain the skills and strategic insights needed to advance your career and organization.',
  },
];

const employees = [
  {
    name: 'Jane Doe',
    title: 'Lead Instructor',
    bio: 'Jane has over 15 years of experience in human resources and is passionate about teaching the next generation of HR leaders.',
    image: 'https://placehold.co/400x400.png',
    hint: 'professional woman'
  },
  {
    name: 'John Smith',
    title: 'Career Coach',
    bio: 'John specializes in career development and helps students navigate their career paths in the HR field.',
    image: 'https://placehold.co/400x400.png',
    hint: 'professional man'
  },
  {
    name: 'Emily White',
    title: 'Curriculum Developer',
    bio: 'Emily designs our cutting-edge course content, ensuring it is relevant and impactful for our students.',
    image: 'https://placehold.co/400x400.png',
    hint: 'professional woman smiling'
  },
];

const testimonials = [
  {
    quote: "The 'Leadership in the Digital Age' course was a game-changer for my career. The insights were practical and immediately applicable.",
    name: 'Sarah Johnson',
    title: 'HR Manager',
    avatar: 'https://placehold.co/100x100.png',
    hint: 'woman smiling',
  },
  {
    quote: "As someone new to the field, the 'Foundations of HR' course provided the perfect grounding. I feel so much more confident in my role.",
    name: 'Michael Chen',
    title: 'HR Coordinator',
    avatar: 'https://placehold.co/100x100.png',
    hint: 'man portrait',
  },
  {
    quote: "The quality of instruction and the supportive community at ElevateHR are top-notch. I highly recommend it to any HR professional.",
    name: 'David Rodriguez',
    title: 'Senior HR Business Partner',
    avatar: 'https://placehold.co/100x100.png',
    hint: 'man professional',
  },
];

export default function Home() {
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
              Unlock your potential with expert-led training and advisory for the modern HR professional. Master new skills, drive organizational success, and advance your career.
            </p>
            <div className="mt-8 flex gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/courses">
                  Explore Services <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
          <div>
            <Image
              src="https://placehold.co/600x500.png"
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
              We provide comprehensive solutions for training and strategic HR advisory.
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
      
      {/* Meet Our Team Section */}
       <section className="container py-20 md:py-24">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Meet Our Team</h2>
            <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
              Our instructors and advisors are experienced professionals dedicated to your success.
            </p>
          </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {employees.map((employee) => (
            <EmployeeCard key={employee.name} employee={employee} />
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-card py-20 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">What Our Clients Say</h2>
            <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from HR professionals who have advanced their careers and organizations with ElevateHR.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="flex flex-col">
                <CardContent className="p-6 flex-grow">
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-foreground/90 italic">"{testimonial.quote}"</blockquote>
                </CardContent>
                <CardHeader className="p-6 pt-0 mt-auto">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.hint} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="container py-20 md:py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-headline font-bold">Ready to Elevate Your HR?</h2>
        <p className="mt-3 text-lg text-muted-foreground max-w-xl mx-auto">
          Contact us today to learn more about our courses and advisory services, and how we can help you achieve your professional goals.
        </p>
        <div className="mt-8">
          <Button asChild size="lg">
            <Link href="/contact">
              Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
