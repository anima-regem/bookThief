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
					role: 'user',

					content: `Given the prompt: ${text}. Return a json of 5 book recommendations in the format.
                  [{
                    "title": "The Great Gatsby",
                    "author": "F. Scott Fitzgerald",
                    "year": 1925,
                    "reason" : "The book is a classic that follows the story of a boy who navigates the world of the rich and famous in the 1920s. The book is a classic and is a must-read for anyone who loves a good story.",
                    "search_link": "https://openlibrary.org/search.json?q=The+Great+Gatsby"
                  },
                  {
                  }]
                  Do not include anything else in the response.
                  `
				}
			],

			model: 'llama-3.3-70b-versatile',
			temperature: 0.2
		});

		const completion = chatCompletion.choices[0]?.message?.content || 'No response generated';
		console.log('Completion:', completion);

		const responseObject = JSON.parse(completion);
		// for (let i = 0; i < responseObject.length; i++) {
		// 	const search_link = responseObject[i].search_link;
		// 	const res = await fetch(search_link);
		// 	const data = await res.json();
		// 	const imgURL = `https://covers.openlibrary.org/b/id/${data.docs[0].cover_i}-L.jpg`;
		// 	responseObject[i].imgURL = imgURL;
		// }
		console.log('Response:',responseObject );
		return json(responseObject);
	} catch (error) {
		console.error('Generation error:', error);
		return json({ error: 'Failed to generate response' }, { status: 500 });
	}
}
