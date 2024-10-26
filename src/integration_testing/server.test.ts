import { Server } from "../app2/server";

describe("Integration test on server", () => {
  let server: Server;
  beforeAll(async () => {
    server = new Server();
    await server.start();
  });

  afterAll(async () => {
    await server.stop();
  });

  test("GET /api request should return success response", async () => {
    const result = await fetch("http://localhost:8000/api", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });

    const resultBody = await result.json();
    expect(result.status).toBe(200);
    expect(resultBody.message).toBe("success");
  });
});
