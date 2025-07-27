export type Course = {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  thumbnail: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
};

export const courses: Course[] = [
  {
    id: '1',
    title: 'Leadership in the Digital Age',
    shortDescription: 'Master modern leadership skills for a tech-driven world.',
    longDescription: `This comprehensive course is designed for aspiring and current leaders who want to thrive in the digital landscape. We delve into the core principles of effective leadership, adapting them to the challenges and opportunities of the 21st century. The curriculum covers a wide range of topics, including digital transformation, data-driven decision making, remote team management, and fostering a culture of innovation. You will learn how to leverage technology to enhance team productivity, communicate effectively across digital channels, and inspire your team to achieve ambitious goals. Through a series of case studies, interactive workshops, and expert-led sessions, you will gain practical insights and actionable strategies to become a forward-thinking leader. The course also emphasizes the importance of emotional intelligence and ethical considerations in the digital age, ensuring you lead with both competence and integrity.`,
    thumbnail: 'https://placehold.co/600x400',
    duration: '8 Weeks',
    level: 'Advanced',
  },
  {
    id: '2',
    title: 'Foundations of Human Resources',
    shortDescription: 'A comprehensive introduction to the key functions of HR.',
    longDescription: `Perfect for those new to Human Resources or seeking a refresher, this foundational course covers the entire employee lifecycle. From recruitment and onboarding to performance management and offboarding, you will gain a thorough understanding of HR's critical role in any organization. We will explore topics such as talent acquisition strategies, creating effective job descriptions, legal compliance in hiring, developing compensation and benefits packages, and fostering positive employee relations. The course uses real-world scenarios to illustrate key concepts, helping you to develop the practical skills needed to handle common HR challenges. By the end of this course, you will have a solid grasp of HR fundamentals and be well-equipped to contribute to a thriving and compliant workplace.`,
    thumbnail: 'https://placehold.co/600x400',
    duration: '4 Weeks',
    level: 'Beginner',
  },
  {
    id: '3',
    title: 'Advanced Talent Acquisition',
    shortDescription: 'Learn cutting-edge strategies for sourcing and attracting top talent.',
    longDescription: `In today's competitive job market, finding and attracting the right talent is more challenging than ever. This advanced course goes beyond traditional recruiting methods to explore innovative sourcing techniques, employer branding, and candidate experience optimization. You will learn how to build a strong talent pipeline, utilize social media and other digital platforms for recruitment, and leverage data analytics to improve your hiring outcomes. We will cover advanced topics like diversity and inclusion in recruitment, mastering behavioral interviewing techniques, and negotiating complex job offers. This course is designed for experienced HR professionals and recruiters who want to elevate their talent acquisition skills and build high-performing teams.`,
    thumbnail: 'https://placehold.co/600x400',
    duration: '6 Weeks',
    level: 'Advanced',
  },
  {
    id: '4',
    title: 'Employee Wellness and Engagement',
    shortDescription: 'Build a supportive workplace culture that boosts morale and productivity.',
    longDescription: `A happy and healthy workforce is a productive workforce. This course provides a roadmap for creating and implementing effective employee wellness and engagement programs. You will learn the principles of positive psychology and how to apply them in the workplace to foster a sense of purpose, recognition, and well-being. We will cover a range of strategies, from designing mental health support systems and promoting work-life balance to creating recognition programs and gathering actionable feedback through engagement surveys. You'll leave this course with a toolkit of practical ideas to cultivate a positive organizational culture where employees feel valued, motivated, and engaged.`,
    thumbnail: 'https://placehold.co/600x400',
    duration: '5 Weeks',
    level: 'Intermediate',
  },
];
