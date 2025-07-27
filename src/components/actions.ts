'use server';

import { generateJobDescription } from '@/ai/flows/generate-job-description';
import { z } from 'zod';
import { headers } from 'next/headers';
import { rateLimiter } from '@/lib/rate-limiter';

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
  const headersList = headers();
  const ip = headersList.get('x-forwarded-for') ?? '127.0.0.1';

  const { success, message } = await rateLimiter(ip);

  if (!success) {
    return {
      error: message,
    };
  }

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
