import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Facebook, Youtube, MessageSquare } from "lucide-react";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";


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
              <p>Email: <a href="mailto:contact@nhantamphat.com" className="text-primary hover:underline">contact@nhantamphat.com</a></p>
            </div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardHeader className="items-center">
            <div className="bg-primary/10 text-primary p-4 rounded-full">
               <Facebook className="h-8 w-8" />
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
                <CardTitle className="font-headline flex items-center gap-2">
                    <MessageSquare className="h-6 w-6" />
                    Để Lại Lời Nhắn
                </CardTitle>
            </CardHeader>
            <CardContent>
                <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="firstName">Tên</Label>
                            <Input id="firstName" placeholder="Nhập tên của bạn" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="lastName">Họ</Label>
                            <Input id="lastName" placeholder="Nhập họ của bạn" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Nhập email của bạn" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="message">Lời nhắn</Label>
                        <Textarea id="message" placeholder="Nhập lời nhắn của bạn ở đây" rows={5} />
                    </div>
                    <Button type="submit" className="w-full">Gửi Lời Nhắn</Button>
                </form>
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
