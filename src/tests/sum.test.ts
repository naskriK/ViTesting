import { addTwoNumbers } from "../sum";
import { describe, expect, test } from "vitest";

describe("Add Two Numbers function tests", () => {
  test("Should add two numbers correctly", () => {
    const firstNumber = 3;
    const secondNumber = 5;

    const result = addTwoNumbers(firstNumber, secondNumber);

    expect(result).toBe(firstNumber + secondNumber);
  });
});
