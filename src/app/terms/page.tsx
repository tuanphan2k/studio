import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TermsPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Điều Khoản Dịch Vụ</h1>
        <p className="mt-4 text-lg text-muted-foreground">Cập nhật lần cuối: 14/07/2024</p>
      </div>
      
      <Card className="max-w-4xl mx-auto">
        <CardContent className="p-8 md:p-10 prose max-w-none dark:prose-invert">
          <h2>1. Chấp Nhận Điều Khoản</h2>
          <p className="text-indent-8">
            Bằng cách truy cập và sử dụng trang web này (sau đây gọi là "Trang Web"), bạn (sau đây gọi là "Người Dùng") đồng ý tuân thủ và bị ràng buộc bởi các Điều khoản Sử dụng Dịch vụ này ("Điều Khoản"). Nếu bạn không đồng ý với bất kỳ phần nào của các điều khoản này, bạn không được phép sử dụng Trang Web.
          </p>

          <h2>2. Sử Dụng Dịch Vụ</h2>
          <p className="text-indent-8">
            Người Dùng đồng ý chỉ sử dụng Trang Web cho các mục đích hợp pháp và phù hợp với các Điều Khoản này. Bạn không được sử dụng Trang Web theo bất kỳ cách nào có thể gây hại, vô hiệu hóa, quá tải hoặc làm suy yếu Trang Web hoặc can thiệp vào việc sử dụng của bất kỳ bên nào khác.
          </p>

          <h2>3. Quyền Sở Hữu Trí Tuệ</h2>
          <p className="text-indent-8">
            Tất cả nội dung, tài liệu, logo, thương hiệu và các tài sản trí tuệ khác trên Trang Web ("Nội Dung") là tài sản độc quyền của Nhân Tâm Phát hoặc các bên cấp phép của chúng tôi. Người Dùng không được phép sao chép, tái sản xuất, phân phối, sửa đổi hoặc tạo ra các tác phẩm phái sinh từ Nội Dung mà không có sự đồng ý trước bằng văn bản của chúng tôi.
          </p>
          
          <h2>4. Giới Hạn Trách Nhiệm</h2>
          <p className="text-indent-8">
            Nhân Tâm Phát không chịu trách nhiệm cho bất kỳ thiệt hại trực tiếp, gián tiếp, ngẫu nhiên, do hậu quả hoặc trừng phạt nào phát sinh từ việc bạn truy cập, sử dụng hoặc không thể sử dụng Trang Web. Thông tin trên Trang Web được cung cấp "nguyên trạng" mà không có bất kỳ sự bảo đảm nào.
          </p>
          
          <h2>5. Quyền Riêng Tư</h2>
          <p className="text-indent-8">
            Việc bạn sử dụng Trang Web cũng tuân theo Chính sách Bảo mật của chúng tôi. Vui lòng xem lại Chính sách Bảo mật của chúng tôi, chính sách này cũng điều chỉnh Trang Web và thông báo cho người dùng về các phương pháp thu thập dữ liệu của chúng tôi.
          </p>

          <h2>6. Luật Điều Chỉnh</h2>
          <p className="text-indent-8">
            Các Điều Khoản này sẽ được điều chỉnh và giải thích theo luật pháp của nước Cộng hòa Xã hội Chủ nghĩa Việt Nam. Bất kỳ tranh chấp nào phát sinh từ hoặc liên quan đến các Điều Khoản này sẽ được giải quyết tại tòa án có thẩm quyền tại Việt Nam.
          </p>

          <h2>7. Thay Đổi Điều Khoản</h2>
          <p className="text-indent-8">
            Chúng tôi có quyền, theo quyết định riêng của mình, sửa đổi hoặc thay thế các Điều Khoản này bất cứ lúc nào. Nếu có sự thay đổi, chúng tôi sẽ cập nhật ngày "Cập nhật lần cuối" ở đầu trang này. Việc bạn tiếp tục sử dụng Trang Web sau khi các thay đổi đó được đăng tải sẽ cấu thành sự chấp nhận của bạn đối với các điều khoản mới.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
