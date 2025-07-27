'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { generateDescriptionAction } from './actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Sparkles, Loader2, FileText } from 'lucide-react';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Input } from './ui/input';
import { Label } from './ui/label';

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
          Tạo Mô Tả Công Việc
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

  // A simple markdown to HTML converter
  const renderMarkdown = (text: string) => {
    const html = text
      .replace(/(\*\*|__)(.*?)\1/g, '<strong>$2</strong>') // Bold
      .replace(/### (.*)/g, '<h3 class="text-lg font-semibold mt-4 mb-2">$1</h3>') // h3
      .replace(/## (.*)/g, '<h2 class="text-xl font-bold mt-6 mb-3">$1</h2>') // h2
      .replace(/# (.*)/g, '<h1 class="text-2xl font-bold mt-8 mb-4">$1</h1>') // h1
      .replace(/\* (.*)/g, '<li class="ml-5 list-disc">$1</li>') // li
      .replace(/\n/g, '<br />');
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
  };

  return (
    <Card className="w-full max-w-4xl mx-auto border-accent shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="font-headline text-3xl md:text-4xl text-accent flex items-center justify-center gap-3">
          <FileText />
          Trợ Lý AI Soạn Thảo Mô Tả Công Việc
        </CardTitle>
        <CardDescription className="text-lg mt-2">
          Nhập chức danh và để AI của chúng tôi tạo ra một bản mô tả công việc chuyên nghiệp chỉ trong vài giây.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={dispatch} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="jobTitle" className="text-base">Chức danh công việc</Label>
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                id="jobTitle"
                name="jobTitle"
                placeholder="Ví dụ: Chuyên viên Tuyển dụng, Kỹ sư Phần mềm..."
                className="flex-grow"
                required
              />
              <SubmitButton />
            </div>
          </div>
        </form>
        {state.description && (
          <Alert className="mt-6 bg-background prose prose-sm max-w-none dark:prose-invert">
             <AlertTitle className="font-headline text-xl mb-4 flex items-center gap-2">
                <Sparkles className="text-accent"/>
                Bản Mô Tả Công Việc Đề Xuất
            </AlertTitle>
            <AlertDescription>
                {renderMarkdown(state.description)}
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  );
}
