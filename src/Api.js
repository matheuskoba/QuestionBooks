const BASE_API = 'http://localhost:3000/api';

export default {
    getQuestionBooks: async () => {
        const req = await fetch(`${BASE_API}/question_books.json`);
        const json = await req.json();
        return json;
    },
    getQuestion: async (id) => {
        const req = await fetch(`${BASE_API}/question_books/${id}.json`);
        const json = await req.json();
        return json;
    }
};