'use client';

import { useRouter, usePathname } from 'next/navigation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CourseCard } from '@/components/course-card';
import { ConsultingServiceCard } from '@/components/consulting-service-card';
import type { Course, ConsultingService } from '@/lib/data';

type ServicesTabsProps = {
  initialTab: 'training' | 'consulting';
  courses: Course[];
  consultingServices: ConsultingService[];
}

export function ServicesTabs({ initialTab, courses, consultingServices }: ServicesTabsProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleTabChange = (value: string) => {
    router.push(`${pathname}?tab=${value}`, { scroll: false });
  };
  
  return (
    <Tabs value={initialTab} onValueChange={handleTabChange} className="w-full">
      <TabsList className="grid w-full grid-cols-2 md:w-[400px] mx-auto mb-12">
        <TabsTrigger value="training">Các Khóa Đào Tạo</TabsTrigger>
        <TabsTrigger value="consulting">Dịch Vụ Tư Vấn</TabsTrigger>
      </TabsList>
      
      <TabsContent value="training">
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
      </TabsContent>

      <TabsContent value="consulting">
        <section id="consulting-services">
          <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-headline font-bold">Dịch Vụ Tư Vấn Doanh Nghiệp</h2>
              <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
                  Các giải pháp chiến lược được thiết kế riêng cho sự phát triển bền vững của tổ chức.
              </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {consultingServices.map((service) => (
                  <ConsultingServiceCard key={service.id} service={service} />
              ))}
          </div>
        </section>
      </TabsContent>
    </Tabs>
  );
}
