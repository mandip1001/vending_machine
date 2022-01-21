const request = require('supertest');
const app = require('../../../app');

describe('Test POST /refund', () => {

    test('It should respond with 400', async() => {
        const response = await request(app).post('/api/refund')
        .send({});
        expect(response.statusCode).toBe(400)
    });


    
    test('It should respond with 200 success', async() => {
        const response = await request(app).post('/api/refund')
        .send({
                "item_name": "Coke"
        });
        expect(response.statusCode).toBe(201)
    })
});