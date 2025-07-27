'use server';

import { generateJobDescription } from '@/ai/flows/generate-job-description';
import { z } from 'zod';

const jobDescriptionSchema = z.object({
  jobTitle: z.string().min(3, 'Job title must be at least 3 characters.'),
});

type State = {
  description?: string;
  error?: string;
};

export async function generateDescriptionAction(
  prevState: State,
  formData: FormData
): Promise<State> {
  const validatedFields = jobDescriptionSchema.safeParse({
    jobTitle: formData.get('jobTitle'),
  });

  if (!validatedFields.success) {
    return {
      error: 'Invalid input. Please provide a valid job title.',
    };
  }

  try {
    const result = await generateJobDescription({
      jobTitle: validatedFields.data.jobTitle,
    });
    return { description: result.jobDescription };
  } catch (error) {
    console.error(error);
    return {
      error: 'Failed to generate job description. Please try again later.',
    };
  }
}
