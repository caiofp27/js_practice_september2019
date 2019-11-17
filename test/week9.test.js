const {
  sumMultiples,
  areWeCovered
} = require("../challenges/week9");

describe("sumMultiples", () => {
  test("it throws an error if not passed an array", () => {
    expect(() => {
      sumMultiples();
    }).toThrow("arr is required");
    
    expect(() => {
      sumMultiples("foo");
    }).toThrow("An Array is required");

    expect(() => {
      sumMultiples(5);
    }).toThrow("An Array is required");
  });

  test("it returns the sum of any numbers that are a multiple of 3 or 5", () => {
    const result = sumMultiples([1, 3, 5]);
    const expected = 8;
    expect(result).toBe(expected);
  });

  test("it works okay with decimal numbers", () => {
    const result = sumMultiples([1, 3, 5.0, 2, 12, 10]);
    const expected = 30;
    expect(result).toBe(expected);
  });

  test("return 0 if there are no multiples of 3 or 5", () => {
    expect(sumMultiples([1, 2, 8, 13, 7])).toBe(0);
  });
});

describe("areWeCovered", () => {
  test("it returns false if there are no staff at all", () => {
    expect(areWeCovered([], "Sunday")).toBe(false);
    expect(areWeCovered([], "Monday")).toBe(false);
    expect(areWeCovered([], "Tuesday")).toBe(false);
    expect(areWeCovered([], "Wednesday")).toBe(false);
    expect(areWeCovered([], "Thursday")).toBe(false);
    expect(areWeCovered([], "Friday")).toBe(false);
    expect(areWeCovered([], "Saturday")).toBe(false);
  });

  test("it returns false if there are staff but < 3 not scheduled to work", () => {
    const staff = [
      {name: "John", rota: ["Monday", "Tuesday"]},
      {name: "Jess", rota: ["Monday", "Tuesday"]},
      {name: "Mike", rota: ["Monday", "Wednesday"]},
      {name: "Sally", rota: ["Monday", "Wednesday"]},
    ];
    expect(areWeCovered(staff, "Tuesday")).toBe(false);
    expect(areWeCovered(staff, "Wednesday")).toBe(false);
    expect(areWeCovered(staff, "Thursday")).toBe(false);
  });

  test("it returns true if there are staff but > 3 scheduled to work", () => {
    const staff = [
      {name: "John", rota: ["Monday", "Tuesday"]},
      {name: "Jess", rota: ["Monday", "Tuesday"]},
      {name: "Mike", rota: ["Monday", "Tuesday"]},
      {name: "Sally", rota: ["Monday", "Tuesday"]}
    ];
    expect(areWeCovered(staff, "Tuesday")).toBe(true);
    expect(areWeCovered(staff, "Monday")).toBe(true);
  });
});