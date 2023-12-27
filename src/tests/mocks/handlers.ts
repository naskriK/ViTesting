import { HttpResponse, http } from "msw";

export const handlers = [
  http.get("https://api.quotable.io/quotes/random", () => {
    return HttpResponse.json([
      {
        title: "Przykład",
      },
    ]);
  }),
];
