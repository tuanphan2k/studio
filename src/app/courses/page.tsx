import { courses } from '@/lib/data';
import { CourseCard } from '@/components/course-card';

export default function CoursesPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Dịch Vụ Của Chúng Tôi</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Khám phá danh mục các khóa học và dịch vụ tư vấn được thiết kế để nâng cao năng lực cho các chuyên gia nhân sự và tổ chức của bạn.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
