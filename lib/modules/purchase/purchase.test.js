const request = require('supertest');
const app = require('../../../app');

describe('Test POST /purchase', () => {

    test('It should respond with 400', async() => {
        const response = await request(app).post('/api/purchase')
        .send({});
        expect(response.statusCode).toBe(400)
    });

    test('It should respond with 404 not found', async() => {
        const response = await request(app).post('/api/purchase')
        .send({ "item_name": "Fanta",
        "coins": 25});
        expect(response.statusCode).toBe(404)
    });

    
    test('It should respond with 200 success', async() => {
        const response = await request(app).post('/api/purchase')
        .send({
                "item_name": "Pepsi",
                "coins": 30
        });
        expect(response.statusCode).toBe(201)
    })
});