import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPage() {
  return (
    <div className="container py-12 md:py-16">
       <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Chính Sách Bảo Mật</h1>
        <p className="mt-4 text-lg text-muted-foreground">Cập nhật lần cuối: 14/07/2024</p>
      </div>

      <Card className="max-w-4xl mx-auto">
        <CardContent className="p-8 md:p-10 prose max-w-none dark:prose-invert">
          <p className="text-indent-8">
            Chính sách bảo mật này nhằm giúp Quý khách hiểu về cách chúng tôi thu thập, sử dụng và bảo vệ thông tin cá nhân của mình khi truy cập và sử dụng các dịch vụ trên website của Nhân Tâm Phát.
          </p>

          <h2>1. Mục Đích và Phạm Vi Thu Thập Thông Tin</h2>
          <p className="text-indent-8">
            Chúng tôi thu thập thông tin cá nhân của Quý khách (như họ tên, email, số điện thoại) chỉ khi Quý khách tự nguyện cung cấp qua các biểu mẫu đăng ký tư vấn, đăng ký khóa học hoặc liên hệ. Việc thu thập thông tin nhằm mục đích:
          </p>
          <ul>
            <li>Cung cấp thông tin về các khóa học và dịch vụ tư vấn của chúng tôi.</li>
            <li>Hỗ trợ khách hàng và giải đáp các thắc mắc.</li>
            <li>Gửi thông báo về các chương trình khuyến mãi, sự kiện mới (nếu được Quý khách chấp thuận).</li>
            <li>Nâng cao chất lượng dịch vụ và trải nghiệm người dùng.</li>
          </ul>
          
          <h2>2. Phạm Vi Sử Dụng Thông Tin</h2>
          <p className="text-indent-8">
            Chúng tôi cam kết chỉ sử dụng thông tin của Quý khách trong phạm vi nội bộ của Nhân Tâm Phát và cho các mục đích đã nêu ở trên. Chúng tôi không bán, chia sẻ hay tiết lộ thông tin cá nhân của Quý khách cho bất kỳ bên thứ ba nào mà không có sự đồng ý của Quý khách, trừ các trường hợp sau:
          </p>
           <ul>
            <li>Theo yêu cầu của các cơ quan pháp luật có thẩm quyền.</li>
            <li>Trong trường hợp cần thiết để bảo vệ quyền lợi chính đáng của Nhân Tâm Phát trước pháp luật.</li>
          </ul>

          <h2>3. Thời Gian Lưu Trữ Thông Tin</h2>
          <p className="text-indent-8">
            Dữ liệu cá nhân của Quý khách sẽ được lưu trữ cho đến khi có yêu cầu hủy bỏ từ phía Quý khách, hoặc khi chúng tôi xác định rằng các mục đích thu thập ban đầu không còn phù hợp.
          </p>
          
          <h2>4. Địa Chỉ Của Đơn Vị Thu Thập và Quản Lý Thông Tin</h2>
          <p className="text-indent-8">
            <strong>Nhân Tâm Phát</strong>
            <br />
            Địa chỉ: 123 Đường Business, Suite 100, Metropolis, 12345, Hoa Kỳ
            <br />
            Email: contact@nhantamphat.com
            <br />
            Điện thoại: +1 (234) 567-890
          </p>
          
          <h2>5. Phương Tiện và Công Cụ Để Người Dùng Tiếp Cận và Chỉnh Sửa Dữ Liệu</h2>
          <p className="text-indent-8">
            Quý khách có quyền yêu cầu truy cập, chỉnh sửa hoặc xóa thông tin cá nhân của mình bằng cách liên hệ với chúng tôi qua email hoặc địa chỉ đã cung cấp ở trên. Chúng tôi sẽ xử lý yêu cầu của Quý khách trong thời gian sớm nhất.
          </p>

          <h2>6. Cam Kết Bảo Mật Thông Tin Cá Nhân Khách Hàng</h2>
          <p className="text-indent-8">
            Chúng tôi cam kết bảo mật tuyệt đối thông tin cá nhân của Quý khách bằng các biện pháp kỹ thuật và tổ chức phù hợp. Chúng tôi nỗ lực bảo vệ thông tin của bạn khỏi sự truy cập, thay đổi, tiết lộ hoặc phá hủy trái phép.
          </p>

          <h2>7. Thay Đổi Chính Sách</h2>
          <p className="text-indent-8">
            Chúng tôi có thể cập nhật Chính sách Bảo mật này theo thời gian. Mọi thay đổi sẽ được đăng tải công khai trên trang web này và ngày cập nhật sẽ được sửa đổi tương ứng.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
