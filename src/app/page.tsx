import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Zap, Target, Users, Star, Award, BrainCircuit, HeartHandshake } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { EmployeeCard } from '@/components/employee-card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { courses, employees } from '@/lib/data';
import { CourseCard } from '@/components/course-card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

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

const testimonials = [
  {
    quote: "Dịch vụ tư vấn của Nhân Tâm Phát đã giúp chúng tôi cải tổ lại toàn bộ hệ thống nhân sự. Rất chuyên nghiệp và hiệu quả.",
    name: 'Chị An',
    title: 'CEO, Công ty ABC',
    avatar: 'https://placehold.co/100x100.png',
    hint: 'woman smiling',
  },
  {
    quote: "Là một người mới vào nghề, khóa học 'Nền tảng Nhân sự' đã cung cấp cho tôi một nền tảng hoàn hảo. Tôi cảm thấy tự tin hơn rất nhiều trong vai trò của mình.",
    name: 'Anh Bảo',
    title: 'Chuyên viên Nhân sự',
    avatar: 'https://placehold.co/100x100.png',
    hint: 'man portrait',
  },
  {
    quote: "Chất lượng giảng dạy và sự hỗ trợ từ các chuyên gia tư vấn tại Nhân Tâm Phát thật tuyệt vời. Tôi rất khuyến khích các chuyên gia và doanh nghiệp tham gia.",
    name: 'Anh Khoa',
    title: 'Đối tác Kinh doanh Nhân sự Cấp cao',
    avatar: 'https://placehold.co/100x100.png',
    hint: 'man professional',
  },
  {
    quote: "Các giải pháp tư vấn rất thực tế và phù hợp với văn hóa của công ty chúng tôi. Đội ngũ nhân sự của chúng tôi đã gắn kết và làm việc hiệu quả hơn.",
    name: 'Chị Dung',
    title: 'Giám đốc Nhân sự, Tập đoàn XYZ',
    avatar: 'https://placehold.co/100x100.png',
    hint: 'professional asian woman',
  },
  {
    quote: "Khóa học 'Lãnh Đạo Trong Kỷ Nguyên Số' đã mở ra cho tôi một tầm nhìn mới về quản lý. Kiến thức rất cập nhật và áp dụng được ngay.",
    name: 'Anh Long',
    title: 'Trưởng phòng, Công ty Tech',
    avatar: 'https://placehold.co/100x100.png',
    hint: 'smiling asian man',
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
              Nâng Tầm Nhân Sự, Vững Bước Doanh Nghiệp
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0">
              Khai phá tiềm năng đội ngũ của bạn với các chương trình đào tạo và dịch vụ tư vấn nhân sự chuyên sâu.
            </p>
            <div className="mt-8 flex gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/courses">
                  Khám Phá Dịch Vụ <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/about">Tìm Hiểu Thêm</Link>
              </Button>
            </div>
          </div>
          <div>
            <Image
              src="https://placehold.co/600x500.png"
              alt="Các chuyên gia nhân sự trong một cuộc họp"
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
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Tại Sao Chọn Nhân Tâm Phát?</h2>
            <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
              Chúng tôi cung cấp các giải pháp toàn diện cho việc đào tạo và tư vấn nhân sự chiến lược.
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
            {differentiators.map((d) => (
              <Card key={d.title} className="text-center p-2">
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
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Các Khóa Học & Dịch Vụ Nổi Bật</h2>
            <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
              Khám phá các khóa học và dịch vụ tư vấn hàng đầu được thiết kế để nâng cao năng lực cho cá nhân và tổ chức.
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
                    Xem Tất Cả Dịch Vụ <ArrowRight className="ml-2 h-4 w-4" />
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
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="flex flex-col h-full bg-background">
                      <CardContent className="p-6 flex-grow flex flex-col justify-center">
                        <div className="flex mb-4">
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
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
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
