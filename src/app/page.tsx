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
    title: 'Chương Trình Đào Tạo Tiên Tiến',
    description: 'Luôn đi đầu với các khóa học về xu hướng và công nghệ nhân sự mới nhất.',
  },
  {
    icon: <Target className="h-8 w-8 text-accent" />,
    title: 'Giảng Dạy & Tư Vấn Bởi Chuyên Gia',
    description: 'Học hỏi và hợp tác với các chuyên gia dày dạn kinh nghiệm trong ngành.',
  },
  {
    icon: <Users className="h-8 w-8 text-accent" />,
    title: 'Phát Triển Sự Nghiệp & Tổ Chức',
    description: 'Trang bị các kỹ năng và kiến thức chiến lược cần thiết để thăng tiến trong sự nghiệp và tổ chức của bạn.',
  },
];

const employees = [
  {
    name: 'Bà Lan',
    title: 'Giảng Viên Chính',
    bio: 'Bà Lan có hơn 15 năm kinh nghiệm trong lĩnh vực nhân sự và đam mê giảng dạy thế hệ lãnh đạo nhân sự tiếp theo.',
    image: 'https://placehold.co/400x400.png',
    hint: 'professional woman'
  },
  {
    name: 'Ông Minh',
    title: 'Cố Vấn Hướng Nghiệp',
    bio: 'Ông Minh chuyên về phát triển sự nghiệp và giúp học viên định hướng con đường sự nghiệp trong lĩnh vực nhân sự.',
    image: 'https://placehold.co/400x400.png',
    hint: 'professional man'
  },
  {
    name: 'Cô Mai',
    title: 'Chuyên Viên Phát Triển Chương Trình',
    bio: 'Cô Mai thiết kế nội dung khóa học tiên tiến của chúng tôi, đảm bảo nội dung phù hợp và có tác động đến học viên.',
    image: 'https://placehold.co/400x400.png',
    hint: 'professional woman smiling'
  },
];

const testimonials = [
  {
    quote: "Khóa học 'Lãnh đạo trong Kỷ nguyên số' đã thay đổi sự nghiệp của tôi. Những kiến thức rất thực tế và có thể áp dụng ngay lập tức.",
    name: 'Chị An',
    title: 'Trưởng phòng Nhân sự',
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
    quote: "Chất lượng giảng dạy và cộng đồng hỗ trợ tại ElevateHR thật tuyệt vời. Tôi rất khuyến khích bất kỳ chuyên gia nhân sự nào tham gia.",
    name: 'Anh Khoa',
    title: 'Đối tác Kinh doanh Nhân sự Cấp cao',
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
              Nâng Tầm Chuyên Môn Nhân Sự
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0">
              Khai phá tiềm năng của bạn với chương trình đào tạo và tư vấn chuyên sâu cho chuyên gia nhân sự hiện đại. Nắm vững các kỹ năng mới, thúc đẩy thành công của tổ chức và thăng tiến trong sự nghiệp.
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
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Tại Sao Chọn ElevateHR?</h2>
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
      
      {/* Meet Our Team Section */}
       <section className="container py-20 md:py-24">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Gặp Gỡ Đội Ngũ Của Chúng Tôi</h2>
            <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
              Các giảng viên và cố vấn của chúng tôi là những chuyên gia giàu kinh nghiệm, tận tâm vì sự thành công của bạn.
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
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Khách Hàng Nói Gì Về Chúng Tôi</h2>
            <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
              Lắng nghe chia sẻ từ các chuyên gia nhân sự đã thăng tiến trong sự nghiệp và phát triển tổ chức cùng ElevateHR.
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
        <h2 className="text-3xl md:text-4xl font-headline font-bold">Sẵn Sàng Nâng Tầm Nhân Sự Của Bạn?</h2>
        <p className="mt-3 text-lg text-muted-foreground max-w-xl mx-auto">
          Liên hệ với chúng tôi ngay hôm nay để tìm hiểu thêm về các khóa học, dịch vụ tư vấn và cách chúng tôi có thể giúp bạn đạt được mục tiêu nghề nghiệp.
        </p>
        <div className="mt-8">
          <Button asChild size="lg">
            <Link href="/contact">
              Liên Hệ Ngay <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
