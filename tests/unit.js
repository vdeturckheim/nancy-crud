const Code = require('@hapi/code');
const Lab = require('@hapi/lab');
const Supertest = require('supertest');

const app = require('../index').app;

const { expect } = Code;
const { it } = exports.lab = Lab.script();

it('should return the list of posts', async () => {

    const response = await Supertest(app).get('/posts')
    expect(response.statusCode).to.equal(200);
    expect(response.body).to.be.an.array();
    expect(response.body).to.have.length(2);
});

it('should return a single post', async () => {
    // hello world 2
    const response = await Supertest(app).get('/posts/1');
    expect(response.statusCode).to.equal(200);
    expect(response.body).to.equal({
        TITLE: 'hello world',
        CONTENT: 'hello',
        ID: 1
    });
});
