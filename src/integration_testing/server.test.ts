import { Server } from "../app2/server";

describe("Integration test on server", () => {
  let server: Server;
  let host: string;
  let api_route: string;
  beforeAll(async () => {
    host = process.env.HOST!;
    api_route = process.env.API_URL!;
    server = new Server();
    await server.start();
  });

  afterAll(async () => {
    await server.stop();
  });

  test("GET /api request should return success response", async () => {
    const url = host + api_route;
    const result = await fetch(url, {
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
