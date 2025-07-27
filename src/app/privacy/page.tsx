import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPage() {
  return (
    <div className="container py-12 md:py-16">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl md:text-4xl font-headline">Chính Sách Bảo Mật</CardTitle>
          <p className="text-muted-foreground pt-2">Cập nhật lần cuối: {new Date().toLocaleDateString('vi-VN')}</p>
        </CardHeader>
        <CardContent className="prose max-w-none dark:prose-invert">
          <h2>1. Thông Tin Chúng Tôi Thu Thập</h2>
          <p>
            Chúng tôi thu thập thông tin bạn cung cấp trực tiếp cho chúng tôi. Ví dụ: chúng tôi thu thập thông tin khi bạn tạo tài khoản, đăng ký, tham gia vào bất kỳ tính năng tương tác nào của dịch vụ, điền vào biểu mẫu, yêu cầu hỗ trợ khách hàng hoặc liên lạc với chúng tôi.
          </p>

          <h2>2. Cách Chúng Tôi Sử Dụng Thông Tin Của Bạn</h2>
          <p>
            Chúng tôi sử dụng thông tin thu thập được để cung cấp, duy trì và cải thiện dịch vụ của mình. Chúng tôi cũng có thể sử dụng thông tin thu thập được để gửi cho bạn các thông báo kỹ thuật, cập nhật, cảnh báo bảo mật, tin nhắn hỗ trợ và quản trị.
          </p>

          <h2>3. Chia Sẻ Thông Tin</h2>
          <p>
            Chúng tôi không chia sẻ thông tin cá nhân của bạn với bên thứ ba trừ khi được mô tả trong chính sách bảo mật này. Chúng tôi có thể chia sẻ thông tin với các nhà cung cấp, chuyên gia tư vấn và các nhà cung cấp dịch vụ khác cần quyền truy cập vào thông tin đó để thực hiện công việc thay mặt chúng tôi.
          </p>
          
          <h2>4. Bảo Mật Dữ Liệu</h2>
          <p>
            Chúng tôi thực hiện các biện pháp hợp lý để giúp bảo vệ thông tin về bạn khỏi mất mát, trộm cắp, lạm dụng và truy cập, tiết lộ, thay đổi và phá hủy trái phép.
          </p>
          
          <h2>5. Lựa Chọn Của Bạn</h2>
          <p>
            Bạn có thể cập nhật, sửa chữa hoặc xóa thông tin về bạn bất cứ lúc nào bằng cách đăng nhập vào tài khoản trực tuyến của mình. Nếu bạn muốn xóa hoặc hủy kích hoạt tài khoản của mình, vui lòng gửi email cho chúng tôi, nhưng lưu ý rằng chúng tôi có thể giữ lại một số thông tin theo yêu cầu của pháp luật hoặc cho các mục đích kinh doanh hợp pháp.
          </p>

          <h2>6. Cookie</h2>
          <p>
            Chúng tôi sử dụng cookie để cải thiện và tùy chỉnh các dịch vụ và trải nghiệm của bạn. Bạn có thể cài đặt trình duyệt của mình không chấp nhận cookie, nhưng điều này có thể hạn chế khả năng sử dụng dịch vụ của bạn.
          </p>

          <h2>7. Thay Đổi Chính Sách Này</h2>
          <p>
            Chúng tôi có thể thay đổi Chính sách Bảo mật này theo thời gian. Nếu chúng tôi thực hiện thay đổi, chúng tôi sẽ thông báo cho bạn bằng cách sửa đổi ngày ở đầu chính sách và trong một số trường hợp, chúng tôi có thể cung cấp cho bạn thông báo bổ sung.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
