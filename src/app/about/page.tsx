import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">About ElevateHR</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Our mission is to empower HR professionals and organizational leaders with the knowledge and skills to build thriving workplaces of the future.
          </p>
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="font-headline">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/90">
                We believe that the heart of any successful organization is its people. By providing accessible, expert-led training, we aim to elevate the standards of human resources management, fostering environments where both individuals and businesses can achieve their full potential. We are committed to continuous innovation, ensuring our curriculum stays ahead of the curve in the ever-evolving world of work.
              </p>
            </CardContent>
          </Card>
        </div>
        <div>
          <Image 
            src="https://placehold.co/600x700.png" 
            alt="Office team collaborating"
            width={600}
            height={700}
            className="rounded-lg shadow-xl object-cover"
            data-ai-hint="professional team"
          />
        </div>
      </div>
    </div>
  );
}
