const {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
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

describe("getScreentimeAlertList", () => {
  test("it throws an error if its not passed a valid date", () => {
    expect(() => {
      const users = [
        {
          username: "beth_1234",
          name: "Beth Smith",
          screenTime: [
            { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
            { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
            { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
            { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
          ]
        }
      ];
      const date = undefined;
      getScreentimeAlertList(users, date);
    }).toThrow("a valid date is required");
  });
  
  test("it throws an error if its not passed a valid user", () => {
    expect(() => {
      const users = undefined;
      const date = "2019-05-04"
      getScreentimeAlertList(users, date);
    }).toThrow("a valid user is required");
  });

  test("it returns an array of usernames that used over than 100 minutes of screentime", () => {
      const users = [
        {
          username: "beth_1234",
          name: "Beth Smith",
          screenTime: [
            { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 70} },
            { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
            { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
            { date: "2019-05-04", usage: { twitter: 0, instagram: 0, facebook: 0} },
          ]
        },
        {
          username: "jr_2241",
          name: "John Johnson",
          screenTime: [
            { date: "2019-05-01", usage: { twitter: 10, instagram: 55, facebook: 40} },
            { date: "2019-05-02", usage: { twitter: 5, instagram: 1, facebook: 0} },
            { date: "2019-05-03", usage: { twitter: 21, instagram: 3, facebook: 0} },
            { date: "2019-05-04", usage: { twitter: 0, instagram: 0, facebook: 0} },
          ]
        },
        {
          username: "c2f7p",
          name: "Caio Pereira",
          screenTime: [
            { date: "2019-05-01", usage: { twitter: 21, instagram: 102, facebook: 4} },
            { date: "2019-05-02", usage: { twitter: 6, instagram: 0, facebook: 3} },
            { date: "2019-05-03", usage: { twitter: 12, instagram: 1, facebook: 9} },
            { date: "2019-05-04", usage: { twitter: 0, instagram: 0, facebook: 61} },
          ]
        }
      ];
      expect(getScreentimeAlertList(users, "2019-05-01")).toEqual(['beth_1234', 'jr_2241', 'c2f7p']);
      expect(getScreentimeAlertList(users, "2019-05-04")).toEqual("no user has used more than 100 minutes");
  });
});

describe("hexToRGB", () => {
  test("it throws an error if not passed a valid hexadecimal value", () => {
    expect(() => {
      let hexStr = undefined;
      hexToRGB(hexStr);
    }).toThrow("hexStr is required");
  })

  test("it returns the RGB from a passed hexadecimal number", () => {
    expect(hexToRGB("#FF1133")).toBe("rgb(255, 17, 51)");
    expect(hexToRGB("#AA4432")).toBe("rgb(170, 68, 50)");
    expect(hexToRGB("#FFFFFF")).toBe("rgb(255, 255, 255)");
    expect(hexToRGB("#EE3211")).toBe("rgb(238, 50, 17)");
  });
});

describe("findWinner", () => {
  test("it throws an error if not passed a board", () => {
    expect(() => {
      const board = undefined;
      findWinner(board)
    }).toThrow("board is required");
  });

  test("it throws an error if not passed a valid board", () => {
    expect(() => {
      const board = [["X", 0, null]];
      findWinner(board)
    }).toThrow("a valid board is required");
  });

  test("it returns the winner of the game", () => {
    expect(findWinner([["X", 0, null],["X", null, 0], ["X", 0, null]])).toBe("X");
    expect(findWinner([["X", 0, null],["X", 0, null], [null, 0, "X"]])).toBe(0);
    expect(findWinner([["X", 0, null],[0, "X", null], [null, 0, "X"]])).toBe("X");
  });
});