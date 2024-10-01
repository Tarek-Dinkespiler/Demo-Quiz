import { handler } from "../src/lambda";

// eslint-disable-next-line @typescript-eslint/no-require-imports
const request = require("supertest");

describe("handler", () => {
  it("should return a statusCode 200", async () => {
    const app = await handler({});

    request(app)
      .get("/")
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err: unknown) => {
        if (err) throw err;
      });
  });
});
