import { PasswordChecker } from "../../app/pass_checker/PaswordChecker";

describe("Password checker test suite", () => {
  let sut: PasswordChecker;
  beforeEach(() => {
    sut = new PasswordChecker();
  });

  it("password with less then 8 chars is invalid", () => {
    const actual = sut.checkPassword("1234567");
    expect(actual).toBe(false);
  });

  it("password with more then 8 chars is valid", () => {
    const actual = sut.checkPassword("12345678Aa");
    expect(actual).toBe(true);
  });

  it("password with no upperCase is invalid", () => {
    const actual = sut.checkPassword("1234abcd");
    expect(actual).toBe(false);
  });

  it("password with upperCase is valid", () => {
    const actual = sut.checkPassword("1234abcD");
    expect(actual).toBe(true);
  });

  it("password with no lowerCase is invalid", () => {
    const actual = sut.checkPassword("1234ABCD");
    expect(actual).toBe(false);
  });

  it("password with lowerCase is valid", () => {
    const actual = sut.checkPassword("1234aBCD");
    expect(actual).toBe(true);
  });
});
