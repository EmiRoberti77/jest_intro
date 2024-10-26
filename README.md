## F.I.R.S.T

F.I.R.S.T. principles are a set of core values that guide the development and maintenance of effective test suites. These principles help ensure that tests are reliable, maintainable, and valuable for long-term project success. The acronym stands for Fast, Isolated, Repeatable, Self-verifying, and Timely:

- 1. Fast: Tests should execute quickly, enabling frequent test runs and quicker feedback during development.
- 2. Isolated: Each test should be independent, ensuring that the outcome of one does not affect another, which helps identify the root cause of issues more easily.
- 3. Repeatable: Tests must produce consistent results, regardless of where and when they are run, ensuring reliability across different environments.
- 4. Self-verifying: Tests should automatically verify their outcomes with clear assertions, eliminating the need for manual inspection of results.
- 5. Timely: Tests should be written alongside or shortly after the code they are testing, allowing for immediate feedback and reducing the chance of regressions.

## when implementing test use F.I.R.S.T

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
# Integration testing

Integration testing with Jest involves testing multiple parts of an application (such as modules, classes, or components) together to ensure they work harmoniously. Unlike unit testing, which isolates single components, integration testing validates how different parts of the code interact, focusing on functionality that crosses module boundaries.

Key Points of Integration Testing with Jest

- 1.	Objective: The main goal of integration testing is to check if various components interact correctly, ensuring that the flow of data and operations between them works as intended.
- 2.	Realistic Environment: Integration tests often run in an environment closer to production, sometimes including databases, APIs, or other services that the application relies on. This is to see how the system behaves in a near-live scenario.
- 3.	Example with Jest:
Suppose we’re testing a server that has a route to fetch user data from a database.

```typescript
import { Server } from "./server";
import fetch from 'node-fetch';

describe("Integration test for /user endpoint", () => {
  let server;

  // Set up the server before any test runs
  beforeAll(async () => {
    server = new Server();
    await server.start();
  });

  // Shut down the server after tests complete
  afterAll(async () => {
    await server.stop();
  });

  test("GET /user should return user data", async () => {
    const response = await fetch("http://localhost:8000/user");
    const data = await response.json();

    // Check if the server returns a success response and valid data
    expect(response.status).toBe(200);
    expect(data).toEqual(expect.objectContaining({ id: expect.any(Number), name: expect.any(String) }));
  });
});
```

-	Setup and Teardown: beforeAll and afterAll hooks start and stop the server to simulate a real-world scenario. These hooks help prepare and clean up the testing environment.
-	Assertions: Inside the test block, assertions like expect(response.status).toBe(200) confirm the endpoint’s response matches expectations. Jest assertions allow for flexible validation, such as checking if the data structure aligns with the expected user data format.

- 4.	Benefits of Using Jest for Integration Testing:
	•	Async Support: Jest has robust support for asynchronous operations, making it easy to handle real server or database calls.
	•	Mocking and Spies: Jest offers built-in mocking and spy functionalities, allowing you to isolate dependencies if needed, or verify that certain functions were called.
	•	Easy Setup and Clear Syntax: Jest is straightforward to set up and has an easy-to-read syntax, making it approachable for testing complex interactions.
	5.	Best Practices:
	•	Limit Database Writes: If you’re testing a database interaction, avoid altering data (or reset it afterward) to maintain test integrity.
	•	Manage Test Data: Use separate test databases or mock responses when possible to avoid interfering with production data.
	•	Use Lifecycle Methods: beforeAll, afterAll, beforeEach, and afterEach are useful for setting up preconditions and cleaning up after tests.

<img width="540" alt="Screenshot 2024-10-25 at 07 05 13" src="https://github.com/user-attachments/assets/3660ff90-afb2-463a-a5ba-9d6b5e828a90">

![Screenshot 2024-10-25 at 07 05 37](https://github.com/user-attachments/assets/3b486c2f-5f97-4c52-8318-f0136bf9cc6a)
