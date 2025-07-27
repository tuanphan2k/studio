import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Facebook, Youtube } from "lucide-react";
import Image from "next/image";

const officeHours = [
  { office: "Văn phòng Tuyển sinh", hours: "Thứ Hai-Thứ Sáu: 8:00 - 18:00" },
  { office: "Dịch vụ Sinh viên", hours: "Thứ Hai-Thứ Sáu: 9:00 - 17:00" },
  { office: "Tư vấn Học tập", hours: "Thứ Hai-Thứ Sáu: 8:30 - 16:30" },
  { office: "Hỗ trợ Tài chính", hours: "Thứ Hai-Thứ Sáu: 9:00 - 16:00" },
];

export default function ContactPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Liên Hệ Với Chúng Tôi</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Bạn có câu hỏi? Chúng tôi ở đây để giúp đỡ! Hãy liên hệ với chúng tôi qua bất kỳ kênh nào sau đây và đội ngũ của chúng tôi sẽ trả lời bạn nhanh chóng.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        <Card className="text-center">
          <CardHeader className="items-center">
            <div className="bg-primary/10 text-primary p-4 rounded-full">
              <MapPin className="h-8 w-8" />
            </div>
            <CardTitle className="font-headline mt-4">Địa Chỉ Văn Phòng</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              123 Đường Business, Suite 100
              <br />
              Metropolis, 12345
              <br />
              Hoa Kỳ
            </p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardHeader className="items-center">
            <div className="bg-primary/10 text-primary p-4 rounded-full">
              <Phone className="h-8 w-8" />
            </div>
            <CardTitle className="font-headline mt-4">Thông Tin Liên Hệ</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-muted-foreground space-y-2">
              <p>Văn phòng chính: <a href="tel:+1234567890" className="text-primary hover:underline">+1 (234) 567-890</a></p>
              <p>Email: <a href="mailto:contact@elevatehr.com" className="text-primary hover:underline">contact@elevatehr.com</a></p>
            </div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardHeader className="items-center">
            <div className="bg-primary/10 text-primary p-4 rounded-full">
              <div className="flex gap-4">
                <Facebook className="h-8 w-8" />
                <Youtube className="h-8 w-8" />
              </div>
            </div>
            <CardTitle className="font-headline mt-4">Theo Dõi Chúng Tôi</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Luôn kết nối để nhận tin tức, sự kiện và cập nhật mới nhất từ cộng đồng của chúng tôi.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Giờ Làm Việc</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {officeHours.map((item) => (
                <div key={item.office} className="flex justify-between items-center bg-secondary/50 p-4 rounded-md">
                  <p className="font-semibold">{item.office}</p>
                  <p className="text-muted-foreground">{item.hours}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Bản Đồ</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center text-center">
            <div className="w-full h-64 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex flex-col items-center justify-center text-white p-4">
              <MapPin className="h-12 w-12 mb-2" />
              <h3 className="text-xl font-bold">Bản Đồ Tương Tác</h3>
              <p>Tìm tòa nhà, bãi đậu xe và các cơ sở vật chất</p>
            </div>
            <Button variant="outline" className="mt-4 w-full">Xem Toàn Bộ Bản Đồ</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
