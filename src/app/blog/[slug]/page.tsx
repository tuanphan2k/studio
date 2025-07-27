import { notFound } from 'next/navigation';
import { posts } from '@/lib/blog';
import Image from 'next/image';
import { Calendar, User, Tags, ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import type { Metadata, ResolvingMetadata } from 'next';
import { AuthorAvatar } from '@/components/author-avatar';
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BlogCard } from '@/components/blog-card';

type PostPageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata(
  { params }: PostPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Không Tìm Thấy Bài Viết',
      description: 'Bài viết bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.',
    };
  }

  return {
    title: `${post.title} - Nhân Tâm Phát Blog`,
    description: post.description,
  };
}

export default function PostPage({ params }: PostPageProps) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }
  
  const otherPosts = posts.filter(p => p.slug !== params.slug).slice(0, 2);

  return (
    <>
    <div className="container py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <article className="prose prose-lg max-w-none dark:prose-invert">
            <div className="mb-8 space-y-4">
                <Link href="/blog" className="text-sm text-primary hover:underline flex items-center gap-2">
                    <ArrowLeft className="h-4 w-4" />
                    Quay lại Blog
                </Link>
                <div className="flex gap-2">
                    {post.tags.map(tag => (
                        <Badge key={tag} variant="default">{tag}</Badge>
                    ))}
                </div>
                <h1 className="font-headline text-4xl md:text-5xl text-primary !mb-4">
                    {post.title}
                </h1>
                <div className="flex items-center gap-6 text-base text-muted-foreground">
                    <AuthorAvatar author={post.author} showDate />
                </div>
            </div>

            <Image
              src={post.thumbnail}
              alt={post.title}
              width={1200}
              height={675}
              className="aspect-video w-full rounded-lg object-cover mb-8 shadow-lg"
              data-ai-hint="blog topic abstract"
              priority
            />
            
            <div className="whitespace-pre-line leading-relaxed text-foreground/90">
                {post.content}
            </div>
        </article>

        <Separator className="my-12" />

        <div className="text-center">
            <h3 className="font-headline text-2xl mb-2">Về tác giả</h3>
            <div className="flex justify-center">
                <AuthorAvatar author={post.author} showDate={false} large />
            </div>
            <p className="max-w-2xl mx-auto mt-4 text-muted-foreground">{post.author.bio}</p>
        </div>
      </div>
    </div>
    
    {otherPosts.length > 0 && (
      <section className="bg-primary/5 py-20 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Các Bài Viết Khác</h2>
            <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
              Khám phá thêm những góc nhìn và kiến thức từ đội ngũ của chúng tôi.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {otherPosts.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>
    )}
    </>
  );
}
