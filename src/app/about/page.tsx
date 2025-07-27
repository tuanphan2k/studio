import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { EmployeeCard } from '@/components/employee-card';
import { employees } from '@/lib/data';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Target, BrainCircuit, HeartHandshake } from "lucide-react";

const coreValues = [
  {
    icon: <HeartHandshake className="h-10 w-10 text-accent" />,
    title: "Tận Tâm",
    description: "Chúng tôi cam kết đồng hành, lắng nghe và cung cấp các giải pháp phù hợp nhất cho từng khách hàng.",
  },
  {
    icon: <BrainCircuit className="h-10 w-10 text-accent" />,
    title: "Chuyên Môn",
    description: "Được dẫn dắt bởi các chuyên gia có hơn 15 năm kinh nghiệm thực chiến trong ngành nhân sự.",
  },
  {
    icon: <Target className="h-10 w-10 text-accent" />,
    title: "Hiệu Quả",
    description: "Áp dụng các phương pháp đào tạo và tư vấn tiên tiến, tập trung vào kết quả thực tiễn.",
  },
];


export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary/5">
        <div className="container py-20 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Về Nhân Tâm Phát</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Sứ mệnh của chúng tôi là trang bị cho các chuyên gia nhân sự và doanh nghiệp những kiến thức, kỹ năng và giải pháp để xây dựng những nơi làm việc phát triển trong tương lai.
              </p>
            </div>
            <div>
              <Image 
                src="https://placehold.co/600x400.png" 
                alt="Đội ngũ văn phòng đang hợp tác"
                width={600}
                height={400}
                className="rounded-lg shadow-xl object-cover"
                data-ai-hint="professional team collaboration"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 md:py-24">
        <div className="container text-center max-w-4xl mx-auto">
           <h2 className="text-3xl md:text-4xl font-headline font-bold">Tầm Nhìn Của Chúng Tôi</h2>
           <p className="mt-4 text-lg text-muted-foreground">
            Chúng tôi tin rằng trái tim của bất kỳ tổ chức thành công nào chính là con người. Bằng cách cung cấp các chương trình đào tạo chuyên sâu và dịch vụ tư vấn chiến lược, chúng tôi mong muốn nâng cao tiêu chuẩn quản lý nguồn nhân lực, thúc đẩy môi trường nơi cả cá nhân và doanh nghiệp đều có thể phát huy hết tiềm năng của mình. Chúng tôi cam kết không ngừng đổi mới, tích hợp các công nghệ tiên tiến như AI để đảm bảo các giải pháp của chúng tôi luôn đi trước đón đầu trong thế giới công việc không ngừng phát triển.
          </p>
        </div>
      </section>
      
      {/* Core Values Section */}
      <section className="bg-card py-20 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Giá Trị Cốt Lõi</h2>
            <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
              Nền tảng cho mọi hoạt động và cam kết của chúng tôi.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value) => (
              <Card key={value.title} className="text-center border-t-4 border-accent pt-6">
                <CardHeader className="items-center">
                  <div className="p-4 bg-accent/10 rounded-full">{value.icon}</div>
                  <CardTitle className="font-headline text-2xl mt-4">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
       <section className="py-20 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-headline font-bold">Gặp Gỡ Đội Ngũ Chuyên Gia</h2>
              <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
                Các giảng viên và chuyên gia tư vấn của chúng tôi là những người giàu kinh nghiệm, tận tâm vì sự thành công của bạn.
              </p>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {employees.map((employee) => (
              <EmployeeCard key={employee.name} employee={employee} />
            ))}
          </div>
        </div>
      </section>

       {/* CTA Section */}
      <section className="bg-primary/5 py-20 md:py-24 text-center">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Khám Phá Các Giải Pháp Của Chúng Tôi</h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-xl mx-auto">
            Tìm hiểu cách các khóa học và dịch vụ tư vấn của chúng tôi có thể giúp bạn và doanh nghiệp của bạn phát triển.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/courses">
                Xem Dịch Vụ Của Chúng Tôi <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
