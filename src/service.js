const SERVER_DOMAIN = ´https://the-trivia-api.com/api´
export const getQuestions = async (category, limit, difficult) => {
try {
const respnse = await fetch(´${SERVER_DOMAIN}/questions?categories=${category}&limit=${limit}&difficulty=${difficult}´)
return response.json();
} catch {
throw new Error(´No se encontraron questions´);
}
};
