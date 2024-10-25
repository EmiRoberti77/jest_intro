import { getStringInfo, StringUtils, toUpperCase } from "../app/Utils";

describe("Utils test suite", () => {
  describe.only("testint StringUtil class", () => {
    let sut: StringUtils;
    beforeEach(() => {
      //set up test
      sut = new StringUtils();
      console.log("set up test");
    });
    afterEach(() => {
      //tear down test
      console.log("tear down test");
    });
    it("shoud throw an error", () => {
      expect(() => {
        sut.toUpperCase("");
      }).toThrow();
    });
    it("it should through an error and catch the Error instance and a message", (done) => {
      try {
        sut.toUpperCase("");
        done("GetStringInfo show throw an error for invalid arg");
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty("message", "Invalid arg");
        done();
      }
    });
    it("should return correcr upperCase", () => {
      const actual = sut.toUpperCase("abc");
      expect(actual).toBe("ABC");
    });
  });

  it("should return upper case of a valid string", () => {
    //arrange
    const sut = toUpperCase;
    const expected = "ABC";
    //act
    const actual = sut("abc");
    //asset
    expect(actual).toBe(expected);
  });

  describe("it should return info for a valid string", () => {
    test("return lowerCase", () => {
      const actual = getStringInfo("My-String");
      expect(actual.lowerCase).toBe("my-string");
    });

    test("return upperCase", () => {
      const actual = getStringInfo("My-String");
      expect(actual.upperCase).toBe("MY-STRING");
    });

    test("return string length to be 9", () => {
      const actual = getStringInfo("My-String");
      expect(actual.characters).toHaveLength(9);
    });

    test("return extraInfo to not be undefined", () => {
      const actual = getStringInfo("My-String");
      expect(actual.extraInfo).toEqual({});
      expect(actual.extraInfo).not.toBeUndefined();
      expect(actual.extraInfo).not.toBe(undefined);
      expect(actual.extraInfo).toBeTruthy();
    });

    test("to have valid string[] M Y - S t r i n g", () => {
      const actual = getStringInfo("My-String");
      expect(actual.characters).toContain<string>("M");
      expect(actual.characters).toEqual([
        "M",
        "y",
        "-",
        "S",
        "t",
        "r",
        "i",
        "n",
        "g",
      ]);
      expect(actual.characters).toEqual(
        expect.arrayContaining(["S", "t", "r", "i", "n", "g", "M", "y", "-"])
      );
    });
  });

  describe("Parametized test", () => {
    it.each([
      { input: "abc", expected: "ABC" },
      { input: "My-String", expected: "MY-STRING" },
      { input: "emi", expected: "EMI" },
    ])("$input toUpper $expected", ({ input, expected }) => {
      const actual = toUpperCase(input);
      expect(actual).toBe(expected);
    });
  });
});
