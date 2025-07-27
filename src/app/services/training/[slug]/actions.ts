
'use server';

import { summarizeCourseContent } from '@/ai/flows/summarize-course-content';
import { z } from 'zod';

const summarySchema = z.object({
  courseContent: z.string().min(1, 'Course content cannot be empty.'),
});

type State = {
  summary?: string;
  error?: string;
};

export async function generateSummary(
  prevState: State,
  formData: FormData
): Promise<State> {
  const validatedFields = summarySchema.safeParse({
    courseContent: formData.get('courseContent'),
  });

  if (!validatedFields.success) {
    return {
      error: 'Invalid input. Please provide valid course content.',
    };
  }

  try {
    const result = await summarizeCourseContent({
      courseContent: validatedFields.data.courseContent,
    });
    return { summary: result.executiveSummary };
  } catch (error) {
    console.error(error);
    return {
      error: 'Failed to generate summary. Please try again later.',
    };
  }
}
