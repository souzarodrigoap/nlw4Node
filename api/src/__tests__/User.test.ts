import request from 'supertest';
import { app } from '../app';

import createConnection from '../database';

describe("Users", () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });
  
  it("Should be able to create a new user", async () => {
    const response = await request(app).post("/users").send({
      email: "fenom3@outlook.com",
      name: "FenomGOD",
    });

    expect(response.status).toBe(201);
  });
});
