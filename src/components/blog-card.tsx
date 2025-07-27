import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { Post } from '@/lib/blog';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { AuthorAvatar } from './author-avatar';
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';

type BlogCardProps = {
  post: Post;
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <CardHeader className="p-0">
        <Link href={`/blog/${post.slug}`} className="block aspect-video w-full overflow-hidden">
          <Image
            src={post.thumbnail}
            alt={post.title}
            width={600}
            height={400}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint="blog topic"
          />
        </Link>
        <div className="p-6">
          <div className="flex gap-2 mb-2">
            {post.tags.slice(0, 2).map(tag => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
          <CardTitle className="font-headline text-2xl mb-2">
            <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
              {post.title}
            </Link>
          </CardTitle>
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
             <AuthorAvatar author={post.author} />
          </div>
          <CardDescription>{post.description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex-grow flex items-end p-6 pt-0">
         <Button asChild className="w-full" variant="outline">
          <Link href={`/blog/${post.slug}`}>
            Đọc tiếp <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
