const request = require('supertest');
const app = require('../server');

describe('Books Endpoints', () => {
    it('should fetch all books', async () => {
        const res = await request(app).get('/api/books');
        expect(res.statusCode).toEqual(200);
        expect(res.body.books).toHaveLength(3);
    });
});