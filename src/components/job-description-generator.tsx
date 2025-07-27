'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { generateDescriptionAction } from './actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Sparkles, Loader2, FileText, ArrowRight } from 'lucide-react';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Input } from './ui/input';
import { Label } from './ui/label';
import Link from 'next/link';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Đang tạo...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" />
          Tạo bản nháp ngay
        </>
      )}
    </Button>
  );
}

export function JobDescriptionGenerator() {
  const initialState = { description: '', error: '' };
  const [state, dispatch] = useFormState(generateDescriptionAction, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.error) {
      toast({
        variant: 'destructive',
        title: 'Lỗi',
        description: state.error,
      });
    }
  }, [state.error, toast]);

  const renderPreview = (text: string) => {
    // Split by sections. A section starts with ## or ###
    const sections = text.split(/(?=## |### )/);
    const previewText = sections.slice(0, 2).join('\n');

    const html = previewText
      .replace(/(\*\*|__)(.*?)\1/g, '<strong>$2</strong>') // Bold
      .replace(/### (.*)/g, '<h3 class="text-lg font-semibold mt-4 mb-2">$1</h3>') // h3
      .replace(/## (.*)/g, '<h2 class="text-xl font-bold mt-6 mb-3">$1</h2>') // h2
      .replace(/\* (.*)/g, '<li class="ml-5 list-disc">$1</li>') // li
      .replace(/\n/g, '<br />');

    return <div dangerouslySetInnerHTML={{ __html: html }} />;
  };

  return (
    <Card className="w-full max-w-4xl mx-auto bg-primary/5 border-primary/20 shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="font-headline text-3xl md:text-4xl text-primary flex items-center justify-center gap-3">
          <FileText className="shrink-0" />
          Trợ Lý AI Soạn Thảo Mô Tả Công Việc
        </CardTitle>
        <CardDescription className="text-lg mt-2 text-muted-foreground">
          Tiết kiệm thời gian, thu hút đúng người. Tạo mô tả công việc chuyên nghiệp chỉ trong vài giây.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={dispatch} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="jobTitle" className="text-base sr-only">Chức danh công việc</Label>
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                id="jobTitle"
                name="jobTitle"
                placeholder="Ví dụ: Chuyên viên Tuyển dụng, Kỹ sư Phần mềm..."
                className="flex-grow text-base"
                required
              />
              <SubmitButton />
            </div>
          </div>
        </form>
        {state.description && (
          <div className="mt-6">
            <Alert className="bg-background prose prose-sm max-w-none dark:prose-invert relative">
               <AlertTitle className="font-headline text-xl mb-4 flex items-center gap-2">
                  <Sparkles className="text-accent"/>
                  Bản Mô Tả Công Việc Đề Xuất
              </AlertTitle>
              <AlertDescription>
                  {renderPreview(state.description)}
              </AlertDescription>
              <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent" />
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full px-6">
                  <Button asChild size="lg" className="w-full">
                    <Link href="/contact">
                      Nhận bản đầy đủ & Tư vấn miễn phí <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
              </div>
            </Alert>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
