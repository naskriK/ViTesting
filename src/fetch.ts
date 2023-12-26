export const getRandomQuote = async () => {
  try {
    const res = await fetch(`https://api.quotable.io/quotes/random`);

    if (!res.ok) {
      throw new Error("Nie udało się!");
    }

    const data = await res.json();

    return data[0].title;
  } catch (err) {
    if (err instanceof Error) {
      return err.message;
    }
  }
};

getRandomQuote();
