'use client';

import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

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


export function TestimonialsCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-6xl mx-auto"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1 h-full">
              <Card className="flex flex-col h-full bg-background shadow-lg">
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
  )
}
