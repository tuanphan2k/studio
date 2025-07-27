import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Về Nhân Tâm Phát</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Sứ mệnh của chúng tôi là trang bị cho các chuyên gia nhân sự và các nhà lãnh đạo tổ chức những kiến thức và kỹ năng để xây dựng những nơi làm việc phát triển trong tương lai.
          </p>
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="font-headline">Tầm Nhìn Của Chúng Tôi</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/90">
                Chúng tôi tin rằng trái tim của bất kỳ tổ chức thành công nào chính là con người. Bằng cách cung cấp chương trình đào tạo chuyên sâu, dễ tiếp cận, chúng tôi mong muốn nâng cao tiêu chuẩn quản lý nguồn nhân lực, thúc đẩy môi trường nơi cả cá nhân và doanh nghiệp đều có thể phát huy hết tiềm năng của mình. Chúng tôi cam kết không ngừng đổi mới, đảm bảo chương trình giảng dạy của chúng tôi luôn đi trước đón đầu trong thế giới công việc không ngừng phát triển.
              </p>
            </CardContent>
          </Card>
        </div>
        <div>
          <Image 
            src="https://placehold.co/600x700.png" 
            alt="Đội ngũ văn phòng đang hợp tác"
            width={600}
            height={700}
            className="rounded-lg shadow-xl object-cover"
            data-ai-hint="professional team"
          />
        </div>
      </div>
    </div>
  );
}
