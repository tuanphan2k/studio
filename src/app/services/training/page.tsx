
import { courses, consultingServices } from '@/lib/data';
import type { Metadata } from 'next';
import { CourseCard } from '@/components/course-card';

export const metadata: Metadata = {
  title: 'Khóa Học Đào Tạo Nhân Sự - Nhân Tâm Phát',
  description: 'Khám phá các khóa học đào tạo nhân sự chuyên sâu được thiết kế để nâng cao năng lực cho chuyên gia nhân sự ở mọi cấp độ, từ nền tảng đến nâng cao.',
};

export default function TrainingPage() {
  return (
    <section id="training-courses">
      <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Các Khóa Đào Tạo Chuyên Sâu</h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
              Nâng cao năng lực cho chuyên gia nhân sự ở mọi cấp độ.
          </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
          ))}
      </div>
    </section>
  );
}
