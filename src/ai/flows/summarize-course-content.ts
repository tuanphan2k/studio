// SummarizeCourseContent Flow

'use server';

/**
 * @fileOverview A course content summarization AI agent.
 *
 * - summarizeCourseContent - A function that summarizes course content.
 * - SummarizeCourseContentInput - The input type for the summarizeCourseContent function.
 * - SummarizeCourseContentOutput - The return type for the summarizeCourseContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeCourseContentInputSchema = z.object({
  courseContent: z
    .string()
    .describe('The full content of the course to be summarized.'),
});
export type SummarizeCourseContentInput = z.infer<typeof SummarizeCourseContentInputSchema>;

const SummarizeCourseContentOutputSchema = z.object({
  executiveSummary: z
    .string()
    .describe('A concise executive summary of the course content.'),
});
export type SummarizeCourseContentOutput = z.infer<typeof SummarizeCourseContentOutputSchema>;

export async function summarizeCourseContent(input: SummarizeCourseContentInput): Promise<SummarizeCourseContentOutput> {
  return summarizeCourseContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeCourseContentPrompt',
  input: {schema: SummarizeCourseContentInputSchema},
  output: {schema: SummarizeCourseContentOutputSchema},
  prompt: `You are an expert at creating executive summaries for course content.

  Please provide a concise executive summary of the following course content:
  {{courseContent}}
  `,
});

const summarizeCourseContentFlow = ai.defineFlow(
  {
    name: 'summarizeCourseContentFlow',
    inputSchema: SummarizeCourseContentInputSchema,
    outputSchema: SummarizeCourseContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
