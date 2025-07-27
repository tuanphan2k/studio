
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Zap, Target, Users, Award, BrainCircuit, HeartHandshake } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { EmployeeCard } from '@/components/employee-card';
import { courses, employees } from '@/lib/data';
import { CourseCard } from '@/components/course-card';
import { JobDescriptionGenerator } from '@/components/job-description-generator';
import type { Metadata } from 'next';
import { TestimonialsCarousel } from '@/components/testimonials-carousel';

export const metadata: Metadata = {
  title: 'Nhân Tâm Phát - Đào tạo & Tư vấn Nhân sự Chuyên sâu',
  description: 'Khai phá tiềm năng đội ngũ của bạn với các chương trình đào tạo và dịch vụ tư vấn nhân sự chuyên sâu, được dẫn dắt bởi các chuyên gia hàng đầu.',
};

const benefits = [
  {
    icon: <Zap className="h-8 w-8 text-accent" />,
    title: 'Đào Tạo & Tư Vấn Chuyên Sâu',
    description: 'Cung cấp các chương trình đào tạo và giải pháp tư vấn toàn diện, được thiết kế để đáp ứng nhu cầu cụ thể của bạn.',
  },
  {
    icon: <Target className="h-8 w-8 text-accent" />,
    title: 'Giảng Dạy & Tư Vấn Bởi Chuyên Gia',
    description: 'Học hỏi và nhận tư vấn từ các chuyên gia nhân sự dày dạn kinh nghiệm trong ngành.',
  },
  {
    icon: <Users className="h-8 w-8 text-accent" />,
    title: 'Phát Triển Năng Lực Tổ Chức',
    description: 'Trang bị các kỹ năng và chiến lược cần thiết để phát triển đội ngũ và doanh nghiệp của bạn.',
  },
];

const differentiators = [
  {
    icon: <Award className="h-8 w-8 text-accent" />,
    title: '15+ Năm Kinh Nghiệm',
    description: 'Được dẫn dắt bởi các chuyên gia có hơn 15 năm kinh nghiệm thực chiến trong ngành nhân sự.',
  },
  {
    icon: <BrainCircuit className="h-8 w-8 text-accent" />,
    title: 'Phương Pháp Hiện Đại',
    description: 'Áp dụng các phương pháp đào tạo và tư vấn tiên tiến, tập trung vào kết quả thực tiễn.',
  },
  {
    icon: <HeartHandshake className="h-8 w-8 text-accent" />,
    title: 'Tận Tâm & Chuyên Sâu',
    description: 'Chúng tôi cam kết đồng hành, lắng nghe và cung cấp các giải pháp phù hợp nhất cho từng khách hàng.',
  },
];

export default function Home() {
  const featuredCourses = courses.slice(0, 3);
  
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary/5 py-20 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-headline font-extrabold text-primary">
                Nâng Tầm Nhân Sự, Vững Bước Doanh Nghiệp
              </h1>
              <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0">
                Khai phá tiềm năng đội ngũ của bạn với các chương trình đào tạo và dịch vụ tư vấn nhân sự chuyên sâu.
              </p>
              <div className="mt-8 flex gap-4 justify-center md:justify-start">
                <Button asChild size="lg">
                  <Link href="/services/training">
                    Khám Phá Khóa Học <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/about">Tìm Hiểu Thêm</Link>
                </Button>
              </div>
            </div>
            <div className="relative w-full aspect-[6/5]">
              <Image
                src="https://placehold.co/600x500.png"
                alt="Các chuyên gia nhân sự trong một cuộc họp"
                fill
                className="rounded-lg shadow-2xl object-cover"
                priority
                data-ai-hint="team meeting"
              />
            </div>
          </div>
        </div>
      </section>

      {/* AI Job Description Generator Section */}
      <section className="py-20 md:py-24">
        <div className="container">
          <JobDescriptionGenerator />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-card py-20 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Tại Sao Chọn Nhân Tâm Phát?</h2>
            <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
              Chúng tôi cung cấp các giải pháp toàn diện cho việc đào tạo và tư vấn nhân sự chiến lược.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentiators.map((benefit) => (
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

      {/* Our Difference Section */}
      <section className="py-20 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Sự Khác Biệt Của Chúng Tôi</h2>
            <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
              Uy tín của chúng tôi được xây dựng trên nền tảng chuyên môn vững chắc và sự tận tâm.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((d) => (
              <Card key={d.title} className="text-center border-t-4 border-accent pt-6">
                <CardHeader className="items-center">
                  <div className="p-4 bg-accent/10 rounded-full">{d.icon}</div>
                  <CardTitle className="font-headline text-2xl mt-4">{d.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{d.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="bg-card py-20 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Các Khóa Học Nổi Bật</h2>
            <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
              Khám phá các khóa học hàng đầu được thiết kế để nâng cao năng lực cho cá nhân và tổ chức.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
                <Link href="/services/training">
                    Xem Tất Cả Khóa Học <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>
        </div>
        </div>
      </section>
      
      {/* Meet Our Team Section */}
       <section className="py-20 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-headline font-bold">Gặp Gỡ Đội Ngũ Chuyên Gia</h2>
              <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
                Các giảng viên và chuyên gia tư vấn của chúng tôi là những người giàu kinh nghiệm, tận tâm vì sự thành công của bạn.
              </p>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {employees.map((employee) => (
              <EmployeeCard key={employee.name} employee={employee} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-card py-20 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Khách Hàng & Học Viên Nói Gì?</h2>
            <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
              Lắng nghe chia sẻ từ các doanh nghiệp và chuyên gia đã phát triển cùng Nhân Tâm Phát.
            </p>
          </div>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="bg-primary/5 py-20 md:py-24 text-center">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Sẵn Sàng Cho Sự Phát Triển?</h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-xl mx-auto">
            Liên hệ với chúng tôi ngay hôm nay để tìm hiểu thêm về các khóa học và dịch vụ tư vấn, giúp bạn đạt được mục tiêu của mình.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/contact">
                Liên Hệ Ngay <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
