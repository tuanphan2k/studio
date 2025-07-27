import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TermsPage() {
  return (
    <div className="container py-12 md:py-16">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl md:text-4xl font-headline">Điều Khoản Dịch Vụ</CardTitle>
          <p className="text-muted-foreground pt-2">Cập nhật lần cuối: {new Date().toLocaleDateString('vi-VN')}</p>
        </CardHeader>
        <CardContent className="prose max-w-none dark:prose-invert">
          <h2>1. Giới Thiệu</h2>
          <p>
            Chào mừng đến với ElevateHR. Các Điều khoản Dịch vụ này chi phối việc bạn sử dụng trang web và các dịch vụ của chúng tôi. Bằng cách truy cập hoặc sử dụng dịch vụ của chúng tôi, bạn đồng ý bị ràng buộc bởi các điều khoản này.
          </p>

          <h2>2. Sử Dụng Dịch Vụ Của Chúng Tôi</h2>
          <p>
            Bạn chỉ có thể sử dụng dịch vụ của chúng tôi cho các mục đích hợp pháp và tuân thủ các Điều khoản này. Bạn đồng ý không sử dụng dịch vụ theo bất kỳ cách nào vi phạm bất kỳ luật hoặc quy định hiện hành nào của liên bang, tiểu bang, địa phương hoặc quốc tế.
          </p>

          <h2>3. Sở Hữu Trí Tuệ</h2>
          <p>
            Dịch vụ và nội dung, tính năng và chức năng ban đầu của nó là và sẽ vẫn là tài sản độc quyền của ElevateHR và các nhà cấp phép của nó. Nhãn hiệu và bao bì thương mại của chúng tôi không được sử dụng liên quan đến bất kỳ sản phẩm hoặc dịch vụ nào mà không có sự đồng ý trước bằng văn bản của ElevateHR.
          </p>
          
          <h2>4. Chấm Dứt</h2>
          <p>
            Chúng tôi có thể chấm dứt hoặc đình chỉ quyền truy cập của bạn vào dịch vụ của chúng tôi ngay lập tức, mà không cần thông báo hoặc chịu trách nhiệm trước, vì bất kỳ lý do gì, bao gồm nhưng không giới hạn nếu bạn vi phạm các Điều khoản.
          </p>
          
          <h2>5. Giới Hạn Trách Nhiệm</h2>
          <p>
            Trong mọi trường hợp, ElevateHR, cũng như các giám đốc, nhân viên, đối tác, đại lý, nhà cung cấp hoặc chi nhánh của mình, sẽ không chịu trách nhiệm cho bất kỳ thiệt hại gián tiếp, ngẫu nhiên, đặc biệt, do hậu quả hoặc trừng phạt nào, bao gồm nhưng không giới hạn ở việc mất lợi nhuận, dữ liệu, sử dụng, thiện chí hoặc các tổn thất vô hình khác, do việc bạn truy cập hoặc sử dụng hoặc không thể truy cập hoặc sử dụng Dịch vụ.
          </p>

          <h2>6. Luật Điều Chỉnh</h2>
          <p>
            Các Điều khoản này sẽ được điều chỉnh và giải thích theo luật pháp của khu vực tài phán, không tính đến các quy định về xung đột pháp luật của nó.
          </p>

          <h2>7. Thay Đổi Điều Khoản</h2>
          <p>
            Chúng tôi có quyền, theo quyết định riêng của mình, sửa đổi hoặc thay thế các Điều khoản này bất cứ lúc nào. Chúng tôi sẽ cung cấp thông báo trước ít nhất 30 ngày trước khi bất kỳ điều khoản mới nào có hiệu lực.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
