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

