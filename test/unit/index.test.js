// const chai = require('chai');

// const expect = chai.expect;
const serverPort = '3000';

beforeAll(()=>{
 server = require('../../src/index');
})

afterAll(() => {
 server.close();
});

describe('Server on start', () => {
  test(`is started on port ${serverPort}`, async() => {
     console.log('Server start and stop to execute test');
})
})
