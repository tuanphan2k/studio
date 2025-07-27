import { courses, consultingServices } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import { CourseCard } from '@/components/course-card';
import { ConsultingServiceCard } from '@/components/consulting-service-card';

export const metadata: Metadata = {
  title: 'Khóa Học Đào Tạo Nhân Sự - Nhân Tâm Phát',
  description: 'Khám phá các khóa học đào tạo nhân sự chuyên sâu được thiết kế để nâng cao năng lực cho chuyên gia nhân sự ở mọi cấp độ, từ nền tảng đến nâng cao.',
};

export default function CoursesPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Các Khóa Đào Tạo Chuyên Sâu</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Chúng tôi cung cấp các chương trình đào tạo được thiết kế để nâng cao năng lực cho các chuyên gia nhân sự ở mọi cấp độ.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      <section className="mt-16 bg-primary/5 py-20 md:py-24 text-center rounded-lg">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Tìm kiếm giải pháp tư vấn chiến lược?</h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
            Khám phá các dịch vụ tư vấn doanh nghiệp của chúng tôi để xây dựng và phát triển đội ngũ, tối ưu hóa cơ cấu và kiến tạo văn hóa tổ chức bền vững.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/consulting">
                Xem Dịch Vụ Tư Vấn <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
