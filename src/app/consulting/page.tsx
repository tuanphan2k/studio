import { consultingServices } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import { ConsultingServiceCard } from '@/components/consulting-service-card';

export const metadata: Metadata = {
  title: 'Dịch Vụ Tư Vấn Doanh Nghiệp - Nhân Tâm Phát',
  description: 'Khám phá các giải pháp tư vấn chiến lược được thiết kế riêng cho sự phát triển bền vững của tổ chức, từ cơ cấu đến văn hóa doanh nghiệp.',
};

export default function ConsultingPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Dịch Vụ Tư Vấn Doanh Nghiệp</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Các giải pháp chiến lược được thiết kế riêng cho sự phát triển bền vững của tổ chức.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {consultingServices.map((service) => (
          <ConsultingServiceCard key={service.id} service={service} />
        ))}
      </div>
      
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
