import { getStringInfo, toUpperCase } from "../app/Utils";

describe("Utils test suite", () => {
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
