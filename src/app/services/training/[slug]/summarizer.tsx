
'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { generateSummary } from './actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Sparkles, Terminal, Loader2 } from 'lucide-react';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

type SummarizerProps = {
  content: string;
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Đang tạo...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" />
          Tạo Tóm Tắt
        </>
      )}
    </Button>
  );
}

export function Summarizer({ content }: SummarizerProps) {
  const initialState = { summary: '', error: '' };
  const [state, dispatch] = useFormState(generateSummary, initialState);
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

  return (
    <Card className="bg-primary-foreground/50 border-accent">
      <CardHeader>
        <CardTitle className="font-headline text-accent flex items-center gap-2">
          <Sparkles />
          Tóm Tắt Bằng AI
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form action={dispatch}>
          <input type="hidden" name="courseContent" value={content} />
          <SubmitButton />
        </form>
        {state.summary && (
          <Alert className="mt-6 bg-background">
            <Sparkles className="h-4 w-4" />
            <AlertTitle className="font-headline">Tóm Tắt</AlertTitle>
            <AlertDescription className="mt-2 prose prose-sm max-w-none">
              {state.summary}
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  );
}
