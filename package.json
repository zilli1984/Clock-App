export async function fetchNewQuote() {
  try {
    const response = await fetch('https://dummyjson.com/quotes/random');

    if (!response.ok) {
      throw new Error('Erro na requisição');
    }

    const data = await response.json();

    return {
      content: data.quote,
      author: data.author
    };

  } catch (error) {
    console.error("Erro ao buscar quote:", error);
    throw error;
  }
}