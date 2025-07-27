import { format } from 'date-fns';
import { vi } from 'date-fns/locale';
import { cn } from '@/lib/utils';
import type { Employee } from '@/lib/data';
import Image from 'next/image';
import { Calendar, User } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';


type AuthorAvatarProps = {
    author: Employee;
    showDate?: boolean;
    large?: boolean;
    className?: string;
};

export function AuthorAvatar({ author, showDate = true, large = false, className }: AuthorAvatarProps) {
  const postDate = new Date(author.bio.length > 50 ? '2024-07-20' : '2024-07-15');

  return (
    <div className={cn("flex items-center gap-4", className)}>
        <Avatar className={cn(large ? 'h-16 w-16' : 'h-10 w-10')}>
            <AvatarImage src={author.image} alt={author.name} data-ai-hint={author.hint} />
            <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className={cn(large ? 'text-left' : '')}>
            <p className={cn("font-semibold", large ? 'text-lg' : 'text-base')}>{author.name}</p>
            {showDate && (
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <time dateTime={postDate.toISOString()}>
                        {format(postDate, "dd 'tháng' M, yyyy", { locale: vi })}
                    </time>
                </div>
            )}
            {!showDate && large && <p className="text-primary">{author.title}</p>}
        </div>
    </div>
  );
}
