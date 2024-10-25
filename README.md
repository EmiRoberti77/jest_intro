## F.I.R.S.T

F.I.R.S.T. principles are a set of core values that guide the development and maintenance of effective test suites. These principles help ensure that tests are reliable, maintainable, and valuable for long-term project success. The acronym stands for Fast, Isolated, Repeatable, Self-verifying, and Timely:

- 1. Fast: Tests should execute quickly, enabling frequent test runs and quicker feedback during development.
- 2. Isolated: Each test should be independent, ensuring that the outcome of one does not affect another, which helps identify the root cause of issues more easily.
- 3. Repeatable: Tests must produce consistent results, regardless of where and when they are run, ensuring reliability across different environments.
- 4. Self-verifying: Tests should automatically verify their outcomes with clear assertions, eliminating the need for manual inspection of results.
- 5. Timely: Tests should be written alongside or shortly after the code they are testing, allowing for immediate feedback and reducing the chance of regressions.

# when implementing test use F.I.R.S.T

## Key Jest Hooks and Functions

describe()

    •	Used to group related tests.
    •	Syntax: describe("description", () => { ...tests... })
    •	Example:

```javascript
describe("Utils test suite", () => { ... });
```

.only Modifier

    •	Focuses only on the specified test suite, skipping others.
    •	Example:

```javascript
describe.only("testing StringUtil class", () => { ... });
```

it() / test()

    •	Defines individual test cases.
    •	Syntax: it("should...", () => { ... }) or test("should...", () => { ... })
    •	Example:

```javascript
it("should return correct upperCase", () => { ... });
```

beforeEach()

    •	Runs a function before each test in the suite, useful for setup.
    •	Example:

```javascript
beforeEach(() => {
  sut = new StringUtils();
});
```

afterEach()

    •	Runs a function after each test in the suite, useful for cleanup.
    •	Example:

```javascript
afterEach(() => {
  console.log("tear down test");
});
```

expect()

    •	The primary assertion function in Jest.
    •	Syntax: expect(actual).toBe(expected);
    •	Example:

```javascript
expect(actual).toBe("ABC");
```

Error Handling Assertions

.toThrow()

    •	Tests that a function throws an error.
    •	Example:

```javascript
expect(() => {
  sut.toUpperCase("");
}).toThrow();
```

.toBeInstanceOf()

    •	Checks if the error is an instance of a specific class.
    •	Example:

```javascript
expect(error).toBeInstanceOf(Error);
```

.toHaveProperty()

    •	Verifies that an object has a specific property.
    •	Example:

```javascript
expect(error).toHaveProperty("message", "Invalid arg");
```

.toEqual()

    •	Checks deep equality (used for objects and arrays).
    •	Example:

```javascript
expect(actual.extraInfo).toEqual({});
```

.toHaveLength()

    •	Validates the length of an array.
    •	Example:

```javascript
expect(actual.characters).toHaveLength(9);
```

toContain()

    •	Checks if an array contains a specific value.
    •	Example:

```javascript
expect(actual.characters).toContain("M");
```

.arrayContaining()

    •	Validates that an array contains specific elements (ignoring order).
    •	Example:

```javascript
expect(actual.characters).toEqual(expect.arrayContaining(["S", "t", "r"]));
```

it.each()

    •	Runs a test multiple times with different inputs.
    •	Syntax: it.each([ ... ])("$input toUpper $expected", ({ input, expected }) => { ... });
    •	Example:

```javascript
it.each([
  { input: "abc", expected: "ABC" },
  { input: "My-String", expected: "MY-STRING" },
  { input: "emi", expected: "EMI" },
])("$input toUpper $expected", ({ input, expected }) => {
  const actual = toUpperCase(input);
  expect(actual).toBe(expected);
});
```

```javascript
describe("Utils test suite", () => {
  it("should return upper case of a valid string", () => {
    const actual = toUpperCase("abc");
    expect(actual).toBe("ABC");
  });

  describe("Parameterized tests", () => {
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
```

<img width="540" alt="Screenshot 2024-10-25 at 07 05 13" src="https://github.com/user-attachments/assets/3660ff90-afb2-463a-a5ba-9d6b5e828a90">

![Screenshot 2024-10-25 at 07 05 37](https://github.com/user-attachments/assets/3b486c2f-5f97-4c52-8318-f0136bf9cc6a)
