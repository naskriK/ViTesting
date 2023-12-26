import { describe, expect, test } from "vitest";
import { Arr } from "../arr";

describe("Arr class tests", () => {
  test("Should initial have empty list when no provided items", () => {
    const newArray = new Arr();
    const length = newArray.items.length;

    expect(length).toBe(0);
  });

  test("Should have a parameter items in items", () => {
    const newArray = new Arr(1, 2, 3, 4);

    const length = newArray.items.length;
    const firstItem = newArray.items[0];

    expect(length).toBe(4);
    expect(firstItem).toBe(1);
  });

  test("Should return a 0 when pushing without item and empty list", () => {
    const newArray = new Arr();

    const result = newArray.push();

    expect(result).toBe(0);
  });

  test("Should return a item when pushing correctly", () => {
    const newArray = new Arr();

    newArray.push(45);

    const lastItem = newArray.items[newArray.items.length - 1];

    expect(lastItem).toBe(45);
  });
});
