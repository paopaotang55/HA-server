const request = require('supertest');
const app = require('../server');

describe('GET /test', () => {
  it('Gets the test endpoint', async done => {
    // Sends GET Request to /test endpoint
    const res = await request(app).get('/test');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('pass!');
    done();
  });

  it('Gets 404 for undefined routes', async done => {
    const res = await request(app).get('/some/undefined/route');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('404 not found');
    done();
  });
});

describe('Get Users', () => {
  it('Can get user data in array', async done => {
    const res = await request(app).get('/users');
    expect(res.status).toBe(200);
    expect(res.body.length).toBe(10);
    expect(res.body).toBeInstanceOf(Array);
    expect(res.body[0]).toBeInstanceOf(Object);
    done();
  });

  it('Can get each user profile data', async done => {
    const res = await request(app).get('/users/5');
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Object);
    expect(res.body.name).toBe('구일모');
    expect(res.body.username).toBe('johnnykoo84');
    expect(res.body.phone).toBe('010-8491-3982');

    done();
  });
});

describe('Get Todos', () => {
  it('Can get todo data in array', async done => {
    const res = await request(app).get('/todos');
    expect(res.status).toBe(200);
    expect(res.body.length).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
    expect(res.body[0]).toBeInstanceOf(Object);
    done();
  });

  it('Can get each todo data', async done => {
    const res = await request(app).get('/todos/1');
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Object);
    expect(res.body.title).toBe('모든 국민은 직업선택의 자유를 가진다.');
    expect(res.body.completed).toBe(true);
    expect(res.body.UserId).toBe(1);

    done();
  });
});
