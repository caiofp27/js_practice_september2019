const {
  sumMultiples,
  areWeCovered,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix
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

describe("isValidDNA", () => {
  test("it returns false if there are different characters than C, G, T or A", () => {
    const dna = "AGTCD";
    expect(isValidDNA(dna)).toBe(false);
  });

  test("it returns false if the characters are different than C, G, T or A even in lower and upper case", () => {
    const dna = "bGEfV";
    expect(isValidDNA(dna)).toBe(false);
  });

  test("it returns true if the characters are C, G, T or A only", () => {
    const dna = "AGTC";
    expect(isValidDNA(dna)).toBe(true);
  });

  test("it returns true if the characters are C, G, T or A only", () => {
    const dna = "AC";
    expect(isValidDNA(dna)).toBe(true);
  });

  test("it returns true even with lower and upper case", () => {
    const dna = "aGtC";
    expect(isValidDNA(dna)).toBe(true);
  });
});

describe("getComplementaryDNA", () => {
  test("it returns TGAC, T always pairs with A, and C always pairs with G", () => {
    const dna = "AGTC";
    expect(getComplementaryDNA(dna)).toBe("TCAG");
  });
  
  test("it returns GACT", () => {
    const dna = "CTGA";
    expect(getComplementaryDNA(dna)).toBe("GACT");
  });

  test("it returns the correct string even when its lower case", () => {
    const dna = "ccTTggGaa";
    expect(getComplementaryDNA(dna)).toBe("GGAACCCTT");
  });
});

describe("isItPrime", () => {
  test("return true if its a prime number even with decimal numbers", () => {
    expect(isItPrime(7.5)).toBe(true);
    expect(isItPrime(13)).toBe(true);
    expect(isItPrime(37)).toBe(true);
    expect(isItPrime(97)).toBe(true);
  });

  test("it return false if its not a prime number", () => {
    expect(isItPrime(4)).toBe(false);
    expect(isItPrime(10)).toBe(false);
    expect(isItPrime(24)).toBe(false);
    expect(isItPrime(100)).toBe(false);
  });  
});

describe("createMatrix", () => {
  it("returns a matrix of 1*1 when passed 1", () => {
    const result = createMatrix(1, "foo");
    const expected = [ ["foo"] ];
    expect(result).toEqual(expected);
  });
  it("returns a matrix of 3*3 when passed 3", () => {
    const result = createMatrix(3, "caaa");
    const expected = [ ["caaa", "caaa", "caaa"], ["caaa", "caaa", "caaa"], ["caaa", "caaa", "caaa"] ];
    expect(result).toEqual(expected);
  });
});