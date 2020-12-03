const Code = require('@hapi/code');
const Lab = require('@hapi/lab');
const Supertest = require('supertest');

const app = require('../index').app;

const { expect } = Code;
const { it } = exports.lab = Lab.script();

it('should return the list of posts', () => {

    return Supertest(app)
        .get('/posts')
        .then((response) => {

            expect(response.statusCode).to.equal(200);
            expect(response.body).to.be.an.array();
            expect(response.body).to.have.length(2);
        });
});
