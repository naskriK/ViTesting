import { afterEach, beforeAll, afterAll, describe, expect, it } from "vitest";
import { getRandomQuote } from "../fetch";
import { server } from "./mocks/server";
import { HttpResponse, http } from "msw";

describe("Fetch tests", () => {
  // Establish API mocking before all tests.
  beforeAll(() => server.listen());

  // Reset any request handlers that we may add during the tests,
  // so they don't affect other tests.
  afterEach(() => server.resetHandlers());

  // Clean up after the tests are finished.
  afterAll(() => server.close());

  it("Should see a correct title when succesfully fetch", async () => {
    const data = await getRandomQuote();

    console.log(data);

    expect(data).toBe("Przykład");
  });

  it("Should handle a network error", async () => {
    server.use(
      http.get("https://api.quotable.io/quotes/random", () => {
        return HttpResponse.error();
      })
    );

    const data = await getRandomQuote();

    expect(data).toBe("Failed to fetch");
  });

  it("Should handle a custom error", async () => {
    server.use(
      http.get("https://api.quotable.io/quotes/random", () => {
        return new HttpResponse(null, { status: 500 });
      })
    );

    const data = await getRandomQuote();

    expect(data).toBe("Nie udało się!");
  });
});
