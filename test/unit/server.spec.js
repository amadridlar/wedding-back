import chai, { use, request } from 'chai';
import chaiHttp from 'chai-http';
import { server } from '../../src/index';


use(chaiHttp);
const { expect } = chai;

const serverHost = 'http://localhost';
const serverPort = 3000;

describe('Server', () => {
  afterAll(async () => {
    await server.close();
  });

  test(`starts on port ${serverPort}`, (done) => {
    request(`${serverHost}:${serverPort}`)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});
