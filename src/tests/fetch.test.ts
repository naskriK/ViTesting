import { afterEach, describe, expect, it, vi } from "vitest";
import { getRandomQuote } from "../fetch";

describe("Fetch tests", () => {
  it("Should see a correct title when succesfully fetch", async () => {
    vi.stubGlobal("fetch", async () => {
      return {
        ok: true,
        json: async () => [{ title: "Przyklad" }],
      };
    });

    const data = await getRandomQuote();

    expect(data).toBe("Przyklad");
  });

  it("Should see a error", async () => {
    vi.stubGlobal("fetch", async () => {
      throw new Error("NetworkError");
    });

    const data = await getRandomQuote();

    expect(data).toBe("NetworkError");
  });

  it("Should see a custom error when a problem with fetch data", async () => {
    vi.stubGlobal("fetch", async () => {
      return {
        ok: false,
      };
    });

    const data = await getRandomQuote();

    expect(data).toBe("Nie udało się!");
  });
});
