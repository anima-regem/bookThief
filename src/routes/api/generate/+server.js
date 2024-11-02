// src/routes/api/generate/+server.js
import { json } from '@sveltejs/kit';
import { GROQ_API_KEY } from '$env/static/private';
import Groq from 'groq-sdk';

export async function POST({ request }) {
    try {
        const { text } = await request.json();
        console.log('Request:', text);
        console.log('API key:', GROQ_API_KEY);

        const groq = new Groq({ apiKey: GROQ_API_KEY });
        
        const chatCompletion = await groq.chat.completions.create({
            messages: [

                {
          
                  role: "user",
          
                  content: `Given the prompt: ${text}, Return a json of 3 book recommendations in the format {
                    "title": "The Great Gatsby",
                    "author": "F. Scott Fitzgerald",
                    "year": 1925
                  }.
                  Do not include anything else in the response.
                  `,

          
                },
          
              ],
          
              model: "llama3-8b-8192",
          
            });
        
        
          
        const completion =  chatCompletion.choices[0]?.message?.content || 'No response generated';
        console.log('Completion:', completion);
        return json({ completion });
    } catch (error) {
        console.error('Generation error:', error);
        return json({ error: 'Failed to generate response' }, { status: 500 });
    }
}