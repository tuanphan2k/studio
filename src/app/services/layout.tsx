
import { ServicesTabs } from '@/components/services-tabs';
import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';

export const metadata: Metadata = {
  title: 'Dịch Vụ của Nhân Tâm Phát',
  description: 'Khám phá các khóa học đào tạo nhân sự chuyên sâu và dịch vụ tư vấn doanh nghiệp chiến lược tại Nhân Tâm Phát, được thiết kế cho sự phát triển của bạn.',
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container py-12 md:py-16">
      <Breadcrumb
        className="mb-8"
        items={[
          { label: "Trang chủ", href: "/" },
          { label: "Dịch vụ", href: "/services/training" },
        ]}
      />
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Dịch Vụ Của Chúng Tôi</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Dù bạn muốn nâng cao kỹ năng cá nhân hay phát triển tổ chức, chúng tôi đều có giải pháp phù hợp.
        </p>
      </div>
      <ServicesTabs />
      <div className="mt-12">
        {children}
      </div>
    </div>
  );
}
