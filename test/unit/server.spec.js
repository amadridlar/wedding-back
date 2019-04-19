const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../src/index');

const { expect } = chai;
const { server } = app;

chai.use(chaiHttp);
const { request } = chai;

const serverHost = 'http://localhost';
const serverPort = 3000;
const guestRequestBody = {
  name: 'Johny',
  lastname: 'Reland',
  menu: 1,
  bus: true,
};

afterAll(async () => {
  await server.close();
});


describe('Server', () => {
  test(`starts on port ${serverPort}`, (done) => {
    request(`${serverHost}:${serverPort}`)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});

describe('Service Create new gest', () => {
  test('respond with status 200 and correct response body', (done) => {
    request(`${serverHost}:${serverPort}`)
      .post('/guests/new')
      .send(guestRequestBody)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('id');
        expect(res.body).to.have.property('name').to.be.equal(guestRequestBody.name);
        expect(res.body).to.have.property('lastname').to.be.equal(guestRequestBody.lastname);
        expect(res.body).to.have.property('menu').to.be.equal(guestRequestBody.menu);
        expect(res.body).to.have.property('bus').to.be.equal(guestRequestBody.bus);
        done();
      });
  });
});
