const request = require('supertest');
const app = require('../../src/app.js');
const { conn } = require('../../src/services/db.service.js');

describe('User Routes', () => {
  beforeAll(async () => {
    await conn.sync({ force: true });
  });
  // POST
  describe('Post Endpoints', () => {
    const user = {
      id: 1,
      name: 'nombre',
    };
    it('should create', async () => {
      const res = await request(app).post('/user').send(user);
      expect(res.statusCode).toEqual(201);
      expect(res.body).toHaveProperty('name');
      expect(res.body.name).toBe('nombre');
    });
  });
  // PUT
  describe('Put Endpoints', () => {
    const user = {
      id: 1,
      name: 'nombreee',
    };
    it('should modify', async () => {
      const res = await request(app).put('/user').send(user);
      expect(res.statusCode).toEqual(201);
    });
  });
  // GET
  describe('Get Endpoints', () => {
    it('should return the list of all users', async () => {
      const res = await request(app).get('/user');
      expect(res.statusCode).toBe(200);
    });
    it('should return the list of users order by id desc', async () => {
      const res = await request(app).get('/user?column=id&direction=DESC');
      expect(res.statusCode).toBe(200);
    });
    it('should return the user by id', async () => {
      const res = await request(app).get('/user/1');
      expect(res.statusCode).toBe(200);
      expect(res.body.data.name).toBe('nombreee');
    });
  });
  // DELETE
  describe('Delete Endpoints', () => {
    it('should set deleted true', async () => {
      const res = await request(app).delete('/user/1');
      expect(res.statusCode).toEqual(201);
    });
  });
});
