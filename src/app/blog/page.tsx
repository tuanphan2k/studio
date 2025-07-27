import { posts } from '@/lib/blog';
import { BlogCard } from '@/components/blog-card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Nhân Tâm Phát',
  description: 'Khám phá các bài viết chuyên sâu về quản trị nhân sự, lãnh đạo, văn hóa doanh nghiệp và các xu hướng mới nhất trong ngành từ các chuyên gia của Nhân Tâm Phát.',
};

export default function BlogPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Góc Nhìn Chuyên Gia</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Cập nhật những kiến thức, xu hướng và câu chuyện mới nhất từ thế giới nhân sự, được chia sẻ bởi đội ngũ chuyên gia của chúng tôi.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
