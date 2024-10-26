import { calculateComplexity } from "../../app/doubles/OtherUtils";
import { toUpperCaseWithCb } from "../../app/doubles/OtherUtils";

describe("OtherUtils test suite", () => {
  let cbArgs: string[] = [];
  let timesCalled = 0;
  function callBackMock(arg: string) {
    timesCalled++;
    cbArgs.push(arg);
  }
  afterEach(() => {
    timesCalled = 0;
    cbArgs = [];
  });
  it("toUpperCase - calls callback for invalid arg", () => {
    const actual = toUpperCaseWithCb("", callBackMock);
    expect(actual).toBe(undefined);
    expect(cbArgs).toContain("Invalid arg");
    expect(timesCalled).toBe(1);
  });

  timesCalled = 0;
  it("toUpperCase - calls callback valid arg", () => {
    const arg = "abc";
    const expected = "ABC";
    const actual = toUpperCaseWithCb(arg, callBackMock);
    expect(actual).toBe(expected);
    expect(cbArgs).toContain(`function called with ${arg}`);
    expect(timesCalled).toBe(1);
  });
  it("Calculates complexity", () => {
    //this is stub an incomplete object inside the test
    //( the main object StringInfo contains more info )
    const someInfo = {
      length: 5,
      extraInfo: {
        field1: "some info",
        field2: "some other info",
      },
    };
    const actual = calculateComplexity(someInfo as any);
    expect(actual).toBe(10);
  });
});
