import { courses, consultingServices } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import { ServicesTabs } from '@/components/services-tabs';

export const metadata: Metadata = {
  title: 'Khóa Học & Dịch Vụ - Nhân Tâm Phát',
  description: 'Khám phá các khóa học đào tạo nhân sự chuyên sâu và dịch vụ tư vấn doanh nghiệp chiến lược tại Nhân Tâm Phát, được thiết kế cho sự phát triển của bạn.',
};

export default function ServicesPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Khóa Học & Dịch Vụ Tư Vấn</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Chúng tôi cung cấp các chương trình đào tạo chuyên sâu và giải pháp tư vấn chiến lược để đáp ứng nhu cầu phát triển của cá nhân và doanh nghiệp.
        </p>
      </div>

      <ServicesTabs 
        courses={courses} 
        consultingServices={consultingServices} 
      />

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
