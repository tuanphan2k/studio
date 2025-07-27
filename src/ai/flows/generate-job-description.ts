'use server';

/**
 * @fileOverview An AI agent for generating job descriptions.
 * 
 * - generateJobDescription - A function that creates a job description based on a title.
 * - GenerateJobDescriptionInput - The input type for the function.
 * - GenerateJobDescriptionOutput - The return type for the function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GenerateJobDescriptionInputSchema = z.object({
  jobTitle: z.string().describe('The job title for which to generate a description.'),
});
export type GenerateJobDescriptionInput = z.infer<typeof GenerateJobDescriptionInputSchema>;

const GenerateJobDescriptionOutputSchema = z.object({
  jobDescription: z.string().describe('The generated job description.'),
});
export type GenerateJobDescriptionOutput = z.infer<typeof GenerateJobDescriptionOutputSchema>;

export async function generateJobDescription(input: GenerateJobDescriptionInput): Promise<GenerateJobDescriptionOutput> {
  return generateJobDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateJobDescriptionPrompt',
  input: { schema: GenerateJobDescriptionInputSchema },
  output: { schema: GenerateJobDescriptionOutputSchema },
  prompt: `Bạn là một chuyên gia tuyển dụng nhân sự (HR) bậc thầy, chuyên viết các bản mô tả công việc (JD) hấp dẫn, chuyên nghiệp và chi tiết.

Hãy tạo một bản mô tả công việc hoàn chỉnh cho vị trí sau:
Chức danh: {{{jobTitle}}}

Bản mô tả công việc phải bao gồm các phần chính sau:
1.  **Mô tả công việc:** Tổng quan về vai trò và trách nhiệm chính.
2.  **Yêu cầu công việc:** Liệt kê các kỹ năng, kinh nghiệm và trình độ học vấn cần thiết.
3.  **Quyền lợi:** Nêu bật các lợi ích và phúc lợi khi làm việc tại công ty.
4.  **Về công ty chúng tôi:** Một đoạn giới thiệu ngắn gọn, hấp dẫn về một công ty công nghệ giả định đang phát triển nhanh.

Hãy viết bằng giọng văn chuyên nghiệp, lôi cuốn và sử dụng định dạng Markdown để trình bày rõ ràng, dễ đọc.`,
});

const generateJobDescriptionFlow = ai.defineFlow(
  {
    name: 'generateJobDescriptionFlow',
    inputSchema: GenerateJobDescriptionInputSchema,
    outputSchema: GenerateJobDescriptionOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
