import type { LucideIcon } from 'lucide-react';
import { Briefcase, Building2, Lightbulb, TrendingUp, BrainCircuit, ShieldCheck, UserCog, Users } from 'lucide-react';

export type Course = {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  thumbnail: string;
  duration: string;
  level: 'Mới bắt đầu' | 'Trung cấp' | 'Nâng cao';
};

export type ConsultingService = {
  id: string;
  title: string;
  shortDescription: string;
  icon: string;
};

export type Employee = {
  name: string;
  title: string;
  bio: string;
  image: string;
  hint: string;
};

export const courses: Course[] = [
  {
    id: '2',
    slug: 'nen-tang-nhan-su',
    title: 'Nền Tảng Nhân Sự',
    shortDescription: 'Giới thiệu toàn diện về các chức năng chính của nhân sự.',
    longDescription: `Hoàn hảo cho những người mới làm quen với Nhân sự hoặc đang tìm kiếm một khóa học bồi dưỡng, khóa học nền tảng này bao gồm toàn bộ vòng đời của nhân viên. Từ tuyển dụng và giới thiệu đến quản lý hiệu suất và cho thôi việc, bạn sẽ có được sự hiểu biết thấu đáo về vai trò quan trọng của nhân sự trong bất kỳ tổ chức nào. Chúng tôi sẽ khám phá các chủ đề như chiến lược thu hút nhân tài, tạo mô tả công việc hiệu quả, tuân thủ pháp luật trong tuyển dụng, xây dựng các gói lương thưởng và phúc lợi, và thúc đẩy quan hệ nhân viên tích cực. Khóa học sử dụng các kịch bản trong thế giới thực để minh họa các khái niệm chính, giúp bạn phát triển các kỹ năng thực tế cần thiết để xử lý các thách thức nhân sự phổ biến. Đến cuối khóa học này, bạn sẽ nắm vững các nguyên tắc cơ bản về nhân sự và được trang bị tốt để đóng góp vào một nơi làm việc phát triển và tuân thủ.`,
    thumbnail: 'https://placehold.co/600x400.png',
    duration: '4 Tuần',
    level: 'Mới bắt đầu',
  },
  {
    id: '4',
    slug: 'suc-khoe-va-gan-ket-nhan-vien',
    title: 'Sức Khỏe và Gắn Kết Nhân Viên',
    shortDescription: 'Xây dựng một văn hóa làm việc hỗ trợ giúp tăng cường tinh thần và năng suất.',
    longDescription: `Một lực lượng lao động vui vẻ và khỏe mạnh là một lực lượng lao động năng suất. Khóa học này cung cấp một lộ trình để tạo ra và thực hiện các chương trình chăm sóc sức khỏe và gắn kết nhân viên hiệu quả. Bạn sẽ học các nguyên tắc của tâm lý học tích cực và cách áp dụng chúng tại nơi làm việc để nuôi dưỡng ý thức về mục đích, sự công nhận và sức khỏe. Chúng tôi sẽ đề cập đến một loạt các chiến lược, từ thiết kế hệ thống hỗ trợ sức khỏe tâm thần và thúc đẩy cân bằng giữa công việc và cuộc sống đến tạo ra các chương trình công nhận và thu thập phản hồi hữu ích thông qua các cuộc khảo sát về sự gắn kết. Bạn sẽ rời khỏi khóa học này với một bộ công cụ gồm các ý tưởng thực tế để nuôi dưỡng một văn hóa tổ chức tích cực, nơi nhân viên cảm thấy được trân trọng, có động lực và gắn bó.`,
    thumbnail: 'https://placehold.co/600x400.png',
    duration: '5 Tuần',
    level: 'Trung cấp',
  },
  {
    id: '1',
    slug: 'lanh-dao-trong-ky-nguyen-so',
    title: 'Lãnh Đạo Trong Kỷ Nguyên Số',
    shortDescription: 'Nắm vững kỹ năng lãnh đạo hiện đại cho một thế giới công nghệ.',
    longDescription: `Khóa học toàn diện này được thiết kế cho các nhà lãnh đạo tương lai và hiện tại muốn phát triển trong bối cảnh kỹ thuật số. Chúng tôi đi sâu vào các nguyên tắc cốt lõi của lãnh đạo hiệu quả, điều chỉnh chúng cho phù hợp với những thách thức và cơ hội của thế kỷ 21. Chương trình giảng dạy bao gồm nhiều chủ đề, bao gồm chuyển đổi số, ra quyết định dựa trên dữ liệu, quản lý nhóm từ xa và thúc đẩy văn hóa đổi mới. Bạn sẽ học cách tận dụng công nghệ để nâng cao năng suất của nhóm, giao tiếp hiệu quả qua các kênh kỹ thuật số và truyền cảm hứng cho nhóm của bạn để đạt được các mục tiêu đầy tham vọng. Thông qua một loạt các nghiên cứu điển hình, hội thảo tương tác và các buổi học do chuyên gia hướng dẫn, bạn sẽ có được những hiểu biết thực tế và các chiến lược hữu ích để trở thành một nhà lãnhadata-ai-hint="team collaboration" lãnh đạo có tư duy tiến bộ. Khóa học cũng nhấn mạnh tầm quan trọng của trí tuệ cảm xúc và các cân nhắc đạo đức trong thời đại kỹ thuật số, đảm bảo bạn lãnh đạo bằng cả năng lực và sự chính trực.`,
    thumbnail: 'https://placehold.co/600x400.png',
    duration: '8 Tuần',
    level: 'Nâng cao',
  },
  {
    id: '3',
    slug: 'thu-hut-nhan-tai-nang-cao',
    title: 'Thu Hút Nhân Tài Nâng Cao',
    shortDescription: 'Học các chiến lược tiên tiến để tìm kiếm và thu hút nhân tài hàng đầu.',
    longDescription: `Trong thị trường việc làm cạnh tranh ngày nay, việc tìm kiếm và thu hút nhân tài phù hợp trở nên thách thức hơn bao giờ hết. Khóa học nâng cao này vượt ra ngoài các phương pháp tuyển dụng truyền thống để khám phá các kỹ thuật tìm nguồn cung ứng sáng tạo, xây dựng thương hiệu nhà tuyển dụng và tối ưu hóa trải nghiệm ứng viên. Bạn sẽ học cách xây dựng một nguồn nhân tài mạnh mẽ, sử dụng phương tiện truyền thông xã hội và các nền tảng kỹ thuật số khác để tuyển dụng và tận dụng phân tích dữ liệu để cải thiện kết quả tuyển dụng của bạn. Chúng tôi sẽ đề cập đến các chủ đề nâng cao như sự đa dạng và hòa nhập trong tuyển dụng, thành thạo các kỹ thuật phỏng vấn hành vi và đàm phán các lời mời làm việc phức tạp. Khóa học này được thiết kế cho các chuyên gia nhân sự và nhà tuyển dụng có kinh nghiệm muốn nâng cao kỹ năng thu hút nhân tài và xây dựng các đội ngũ hiệu suất cao.`,
    thumbnail: 'https://placehold.co/600x400.png',
    duration: '6 Tuần',
    level: 'Nâng cao',
  },
  {
    id: '5',
    slug: 'ung-dung-ai-trong-quan-ly-nhan-su',
    title: 'Ứng Dụng AI Trong Quản Lý Nhân Sự',
    shortDescription: 'Khai phá sức mạnh của AI để tối ưu hóa quy trình và ra quyết định nhân sự thông minh.',
    longDescription: `Trong kỷ nguyên số, Trí tuệ nhân tạo (AI) đang cách mạng hóa mọi lĩnh vực, và quản lý nhân sự cũng không ngoại lệ. Khóa học này sẽ trang bị cho bạn kiến thức và kỹ năng để ứng dụng AI một cách hiệu quả vào các hoạt động nhân sự hàng ngày. Chúng tôi sẽ khám phá cách AI có thể tự động hóa việc sàng lọc hồ sơ, phân tích cảm xúc của nhân viên, dự đoán xu hướng nghỉ việc và cá nhân hóa lộ trình đào tạo. Bạn sẽ học cách sử dụng các công cụ AI để đưa ra quyết định dựa trên dữ liệu, giảm thiểu sai lệch và nâng cao hiệu quả hoạt động của bộ phận nhân sự. Khóa học cũng thảo luận về các cân nhắc đạo đức và thách thức khi triển khai AI trong môi trường làm việc, giúp bạn trở thành một nhà lãnh đạo nhân sự có tư duy chiến lược và sẵn sàng cho tương lai.`,
    thumbnail: 'https://placehold.co/600x400.png',
    duration: '6 Tuần',
    level: 'Nâng cao',
  },
];


export const consultingServices: ConsultingService[] = [
  {
    id: 'consult-1',
    title: 'Chiến Lược Nhân Sự Toàn Diện',
    shortDescription: 'Thiết kế và đồng bộ hóa chiến lược nhân sự với mục tiêu kinh doanh, tạo nền tảng cho sự phát triển bền vững.',
    icon: 'BrainCircuit',
  },
  {
    id: 'consult-2',
    title: 'Tối Ưu Hóa Cơ Cấu Tổ Chức',
    shortDescription: 'Phân tích và thiết kế lại cơ cấu tổ chức để tăng cường sự linh hoạt, tối ưu hóa luồng công việc và thúc đẩy tăng trưởng.',
    icon: 'Users',
  },
  {
    id: 'consult-3',
    title: 'Xây Dựng Văn Hóa Doanh Nghiệp',
    shortDescription: 'Kiến tạo một môi trường làm việc gắn kết, tích cực, thúc đẩy sự đổi mới và giữ chân nhân tài hàng đầu.',
    icon: 'Building2',
  },
  {
    id: 'consult-4',
    title: 'Phát Triển Năng Lực Lãnh Đạo',
    shortDescription: 'Xây dựng và triển khai các chương trình đào tạo nhằm phát triển đội ngũ lãnh đạo kế thừa mạnh mẽ và hiệu quả.',
    icon: 'TrendingUp',
  },
];

export const employees: Employee[] = [
  {
    name: 'Bà Lan',
    title: 'Giảng Viên & Chuyên Gia Tư Vấn Chính',
    bio: 'Bà Lan có hơn 15 năm kinh nghiệm trong lĩnh vực nhân sự, chuyên đào tạo và tư vấn cho các doanh nghiệp.',
    image: 'https://placehold.co/400x400.png',
    hint: 'professional woman'
  },
  {
    name: 'Ông Minh',
    title: 'Cố Vấn Hướng Nghiệp & Doanh Nghiệp',
    bio: 'Ông Minh chuyên về phát triển sự nghiệp và tư vấn chiến lược nhân sự cho các tổ chức.',
    image: 'https://placehold.co/400x400.png',
    hint: 'professional man'
  },
  {
    name: 'Cô Mai',
    title: 'Chuyên Viên Phát Triển Chương Trình',
    bio: 'Cô Mai thiết kế nội dung khóa học và các giải pháp tư vấn phù hợp và có tác động đến học viên và doanh nghiệp.',
    image: 'https://placehold.co/400x400.png',
    hint: 'professional woman smiling'
  },
];
