import {
  PasswordChecker,
  PasswordErrors,
} from "../../app/pass_checker/PaswordChecker";

describe("Password checker test suite", () => {
  let sut: PasswordChecker;
  beforeEach(() => {
    sut = new PasswordChecker();
  });

  it("password with less then 8 chars is invalid", () => {
    const actual = sut.checkPassword("1234567");
    expect(actual.valid).toBe(false);
    expect(actual.reason).toContain(PasswordErrors.SHORT);
  });

  it("password with more then 8 chars is valid", () => {
    const actual = sut.checkPassword("12345678Aa");
    expect(actual.reason).not.toContain(PasswordErrors.SHORT);
  });

  xit("password with no upperCase is invalid", () => {
    const actual = sut.checkPassword("1234abcd");
    expect(actual.valid).toBe(false);
    expect(actual.reason).toContain(PasswordErrors.NO_UPPER_CASE);
  });

  xit("password with upperCase is valid", () => {
    const actual = sut.checkPassword("1234abcD");
    expect(actual.valid).toBe(true);
  });

  xit("password with no lowerCase is invalid", () => {
    const actual = sut.checkPassword("1234ABCD");
    expect(actual.valid).toBe(false);
    expect(actual.reason).toContain(PasswordErrors.NO_LOWER_CASE);
  });

  xit("password with lowerCase is valid", () => {
    const actual = sut.checkPassword("1234aBCD");
    expect(actual.valid).toBe(true);
  });
});
