const {
  sumDigits,
  createRange
} = require("../challenges/week10");

describe("sumDigits", () => {
  test("it throws an error if not passed a integer number", () => {
    expect(() => {
      sumDigits("number");
    }).toThrow("a number is required");

    expect(() => {
      sumDigits([1,2,3]);
    }).toThrow("a number is required");

    expect(() => {
      sumDigits(123.5);
    }).toThrow("a integer number is required");

    expect(() => {
      sumDigits();
    }).toThrow("n is required");
  });

  test("it returns the sum of all digits", () => {
    expect(sumDigits(123)).toBe(6);

    expect(sumDigits(321)).toBe(6);

    expect(sumDigits(2488)).toBe(22);

    expect(sumDigits(987654321)).toBe(45);
  });
});

describe("createRange", () => {
  test("it throws an error if not passed at least a start and an end", () => {
    expect(() => {
      const start = "start";
      const end = 5;
      createRange(start, end);
    }).toThrow("start is required");

    expect(() => {
      const start = 5;
      const end = "end";
      createRange(start, end);
    }).toThrow("end is required");
  });

  test("it returns an array of a range of received numbers", () => {
    expect(createRange(2, 8)).toEqual([2, 3, 4, 5, 6, 7, 8]);
    expect(createRange(3, 21, 3)).toEqual([3, 6, 9, 12, 15, 18, 21]);
    expect(createRange(1, 31, 5)).toEqual([1, 6, 11, 16, 21, 26, 31]);
  });
});

