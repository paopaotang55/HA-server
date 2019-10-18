const request = require('supertest');
const app = require('../server');

describe('GET /user', () => {
  it('Gets the test endpoint', async done => {
    // Sends GET Request to /test endpoint
    const response = await request(app).get('/test');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('pass!');
    done();
  });
});
