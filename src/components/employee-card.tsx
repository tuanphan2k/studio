import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

type Employee = {
  name: string;
  title: string;
  bio: string;
  image: string;
  hint: string;
};

type EmployeeCardProps = {
  employee: Employee;
};

export function EmployeeCard({ employee }: EmployeeCardProps) {
  return (
    <Card className="text-center flex flex-col items-center pt-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <Image
        src={employee.image}
        alt={employee.name}
        width={150}
        height={150}
        className="rounded-full object-cover aspect-square mb-4 shadow-lg"
        data-ai-hint={employee.hint}
      />
      <CardHeader>
        <CardTitle className="font-headline text-2xl">{employee.name}</CardTitle>
        <CardDescription className="text-primary">{employee.title}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{employee.bio}</p>
      </CardContent>
    </Card>
  );
}
