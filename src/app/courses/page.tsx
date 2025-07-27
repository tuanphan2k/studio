import { courses, consultingServices } from '@/lib/data';
import { CourseCard } from '@/components/course-card';
import { ConsultingServiceCard } from '@/components/consulting-service-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ServicesPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Khóa Học & Dịch Vụ Tư Vấn</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Chúng tôi cung cấp các chương trình đào tạo chuyên sâu và giải pháp tư vấn chiến lược để đáp ứng nhu cầu phát triển của cá nhân và doanh nghiệp.
        </p>
      </div>

      <Tabs defaultValue="training" className="w-full">
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

      {/* Contact Us Section */}
      <section className="bg-primary/5 py-20 md:py-24 text-center rounded-lg mt-16">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Bạn Cần Một Giải Pháp Riêng?</h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-xl mx-auto">
            Hãy liên hệ với chúng tôi để thảo luận về nhu cầu cụ thể của bạn. Chúng tôi sẵn sàng lắng nghe và xây dựng giải pháp phù hợp nhất.
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
    </div>
  );
}
