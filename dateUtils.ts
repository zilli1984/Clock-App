import { useState } from 'react';
import { fetchNewQuote } from '../services/quoteServices';
import type { Quote } from '../types';
import { DEFAULT_QUOTE } from '../constants';

export function useQuote() {
  const [quote, setQuote] = useState<Quote>(DEFAULT_QUOTE);

  async function handleNewQuote() {
    try {
      const newQuote = await fetchNewQuote();
      setQuote(newQuote);
    } catch (error) {
      console.error("Erro ao buscar quote:", error);
    }
  }

  return { quote, handleNewQuote };
}
