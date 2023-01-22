const request = require('supertest');
const app = require('../../src/app.js');
const { conn } = require('../../src/services/db.service.js');

describe('Project Routes', () => {
  beforeAll(async () => {
    await conn.sync({ force: true });
  });
  // POST
  describe('Post Endpoints', () => {
    const project = {
      id: 1,
      title: 'limpiar',
      address: 'lejos 123',
      budget: 100,
      agreement: true,
    };
    it('should create', async () => {
      const res = await request(app).post('/project').send(project);
      expect(res.statusCode).toEqual(201);
      expect(res.body).toHaveProperty('title');
      expect(res.body.title).toBe('limpiar');
    });
  });
  // PUT
  describe('Put Endpoints', () => {
    const project = {
      id: 1,
      title: 'limpiar1',
      address: 'lejos 123',
      budget: 100,
      agreement: true,
    };
    it('should modify', async () => {
      const res = await request(app).put('/project').send(project);
      expect(res.statusCode).toEqual(201);
      expect(res.body[0]).toBe(1);
    });
  });
  // GET
  describe('Get Endpoints', () => {
    it('should return the list of all projects', async () => {
      const res = await request(app).get('/project');
      expect(res.statusCode).toBe(200);
    });
    it('should return the list of projects order by id desc', async () => {
      const res = await request(app).get('/project?column=id&direction=DESC');
      expect(res.statusCode).toBe(200);
    });
    it('should return the project by id', async () => {
      const res = await request(app).get('/project/1');
      expect(res.statusCode).toBe(200);
      expect(res.body.data.title).toBe('limpiar1');
    });
  });
  // DELETE
  describe('Delete Endpoints', () => {
    it('should set deleted true', async () => {
      const res = await request(app).delete('/project/1');
      expect(res.statusCode).toEqual(201);
    });
  });
});
