'use server';

/**
 * @fileOverview AI-powered project suggestion flow.
 *
 * - generateProjectSuggestions - A function that generates project suggestions based on skills and interests.
 * - ProjectSuggestionInput - The input type for the generateProjectSuggestions function.
 * - ProjectSuggestionOutput - The return type for the generateProjectSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProjectSuggestionInputSchema = z.object({
  skills: z
    .string()
    .describe('The skills of the user, comma separated. E.g. Python, Javascript, React'),
  interests: z
    .string()
    .describe('The interests of the user, comma separated. E.g. Web Development, AI, Machine Learning'),
});
export type ProjectSuggestionInput = z.infer<typeof ProjectSuggestionInputSchema>;

const ProjectSuggestionOutputSchema = z.object({
  projectSuggestions: z.array(
    z.object({
      title: z.string().describe('The title of the project.'),
      description: z.string().describe('A brief description of the project.'),
      suggestedSkills: z.string().describe('A list of skills that would be useful for the project, comma separated.'),
    })
  ).describe('An array of project suggestions based on the user input.'),
});
export type ProjectSuggestionOutput = z.infer<typeof ProjectSuggestionOutputSchema>;

export async function generateProjectSuggestions(input: ProjectSuggestionInput): Promise<ProjectSuggestionOutput> {
  return generateProjectSuggestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'projectSuggestionPrompt',
  input: {schema: ProjectSuggestionInputSchema},
  output: {schema: ProjectSuggestionOutputSchema},
  prompt: `You are an AI project suggestion tool. A user will provide their skills and interests and you will return an array of project suggestions that would be relevant to them. Each project suggestion should include a title, a brief description, and a list of suggested skills that would be useful for the project.

Skills: {{{skills}}}
Interests: {{{interests}}}

Here are some project examples:
[
    {
      "title": "AI-Powered Plant Disease Detection",
      "description": "Develop a machine learning model to identify plant diseases from images.",
      "suggestedSkills": "Python, Machine Learning, TensorFlow, Image Processing"
    },
    {
      "title": "Personalized Music Recommender",
      "description": "Create a web application that recommends music based on user preferences.",
      "suggestedSkills": "React, Javascript, Machine Learning, data analysis"
    }
]

Return your repsonse as a JSON array.
`,
});

const generateProjectSuggestionsFlow = ai.defineFlow(
  {
    name: 'generateProjectSuggestionsFlow',
    inputSchema: ProjectSuggestionInputSchema,
    outputSchema: ProjectSuggestionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
