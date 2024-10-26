import { OtherStringUtils } from "../../app/doubles/OtherstringUtils";

describe("Test OtherStringUtil class with spies", () => {
  let sut: OtherStringUtils;
  const arg = "abc";
  beforeEach(() => {
    sut = new OtherStringUtils();
  });

  test("Use a spy to track a call", () => {
    const toUpperCaseSpy = jest.spyOn(sut, "toUpperCase");
    sut.toUpperCase(arg);
    expect(toUpperCaseSpy).toHaveBeenCalledWith(arg);
  });

  test("Use a spy to track calls to other mobules", () => {
    const consoleToLog = jest.spyOn(console, "log");
    sut.logString(arg);
    expect(consoleToLog).toHaveBeenCalledWith(arg);
  });
});
