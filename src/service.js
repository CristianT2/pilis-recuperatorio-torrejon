const SERVER_DOMAIN = 'https://the-trivia-api.com/api';
export const getQuestions = async (category, limit, difficult) => {
try {
const response = await fetch(`${SERVER_DOMAIN}/questions?categories=${category}&limit=${limit}&difficulty=${difficult}`,{headers: {'Content-Type': 'application/json'}});
return response.json();
} catch {
throw new Error('No se encontraron questions');
}
};
